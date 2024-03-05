<script>
    export let data;
</script>

<svelte:head>
    <title>Zzai | Master Top Tech Skills</title>
    <meta name="description" content="Zzai - a tech skills sharing platform. Master the top-notch technical skills in AI, Software Engineering, and Web Development. Stay updated with the latest technologies through hands-on tutorials and insightful content.">
    <meta name="keywords" content="Tech skills, Technical skills, AI, Artificial intelligence, Software engineering, Web development, Hands-on tutorials, Technology updates, Learning platform, Tech education, Coding skills, Programming languages, IT skills, Tech tutorials, Online learning, Tech mastery, Cutting-edge technology, Tech insights, Software development, Digital skills">
</svelte:head>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<ul class="posts">
    {#each data.posts as post}
        <li><a href={`/blog/${post.slug}`}>{post.title}</a></li>
    {/each}
</ul>