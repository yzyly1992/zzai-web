import { error } from "@sveltejs/kit";

export async function load(event) {
    const { params } = event;
    const data = await event.fetch(`/cn/api/posts/${params.slug}`);
    const post_data = await data.json();
    const post = post_data.results[0];
    if (!post) {
        return error(404, "当前页面不存在");
    };
    return { post };
}