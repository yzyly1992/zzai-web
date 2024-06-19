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
<section>
  <h1>Management Portal</h1>
  <form on:submit={handleSubmit}>
    <label for="username">Username</label>
    <input type="text" id="username" bind:value={username} required />
  
    <label for="password">Password</label>
    <input type="password" id="password" bind:value={password} required />
    <br>
    <button type="submit">Login</button>
  </form>
</section>

<style>
  section {
    max-width: 300px;
    margin: 20px auto;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  label {
    font-weight: bold;
  }

  input {
    padding: 0.6rem;
    border-radius: 0.25rem;
    border: 1px solid #ccc;
  }

  button {
    padding: 0.8rem;
    border-radius: 0.25rem;
    font-weight: bold;
    font-size: 1rem;
    border: none;
    background-color: #333;
    color: white;
    cursor: pointer;
  }
</style>
