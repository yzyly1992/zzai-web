import type { RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async () => {
    return new Response(null, {
        status: 200,
        headers: {
        'Content-Type': 'application/json',
        'Set-Cookie': `sessionId=; Path=/; HttpOnly; Max-Age=0` // Set cookie expiration to 0 seconds
        },
    });
    }