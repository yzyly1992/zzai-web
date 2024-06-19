<!-- src/routes/manage/+page.svelte -->
<script lang="ts">
  import { goto } from '$app/navigation';
  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    goto('/home'); // Redirect to login page after logout
  };
  export let data;
</script>

<section>
<h1>Blog Management</h1>
{#if data.props?.posts}
  <ul>
    {#each data.props.posts as post}
      <li>{post.title} [{post.id}]
        <div class="button-container">
        <button on:click={() => goto(`/manage/edit/${post.slug}`)}>Edit</button>
        <button on:click={async () => {
          const result = await fetch(`/api/delete_post`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: post.id })
          });
          if (result.ok) {
            console.log('Post deleted successfully!');
            location.reload(); // Refresh the page after deleting a post
          } else {
            console.error('Failed to delete post');
          }
        }}>Delete</button>
        </div>
      </li>
    {/each}
  </ul>
{:else}
  <p>Loading...</p>
{/if}
<br>
<button on:click={() => goto('/manage/create')}>Create new post</button>
<button on:click={handleLogout}>Logout</button>
</section>

<style>
section {
    max-width: 720px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
h1 {
    font-size: 2.2rem;
    margin-bottom: 0;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}
li:nth-child(odd) {
  background-color: #d9d9d9;
}
.button-container {
  display: flex;
  gap: 0.2rem;
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
  