<script lang="ts">
    import { page } from '$app/stores';
    import { onMount, onDestroy } from 'svelte';
    let openShare = false;
    let showMessage = false;
    let menu: HTMLElement;
    function toggleShare() {
        openShare = !openShare;
    }
    function copyPath() {
        navigator.clipboard.writeText(`https://zzai.tech${$page.url.pathname}`);
        showMessage = true;
        setTimeout(() => {
            showMessage = false;
        }, 2000);
        openShare = false;
    }
    function sendEmail() {
        const subject = 'Check out this page';
        const body = `I found this page and thought you might like it. https://zzai.tech${$page.url.pathname}`;
        window.open(`mailto:?subject=${subject}&body=${body}`);
        openShare = false;
    }
    function handleClickOutside(event: any) {
        if (menu && !menu.contains(event.target)) {
            openShare = false;
        }
    }

    onMount(() => {
        document.addEventListener('click', handleClickOutside);
    });

    onDestroy(() => {
        document.removeEventListener('click', handleClickOutside);
    });
</script>

<nav>
    {#if $page.url.pathname.includes('/cn')}
        <a class="logo" href="/cn"><span>z</span>zai.</a>
    {:else}
        <a class="logo" href="/"><span>z</span>zai.</a>
    {/if}
    <div class="menu" bind:this={menu}>
        <button aria-label="Share" on:click={toggleShare}>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"/>
            </svg>
        </button>
        {#if openShare === true}
            <div class="share" role="group">
                <button aria-label="Copy Link" on:click={copyPath}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
                    </svg>
                    <p>Copy Link</p>
                </button>
                <button aria-label="Send as Email" on:click={sendEmail}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                    </svg>
                    <p>Send as Email</p>
                </button>
                <hr>
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://zzai.tech{$page.url.pathname}" target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                    </svg>
                    <p>Share to Facebook</p>
                </a>
                <!-- share to linkedin -->
                <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://zzai.tech{$page.url.pathname}" target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                    </svg>
                    <p>Share to LinkedIn</p>
                </a>
                <!-- share to twitter-x -->
                <a href="https://twitter.com/intent/tweet?url=https://zzai.tech{$page.url.pathname}" target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                    </svg>
                    <p>Share to X</p>
                </a>
            </div>
        {/if}
    </div>
    <div class="message" class:show={showMessage}>Link copied to clipboard</div>
</nav>

<slot />

<footer>
    <p>© 2024 Zzai ∙ <a href="/privacy">Privacy</a> ∙ <a href="/terms">Terms</a></p>
</footer>

<style>
    nav {
        position: sticky;
        top: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.8rem 2rem;
        background-color: #fffdfa;
        border-bottom: 0.5px solid #cbcbcb;
        z-index: 10;
    }
    .logo {
        font-size: 2.2rem;
        font-weight: bold;
        text-decoration: none;
        color: #333;
        cursor: pointer;
        padding-bottom: 0.4rem;
    }
    .logo span {
        color: #ff5227;
    }
    .menu {
        position: relative;
    }
    .menu > button {
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
        background-color: rgb(239, 239, 239);
    }
    .menu > button:hover {
        background-color: rgb(200, 200, 200);
    }
    .share {
        position: absolute;
        top: 130%;
        right: 0;
        display: flex;
        width: 15rem;
        flex-direction: column;
        gap: 0.3rem;
        padding: 0.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
        background-color: white;
    }
    .share > a, .share > button {
        border: none;
        background: none;
        line-height: 2.8rem;
        border-radius: 0.5rem;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
        text-decoration: none;
        font-family: inherit;
        font-weight: 600;
        font-size: 1rem;
        color: black;
        padding: 0 1rem;
    }
    .share p {
        margin: 0;
    }
    hr {
        margin: 0;
        border: none;
        border-top: 0.5px solid #cbcbcb;
    }
    .share > a:hover, .share > button:hover {
        background-color: #f5f5f5;
    }
    footer {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        color: #403f3e;
        font-size: 0.9rem;
        font-weight: 600;
    }
    footer a {
        color: #403f3e;
        text-decoration: underline;
    }
    .message {
        position: fixed;
        bottom: -4rem;
        left: 50%;
        transform: translateX(-50%);
        padding: 0.8rem 2rem;
        border-radius: 0.4rem;
        background-color: #404040;
        color: #dcdcdc;
        font-size: 1rem;
        z-index: 100;
        transition: bottom 0.5s;
    }
    .show {
        bottom: 2rem;
    }
</style>