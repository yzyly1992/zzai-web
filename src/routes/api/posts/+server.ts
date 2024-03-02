import type { RequestHandler } from "@sveltejs/kit";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ platform }) {
  console.log('platform',platform?.env);
  let result = await platform?.env.ZZAI_DB.prepare(
    "SELECT * FROM posts LIMIT 5"
  ).run();
  return new Response(JSON.stringify(result));
}
