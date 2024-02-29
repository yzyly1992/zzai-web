import { error } from "@sveltejs/kit";
import { posts } from "./data.js";

export function load({ params }) {
    const post = posts.find((post) => post.slug === params.slug);
    if (!post) {
        return error(404, "Post not found");
    };
    return { post };
}