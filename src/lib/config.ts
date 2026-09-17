export const site = {
	name: 'Kebab4You',
	tagline: 'Vairāk nekā kebabs',
	title: 'Kebabs Ludzā | Kebab4You, svaigi un līdzņemšanai',
	description: 'Kebabs Ludzā, burgeri līdzņemšanai un ātrā ēdināšana Ludzā. Kebab4You gatavo katru pasūtījumu svaigi. Zvani un saņem Skolas ielā 30.',
	url: '',
	locale: 'lv_LV',
	logo: null,
	heroImage: '/images/kebab4you-kebabs-optimized.jpg',
	interiorImage: '/images/kebab4you-plates-optimized.jpg',
	ogImage: '',
	colors: { primary: '#ff542f', accent: '#ffb91f' }
} as const;

export const nav = [
	{ href: '/', label: 'Sākums' },
	{ href: '/edienkarte', label: 'Ēdienkarte' },
	{ href: '/par-mums', label: 'Par mums' },
	{ href: '/kontakti', label: 'Kontakti' }
] as const;

export const restaurant = {
	legalName: 'Kebab4You',
	foundingDate: '2018',
	address: 'Skolas iela 30, Ludza, LV-5701',
	city: 'Ludza',
	phone: '+371 27888929',
	email: null as string | null,
	directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Skolas+iela+30%2C+Ludza%2C+Latvia%2C+5701',
	mapEmbedUrl: 'https://www.google.com/maps?q=Skolas%20iela%2030%2C%20Ludza%2C%20Latvia%2C%20LV-5701&output=embed',
	orderUrl: 'tel:+37127888929',
	openingHours: [{ day: 'Pirmdiena–svētdiena', hours: '11:00–21:00' }],
	socials: [{ label: 'Facebook', href: 'https://www.facebook.com/kebabhouse01' }]
};

export const hero = {
	eyebrow: 'Kebab4You Ludzā',
	titleStart: 'Garša, kas ',
	titleAccent: 'vieno!',
	description: 'Svaigi gatavoti kebabi, burgeri un uzkodas līdzņemšanai. Izvēlies savu gaļu, dārzeņus un mērci.',
	primaryCta: 'Skatīt ēdienkarti',
	secondaryCta: 'Zvanīt un pasūtīt',
	directionsCta: 'Kā nokļūt'
};

export const sellingPoints = [
	{ icon: 'choice', title: 'Plaša izvēle', text: 'cāļa, liellopa vai mix gaļa' },
	{ icon: 'fresh', title: 'Gatavots pēc pasūtījuma', text: 'izvēlies dārzeņus un mērci' },
	{ icon: 'phone', title: 'Pasūti iepriekš', text: 'zvani uz 27888929' },
	{ icon: 'pin', title: 'Saņem Ludzā', text: 'Skolas ielā 30' }
] as const;

export const categories = [
	{ slug: 'kebabi', name: 'Kebabi', icon: 'kebab', image: '/images/kebab4you-kebabs-optimized.jpg', description: 'Tortilijā, lavašā vai arābu maizē. Izvēlies savu gaļu, dārzeņus un mērci.' },
	{ slug: 'uz-skivja', name: 'Uz šķīvja', icon: 'plate', image: '/images/kebab4you-plates-optimized.jpg', description: 'Pilnvērtīga porcija ar gaļu, frī kartupeļiem, salātiem un mērci.' },
	{ slug: 'burgeri', name: 'Burgeri', icon: 'burger', image: '/images/kebab4you-burgers-snacks-optimized.jpg', description: 'Sātīgi burgeri ar cāļa vai liellopa gaļu divos izmēros.' },
	{ slug: 'uzkodas', name: 'Uzkodas', icon: 'snack', image: '/images/kebab4you-burgers-snacks-optimized.jpg', description: 'Kraukšķīgas uzkodas, ko baudīt atsevišķi vai pie kebaba.' },
	{ slug: 'merces', name: 'Mērces', icon: 'sauce', image: '/images/kebab4you-burgers-snacks-optimized.jpg', description: 'Izvēlies savu iecienītāko mērci.' }
] as const;

