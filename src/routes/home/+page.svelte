<script>
    export let data;
    let pageIndex = 0;
    let pageCount = Math.ceil(data.count / 5);
    function loadMore() {
        if (pageIndex + 1 >= pageCount) return;
        fetch(`/api/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ page: ++pageIndex, limit: 5 }),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(pageIndex);
                data.posts = [...data.posts, ...res.results];
            });
    }
</script>


<section>
    <div class="container">
    {#each data.posts as post}
        <a href={`/blog/${post.slug}`} class="card">
            <img src={post.cover} alt="cover image of {post.title}" class="cover">
            <p class="title">{post.title}</p>
            <p class="subtitle">{post.subtitle}</p>
        </a>
    {/each}
    </div>
    <button on:click={loadMore}>Load More</button>
</section>

<style>
    section {
        max-width: 1380px;
        margin: 0 auto;
    }
    .container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
        padding: 20px;
    }

    @media (min-width: 675px) {
        .card:first-child {
            grid-column: 1 / 3;
            grid-row: 1 / 3;
        }
    }
    .card {
        display: flex;
        flex-direction: column;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        text-decoration: none;
        color: inherit;
        transition: box-shadow 0.3s, transform 0.3s;
    }
    .card:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        transform: rotate(1deg);
    }
    .cover {
        width: 100%;
        aspect-ratio: 16/12;
        object-fit: cover;
    }
    .title {
        font-size: 1.2rem;
        font-weight: 600;
        margin: 0;
        padding: 1rem 1rem 0.5rem 1rem;
    }
    .subtitle {
        font-size: 1rem;
        font-weight: 300;
        margin: 0;
        padding: 0 1rem 1.5rem 1rem;
        color: #666;
    }
    button {
        margin: 3rem auto;
        display: block;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        font-weight: 600;
        border: none;
        color: #424242;
        background: none;
        cursor: pointer;
        text-decoration: underline;
    }
</style>