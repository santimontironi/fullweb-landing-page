type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
};

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <article className="group relative isolate flex flex-col items-center overflow-hidden rounded-2xl border border-quaternary/60 bg-[color-mix(in_oklab,var(--color-quaternary)_25%,white)] px-6 pt-8 pb-10 text-center shadow-[0_20px_40px_-20px_var(--color-primary)] transition duration-300 hover:shadow-[0_0_40px_-6px_var(--color-tertiary)] motion-safe:hover:-translate-y-2">
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-b from-transparent from-30% to-tertiary/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <span className="flex size-16 items-center justify-center rounded-full bg-quaternary text-3xl text-secondary transition duration-300 group-hover:bg-secondary group-hover:text-quaternary">
        <i className={`bi ${icon}`} aria-hidden="true" />
      </span>

      <h3 className="mt-6 text-lg leading-snug font-semibold text-primary">{title}</h3>

      <p className="mt-3 text-sm leading-relaxed text-primary/70">{description}</p>
    </article>
  );
};

export default ServiceCard;
