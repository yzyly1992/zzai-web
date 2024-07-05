import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export const load = async (event) => {
    // const sessionId = event.cookies.get('sessionId');
    // // console.log('sessionId', sessionId);
    // if (!sessionId) {
    //     console.log('redirect to /');
    //     throw redirect(302, '/')
    // }
    // get all the posts from the database with post method and limit 100
    const data = await event.fetch(`/cn/api/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            page: 0,
            limit: 10,
        }),
    });
    const posts_data = await data.json();
    const posts = posts_data.results;
    return {
        status: 200,
        props: {
            posts,
        },
    };
}

