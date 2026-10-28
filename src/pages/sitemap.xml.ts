import type { APIRoute } from 'astro';
import { route } from '../data/site';
export const GET: APIRoute = ({ site }) => {
  const urls = site ? ['en', 'zh'].flatMap(lang => ['', 'work/linkloom/', 'work/ai-review/', 'work/real-raise/'].map(path => `<url><loc>${new URL(route(lang as 'en' | 'zh', path), site).href}</loc></url>`)).join('') : '';
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
};
