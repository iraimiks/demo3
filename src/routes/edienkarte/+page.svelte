<script lang="ts">
	import Seo from '$lib/components/meta/Seo.svelte';
	import PageHeader from '$lib/components/sections/PageHeader.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import BrandIcon from '$lib/components/ui/BrandIcon.svelte';
	import { categories, products, restaurant } from '$lib/config';
	function optionLabel(label: string) { return label === 'M / L' ? 'Izmērs' : label; }
</script>

<Seo title="Ēdienkarte un cenas | Kebab4You Ludzā" description="Kebab4You ēdienkarte: kebabs Ludzā, burgeri līdzņemšanai, šķīvji un uzkodas. Skaidras M un L porciju cenas, pasūtīšana pa tālruni." />
<PageHeader eyebrow="Kebab4You Ludza" title="Ēdienkarte" lead="Izvēlies maltīti, gaļas veidu un izmēru. Pasūtījumu līdzņemšanai vari veikt pa tālruni." />

<nav class="category-nav" aria-label="Ēdienkartes kategorijas">
	<Container><div>{#each categories as category}<a href={`#${category.slug}`}>{category.name}</a>{/each}</div></Container>
</nav>

<main class="menu-content">
	<Container>
		{#each categories as category}
			<section id={category.slug} class="menu-section">
				<div class="category-banner">
					<img src={category.image} alt={`${category.name} no Kebab4You ēdienkartes Ludzā`} width="2172" height="724" loading="lazy" decoding="async" />
					<div class="category-overlay">
						<span class="category-icon"><BrandIcon name={category.icon} size={28} /></span>
						<div><h2>{category.name}</h2><p>{category.description}</p></div>
					</div>
				</div>

				<div class="menu-grid">
					{#each products.filter((product) => product.category === category.slug) as product}
						<article class="menu-card">
							<div class="product-heading"><div><h3>{product.name}</h3><p>{product.description}</p></div></div>
							<ul class="price-list">
								{#each product.options as option}
									{@const prices = option.price.split(' / ')}
									<li><span>{optionLabel(option.label)}</span>{#if option.price}<span class="price-values">{#if prices[1]}<span><small>M</small><strong>{prices[0]}</strong></span><span><small>L</small><strong>{prices[1]}</strong></span>{:else}<strong>{prices[0]}</strong>{/if}</span>{/if}</li>
								{/each}
							</ul>
						</article>
					{/each}
				</div>
			</section>
		{/each}

		<section class="order-panel">
			<div><span>Pasūtījumi līdzņemšanai</span><h2>Izvēlējies? Piezvani, un mēs sagatavosim.</h2><p>Pasūtījumu vari saņemt Kebab4You, Skolas ielā 30, Ludzā.</p></div>
			<a href={restaurant.orderUrl}><BrandIcon name="phone" size={19} /> Zvanīt un pasūtīt</a>
		</section>
	</Container>
</main>

<style>
	.category-nav { position: sticky; top: 4.75rem; z-index: 15; overflow: hidden; background: rgba(255,255,255,.96); border-bottom: 1px solid var(--color-border); backdrop-filter: blur(.75rem); }
	.category-nav div { display: flex; gap: .55rem; overflow-x: auto; padding-block: .75rem; scrollbar-width: none; }
	.category-nav a { flex: none; min-height: 2.75rem; display: inline-flex; align-items: center; padding: .55rem 1.05rem; border-radius: var(--radius-full); background: var(--color-surface-muted); color: var(--color-text); font-size: .84rem; font-weight: 850; text-decoration: none; transition: background .18s ease, color .18s ease; }
	.category-nav a:hover { background: var(--color-text); color: white; }
	.menu-content { padding-block: clamp(2rem,6vw,5rem); background: var(--color-surface); }
	.menu-section { padding-block: clamp(1.75rem,5vw,3.5rem); scroll-margin-top: 8.5rem; border-bottom: 1px solid var(--color-border); }
	.menu-section:first-child { padding-top: 0; }
	.category-banner { position: relative; min-height: clamp(16rem,37vw,24rem); overflow: hidden; margin-bottom: 1rem; border-radius: var(--radius-lg); background: var(--color-surface-inverse); box-shadow: var(--shadow-sm); }
	.category-banner img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
	.category-banner::after { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg,rgba(14,10,7,.9) 0%,rgba(14,10,7,.66) 42%,rgba(14,10,7,.08) 78%); }
	.category-overlay { position: absolute; z-index: 1; inset: 0; max-width: 39rem; display: flex; align-items: end; gap: 1rem; padding: clamp(1.35rem,5vw,3.25rem); color: white; }
	.category-icon { width: 3.75rem; aspect-ratio: 1; display: grid; place-items: center; flex: none; border: 1px solid rgba(255,255,255,.38); border-radius: var(--radius-sm); background: var(--color-accent); color: var(--color-text); }
	h2 { margin: 0; font-family: var(--font-display); font-size: clamp(2rem,6vw,3.75rem); line-height: .95; letter-spacing: -.045em; }
	.category-overlay p { margin: .6rem 0 0; color: rgba(255,255,255,.82); font-size: clamp(.9rem,2vw,1.05rem); line-height: 1.55; }
	.menu-grid { display: grid; gap: 1rem; }
	.menu-card { padding: clamp(1.15rem,3vw,1.6rem); border: 1px solid var(--color-border); border-radius: var(--radius-md); background: white; box-shadow: var(--shadow-sm); }
	.product-heading { padding-bottom: 1rem; border-bottom: 1px solid var(--color-border); }
	h3 { margin: 0; font-family: var(--font-display); font-size: clamp(1.15rem,3vw,1.45rem); letter-spacing: -.025em; }
	.product-heading p { margin: .35rem 0 0; color: var(--color-text-secondary); font-size: .86rem; line-height: 1.45; }
	.price-list { display: grid; gap: .65rem; margin: 1rem 0 0; padding: 0; list-style: none; }
	.price-list li { display: flex; align-items: center; justify-content: space-between; gap: 1rem; min-height: 2rem; }
	.price-list li + li { padding-top: .65rem; border-top: 1px dashed var(--color-border); }
	.price-list span { color: var(--color-text-secondary); font-size: .91rem; font-weight: 700; }
	.price-values { display: flex; align-items: center; justify-content: end; gap: .85rem; color: var(--color-text); }
	.price-values > span { display: grid; grid-template-columns: auto auto; align-items: baseline; gap: .35rem; }
	.price-values small { color: var(--color-text-muted); font-size: .7rem; font-weight: 900; }
	.price-list strong { color: var(--color-primary); font-size: .95rem; white-space: nowrap; }
	.order-panel { display: grid; align-items: center; gap: 1.25rem; margin-top: clamp(2rem,5vw,4rem); padding: clamp(1.5rem,5vw,3rem); border-radius: var(--radius-lg); background: var(--color-surface-inverse); color: white; }
	.order-panel span { color: var(--color-accent); font-size: .75rem; font-weight: 900; letter-spacing: .09em; text-transform: uppercase; }
	.order-panel h2 { max-width: 18ch; margin-top: .55rem; font-size: clamp(1.7rem,4vw,2.65rem); line-height: 1.05; }
	.order-panel p { margin: .65rem 0 0; color: var(--color-text-inverse-muted); }
	.order-panel a { min-height: 3.25rem; display: inline-flex; align-items: center; justify-content: center; gap: .55rem; padding: .75rem 1.3rem; border-radius: var(--radius-full); background: var(--color-accent); color: var(--color-text); font-weight: 900; text-decoration: none; }
	@media (min-width: 640px) { .menu-grid { grid-template-columns: repeat(2,minmax(0,1fr)); } }
	@media (min-width: 768px) { .order-panel { grid-template-columns: 1fr auto; } }
	@media (max-width: 420px) { .category-overlay { align-items: start; flex-direction: column; justify-content: end; } .category-banner::after { background: linear-gradient(0deg,rgba(14,10,7,.92),rgba(14,10,7,.12)); } .price-list li { align-items: start; } .price-values { flex-direction: column; align-items: end; gap: .25rem; } }
</style>
