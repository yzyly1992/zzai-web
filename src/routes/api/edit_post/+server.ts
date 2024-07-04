import type { RequestHandler } from "@sveltejs/kit";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ platform, request }) {
    let body: any = await request.json();
    let result = await platform?.env.DB.prepare(
        `UPDATE posts SET title = '${body.title}', content = '${(body.content as string).replace(/'/g, "&#39;").replace(/\{/g, '\{').replace(/\}/g, '\}')}', subtitle = '${body.subtitle}', summary = '${body.summary}', author = '${body.author}', date = '${body.date}', length = '${body.length}', tag = '${body.tag}', cover = '${body.cover}', slug = '${body.slug}' WHERE id = '${body.id}'`
    ).run();
    return new Response(JSON.stringify(result));
}