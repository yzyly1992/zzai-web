// get data from the api call of GET /api/posts
export async function load(event) {
    const response = await event.fetch('/api/posts');
    const posts_data = await response.json();
    const posts = posts_data.results;
    return { posts };
}