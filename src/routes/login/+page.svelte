<!-- src/routes/login/+page.svelte -->
<script>
  import { goto } from '$app/navigation';
  let username = '';
  let password = '';

  /**
     * @param {{ preventDefault: () => void; }} event
     */
  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    if (response.ok) {
      return goto('/manage');
      // window.location.href = '/manage'; // Redirect to the home page or another page
    } else {
      const error = await response.json();
      alert(error.error); // Handle error appropriately
    }
  }
</script>

<form on:submit={handleSubmit}>
  <label for="username">Username</label>
  <input type="text" id="username" bind:value={username} required />

  <label for="password">Password</label>
  <input type="password" id="password" bind:value={password} required />

  <button type="submit">Login</button>
</form>
