<script>
    export let data;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<ul class="posts">
    {#each data.posts as post}
        <li><a href={`/blog/${post.slug}`}>{post.title}</a></li>
    {/each}
</ul>