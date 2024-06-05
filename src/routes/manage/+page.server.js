import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ cookies }) => {
    const sessionId = cookies.get('sessionId');
    // console.log('cookies', cookies);
    console.log('sessionId', sessionId);
    if (!sessionId) {
        console.log('redirect to /');
        throw redirect(302, '/')
    }
    return {
        status: 200,
        props: {
            sessionId,
        },
    };
}

