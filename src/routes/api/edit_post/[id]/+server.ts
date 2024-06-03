import type { RequestHandler } from "@sveltejs/kit";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ params, platform }) {
    let result = await platform?.env.DB.prepare(
        `SELECT * FROM posts WHERE id = '${params.id}'`
    ).run();
    return new Response(JSON.stringify(result));
}

// handle post request with request body
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ params, platform, request }) {
    let body: any = await request.json();
    let result = await platform?.env.DB.prepare(
        `UPDATE posts SET title = '${body.title}', content = '${body.content}', subtitle = '${body.subtitle}', summary = '${body.summary}', author = '${body.author}', date = '${body.date}', length = '${body.length}', tag = '${body.tag}', cover = '${body.cover}' WHERE id = '${params.id}'`
    ).run();
    return new Response(JSON.stringify(result));
}