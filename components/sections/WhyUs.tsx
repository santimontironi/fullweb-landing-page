import Reveal from "@/components/ui/Reveal";
import WhyUsCard from "@/components/ui/WhyUsCard";

const WhyUs = () => {
  return (
    <div className="bg-[color-mix(in_oklab,var(--color-quaternary)_40%,white)] bg-linear-to-b from-transparent from-30% to-tertiary/50 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-sm text-center md:max-w-xl">
        <h2 className="text-2xl tracking-tight text-primary uppercase md:text-3xl 2xl:text-4xl">
          <span className="font-bold">¿Por qué elegir</span> a{" "}
          <span className="bg-linear-to-r from-secondary to-tertiary bg-clip-text font-bold text-transparent">
            FullWeb?
          </span>
        </h2>
        <span aria-hidden="true" className="mx-auto mt-4 block h-px w-full bg-primary/25" />
      </div>

      <Reveal className="mx-auto mt-16 grid max-w-7xl md:grid-cols-2 md:*:last:col-span-2 xl:grid-cols-5 xl:*:last:col-span-1 2xl:max-w-360">
        <WhyUsCard
          background="bg-white"
          number="01"
          title="Diseño a tu medida"
          description="Nada de plantillas: cada proyecto se piensa desde cero según tu negocio, tus clientes y tus objetivos."
          icon="bi-rulers"
        />
        <WhyUsCard
          background="bg-quaternary"
          number="02"
          title="Comunicación directa"
          description="Hablás con quienes desarrollan tu proyecto. Te mantenemos al tanto en cada etapa, sin intermediarios ni tecnicismos."
          icon="bi-chat-dots"
        />
        <WhyUsCard
          background="bg-tertiary"
          number="03"
          title="Rápido y responsive"
          description="Sitios optimizados que cargan en segundos y se ven bien en celulares, tablets y computadoras."
          icon="bi-lightning-charge"
        />
        <WhyUsCard
          background="bg-secondary"
          dark
          number="04"
          title="Tecnología moderna"
          description="Trabajamos con herramientas actuales y código limpio, para que tu sitio sea seguro, estable y fácil de escalar."
          icon="bi-code-slash"
        />
        <WhyUsCard
          background="bg-primary"
          dark
          number="05"
          title="Acompañamiento real"
          description="Después del lanzamiento seguimos cerca: soporte, mejoras y ajustes para que tu proyecto siga creciendo."
          icon="bi-rocket-takeoff"
        />
      </Reveal>
    </div>
  );
};

export default WhyUs;
