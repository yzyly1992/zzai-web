// get data from the api call of GET /api/posts
export async function load(event) {
    const response = await event.fetch('/api/posts');

    const posts = await response.json();
    return { posts };
}