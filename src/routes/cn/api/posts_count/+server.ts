import type { RequestHandler } from "@sveltejs/kit";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ platform }) {
    let result = await platform?.env.DB.prepare(
        `SELECT COUNT(*) as count FROM posts_cn`
    ).run();
    return new Response(JSON.stringify(result));
}