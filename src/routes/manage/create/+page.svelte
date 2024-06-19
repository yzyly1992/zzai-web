<script>
    import { goto } from "$app/navigation";

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
        if (!id || !length) {
            alert('ID and Length must be set');
            return;
        }
        if (!slug.match(/^[a-z0-9-]+$/)) {
            alert('Slug must be in the correct format e.g. "my-first-post"');
            return;
        }
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

<section>
    <h1>Create Post</h1>

    <form on:submit|preventDefault={createPost}>
        <label>
            ID:
            <input type="number" bind:value={id} required/>
        </label>
        <label>
            Title:
            <input type="text" bind:value={title} required/>
        </label>

        <label>
            Subtitle:
            <input type="text" bind:value={subtitle} required/>
        </label>

        <label>
            Slug:
            <input type="text" bind:value={slug} required/>
        </label>

        <label>
            Author:
            <input type="text" bind:value={author} required/>
        </label>

        <label>
            Date:
            <input type="date" bind:value={date} required/>
        </label>

        <label>
            Length:
            <input type="number" bind:value={length} required/>
        </label>

        <label>
            Tag:
            <input type="text" bind:value={tag} required/>
        </label>

        <label>
            Cover:
            <input type="text" bind:value={cover} required/>
        </label>

        <label>
            Summary:
            <textarea bind:value={summary} required></textarea>
        </label>

        <label>
            Content:
            <textarea bind:value={content} required></textarea>
        </label>
        <br>
        <button type="submit">Create Post</button>
        <button on:click={() => goto('/manage')}>Cancel</button>
    </form>
</section>

<style>
    section {
        max-width: 720px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    h1 {
        font-size: 2.2rem;
        margin-bottom: 0;
    }
    label {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        width: 100%;
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    input {
        display: flex;
        padding: 0.5rem;
        font-size: 1rem;
    }
    textarea {
        display: flex;
        height: 250px;
        padding: 0.5rem;
        font-size: 1rem;
    }
    button {
        padding: 0.6rem 1rem;
        background-color: #333;
        font-weight: bold;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    button:hover {
        background-color: #555;
    }
</style>