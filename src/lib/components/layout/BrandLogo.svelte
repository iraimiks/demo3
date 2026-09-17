<script lang="ts">
	import { site } from '$lib/config';
	let { inverse = false }: { inverse?: boolean } = $props();
</script>

<span class:inverse class="brand" aria-label={site.name}>
	<span>Kebab</span><strong>4</strong><span>You</span><small>{site.tagline}</small>
</span>

<style>
	.brand { display: inline-grid; grid-template-columns: auto auto auto; align-items: center; color: var(--color-text); font-size: 1.35rem; font-weight: 900; font-style: italic; line-height: .88; letter-spacing: -.07em; }
	.brand strong { color: var(--color-primary); font-size: 1.35em; }
	.brand small { grid-column: 1 / -1; padding-top: .35rem; font-size: .44rem; font-weight: 700; font-style: normal; letter-spacing: .32em; text-align: center; text-transform: uppercase; }
	.brand.inverse { color: var(--color-text-inverse); }
</style>
