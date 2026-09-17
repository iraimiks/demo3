<script lang="ts">
	import Seo from '$lib/components/meta/Seo.svelte';
	import PageHeader from '$lib/components/sections/PageHeader.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import BrandIcon from '$lib/components/ui/BrandIcon.svelte';
	import { restaurant } from '$lib/config';
</script>

<Seo title="Kontakti un karte | Kebab4You Ludzā" description="Atrodi Kebab4You Skolas ielā 30, Ludzā. Ātrā ēdināšana Ludzā katru dienu 11:00–21:00. Zvani +371 27888929 un pasūti līdzņemšanai." />
<PageHeader eyebrow="Skolas iela 30, Ludza" title="Atnāc vai pasūti iepriekš" lead="Piezvani, pasaki savu izvēli, un sagatavosim to līdzņemšanai. Piegādes nav. Pasūtījumu saņem pie mums." />

<section class="contact-section">
	<Container>
		<div class="contact-grid">
			<div class="contact-list">
				<article><span><BrandIcon name="pin" size={24} /></span><div><h2>Adrese</h2><p>{restaurant.address}</p><a href={restaurant.directionsUrl}>Atvērt Google Maps →</a></div></article>
				<article><span><BrandIcon name="phone" size={24} /></span><div><h2>Pasūtījumi līdzņemšanai</h2><p>Pasūti pa tālruni un saņem pie mums.</p><a href={restaurant.orderUrl}>{restaurant.phone}</a></div></article>
				<article><span><BrandIcon name="clock" size={24} /></span><div><h2>Darba laiks</h2><dl>{#each restaurant.openingHours as item}<div><dt>{item.day}</dt><dd>{item.hours}</dd></div>{/each}</dl></div></article>
				<article><span><BrandIcon name="facebook" size={24} /></span><div><h2>Facebook</h2><p>Jaunumi un aktuālā informācija.</p><a href={restaurant.socials[0].href} rel="noreferrer">Atvērt Facebook lapu →</a></div></article>
			</div>

			<div class="map-wrap">
				<iframe src={restaurant.mapEmbedUrl} title="Kebab4You atrašanās vieta Google Maps, Skolas iela 30, Ludza" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
				<div class="map-footer"><div><strong>Kebab4You</strong><span>{restaurant.address}</span></div><a href={restaurant.directionsUrl}><BrandIcon name="pin" size={18} /> Veidot maršrutu</a></div>
			</div>
		</div>
	</Container>
</section>

<style>
	.contact-section { padding-block: clamp(2rem,6vw,5rem); }
	.contact-grid { display: grid; gap: 1rem; }
	.contact-list { display: grid; gap: .75rem; }
	.contact-list article { display: flex; gap: 1rem; padding: 1.25rem; border: 1px solid var(--color-border); border-radius: var(--radius-md); background: white; }
	.contact-list article > span { width: 3rem; height: 3rem; display: grid; place-items: center; flex: none; border-radius: var(--radius-sm); background: var(--color-primary); color: white; }
	h2 { margin: 0 0 .35rem; font-size: 1.05rem; }
	p { margin: 0 0 .35rem; color: var(--color-text-secondary); font-size: .92rem; }
	a { color: var(--color-primary); font-weight: 800; overflow-wrap: anywhere; }
	dl { margin: 0; }
	dl div { display: grid; grid-template-columns: minmax(0,1fr) auto; gap: 1rem; }
	dd { margin: 0; font-weight: 800; }
	.map-wrap { overflow: hidden; min-height: 30rem; display: grid; grid-template-rows: 1fr auto; border: 1px solid var(--color-border); border-radius: var(--radius-lg); background: white; box-shadow: var(--shadow-sm); }
	.map-wrap iframe { width: 100%; min-height: 25rem; height: 100%; border: 0; filter: saturate(.82) contrast(1.03); }
	.map-footer { display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 1rem 1.2rem; }
	.map-footer div { display: grid; }
	.map-footer span { color: var(--color-text-secondary); font-size: .83rem; }
	.map-footer a { min-height: 2.8rem; display: inline-flex; align-items: center; justify-content: center; gap: .45rem; padding: .65rem 1rem; border-radius: var(--radius-full); background: var(--color-primary); color: white; text-decoration: none; }
	@media (min-width: 768px) { .contact-grid { grid-template-columns: .85fr 1.15fr; } }
	@media (max-width: 639px) { .contact-section { padding-block: 1.25rem 2.5rem; } .contact-list article { padding: 1rem; } .map-wrap { min-height: 25rem; border-radius: var(--radius-md); } .map-wrap iframe { min-height: 20rem; } .map-footer { align-items: stretch; flex-direction: column; } .map-footer a { width: 100%; } }
</style>
