<script>
    let title = '';
    let subtitle = '';
    let slug = '';
    let author = '';
    let date = '';
    let length = 0;
    let tag = '';
    let cover = '';
    let summary = '';
    let content = '';
    let id = 0;

    async function createPost() {
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
            const response = await fetch('/api/create_post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(post)
            });

            if (response.ok) {
                console.log('Post created successfully!');
                console.log(post);
                console.log(response);
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

    <form on:submit|preventDefault={createPost}>
        <label>
            ID:
            <input type="number" bind:value={id} />
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

        <button type="submit">Create Post</button>
</main>