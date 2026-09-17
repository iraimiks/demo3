<script lang="ts">
	import '$lib/styles/tokens.css';
	import favicon from '$lib/assets/favicon.svg';
	import CookieBanner from '$lib/components/consent/CookieBanner.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import RestaurantSchema from '$lib/components/meta/RestaurantSchema.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<RestaurantSchema />

<Header />
<main>
	{@render children()}
</main>
<Footer />
<CookieBanner />

<style>
	:global(*),
	:global(*::before),
	:global(*::after) {
		box-sizing: border-box;
	}

	:global(html) {
		-webkit-text-size-adjust: 100%;
		scroll-behavior: smooth;
	}

	:global(body) {
		margin: 0;
		font-family: var(--font-sans);
		background-color: var(--color-surface);
		color: var(--color-text);
		line-height: 1.5;
		font-size: 1rem;
		overflow-x: hidden;
	}

	:global(img) {
		max-width: 100%;
		height: auto;
	}

	:global(a:focus-visible),
	:global(button:focus-visible),
	:global(input:focus-visible),
	:global(textarea:focus-visible) {
		outline: 0.2rem solid var(--color-focus-ring);
		outline-offset: 0.2rem;
	}

	:global(::selection) {
		background: var(--color-accent);
		color: var(--color-text);
	}

	main {
		display: flex;
		flex-direction: column;
		min-height: calc(100vh - 4rem);
	}

	@media (max-width: 767px) {
		main { padding-bottom: 4.5rem; }
	}
</style>
