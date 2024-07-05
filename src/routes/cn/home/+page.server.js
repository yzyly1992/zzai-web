import { error } from "@sveltejs/kit";

export async function load(event) {
    // get the posts with page 1 and limit 5 with POST method
    const posts = await event.fetch(`/cn/api/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            page: 0,
            limit: 5,
        }),
    }).then((res) => res.json()).then((data) => data.results);
    const count = await event.fetch(`/cn/api/posts_count`).then((res) => res.json()).then((data) => data.results[0].count);
    console.log(count);
    if (!posts) {
        return error(404, "当前页面不存在");
    };
    return { posts, count};
}