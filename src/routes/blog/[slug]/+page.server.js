import { error } from "@sveltejs/kit";
import { posts } from "./data.js";

export async function load({ params }) {
    const data = await fetch(`/api/posts/${params.slug}`);
    const post = await data.json();
    console.log(post);
    if (!post) {
        return error(404, "Post not found");
    };
    return { post };
}