<script lang="ts">
	import { page } from '$app/state';
	import { restaurant, site } from '$lib/config';
	let schema = $derived({
		'@context': 'https://schema.org',
		'@type': ['Restaurant', 'LocalBusiness'],
		name: restaurant.legalName,
		description: site.description,
		url: page.url.origin,
		image: `${page.url.origin}${site.heroImage}`,
		menu: `${page.url.origin}/edienkarte`,
		telephone: restaurant.phone,
		foundingDate: restaurant.foundingDate,
		priceRange: '€',
		servesCuisine: ['Kebabi', 'Burgeri', 'Ātrā ēdināšana'],
		acceptsReservations: false,
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'Skolas iela 30',
			addressLocality: restaurant.city,
			postalCode: 'LV-5701',
			addressCountry: 'LV'
		},
		openingHoursSpecification: [{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '11:00',
			closes: '21:00'
		}],
		hasMap: restaurant.directionsUrl,
		sameAs: restaurant.socials.map((social) => social.href)
	});
</script>

<svelte:head>{@html `<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, '\\u003c')}</script>`}</svelte:head>
