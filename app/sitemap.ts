import type { MetadataRoute } from "next";

// Genera /sitemap.xml: la lista de URLs que queremos que Google indexe.
// Se envía en Google Search Console para acelerar la indexación.
// Si se agregan páginas nuevas (ej. /proyectos), se suman como otra entrada del array.

// URL pública del sitio, definida en la variable de entorno NEXT_PUBLIC_SITE_URL.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: siteUrl, // la home: es la única página de la landing
    changeFrequency: "monthly", // cada cuánto suele cambiar el contenido
    priority: 1, // importancia relativa dentro del sitio (0 a 1)
  },
];

export default sitemap;
