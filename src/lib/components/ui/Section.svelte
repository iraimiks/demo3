<script lang="ts">
	import type { Snippet } from 'svelte';
	import Container from '$lib/components/ui/Container.svelte';

	let {
		children,
		class: className = '',
		spacing = 'normal'
	}: {
		children: Snippet;
		class?: string;
		spacing?: 'compact' | 'normal' | 'wide';
	} = $props();
</script>

<section class="section section-{spacing} {className}">
	<Container>
		{@render children()}
	</Container>
</section>

<style>
	.section {
		padding: 3rem 0;
	}

	.section-compact {
		padding: 2rem 0;
	}

	.section-wide {
		padding: 5rem 0;
	}

	@media (min-width: 768px) {
		.section {
			padding: 4rem 0;
		}

		.section-compact {
			padding: 2.5rem 0;
		}

		.section-wide {
			padding: 6rem 0;
		}
	}
</style>