<script lang="ts">
    export let data;
    function formatDate(originalDate: string) {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const [year, month, day] = originalDate.split('-');
        const formattedDate = `${months[parseInt(month, 10) - 1]} ${parseInt(day, 10)}, ${year}`;
        return formattedDate;
    }
</script>

<svelte:head>
    <title>{data.post.title} | Zzai</title>
    <meta name="description" content={data.post.summary}>
    <meta name="keywords" content={data.post.tag}>
</svelte:head>

<section>
    <h1>{data.post.title}</h1>
    <p class="subtitle">{data.post.subtitle}</p>
    <p class="summary">{data.post.summary}</p>
    <p class="author">{data.post.author.toUpperCase()}</p>
    <p class="date">Published {formatDate(data.post.date)}  •  {data.post.length} minutes read</p>
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img src={data.post.cover} alt="Cover Image" class="cover">
    <div class="content">{@html data.post.content}</div>
    <div class="tag">
        {#each data.post.tag.split(',') as tag}
            <!-- create button with tag name -->
            <button>{tag}</button>
        {/each}
    </div>
</section>

<style>
    section {
        max-width: 720px;
        margin: 0 auto;
        padding: 0 20px;
    }
    h1 {
        font-size: 2.2rem;
        margin-bottom: 0;
    }
    .subtitle {
        margin-top: 0.8rem;
        font-size: 1.2rem;
        font-weight: 300;
        color: #666;
    }
    .summary {
        font-style: italic;
        font-size: 1.2rem;
    }
    .author {
        font-size: 0.9rem;
        margin-bottom: 0;
    }
    .date {
        margin-top: 0;
        font-size: 0.9rem;
        color:#666;
    }
    .tag {
        margin: 4rem 0;
        display: flex;
        gap: 0.4rem;
        flex-wrap: wrap;
    }
    .tag button {
        padding: 0.6rem 1.2rem;
        border: 1px solid #F2F2F2;
        border-radius: 1rem;
        background: #F2F2F2;
        font-size: 0.8rem;
        cursor: pointer;
        color: #666;
    }
    .tag button:hover {
        background: #E5E5E5;
    }
    .tag button::first-letter {
        text-transform: uppercase;
    }
    .content :global(p) {
        font-family: Georgia, 'Times New Roman', Times, serif;
        margin-block: 2rem;
        font-size: large;
        line-height: 2rem;
    }
    .content :global(h3) {
        font-size: 1.8rem;
        margin-block: 2rem;
    }
    .content :global(.link) {
        color: #3e98ff;
        text-decoration: underline;
        font-weight: 500;
    }
    .content :global(pre code) {
        display: block;
        background: rgb(8, 35, 14);
        color: #f5d67b;
        -webkit-overflow-scrolling: touch;
        overflow-x: scroll;
        max-width: 100%;
        min-width: 100px;
        padding: 1rem;
        line-height: 1.5rem;
        border-radius: 0.5rem;
    }
    .content :global(blockquote) {
        font-style: italic;
        border-left: 3px solid #003067;
        margin-left: -20px;
        padding-left: 23px;
        color: #666;
    }
    .content :global(ul) {
        list-style: disc;
        padding-inline-start: 25px;
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-size: large;
        line-height: 2rem;
    }
    .content :global(li) {
        margin-block: 1rem;
    }
    .content :global(figure) {
        margin: 0;
    }
    section :global(img) {
        width: 100%;
    }
    .content :global(figcaption) {
        font-size: 0.9rem;
        color: #666;
        text-align: center;
        font-style: italic;
    }
</style>