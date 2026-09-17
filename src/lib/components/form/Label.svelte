<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		for: forId,
		class: className = ''
	}: {
		children: Snippet;
		for?: string;
		class?: string;
	} = $props();
</script>

<label class="label {className}" for={forId}>
	{@render children()}
</label>

<style>
	.label {
		display: block;
		margin-bottom: 0.375rem;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text);
	}
</style>