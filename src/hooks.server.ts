import { dev } from '$app/environment';
import { redirect } from '@sveltejs/kit';

/*
  When developing, this hook will add proxy objects to the `platform` object which
  will emulate any bindings defined in `wrangler.toml`.
*/

let platform: App.Platform;

if (dev) {
	const { getPlatformProxy } = await import('wrangler');
	platform = await getPlatformProxy();
}

export const handle = async ({ event, resolve }) => {
	if (platform) {
		event.platform = {
			...event.platform,
			...platform
		};
	}

	const pathname = event.url.pathname;
    
    // Only check cookies for routes under /manage
    if (pathname.startsWith('/manage')) {
		const sessionId = event.cookies.get('sessionId');
		// console.log('sessionId', sessionId);
		if (!sessionId) {
			console.log('redirect to /');
			throw redirect(302, '/');
		}
    } else if (pathname.startsWith('/cn/manage')) {
		const sessionId = event.cookies.get('sessionId');
		if (!sessionId) {
			console.log('redirect to /cn');
			throw redirect(302, '/cn');
		}
	}
    
    // Continue with the request for other routes
    const response = await resolve(event);
    return response;
};
