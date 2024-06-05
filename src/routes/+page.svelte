<svelte:head>
    <title>Zzai | Trending Tech Skills</title>
    <meta name="description" content="Zzai - a tech skills sharing platform. Master the top-notch technical skills in AI, Software Engineering, and Web Development. Stay updated with the latest technologies through hands-on tutorials and insightful content.">
    <meta name="keywords" content="Tech skills, Technical skills, AI, Artificial intelligence, Software engineering, Web development, Hands-on tutorials, Technology updates, Learning platform, Tech education, Coding skills, Programming languages, IT skills, Tech tutorials, Online learning, Tech mastery, Cutting-edge technology, Tech insights, Software development, Digital skills">
</svelte:head>

<section>
    <h1>find latest tech skills in <span><div class="rotate-clock">z</div></span><div class="rotate-counter">z</div>ai.</h1>
    <p>Master the top-notch technical skills in AI, Software Engineering, and Web Development. Stay updated with the latest technologies through hands-on tutorials and insightful content.</p>
    <a href="/home"><button>Discover Now</button></a>
</section>


<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 80vh;
        gap: 1.5rem;
        text-align: center;
        max-width: 600px;
        margin: 0 auto;
        padding: 0 20px;
    }
    h1 {
        margin: 0;
        padding: 0;
        line-height: 4.5rem;
        font-size: 4rem;
    }
    h1 span {
        color: #ff5227;
    }
    h1 div {
        display: inline-block;
        transform-origin: 50%;
        margin: 0;
        padding: 0;
    }
    .rotate-clock {
        animation: rotate 2s linear 1;
        animation-delay: 0.5s;
    }
    .rotate-counter {
        animation: rotate-counter 1s linear 2;
        animation-delay: 0.5s;
    }
    @keyframes rotate {
        from {
            transform: rotate3d(0, 1, 0, 0deg);
        }
        to {
            transform: rotate3d(0, 1, 0, 360deg);
        }
    }
    @keyframes rotate-counter {
        from {
            transform: rotate3d(0, 1, 0, 0deg);
        }
        to {
            transform: rotate3d(0, 1, 0, -360deg);
        }
    }
    section p {
        font-size: 1.2rem;
        color: #333;
        margin: 0;
        font-weight: 200;
        margin-bottom: 1rem;
    }
    section button {
        padding: 0.8rem 2rem;
        font-size: 1.2rem;
        font-weight: 600;
        background-color: #ff5227;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: transform 0.3s ease;
        color: white;
    }
    section button:hover {
        background-color: #ff5227;
        transform: translateY(-0.2rem);
    }
</style>