import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
  children: ReactNode;
};

const variants = {
  primary:
    "bg-linear-to-b from-[color-mix(in_oklab,var(--color-quaternary)_40%,white)] to-quaternary text-primary shadow-[0_0_30px_-6px_var(--color-tertiary)] hover:shadow-[0_0_40px_-4px_var(--color-tertiary)]",
  secondary:
    "border border-tertiary/40 bg-primary/40 text-quaternary hover:border-tertiary hover:bg-secondary/30",
};

const Button = ({ href, variant = "primary", className = "", children }: ButtonProps) => {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-medium transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary motion-safe:hover:-translate-y-0.5 ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
};

export default Button;
