<script>
    let openShare = false;
    function toggleShare() {
        openShare = !openShare;
    }
</script>

<nav>
    <a class="logo" href="/">zzai.</a>
    <div class="menu">
        <button on:click={toggleShare} type="button" aria-label="Share">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"/>
            </svg>
        </button>
        {#if openShare === true}
            <div class="share">
                <a href="https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20site%20I%20found%20on%20zzai.%20%23zzai" target="_blank" rel="noopener noreferrer" title="Share on Twitter">
                Twitter
                </a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fzzai.com" target="_blank" rel="noopener noreferrer" title="Share on Facebook">
                Facebook
                </a>
                <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fzzai.com" target="_blank" rel="noopener noreferrer" title="Share on LinkedIn">
                LinkedIn
                </a>
            </div>
        {/if}
    </div>
</nav>

<slot />

<footer>
    <p>Copyright © 2024, Zzai - All Rights Reserved</p>
</footer>

<style>
    nav {
        position: sticky;
        top: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        background-color: #f5f5f5;
    }
    .logo {
        font-size: 2rem;
        font-weight: bold;
        text-decoration: none;
        color: #333;
        cursor: pointer;
    }
    .menu {
        position: relative;
    }
    .menu button {
        font-family: inherit;
        font-weight: 600;
        background-color: transparent;
        border: none;
        cursor: pointer;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: gray;
        background-color: rgb(234, 234, 234);
    }
    .menu button:hover {
        background-color: rgb(200, 200, 200);
    }
    .share {
        position: absolute;
        top: 120%;
        right: 0;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        background-color: #f5f5f5;
        padding: 0.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    }
    .share a {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .share a:hover {
        background-color: #f5f5f5;
    }
    footer {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        background-color: #f5f5f5;
        font-size: 0.9rem;
    }
</style>