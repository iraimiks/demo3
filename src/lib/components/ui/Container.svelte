<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		class: className = ''
	}: {
		children: Snippet;
		class?: string;
	} = $props();
</script>

<div class="container {className}">
	{@render children()}
</div>

<style>
	.container {
		width: 100%;
		max-width: var(--container-width);
		margin: 0 auto;
		padding-inline: clamp(1rem, 3vw + 0.5rem, 2rem);
	}
</style>