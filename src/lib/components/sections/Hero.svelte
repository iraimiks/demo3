<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import Button from '$lib/components/ui/Button.svelte';
	import Container from '$lib/components/ui/Container.svelte';

	let {
		title = m.heroTitle(),
		subtitle = m.heroSubtitle()
	}: {
		title?: string;
		subtitle?: string;
	} = $props();
</script>

<section class="hero">
	<Container>
		<div class="hero-content">
			<h1 class="hero-title">{title}</h1>
			<p class="hero-subtitle">{subtitle}</p>
			<div class="hero-actions">
				<Button href="/about">{m.heroLearnMore()}</Button>
				<Button href="/contact" variant="secondary">{m.heroContactUs()}</Button>
			</div>
		</div>
	</Container>
</section>

<style>
	.hero {
		padding: 3rem 0;
		background: linear-gradient(
			180deg,
			var(--color-surface-muted) 0%,
			var(--color-surface) 100%
		);
	}

	.hero-content {
		max-width: 40rem;
	}

	.hero-title {
		margin: 0 0 1rem 0;
		font-size: clamp(2.5rem, 8vw + 1rem, 3rem);
		line-height: 1.1;
		color: var(--color-text);
	}

	.hero-subtitle {
		margin: 0 0 2rem 0;
		font-size: clamp(1.125rem, 1vw + 1rem, 1.25rem);
		color: var(--color-text-secondary);
	}

	.hero-actions {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.hero-actions :global(.button) {
		width: 100%;
	}

	@media (min-width: 640px) {
		.hero-actions {
			flex-direction: row;
			flex-wrap: wrap;
		}

		.hero-actions :global(.button) {
			width: auto;
		}
	}

	@media (min-width: 768px) {
		.hero {
			padding: 5rem 0;
		}
	}
</style>