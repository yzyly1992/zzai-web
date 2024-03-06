<script lang="ts">
	import { onMount } from 'svelte';
	/**
     * @type {any}
     */
	let data: any[] = [];
	onMount(async () => {
        data = await fetch('/api/posts').then((x: any) => x.json()).then((x) => x.results);
	});
</script>

<div class='layout'>
    <main>
        <slot />
    </main>
    <aside>
        <h2>More Posts</h2>
        <div class="grid">
            {#each data as post}
                <a href={`/blog/${post.slug}`} class="card">
                    <img src={post.cover} alt="cover image of {post.title}" class="cover">
                    <p class="title">{post.title}</p>
                </a>
            {/each}
        </div>
    </aside>
</div>

<style>
    aside {
        max-width: 720px;
        margin: 2rem auto 6rem auto;
        padding: 0 20px;
    }
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1rem;
    }
    .card {
        text-decoration: none;
        color: inherit;
        border: 1px solid #F2F2F2;
        border-radius: 0.5rem;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        transition: transform 0.2s, border 0.2s;
    }
    .card:hover {
        transform: scale(1.01);
        border: 1px solid rgb(60, 60, 60);
    }
    .cover {
        width: 100%;
        height: 250px;
        object-fit: cover;
        border-radius: 0.5rem;
    }
    .title {
        margin: 0;
        padding: 1.5rem;
        font-size: 1.2rem;
        font-weight: 600;
    }
</style>
