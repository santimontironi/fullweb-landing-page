"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

const linkClass =
  "rounded-md px-1 py-1 text-quaternary/80 transition hover:text-quaternary focus-visible:outline-2 focus-visible:outline-tertiary";

const Header = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-tertiary/10 bg-[color-mix(in_oklab,var(--color-primary)_45%,black)]/70 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/#inicio" className="flex items-center gap-3 text-lg font-semibold tracking-tight text-quaternary">
          <Image src="/images/logo.webp" alt="" width={467} height={460} priority className="h-10 w-auto" />
          FullWeb
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-8 text-sm md:flex">
          <Link href="/#inicio" className={linkClass}>Inicio</Link>
          <Link href="/#por-que-elegirnos" className={linkClass}>¿Por qué elegirnos?</Link>
          <Link href="/#servicios" className={linkClass}>Servicios</Link>
          <Link href="/#contacto" className={linkClass}>Contacto</Link>
        </nav>

        <div className="hidden md:block">
          <Button href="/#contacto" className="px-5 py-2 text-sm">
            Pedí tu presupuesto
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="rounded-lg p-2 text-2xl text-quaternary md:hidden"
        >
          <i className={`bi ${open ? "bi-x-lg" : "bi-list"}`} aria-hidden="true" />
        </button>
      </div>

      {open && (
        <nav id="menu-movil" aria-label="Principal" className="flex flex-col gap-4 border-t border-tertiary/10 px-5 py-6 md:hidden">
          <Link href="/#inicio" onClick={close} className={linkClass}>Inicio</Link>
          <Link href="/#por-que-elegirnos" onClick={close} className={linkClass}>¿Por qué elegirnos?</Link>
          <Link href="/#servicios" onClick={close} className={linkClass}>Servicios</Link>
          <Link href="/#contacto" onClick={close} className={linkClass}>Contacto</Link>
          <Button href="/#contacto" className="mt-2">Pedí tu presupuesto</Button>
        </nav>
      )}
    </header>
  );
};

export default Header;
