import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const Hero = () => {
  return (
    <div className="relative isolate flex min-h-svh flex-col items-center overflow-hidden bg-[color-mix(in_oklab,var(--color-primary)_15%,black)] px-5 pt-56 pb-32 text-center md:pt-52 xl:pt-64 2xl:pt-88">

      <div
        aria-hidden="true"
        className="absolute -top-48 left-1/2 -z-10 w-[220%] -translate-x-1/2 md:-top-68 md:w-[150%] xl:-top-[calc(40vw-12rem)] xl:w-full 2xl:-top-[calc(40vw-17rem)]"
      >
        <Image src="/images/planet-3.jpg" alt="" width={1800} height={1200} priority sizes="(min-width: 1280px) 100vw, 220vw" className="h-auto w-full" />

        <div className="absolute inset-0 bg-secondary mix-blend-color" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent from-61% via-[color-mix(in_oklab,var(--color-primary)_60%,black)]/80 via-70% to-[color-mix(in_oklab,var(--color-primary)_15%,black)] to-88%" />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-80 bg-radial-[ellipse_55%_90%_at_50%_100%] from-secondary/50 via-secondary/15 to-transparent"
      />

      <span aria-hidden="true" className="absolute bottom-24 left-[42%] size-1 rounded-full bg-tertiary motion-safe:animate-pulse" />
      <span aria-hidden="true" className="absolute bottom-32 left-[48%] size-1 rounded-full bg-quaternary/70 motion-safe:animate-pulse" />
      <span aria-hidden="true" className="absolute bottom-20 left-[55%] size-1 rounded-full bg-tertiary motion-safe:animate-pulse" />
      <span aria-hidden="true" className="absolute bottom-28 left-[60%] size-1 rounded-full bg-quaternary/70 motion-safe:animate-pulse" />

      <Reveal className="flex flex-col items-center">
      <p className="flex items-center gap-3 text-xs font-medium tracking-[0.3em] text-tertiary uppercase md:gap-4 md:text-sm 2xl:text-base">
        <span aria-hidden="true" className="h-px w-8 bg-linear-to-r from-transparent to-tertiary md:w-12" />
        Desarrollo de software a medida
        <span aria-hidden="true" className="h-px w-8 bg-linear-to-l from-transparent to-tertiary md:w-12" />
      </p>

      <h1 className="mt-6 max-w-4xl text-4xl leading-tight font-bold tracking-tight text-[color-mix(in_oklab,var(--color-quaternary)_40%,white)] md:text-6xl xl:max-w-3xl xl:leading-[1.05] 2xl:max-w-5xl 2xl:text-[5rem]">
        El sistema{" "}
        <span className="bg-linear-to-r from-tertiary to-quaternary bg-clip-text text-transparent">
          de tu negocio,
        </span>
        <br className="hidden md:block" />{" "}
        <span className="bg-linear-to-r from-tertiary to-quaternary bg-clip-text text-transparent">
          a medida
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-base text-quaternary/80 md:text-lg xl:max-w-md xl:text-base 2xl:max-w-2xl 2xl:text-xl">
        Diseñamos y desarrollamos sitios web, aplicaciones y sistemas pensados para
        tu negocio: rápidos, claros y listos para automatizar tus procesos.
      </p>

      </Reveal>

      <div className="mt-10 flex flex-col gap-4 md:flex-row">
        <Button href="#contacto">
          Hablemos de tu proyecto
          <i className="bi bi-arrow-right" aria-hidden="true" />
        </Button>
        <Button href="#servicios" variant="secondary">
          Ver servicios
        </Button>
      </div>
    </div>
  );
};

export default Hero;
