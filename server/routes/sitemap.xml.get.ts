export default defineEventHandler((event) => {
  const origin = getRequestURL(event).origin;
  const urls = ["/", ...products.map((p) => `/products/${p.slug}`)];
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls
    .map((u) => `<url><loc>${origin}${u}</loc></url>`)
    .join("")}</urlset>`;
  setHeader(event, "content-type", "application/xml");
  return xml;
});