<script lang="ts">
	import { page } from '$app/state';
	import * as m from '$lib/paraglide/messages';
	import { nav, restaurant } from '$lib/config';
	import BrandLogo from './BrandLogo.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import BrandIcon from '$lib/components/ui/BrandIcon.svelte';

	let isMenuOpen = $state(false);
	function closeMenu() { isMenuOpen = false; }
</script>

<header class:menu-open={isMenuOpen} class="header">
	<Container>
		<div class="header-inner">
			<a href="/" class="logo" aria-label="Kebab4You sākumlapa" onclick={closeMenu}><BrandLogo /></a>
			<button class="menu-toggle" type="button" aria-label={m.headerMenu()} aria-expanded={isMenuOpen} aria-controls="site-nav" onclick={() => (isMenuOpen = !isMenuOpen)}><span></span><span></span><span></span></button>
			<div class="header-panel" id="site-nav">
				<nav class="nav" aria-label="Galvenā navigācija">
					{#each nav as item (item.href)}
						<a href={item.href} class:active={page.url.pathname === item.href} aria-current={page.url.pathname === item.href ? 'page' : undefined} onclick={closeMenu}>{item.label}</a>
					{/each}
				</nav>
				<div class="header-contact"><span class="pin"><BrandIcon name="pin" size={18} /></span><span><strong>{restaurant.city}</strong><small>Skolas iela 30</small></span></div>
				<a class="order-button" href={restaurant.orderUrl} onclick={closeMenu}><BrandIcon name="phone" size={18} /> Zvanīt un pasūtīt</a>
			</div>
		</div>
	</Container>
</header>

<style>
	.header { position: sticky; top: 0; z-index: 30; background: rgba(255,255,255,.95); border-bottom: 1px solid var(--color-border); backdrop-filter: blur(.8rem); }
	.header-inner { min-height: 4.75rem; display: flex; align-items: center; justify-content: space-between; gap: 1.5rem; }
	.logo { display: inline-flex; text-decoration: none; padding-block: .5rem; }
	.menu-toggle { display: flex; flex-direction: column; justify-content: center; gap: 5px; width: 44px; height: 44px; padding: .65rem; border: 0; border-radius: var(--radius-full); background: var(--color-surface-muted); cursor: pointer; }
	.menu-toggle span { width: 100%; height: 2px; background: var(--color-text); transition: transform .18s ease, opacity .18s ease; }
	.menu-open .menu-toggle span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
	.menu-open .menu-toggle span:nth-child(2) { opacity: 0; }
	.menu-open .menu-toggle span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
	.header-panel { display: none; position: absolute; inset: 4.75rem 0 auto; padding: 1rem clamp(1rem,3vw + .5rem,2rem) 1.5rem; background: var(--color-surface); border-bottom: 1px solid var(--color-border); box-shadow: var(--shadow-md); }
	.menu-open .header-panel { display: grid; }
	.nav { display: grid; }
	.nav a { min-height: 3.25rem; display: flex; align-items: center; color: var(--color-text); font-weight: 750; text-decoration: none; border-bottom: 1px solid var(--color-border); }
	.nav a.active { color: var(--color-primary); }
	.header-contact { display: none; }
	.order-button { min-height: 3rem; margin-top: 1rem; display: inline-flex; align-items: center; justify-content: center; gap: .55rem; padding: .75rem 1.25rem; border-radius: var(--radius-full); background: var(--color-primary); color: white; font-weight: 800; text-decoration: none; box-shadow: 0 .5rem 1.25rem rgba(255,84,47,.2); }
	:global(a:focus-visible), button:focus-visible { outline: .2rem solid var(--color-focus-ring); outline-offset: .2rem; }
	@media (min-width: 768px) {
		.menu-toggle { display: none; }
		.header-panel { position: static; display: flex; align-items: center; gap: clamp(1rem,2.5vw,2.5rem); padding: 0; border: 0; box-shadow: none; background: transparent; }
		.nav { display: flex; gap: clamp(.75rem,1.8vw,1.75rem); }
		.nav a { position: relative; min-height: 4.75rem; border: 0; font-size: .9rem; }
		.nav a::after { content: ''; position: absolute; inset: auto 0 0; height: 2px; background: var(--color-primary); transform: scaleX(0); transition: transform .18s ease; }
		.nav a.active::after, .nav a:hover::after { transform: scaleX(1); }
		.order-button { margin: 0; min-height: 2.75rem; }
	}
	@media (min-width: 1080px) {
		.header-contact { display: flex; align-items: center; gap: .55rem; font-size: .78rem; line-height: 1.15; }
		.header-contact .pin { color: var(--color-primary); }
		.header-contact span:last-child { display: grid; }
		.header-contact small { color: var(--color-text-muted); }
	}
</style>
