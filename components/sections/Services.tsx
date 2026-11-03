import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import ServiceCard from "@/components/ui/ServiceCard";

const Services = () => {
  return (
    <div className="bg-linear-to-b from-secondary via-primary via-45% to-[color-mix(in_oklab,var(--color-primary)_15%,black)] px-5 py-24 md:px-8 md:py-32">
      <p className="flex items-center justify-center gap-3 text-xs font-medium tracking-[0.3em] text-quaternary uppercase md:text-sm">
        Qué hacemos
        <span aria-hidden="true" className="h-px w-8 bg-linear-to-r from-quaternary to-transparent md:w-12" />
      </p>

      <h2 className="mt-4 text-center text-4xl leading-tight font-bold tracking-tight text-[color-mix(in_oklab,var(--color-quaternary)_40%,white)] md:text-5xl 2xl:text-6xl">
        Nuestros{" "}
        <span className="bg-linear-to-r from-tertiary to-quaternary bg-clip-text text-transparent">
          servicios
        </span>
      </h2>

      <Reveal className="mx-auto mt-16 grid max-w-7xl gap-6 md:grid-cols-2 md:*:last:col-span-2 xl:grid-cols-5 xl:*:last:col-span-1 2xl:max-w-360">
        <ServiceCard
          icon="bi-display"
          title="Desarrollo web"
          description="Sitios web, tiendas online y aplicaciones web modernas, rápidas y adaptadas a cualquier dispositivo."
        />
        <ServiceCard
          icon="bi-phone"
          title="Aplicaciones móviles"
          description="Apps para Android e iOS intuitivas y confiables, para que tus clientes te tengan siempre a mano."
        />
        <ServiceCard
          icon="bi-robot"
          title="Automatizaciones con IA"
          description="Usamos inteligencia artificial para automatizar tareas repetitivas y que tu equipo se enfoque en lo importante."
        />
        <ServiceCard
          icon="bi-diagram-3"
          title="Sistemas a medida"
          description="Software de gestión pensado para tu negocio, que automatiza tus procesos y te ahorra tiempo."
        />
        <ServiceCard
          icon="bi-headset"
          title="Mantenimiento y soporte"
          description="Te acompañamos después del lanzamiento con actualizaciones, mejoras y soporte continuo."
        />
      </Reveal>

      <div className="mt-14 flex justify-center">
        <Button href="#contacto">
          Pedí tu presupuesto
          <i className="bi bi-arrow-right" aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
};

export default Services;
