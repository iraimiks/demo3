import { nav } from '$lib/config';

export const GET = ({ url }) => {
	const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${nav.map((item) => `\n\t<url><loc>${new URL(item.href, url.origin).href}</loc></url>`).join('')}\n</urlset>`;
	return new Response(body, { headers: { 'Content-Type': 'application/xml', 'Cache-Control': 'public, max-age=3600' } });
};
