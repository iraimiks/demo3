<script lang="ts">
	import Seo from '$lib/components/meta/Seo.svelte';
	import PageHeader from '$lib/components/sections/PageHeader.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import BrandIcon from '$lib/components/ui/BrandIcon.svelte';
	import { restaurant, site } from '$lib/config';
</script>

<Seo title="Par Kebab4You | Kebabs Ludzā kopš 2018. gada" description="Kebab4You jau vairāk nekā astoņus gadus gatavo kebabus Ludzā. Izvēlies cāļa, liellopa vai mix gaļu un saņem maltīti līdzņemšanai Skolas ielā 30." />
<PageHeader eyebrow="Mūsējie Ludzā" title="Gatavojam tā, kā garšo tev" lead="Kebab4You ir vieta ātrai un sātīgai maltītei bez liekas izlikšanās. Svaigi pagatavots kebabs, tava izvēle un draudzīga apkalpošana." />

<section class="story">
	<Container>
		<div class="story-grid">
			<img src={site.interiorImage} alt="Kebab4You kebaba šķīvji ar gaļu, frī kartupeļiem, salātiem un mērci" width="2172" height="724" loading="eager" decoding="async" />
			<div class="story-copy">
				<span>Vairāk nekā 8 gadi Ludzā</span>
				<h2>No pirmā pasūtījuma līdz pēdējam. Vienmēr gatavots svaigi.</h2>
				<p>Kebab4You stāsts Ludzā sākās vismaz 2018. gadā. Kopš tā laika esam kļuvuši par pazīstamu pieturvietu tiem, kuri grib sātīgu maltīti paņemt līdzi vai baudīt tepat.</p>
				<p>Mūsu ēdienkarti veidojam vienkārši: tu izvēlies tortiliju, lavašu, arābu maizi vai šķīvi, pēc tam cāļa, liellopa vai mix gaļu, dārzeņus un savu mīļāko mērci. Katru pasūtījumu gatavojam atsevišķi.</p>
				<p>Mūs atradīsi Skolas ielā 30, Ludzā. Strādājam katru dienu no 11:00 līdz 21:00, un pasūtījumu līdzņemšanai vari pieteikt pa tālruni.</p>
				<div class="story-actions"><a href="/edienkarte">Skatīt ēdienkarti <BrandIcon name="arrow" size={18} /></a><a class="secondary" href={restaurant.orderUrl}><BrandIcon name="phone" size={18} /> Zvanīt un pasūtīt</a></div>
			</div>
		</div>
	</Container>
</section>

<section class="values">
	<Container>
		<div class="value-grid">
			<article><span><BrandIcon name="choice" size={26} /></span><div><h2>Tava gaume, tava izvēle</h2><p>Trīs gaļas varianti, vairāki kebabu veidi un piecas mērces.</p></div></article>
			<article><span><BrandIcon name="fresh" size={26} /></span><div><h2>Gatavots pēc pasūtījuma</h2><p>Maltīti sākam gatavot tad, kad esi to izvēlējies.</p></div></article>
			<article><span><BrandIcon name="pin" size={26} /></span><div><h2>Katru dienu Ludzā</h2><p>Skolas iela 30, no pulksten 11:00 līdz 21:00.</p></div></article>
		</div>
	</Container>
</section>

<style>
	.story { padding-block: clamp(2rem,6vw,5rem); }
	.story-grid { overflow: hidden; display: grid; border: 1px solid var(--color-border); border-radius: var(--radius-lg); background: var(--color-surface-muted); box-shadow: var(--shadow-sm); }
	.story-grid img { width: 100%; height: 100%; min-height: 15rem; max-height: 24rem; object-fit: cover; }
	.story-copy { align-self: center; padding: clamp(1.35rem,5vw,4rem); }
	.story-copy > span { color: var(--color-primary); font-size: .78rem; font-weight: 900; letter-spacing: .09em; text-transform: uppercase; }
	h2 { margin: .6rem 0 1rem; font-family: var(--font-display); font-size: clamp(1.65rem,4vw,2.8rem); line-height: 1.08; letter-spacing: -.04em; }
	p { margin: 0 0 .9rem; color: var(--color-text-secondary); font-size: 1rem; line-height: 1.65; }
	.story-actions { display: flex; flex-wrap: wrap; gap: .65rem; margin-top: 1.25rem; }
	.story-actions a { min-height: 3rem; display: inline-flex; align-items: center; justify-content: center; gap: .5rem; padding: .7rem 1.15rem; border-radius: var(--radius-full); background: var(--color-primary); color: white; font-weight: 800; text-decoration: none; }
	.story-actions a.secondary { border: 1px solid var(--color-border); background: white; color: var(--color-text); }
	.values { padding-bottom: clamp(2.5rem,6vw,5rem); }
	.value-grid { display: grid; gap: .8rem; }
	.value-grid article { display: flex; align-items: start; gap: 1rem; padding: 1.25rem; border: 1px solid var(--color-border); border-radius: var(--radius-md); background: white; }
	.value-grid article > span { width: 3.25rem; aspect-ratio: 1; display: grid; place-items: center; flex: none; border-radius: var(--radius-sm); background: var(--color-primary); color: white; }
	.value-grid h2 { margin: 0 0 .35rem; font-size: 1.2rem; }
	.value-grid p { margin: 0; font-size: .92rem; line-height: 1.5; }
	@media (min-width: 768px) { .story-grid { grid-template-columns: minmax(0,1fr) minmax(0,1fr); } .story-grid img { max-height: none; } .value-grid { grid-template-columns: repeat(3,1fr); } .value-grid article { display: grid; } }
	@media (max-width: 639px) { .story { padding-block: 1.25rem 2rem; } .story-grid { border-radius: var(--radius-md); } .story-copy { padding: 1.25rem; } .story-actions a { width: 100%; } .values { padding-bottom: 2.5rem; } }
</style>
