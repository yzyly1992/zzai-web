<!-- src/routes/manage/+page.svelte -->
<script lang="ts">
  import { goto } from '$app/navigation';
  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    goto('/home'); // Redirect to login page after logout
  };
  export let data;
</script>

{#if data.props?.posts}
  <h1>Welcome to the Manage Page</h1>
  <p>Here you can manage your settings.</p>
  <h2>Your posts:</h2>
  <ul>
    {#each data.props.posts as post}
      <li>{post.title} [{post.id}]
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
      </li>
    {/each}
  </ul>
  <button on:click={() => goto('/manage/create')}>Create new post</button>
  <button on:click={handleLogout}>Logout</button>
{:else}
  <p>Loading...</p>
{/if}


  