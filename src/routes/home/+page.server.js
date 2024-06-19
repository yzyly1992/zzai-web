import { error } from "@sveltejs/kit";

export async function load(event) {
    // get the posts with page 1 and limit 5 with POST method
    const data = await event.fetch(`/api/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            page: 0,
            limit: 5,
        }),
    });
    const posts_data = await data.json();
    const posts = posts_data.results;
    if (!posts) {
        return error(404, "Post not found");
    };
    return { posts };
}