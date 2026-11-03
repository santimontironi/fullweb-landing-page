import type { MetadataRoute } from "next";

// Genera /robots.txt: el primer archivo que leen los buscadores al llegar al sitio.
// Les indica qué rutas pueden rastrear y dónde está el sitemap.
// No es seguridad: solo lo respetan los bots que siguen las reglas.

// URL pública del sitio, definida en la variable de entorno NEXT_PUBLIC_SITE_URL.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;

const robots = (): MetadataRoute.Robots => ({
  // Todos los bots ("*") pueden rastrear todo el sitio ("/").
  rules: { userAgent: "*", allow: "/" },
  // Les dice a los buscadores dónde encontrar la lista de URLs a indexar.
  sitemap: `${siteUrl}/sitemap.xml`,
});

export default robots;
