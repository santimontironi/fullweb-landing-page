import type { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Página no encontrada | FullWeb",
};

const NotFound = () => {
  return (
    <main className="relative isolate flex min-h-svh flex-col items-center justify-center overflow-hidden bg-[color-mix(in_oklab,var(--color-primary)_15%,black)] px-5 pt-40 pb-24 text-center">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-80 bg-radial-[ellipse_55%_90%_at_50%_100%] from-secondary/50 via-secondary/15 to-transparent"
      />

      <p className="flex items-center gap-3 text-xs font-medium tracking-[0.3em] text-tertiary uppercase md:gap-4 md:text-sm">
        <span aria-hidden="true" className="h-px w-8 bg-linear-to-r from-transparent to-tertiary md:w-12" />
        Error 404
        <span aria-hidden="true" className="h-px w-8 bg-linear-to-l from-transparent to-tertiary md:w-12" />
      </p>

      <p
        aria-hidden="true"
        className="mt-4 bg-linear-to-b from-tertiary to-quaternary/10 bg-clip-text text-[8rem] leading-none font-bold tracking-tighter text-transparent md:text-[12rem] 2xl:text-[16rem]"
      >
        404
      </p>

      <h1 className="mt-4 max-w-2xl text-3xl leading-tight font-bold tracking-tight text-[color-mix(in_oklab,var(--color-quaternary)_40%,white)] md:text-5xl">
        Esta página se perdió en el espacio
      </h1>

      <p className="mt-6 max-w-md text-base text-quaternary/80 md:text-lg">
        El link que seguiste no existe o fue movido. Volvé al inicio y seguí recorriendo FullWeb.
      </p>

      <div className="mt-10 flex flex-col gap-4 md:flex-row">
        <Button href="/">
          <i className="bi bi-house" aria-hidden="true" />
          Volver al inicio
        </Button>
        <Button href="/#contacto" variant="secondary">
          Contactanos
        </Button>
      </div>
    </main>
  );
};

export default NotFound;
