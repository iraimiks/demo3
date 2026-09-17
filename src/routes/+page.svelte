<script lang="ts">
	import Seo from '$lib/components/meta/Seo.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import BrandIcon from '$lib/components/ui/BrandIcon.svelte';
	import { categories, hero, products, restaurant, sellingPoints, site } from '$lib/config';
	const featuredProducts = [products[0], products[3], products[6], products[9]];
	function featuredPrice(option: { label: string; price: string }) {
		const [medium, large] = option.price.split(' / ');
		return large ? `M ${medium} · L ${large}` : `${option.label}: ${option.price}`;
	}
</script>

<Seo title="Kebabs Ludzā | Kebab4You, svaigi un līdzņemšanai" description="Kebabs Ludzā, burgeri līdzņemšanai un ātrā ēdināšana Ludzā. Izvēlies gaļu, dārzeņus un mērci, piezvani un saņem Skolas ielā 30." image={site.heroImage} />

<section class="hero-section"><Container><div class="hero-card">
	<div class="hero-copy"><p class="eyebrow">{hero.eyebrow}</p><h1>{hero.titleStart}<span>{hero.titleAccent}</span></h1><p class="hero-description">{hero.description}</p><div class="hero-actions"><a class="button primary" href="/edienkarte">{hero.primaryCta}<BrandIcon name="arrow" size={18} /></a><a class="button secondary" href={restaurant.orderUrl}><BrandIcon name="phone" size={18} />{hero.secondaryCta}</a><a class="button secondary" href={restaurant.directionsUrl}><BrandIcon name="pin" size={18} />Atrast mūs</a></div></div>
	<div class="hero-visual"><img src={site.heroImage} alt="Svaigi pagatavots kebabs ar dārzeņiem un mērci" width="1981" height="793" fetchpriority="high" /><div class="quality-badge">Kebabs<br />padara dienu<br /><strong>labāku</strong><span>♡</span></div></div>
	<div class="usp-row">{#each sellingPoints as point}<div class="usp"><span class="usp-icon"><BrandIcon name={point.icon} size={22} /></span><span><strong>{point.title}</strong><small>{point.text}</small></span></div>{/each}</div>
</div></Container></section>

<section class="section popular"><Container><div class="section-title"><h2>Mūsu <span>iecienītākie</span> ēdieni</h2><a href="/edienkarte">Skatīt visu ēdienkarti →</a></div><div class="popular-layout">
	<div class="product-scroll">{#each featuredProducts as product}<a class="product-card" href={`/edienkarte#${product.category}`}><img src={product.image} alt={`${product.name} no Kebab4You ēdienkartes`} width="2172" height="724" loading="lazy" decoding="async" style:object-position={`${product.imagePosition} center`} /><div class="product-body"><h3>{product.name}</h3><p>{product.description}</p><strong>{featuredPrice(product.options[0])}</strong></div></a>{/each}</div>
</div></Container></section>

<section class="section categories-section"><Container><div class="section-title"><h2>Ēdienkarte</h2><a href="/edienkarte">Atvērt ēdienkarti →</a></div><div class="category-scroll">{#each categories as category, index}<a href={`/edienkarte#${category.slug}`} class:featured={index === 0}><span><BrandIcon name={category.icon} size={26} /></span><strong>{category.name}</strong></a>{/each}</div></Container></section>

<section class="section service-section"><Container><div class="service-grid"><div class="service-copy"><span class="service-icon"><BrandIcon name="takeaway" size={34} /></span><div><h2>Pasūti līdzņemšanai</h2><p>Piezvani uz <a href={restaurant.orderUrl}>{restaurant.phone}</a>, nosauc savu pasūtījumu un saņem to Kebab4You Ludzā.</p></div></div><a class="button primary" href={restaurant.orderUrl}><BrandIcon name="phone" size={18} />Zvanīt un pasūtīt</a></div></Container></section>

<section class="section story-section"><Container><div class="info-grid">
	<article class="social-proof-card"><strong>100%</strong><h2>apmierināti klienti ir mūsu mērķis</h2><p>Svaiga maltīte ar tavu izvēlēto gaļu, dārzeņiem un mērci. Gatavots tieši tev.</p><a href="https://www.facebook.com/kebabhouse01/reviews" rel="noreferrer">Atsauksmes Facebook →</a></article>
	<article class="about-card"><img src={site.interiorImage} alt="Kebab4You kebabs uz šķīvja ar frī kartupeļiem un salātiem" width="2172" height="724" loading="lazy" decoding="async" /><div><span>Par Kebab4You</span><h2>Vairāk nekā astoņus gadus Ludzā</h2><p>Kebabus gatavojam pēc pasūtījuma ar tavu izvēlēto gaļu, dārzeņiem un mērci.</p><a href="/par-mums">Iepazīsti mūs →</a></div></article>
	<article class="visit-card"><iframe class="mini-map" src={restaurant.mapEmbedUrl} title="Kebab4You atrašanās vieta Google Maps" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><div class="visit-details"><h2>Apmeklē mūs</h2><p>{restaurant.address}</p><p><a href={restaurant.orderUrl}>{restaurant.phone}</a></p><p>Katru dienu 11:00–21:00</p><a href={restaurant.directionsUrl}>Atvērt Google Maps →</a></div></article>
</div></Container></section>

<div class="mobile-cta"><a href={restaurant.orderUrl}><BrandIcon name="phone" size={19} /> Zvanīt un pasūtīt</a></div>

<style>
	.hero-section { padding: clamp(.75rem,2vw,1.5rem) 0 0; background: var(--color-surface-warm); }
	.hero-card { position: relative; overflow: hidden; display: grid; background: var(--color-surface); border-radius: var(--radius-lg); box-shadow: var(--shadow-md); }
	.hero-copy { position: relative; z-index: 2; padding: clamp(2rem,5vw,4.75rem) clamp(1.25rem,5vw,4.5rem) 1.25rem; }
	.eyebrow { margin: 0 0 .6rem; font-size: clamp(.9rem,2vw,1.1rem); font-weight: 800; }
	h1 { max-width: 12ch; margin: 0; font-family: var(--font-display); font-size: clamp(2.45rem,8vw,5.25rem); line-height: .98; letter-spacing: -.055em; }
	h1 span, .section-title h2 span { color: var(--color-primary); }
	.hero-description { max-width: 34rem; margin: 1.15rem 0 0; color: var(--color-text-secondary); font-size: clamp(1rem,2vw,1.18rem); }
	.hero-actions { display: flex; flex-wrap: wrap; gap: .65rem; margin-top: 1.5rem; }
	.button { min-height: 3.1rem; display: inline-flex; align-items: center; justify-content: center; gap: .7rem; padding: .75rem 1.35rem; border-radius: var(--radius-full); font-size: .92rem; font-weight: 800; text-decoration: none; transition: transform .18s ease, box-shadow .18s ease, background .18s ease; }
	.button:hover { transform: translateY(-2px); }
	.button.primary { background: var(--color-primary); color: white; box-shadow: 0 .55rem 1.3rem rgba(255,84,47,.22); }
	.button.primary:hover { background: var(--color-primary-hover); }
	.button.secondary { border: 1px solid var(--color-border); background: white; color: var(--color-text); box-shadow: var(--shadow-sm); }
	.hero-visual { position: relative; min-height: 15rem; overflow: hidden; }
	.hero-visual::before { content: ''; position: absolute; inset: 0; z-index: 1; background: linear-gradient(180deg,#fff 0%,transparent 35%); }
	.hero-visual img { width: 100%; height: 100%; min-height: 15rem; object-fit: cover; object-position: 68% center; display: block; }
	.quality-badge { position: absolute; z-index: 2; right: 1rem; bottom: 1rem; width: 7.5rem; aspect-ratio: 1; display: grid; place-content: center; border-radius: 50%; background: var(--color-accent); text-align: center; text-transform: uppercase; font-size: .72rem; font-weight: 800; line-height: 1.2; transform: rotate(-5deg); box-shadow: var(--shadow-md); }
	.quality-badge span { font-size: 1.35rem; }
	.usp-row { display: grid; grid-template-columns: repeat(2,1fr); gap: .75rem; padding: 1rem 1.25rem 1.4rem; background: white; }
	.usp { min-width: 0; display: flex; align-items: center; gap: .6rem; }
	.usp-icon { color: var(--color-primary); font-size: 1.45rem; }
	.usp span:last-child { display: grid; line-height: 1.2; }
	.usp strong { font-size: .76rem; }
	.usp small { margin-top: .15rem; color: var(--color-text-muted); font-size: .75rem; }
	.section { padding-block: clamp(2.75rem,6vw,5rem); }
	.section-title { display: flex; align-items: end; justify-content: space-between; gap: 1rem; margin-bottom: 1.25rem; }
	.section-title h2 { margin: 0; font-family: var(--font-display); font-size: clamp(1.65rem,4vw,2.4rem); line-height: 1; letter-spacing: -.04em; }
	.section-title a { flex: none; color: var(--color-primary); font-size: .82rem; font-weight: 800; text-decoration: none; }
	.popular-layout { display: block; }
	.product-scroll { display: grid; grid-auto-flow: column; grid-auto-columns: minmax(15rem,78%); gap: .8rem; overflow-x: auto; scroll-snap-type: x mandatory; padding: .2rem .2rem 1rem; scrollbar-width: thin; }
	.product-card { overflow: hidden; scroll-snap-align: start; color: var(--color-text); background: white; border: 1px solid var(--color-border); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); text-decoration: none; }
	.product-card img { width: 100%; height: 11.5rem; display: block; object-fit: cover; }
	.product-body { padding: 1rem; }
	.product-body h3 { margin: 0; font-size: 1rem; }
	.product-body p { min-height: 2.7rem; margin: .4rem 0 .65rem; color: var(--color-text-secondary); font-size: .875rem; }
	.product-body strong { color: var(--color-primary); font-size: .9rem; }
	.categories-section { padding-top: 0; }
	.category-scroll { display: grid; grid-auto-flow: column; grid-auto-columns: minmax(6.25rem,1fr); gap: .8rem; overflow-x: auto; padding: .25rem 0; scroll-snap-type: x mandatory; }
	.category-scroll a { scroll-snap-align: start; min-height: 7rem; display: grid; place-items: center; align-content: center; gap: .6rem; border: 1px solid var(--color-border); border-radius: var(--radius-md); background: var(--color-surface-muted); color: var(--color-text); text-decoration: none; }
	.category-scroll a span { width: 3.4rem; aspect-ratio: 1; display: grid; place-items: center; border: 1px solid var(--color-border); border-radius: var(--radius-sm); background: white; }
	.category-scroll a strong { font-size: .78rem; }
	.category-scroll a.featured span { background: var(--color-accent); }
	.service-section { padding-top: 0; }
	.service-grid { display: grid; align-items: center; gap: 1.25rem; padding: clamp(1.4rem,4vw,2.5rem); border-radius: var(--radius-lg); background: linear-gradient(120deg,var(--color-surface-warm),var(--color-accent-soft)); }
	.service-copy { display: flex; gap: 1rem; align-items: center; }
	.service-icon { font-size: 2.5rem; color: var(--color-primary); }
	.service-copy h2 { margin: 0; font-family: var(--font-display); font-size: 1.4rem; }
	.service-copy p { margin: .35rem 0 0; color: var(--color-text-secondary); font-size: .9rem; }
	.service-copy p a { color: var(--color-primary); font-weight: 850; text-decoration: none; }
	.story-section { padding-top: 0; }
	.info-grid { display: grid; gap: 1rem; }
	.social-proof-card, .about-card, .visit-card { overflow: hidden; border: 1px solid var(--color-border); border-radius: var(--radius-md); background: white; box-shadow: var(--shadow-sm); }
	.social-proof-card { padding: 1.5rem; background: linear-gradient(145deg,#fff,var(--color-accent-soft)); }
	.social-proof-card > strong { display: block; color: var(--color-primary); font-family: var(--font-display); font-size: 3.5rem; line-height: 1; }
	.social-proof-card h2 { margin: .6rem 0; font-family: var(--font-display); font-size: 1.35rem; line-height: 1.05; }
	.social-proof-card p { margin: 0 0 1rem; color: var(--color-text-secondary); font-size: .85rem; }
	.social-proof-card a { color: var(--color-text); font-size: .8rem; font-weight: 850; text-decoration: none; }
	.about-card { display: grid; grid-template-columns: .8fr 1.2fr; }
	.about-card img { width: 100%; height: 100%; min-height: 15rem; object-fit: cover; }
	.about-card div { align-self: center; padding: 1.25rem; }
	.about-card span { color: var(--color-primary); font-size: .72rem; font-weight: 850; text-transform: uppercase; }
	.about-card h2, .visit-details h2 { margin: .4rem 0 .5rem; font-family: var(--font-display); font-size: 1.35rem; line-height: 1.05; }
	.about-card p, .visit-details p { margin: 0 0 .8rem; color: var(--color-text-secondary); font-size: .82rem; }
	.about-card a, .visit-details a { color: var(--color-text); font-size: .78rem; font-weight: 850; text-decoration: none; }
	.visit-card { display: grid; }
	.mini-map { width: 100%; min-height: 11rem; height: 100%; border: 0; filter: saturate(.8) contrast(1.04); }
	.visit-details { padding: 1.25rem; }
	.mobile-cta { position: fixed; z-index: 20; right: 1rem; bottom: 1rem; left: 1rem; }
	.mobile-cta a { min-height: 3.3rem; display: flex; align-items: center; justify-content: center; gap: 1rem; border-radius: var(--radius-full); background: var(--color-accent); color: var(--color-text); font-weight: 900; text-decoration: none; box-shadow: var(--shadow-md); }
	@media (min-width: 640px) { .product-scroll { grid-auto-columns: minmax(14rem,43%); } }
	@media (min-width: 768px) {
		.hero-card { grid-template-columns: minmax(0,.85fr) minmax(0,1.15fr); }
		.hero-copy { display: flex; flex-direction: column; justify-content: center; padding-right: 0; }
		.hero-visual { grid-column: 2; grid-row: 1; min-height: 31rem; }
		.hero-visual::before { background: linear-gradient(90deg,#fff 0%,transparent 30%); }
		.hero-visual img { min-height: 31rem; }
		.usp-row { grid-column: 1 / -1; grid-template-columns: repeat(4,1fr); padding: 1.25rem clamp(2rem,5vw,4.5rem); }
		.mobile-cta { display: none; }
		.service-grid { grid-template-columns: 1fr auto; }
		.info-grid { grid-template-columns: repeat(2,1fr); }
		.visit-card { grid-column: 1 / -1; grid-template-columns: 1fr 1fr; }
	}
	@media (min-width: 1024px) {
		.product-scroll { grid-auto-flow: initial; grid-template-columns: repeat(4,1fr); overflow: visible; padding: 0; }
		.product-card img { height: 10rem; }
		.info-grid { grid-template-columns: .75fr 1.35fr 1fr; }
		.visit-card { grid-column: auto; grid-template-columns: 1fr; }
	}
	@media (max-width: 374px) { .hero-actions .button { width: 100%; } .usp-row { grid-template-columns: 1fr; } .section-title a { display: none; } }
</style>
