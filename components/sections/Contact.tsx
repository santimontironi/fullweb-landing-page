import ContactForm from "@/components/ui/ContactForm";
import ContactItem from "@/components/ui/ContactItem";
import Reveal from "@/components/ui/Reveal";

const headingClass =
  "text-lg font-semibold text-quaternary underline decoration-tertiary/60 decoration-2 underline-offset-8";

const Contact = () => {
  return (
    <div className="relative isolate overflow-hidden bg-[color-mix(in_oklab,var(--color-primary)_15%,black)] px-5 py-24 md:px-8 md:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-96 bg-radial-[ellipse_60%_80%_at_50%_0%] from-secondary/45 via-secondary/10 to-transparent"
      />

      <h2 className="mx-auto max-w-3xl text-center text-4xl leading-tight font-bold tracking-tight text-[color-mix(in_oklab,var(--color-quaternary)_40%,white)] md:text-6xl">
        Hablemos de{" "}
        <span className="bg-linear-to-r from-tertiary to-quaternary bg-clip-text text-transparent">
          tu proyecto.
        </span>
        <br />
        Pero primero, vos.
      </h2>

      <div className="mx-auto mt-16 grid max-w-6xl gap-14 lg:grid-cols-[2fr_1fr] lg:gap-20">
        <Reveal>
          <ContactForm />
        </Reveal>

        <div className="flex flex-col gap-12 lg:pt-7">
          <div>
            <h3 className={headingClass}>Contactanos</h3>
            <div className="mt-6 flex flex-col gap-4">
              <ContactItem icon="bi-envelope" label="fullwebcontacto@gmail.com" href="mailto:fullwebcontacto@gmail.com" />
              <ContactItem icon="bi-whatsapp" label="+54 9 341 645-9760" href="https://wa.me/5493416459760" external />
            </div>
          </div>

          <div>
            <h3 className={headingClass}>Ubicación</h3>
            <div className="mt-6">
              <ContactItem icon="bi-geo-alt" label="Provincia de Santa Fe, Argentina" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
