<script>
    import { goto } from '$app/navigation';

    export let data;
    let title = data.post.title;
    let subtitle = data.post.subtitle;
    let slug = data.post.slug;
    let author = data.post.author;
    let date = data.post.date;
    let length = data.post.length;
    let tag = data.post.tag;
    let cover = data.post.cover;
    let summary = data.post.summary;
    let content = data.post.content;
    let id = data.post.id;

    async function updatePost() {
        const post = {
            title,
            subtitle,
            slug,
            author,
            date,
            length,
            tag,
            cover,
            summary,
            content,
            id
        };

        try {
            const response = await fetch('/api/edit_post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(post)
            });

            if (response.ok) {
                console.log('Post update successfully!');
                goto('/manage');
                // Handle success, e.g., show a success message or redirect to another page
            } else {
                console.error('Failed to create post');
                // Handle error, e.g., show an error message
            }
        } catch (error) {
            console.error('An error occurred', error);
            // Handle error, e.g., show an error message
        }
    }
</script>

<main>
    <h1>Create Post</h1>

    <form on:submit|preventDefault={updatePost}>
        <label>
            ID:
            <input type="number" bind:value={id} disabled/>
        </label>
        <label>
            Title:
            <input type="text" bind:value={title} />
        </label>

        <label>
            Subtitle:
            <input type="text" bind:value={subtitle} />
        </label>

        <label>
            Slug:
            <input type="text" bind:value={slug} />
        </label>

        <label>
            Author:
            <input type="text" bind:value={author} />
        </label>

        <label>
            Date:
            <input type="text" bind:value={date} />
        </label>

        <label>
            Length:
            <input type="number" bind:value={length} />
        </label>

        <label>
            Tag:
            <input type="text" bind:value={tag} />
        </label>

        <label>
            Cover:
            <input type="text" bind:value={cover} />
        </label>

        <label>
            Summary:
            <textarea bind:value={summary}></textarea>
        </label>

        <label>
            Content:
            <textarea bind:value={content}></textarea>
        </label>

        <button type="submit">Update Post</button>
        <button on:click={() => goto('/manage')}>Cancel</button>
</main>