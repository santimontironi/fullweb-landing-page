type ContactItemProps = {
  icon: string;
  label: string;
  href?: string;
  external?: boolean;
};

const ContactItem = ({ icon, label, href, external = false }: ContactItemProps) => {
  const content = (
    <>
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-tertiary/20 bg-secondary/20 text-lg text-tertiary transition group-hover:border-tertiary group-hover:text-quaternary">
        <i className={`bi ${icon}`} aria-hidden="true" />
      </span>
      {label}
    </>
  );

  const classes = "group flex items-center gap-4 text-sm break-all text-quaternary/80";

  if (!href) {
    return <p className={classes}>{content}</p>;
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${classes} transition hover:text-quaternary`}
    >
      {content}
    </a>
  );
};

export default ContactItem;
