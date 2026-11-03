type WhyUsCardProps = {
  number: string;
  title: string;
  description: string;
  icon: string;
  background: string;
  dark?: boolean;
};

const WhyUsCard = ({ number, title, description, icon, background, dark = false }: WhyUsCardProps) => {
  return (
    <article
      className={`group flex flex-col px-6 pt-10 pb-8 [clip-path:polygon(1.5rem_0,100%_0,100%_100%,0_100%,0_1.5rem)] transition duration-300 motion-safe:hover:-translate-y-2 md:px-8 xl:min-h-112 xl:px-6 2xl:min-h-128 2xl:px-8 ${background}`}
    >
      <span
        aria-hidden="true"
        className={`block h-[0.6em] overflow-hidden text-7xl transition-[height] duration-300 group-hover:h-[1em] leading-none font-bold tracking-tight 2xl:text-8xl ${dark ? "text-quaternary" : "text-primary"}`}
      >
        {number}
      </span>

      <h3
        className={`mt-4 border-b pb-4 text-lg leading-snug font-semibold ${dark ? "border-quaternary/20 text-[color-mix(in_oklab,var(--color-quaternary)_40%,white)]" : "border-primary/20 text-primary"}`}
      >
        {title}
      </h3>

      <p className={`mt-5 text-sm leading-relaxed ${dark ? "text-quaternary/80" : "text-primary/75"}`}>{description}</p>

      <i
        className={`bi ${icon} mt-10 text-3xl xl:mt-auto xl:pt-10 ${dark ? "text-quaternary" : "text-primary"}`}
        aria-hidden="true"
      />
    </article>
  );
};

export default WhyUsCard;
