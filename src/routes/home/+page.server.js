import { error } from "@sveltejs/kit";

export async function load(event) {
    const data = await event.fetch(`/api/posts`);
    const posts_data = await data.json();
    const posts = posts_data.results;
    if (!posts) {
        return error(404, "Post not found");
    };
    return { posts };
}