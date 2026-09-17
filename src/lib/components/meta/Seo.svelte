<script lang="ts">
	import { page } from '$app/state';
	import { site } from '$lib/config';
	let { title, description = site.description, image = site.ogImage }: { title: string; description?: string; image?: string } = $props();
	let canonical = $derived(`${page.url.origin}${page.url.pathname}`);
	let imageUrl = $derived(image ? new URL(image, page.url.origin).href : '');
</script>

<svelte:head>
	<title>{title}</title><meta name="description" content={description} /><link rel="canonical" href={canonical} />
	<meta property="og:title" content={title} /><meta property="og:description" content={description} /><meta property="og:type" content="website" /><meta property="og:url" content={canonical} /><meta property="og:locale" content={site.locale} />
	<meta name="twitter:card" content={imageUrl ? 'summary_large_image' : 'summary'} /><meta name="twitter:title" content={title} /><meta name="twitter:description" content={description} />
	{#if imageUrl}<meta property="og:image" content={imageUrl} /><meta name="twitter:image" content={imageUrl} />{/if}
</svelte:head>
