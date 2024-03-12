import type { RequestHandler } from "@sveltejs/kit";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ params, platform }) {
    let result = await platform?.env.DB.prepare(
        `SELECT * FROM posts_cn WHERE slug = '${params.slug}'`
    ).run();
    return new Response(JSON.stringify(result));
}