export const products = [
	{
		id: 'turru', category: 'kebabi', name: 'Turru gaumē', description: 'Grilēts kebabs tortilijā. Pieejams M un L izmērā.', image: '/images/kebab4you-kebabs-optimized.jpg', imagePosition: '13%',
		options: [
			{ label: 'Cāļa', price: '€6.00 / €6.50' },
			{ label: 'Liellopa', price: '€7.00 / €7.50' },
			{ label: 'Mix', price: '€6.50 / €7.00' }
		]
	},
	{
		id: 'armenu', category: 'kebabi', name: 'Armēņu gaumē', description: 'Kebabs grilētā lavašā.', image: '/images/kebab4you-kebabs-optimized.jpg', imagePosition: '50%',
		options: [
			{ label: 'Cāļa', price: '€7.50' },
			{ label: 'Liellopa', price: '€8.50' },
			{ label: 'Mix', price: '€8.00' }
		]
	},
	{
		id: 'arabu', category: 'kebabi', name: 'Arābu gaumē', description: 'Kebabs arābu maizē.', image: '/images/kebab4you-kebabs-optimized.jpg', imagePosition: '88%',
		options: [
			{ label: 'Cāļa', price: '€7.50' },
			{ label: 'Liellopa', price: '€8.50' },
			{ label: 'Mix', price: '€8.00' }
		]
	},
	{
		id: 'uz-skivja', category: 'uz-skivja', name: 'Kebabs uz šķīvja', description: 'Pieejams M un L izmērā, arī līdzņemšanai.', image: '/images/kebab4you-plates-optimized.jpg', imagePosition: '28%',
		options: [
			{ label: 'Cāļa', price: '€4.50 / €8.50' },
			{ label: 'Liellopa', price: '€5.50 / €9.50' },
			{ label: 'Mix', price: '€5.00 / €9.00' }
		]
	},
	{
		id: 'brokastu', category: 'uz-skivja', name: 'Brokastu kebabs', description: 'Mazāka porcija ātrai un sātīgai maltītei.', image: '/images/kebab4you-plates-optimized.jpg', imagePosition: '27%',
		options: [
			{ label: 'Cāļa', price: '€3.50' },
			{ label: 'Liellopa', price: '€4.50' },
			{ label: 'Mix', price: '€4.00' }
		]
	},
	{
		id: 'draugu-plate', category: 'uz-skivja', name: 'Draugu plate', description: 'Liela porcija četriem cilvēkiem.', image: '/images/kebab4you-plates-optimized.jpg', imagePosition: '78%',
		options: [
			{ label: 'Cāļa', price: '€30.00' },
			{ label: 'Liellopa', price: '€34.00' },
			{ label: 'Mix', price: '€32.00' }
		]
	},
	{
		id: 'liellopa-burgers', category: 'burgeri', name: 'Liellopa burgers', description: 'Pieejams M un L izmērā.', image: '/images/kebab4you-burgers-snacks-optimized.jpg', imagePosition: '78%',
		options: [{ label: 'M / L', price: '€4.50 / €5.00' }]
	},
	{
		id: 'liellopa-bekons', category: 'burgeri', name: 'Liellopa burgers ar bekonu', description: 'Ar bekona šķēli, pieejams M un L izmērā.', image: '/images/kebab4you-burgers-snacks-optimized.jpg', imagePosition: '78%',
		options: [{ label: 'M / L', price: '€5.00 / €5.50' }]
	},
	{
		id: 'cala-burgers', category: 'burgeri', name: 'Cāļa gaļas burgers', description: 'Pieejams M un L izmērā.', image: '/images/kebab4you-burgers-snacks-optimized.jpg', imagePosition: '78%',
		options: [{ label: 'M / L', price: '€4.00 / €4.50' }]
	},
	{ id: 'fri', category: 'uzkodas', name: 'Kartupeļi fri', description: '150 g, pasniedz ar mērci.', image: '/images/kebab4you-burgers-snacks-optimized.jpg', imagePosition: '20%', options: [{ label: '150 g', price: '€3.00' }] },
	{ id: 'daivas', category: 'uzkodas', name: 'Kartupeļu daivas', description: '150 g, pasniedz ar mērci.', image: '/images/kebab4you-burgers-snacks-optimized.jpg', imagePosition: '20%', options: [{ label: '150 g', price: '€3.00' }] },
	{ id: 'mozarella', category: 'uzkodas', name: 'Mocarellas nūjiņas', description: 'Pasniedz ar mērci.', image: '/images/kebab4you-burgers-snacks-optimized.jpg', imagePosition: '22%', options: [{ label: '4 gab.', price: '€4.00' }] },
	{ id: 'sipolu-gredzeni', category: 'uzkodas', name: 'Sīpolu gredzeni', description: 'Pasniedz ar mērci.', image: '/images/kebab4you-burgers-snacks-optimized.jpg', imagePosition: '22%', options: [{ label: '8 gab.', price: '€3.50' }] },
	{ id: 'nageti', category: 'uzkodas', name: 'Vistas nageti', description: 'Pasniedz ar mērci.', image: '/images/kebab4you-burgers-snacks-optimized.jpg', imagePosition: '18%', options: [{ label: '6 gab.', price: '€3.50' }] },
	{
		id: 'merces', category: 'merces', name: 'Mērces', description: 'Piemeklē savai maltītei piemērotāko garšu.', image: '/images/kebab4you-burgers-snacks-optimized.jpg', imagePosition: '12%',
		options: [
			{ label: 'Ķiploku', price: '' },
			{ label: 'Gurķu', price: '' },
			{ label: 'Kečups', price: '' },
			{ label: 'Saldā čili', price: '' },
			{ label: 'Asā čili', price: '' }
		]
	}
] as const;

export const promotion = {
	enabled: false,
	badge: '',
	title: '',
	description: '',
	price: '',
	cta: ''
};
