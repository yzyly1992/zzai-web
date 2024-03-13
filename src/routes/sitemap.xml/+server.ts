/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ platform }) {
    let result: any = await platform?.env.DB.prepare(
      "SELECT slug FROM posts"
    ).run();

    return new Response(
      `
      <?xml version="1.0" encoding="UTF-8" ?>
      <urlset
        xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="https://www.w3.org/1999/xhtml"
        xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
      >
  
        <url>
          <loc>https://zzai.tech</loc>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
        </url>
        <url>
          <loc>https://zzai.tech/cn</loc>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
        </url>
        <url>
          <loc>https://zzai.tech/home</loc>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
        </url>
        <url>
          <loc>https://zzai.tech/cn/home</loc>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
        </url>
        ${result.results.map((post: any) => {
            return `
            <url>
                <loc>https://zzai.tech/blog/${post.slug}</loc>
                <changefreq>daily</changefreq>
                <priority>0.7</priority>
            </url>
            `;
        }).join("")}

        ${result.results.map((post: any) => {
            return `
            <url>
                <loc>https://zzai.tech/cn/blog/${post.slug}</loc>
                <changefreq>daily</changefreq>
                <priority>0.7</priority>
            </url>
            `;
        }).join("")}
  
      </urlset>`.trim(),
      {
        headers: {
          "Content-Type": "application/xml",
        },
      }
    );
  }