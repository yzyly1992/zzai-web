import type { RequestHandler } from "@sveltejs/kit";

// handle post request with request body
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ platform, request }) {
    let body: any = await request.json();
    let result = await platform?.env.DB.prepare(
        `INSERT INTO posts (title, content, subtitle, summary, author, date, length, tag, cover) VALUES ('${body.title}', '${body.content}', '${body.subtitle}', '${body.summary}', '${body.author}', '${body.date}', '${body.length}', '${body.tag}', '${body.cover}')`
    ).run();
    return new Response(JSON.stringify(result));
}