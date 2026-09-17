<script lang="ts">
	import { nav, restaurant, site } from '$lib/config';
	import BrandLogo from './BrandLogo.svelte';
	import Container from '$lib/components/ui/Container.svelte';
</script>

<footer class="footer">
	<Container>
		<div class="footer-grid">
			<div class="footer-brand"><BrandLogo inverse /><p>Kebabi, burgeri un uzkodas līdzņemšanai Ludzā.</p></div>
			<div><h2>Ātrās saites</h2><nav>{#each nav as item}<a href={item.href}>{item.label}</a>{/each}</nav></div>
			<div><h2>Sazinies ar mums</h2><p><a href={restaurant.directionsUrl}>{restaurant.address}</a></p><p><a href={restaurant.orderUrl}>{restaurant.phone}</a></p><p>Katru dienu 11:00–21:00</p></div>
			<div><h2>Seko mums</h2>{#each restaurant.socials as social}<a href={social.href} rel="noreferrer">{social.label}</a>{/each}</div>
		</div>
		<div class="footer-bottom"><span>© {new Date().getFullYear()} {site.name}. Visas tiesības aizsargātas.</span><span>Kebabs. Cilvēkiem. Ludzā. <b>♥</b></span></div>
	</Container>
</footer>

<style>
	.footer { margin-top: auto; background: var(--color-surface-inverse); color: var(--color-text-inverse-muted); }
	.footer-grid { display: grid; gap: 2rem; padding-block: 3rem; }
	.footer-brand p, .footer-grid p { margin: .75rem 0 0; max-width: 18rem; font-size: .9rem; }
	h2 { margin: 0 0 .75rem; color: white; font-size: .9rem; }
	nav { display: grid; gap: .45rem; }
	a { display: block; color: var(--color-text-inverse-muted); text-decoration: none; font-size: .9rem; }
	a:hover { color: white; }
	.footer-bottom { display: flex; flex-direction: column; gap: .5rem; padding-block: 1.25rem; border-top: 1px solid rgba(255,255,255,.1); font-size: .78rem; }
	.footer-bottom b { color: var(--color-primary); }
	@media (min-width: 640px) { .footer-grid { grid-template-columns: 1.4fr repeat(3,1fr); } .footer-bottom { flex-direction: row; justify-content: space-between; } }
</style>
