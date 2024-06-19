import type { RequestHandler } from "@sveltejs/kit";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request, platform }) {
  let params: any = await request.json();
  if (!params.page) params.page = 0;
  if (!params.limit) params.limit = 5;
  let result = await platform?.env.DB.prepare(
    `SELECT slug,title,cover,subtitle,id FROM posts ORDER BY id DESC LIMIT ${params.page * params.limit},${params.limit}`
  ).all();
  return new Response(JSON.stringify(result));
}
