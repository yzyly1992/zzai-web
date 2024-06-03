import type { RequestHandler } from "@sveltejs/kit";

// delete post by id
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request, platform }) {
    let params: any = await request.json();
    let result = await platform?.env.DB.prepare(
        `DELETE FROM posts WHERE id = '${params.id}'`
    ).run();
    return new Response(JSON.stringify(result));
}