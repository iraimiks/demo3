<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		cols = 3,
		gap = 'md',
		class: className = ''
	}: {
		children: Snippet;
		cols?: 1 | 2 | 3 | 4;
		gap?: 'sm' | 'md' | 'lg';
		class?: string;
	} = $props();
</script>

<div class="grid grid-{cols} grid-gap-{gap} {className}">
	{@render children()}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
	}

	.grid-gap-sm {
		gap: 1rem;
	}

	.grid-gap-md {
		gap: 1.5rem;
	}

	.grid-gap-lg {
		gap: 2rem;
	}

	@media (min-width: 640px) {
		.grid-2,
		.grid-3,
		.grid-4 {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (min-width: 1024px) {
		.grid-3 {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}

		.grid-4 {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}
</style>