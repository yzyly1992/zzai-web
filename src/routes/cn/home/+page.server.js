import { error } from "@sveltejs/kit";

export async function load(event) {
    const data = await event.fetch(`/cn/api/posts`);
    const posts_data = await data.json();
    const posts = posts_data.results;
    if (!posts) {
        return error(404, "当前页面不存在");
    };
    return { posts };
}