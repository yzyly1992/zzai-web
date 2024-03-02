/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ params, platform }) {
    let result = await platform?.env.ZZAI_DB.prepare(
        `SELECT * FROM posts WHERE slug = ${params.slug}`
    ).run();
    return new Response(JSON.stringify(result));
}