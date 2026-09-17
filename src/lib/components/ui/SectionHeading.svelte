<script lang="ts">
	let {
		title = '',
		lead = '',
		eyebrow = '',
		align = 'left',
		as = 'h2',
		class: className = ''
	}: {
		title?: string;
		lead?: string;
		eyebrow?: string;
		align?: 'left' | 'center';
		as?: 'h1' | 'h2' | 'h3';
		class?: string;
	} = $props();
</script>

<div class="section-heading section-heading-{align} {className}">
	{#if eyebrow}
		<p class="eyebrow">{eyebrow}</p>
	{/if}
	{#if title}
		<svelte:element this={as} class="title">{title}</svelte:element>
	{/if}
	{#if lead}
		<p class="lead">{lead}</p>
	{/if}
</div>

<style>
	.section-heading {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		margin-bottom: 2.5rem;
	}

	.section-heading-center {
		align-items: center;
		text-align: center;
	}

	.eyebrow {
		margin: 0;
		color: var(--color-primary);
		font-size: 0.875rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.title {
		margin: 0;
		color: var(--color-text);
		font-size: clamp(1.75rem, 4vw + 0.5rem, 2.5rem);
		line-height: 1.15;
	}

	.lead {
		margin: 0;
		max-width: 44rem;
		color: var(--color-text-secondary);
		font-size: 1.125rem;
	}

	.section-heading-center .lead {
		margin-inline: auto;
	}
</style>