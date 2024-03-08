import { error } from "@sveltejs/kit";

export async function load(event) {
    const { params } = event;
    const data = await event.fetch(`/api/posts/${params.slug}`);
    const post_data = await data.json();
    const post = post_data.results[0];
    if (!post) {
        return error(404, "Post not found");
    };
    return { post };
}