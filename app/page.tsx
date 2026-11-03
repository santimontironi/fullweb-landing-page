import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;

// Datos estructurados (schema.org): le describen a Google qué es FullWeb,
// dónde atiende y cómo contactarla. No se ven en la página.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "FullWeb",
  description: "Desarrollo de sitios web, aplicaciones y sistemas a medida.",
  url: siteUrl,
  logo: `${siteUrl}/images/logo.webp`,
  image: `${siteUrl}/images/logo.webp`,
  email: "fullwebcontacto@gmail.com",
  telephone: "+54 9 341 645-9760",
  areaServed: "AR",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Santa Fe",
    addressCountry: "AR",
  },
};

const page = () => {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <section id="inicio"><Hero /></section>
      <section id="por-que-elegirnos"><WhyUs /></section>
      <section id="servicios"><Services /></section>
      <section id="contacto"><Contact /></section>
    </main>
  );
};

export default page;
