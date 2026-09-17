<script lang="ts">
	import Container from '$lib/components/ui/Container.svelte';
	let { eyebrow, title, lead }: { eyebrow?: string; title: string; lead: string } = $props();
</script>

<section class="page-header"><Container><nav aria-label="Atpakaļceļš"><a href="/">Sākums</a><span>/</span><span>{title}</span></nav>{#if eyebrow}<p>{eyebrow}</p>{/if}<h1>{title}</h1><div class="lead">{lead}</div></Container></section>

<style>
	.page-header { padding-block: clamp(3rem,7vw,6.5rem); background: radial-gradient(circle at 85% 15%,var(--color-accent-soft),transparent 35%),var(--color-surface-warm); }
	nav { display: flex; gap: .55rem; margin-bottom: 2rem; color: var(--color-text-muted); font-size: .78rem; }
	nav a { color: var(--color-text-muted); text-decoration: none; }
	p { margin: 0 0 .5rem; color: var(--color-primary); font-size: .78rem; font-weight: 850; letter-spacing: .1em; text-transform: uppercase; }
	h1 { max-width: 13ch; margin: 0; font-family: var(--font-display); font-size: clamp(2.6rem,8vw,5rem); line-height: 1; letter-spacing: -.055em; }
	.lead { max-width: 42rem; margin-top: 1.2rem; color: var(--color-text-secondary); font-size: clamp(1rem,2vw,1.2rem); }
	@media (max-width: 639px) { .page-header { padding-block: 2rem 2.25rem; } nav { margin-bottom: 1.15rem; } h1 { font-size: clamp(2.35rem,12vw,3.2rem); } .lead { margin-top: .85rem; } }
</style>
