import Image from "next/image";

const headingClass = "text-sm font-semibold tracking-[0.2em] text-primary uppercase";

const linkClass =
  "rounded-md text-sm text-primary/70 transition hover:text-secondary focus-visible:outline-2 focus-visible:outline-tertiary";

const Footer = () => {
  return (
    <footer className="bg-[color-mix(in_oklab,var(--color-quaternary)_40%,white)] bg-linear-to-b from-transparent from-30% to-tertiary/50 px-5 pt-20 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 xl:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
        <div>
          <a href="/#inicio" className="inline-flex items-center gap-3 text-lg font-semibold tracking-tight text-primary">
            <Image src="/images/logo.webp" alt="" width={467} height={460} className="h-10 w-auto" />
            FullWeb
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary/70">
            Desarrollo de software a medida para que tu negocio crezca en la web.
          </p>
        </div>

        <nav aria-label="Pie de página">
          <h2 className={headingClass}>Navegación</h2>
          <div className="mt-5 flex flex-col items-start gap-3">
            <a href="/#inicio" className={linkClass}>Inicio</a>
            <a href="/#por-que-elegirnos" className={linkClass}>¿Por qué elegirnos?</a>
            <a href="/#servicios" className={linkClass}>Servicios</a>
            <a href="/#contacto" className={linkClass}>Contacto</a>
          </div>
        </nav>

        <div>
          <h2 className={headingClass}>Servicios</h2>
          <div className="mt-5 flex flex-col gap-3 text-sm text-primary/70">
            <p>Desarrollo web</p>
            <p>Aplicaciones móviles</p>
            <p>Automatizaciones con IA</p>
            <p>Sistemas a medida</p>
            <p>Mantenimiento y soporte</p>
          </div>
        </div>

        <div>
          <h2 className={headingClass}>Contacto</h2>
          <div className="mt-5 flex flex-col items-start gap-3">
            <a href="mailto:fullwebcontacto@gmail.com" className={`${linkClass} inline-flex items-center gap-3 break-all`}>
              <i className="bi bi-envelope text-secondary" aria-hidden="true" />
              fullwebcontacto@gmail.com
            </a>
            <a href="https://wa.me/5493416459760" target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-3`}>
              <i className="bi bi-whatsapp text-secondary" aria-hidden="true" />
              +54 9 341 645-9760
            </a>
            <p className="inline-flex items-center gap-3 text-sm text-primary/70">
              <i className="bi bi-geo-alt text-secondary" aria-hidden="true" />
              Provincia de Santa Fe, Argentina
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl border-t border-primary/15 py-6 text-center text-xs text-primary/60">
        © 2026 FullWeb. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
