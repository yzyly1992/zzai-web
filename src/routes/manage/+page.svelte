<!-- src/routes/manage/+page.svelte -->
<script lang="ts">
  import { goto } from '$app/navigation';
  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    goto('/home'); // Redirect to login page after logout
  };
  export let data;
</script>

{#if data.props?.sessionId}
  <h1>Welcome to the Manage Page, {data.props?.sessionId}!</h1>
  <p>Here you can manage your settings.</p>
  <button on:click={handleLogout}>Logout</button>
{:else}
  <p>Loading...</p>
{/if}


  