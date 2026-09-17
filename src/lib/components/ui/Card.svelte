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

<div class="card {className}">
	{@render children()}
</div>

<style>
	.card {
		padding: 1.5rem;
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		background-color: var(--color-surface);
		box-shadow: var(--shadow-sm);
	}
</style>