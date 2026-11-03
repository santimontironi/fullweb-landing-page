"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactCredentials } from "@/schemas/contact.schema";
import { sendContact } from "@/actions/contact";
import type { ActionResult } from "@/types";

const labelClass = "text-sm text-quaternary/70";

const fieldClass =
  "rounded-xl border border-tertiary/15 bg-primary/30 px-4 py-3.5 text-quaternary transition placeholder:text-quaternary/35 hover:border-tertiary/30 focus:border-tertiary focus:bg-primary/50 focus:outline-none aria-invalid:border-tertiary";

const errorClass = "flex items-center gap-1.5 text-sm text-tertiary";

const ContactForm = () => {
  const [result, setResult] = useState<ActionResult | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactCredentials>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactCredentials) => {
    const res = await sendContact(data);
    setResult(res);
    if (res.success) reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-6 md:grid-cols-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className={labelClass}>Hola, mi nombre es</label>
        <input
          id="name"
          type="text"
          placeholder="Nombre"
          autoComplete="given-name"
          aria-invalid={!!errors.name}
          aria-describedby="name-error"
          className={fieldClass}
          {...register("name")}
        />
        {errors.name && (
          <p id="name-error" className={errorClass}>
            <i className="bi bi-exclamation-circle" aria-hidden="true" /> {errors.name.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="surname" className={labelClass}>Mi apellido es</label>
        <input
          id="surname"
          type="text"
          placeholder="Apellido"
          autoComplete="family-name"
          aria-invalid={!!errors.surname}
          aria-describedby="surname-error"
          className={fieldClass}
          {...register("surname")}
        />
        {errors.surname && (
          <p id="surname-error" className={errorClass}>
            <i className="bi bi-exclamation-circle" aria-hidden="true" /> {errors.surname.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2 md:col-span-2">
        <label htmlFor="email" className={labelClass}>Podés escribirme a</label>
        <input
          id="email"
          type="email"
          placeholder="tu@email.com"
          autoComplete="email"
          aria-invalid={!!errors.email}
          aria-describedby="email-error"
          className={fieldClass}
          {...register("email")}
        />
        {errors.email && (
          <p id="email-error" className={errorClass}>
            <i className="bi bi-exclamation-circle" aria-hidden="true" /> {errors.email.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2 md:col-span-2">
        <label htmlFor="message" className={labelClass}>Contanos sobre tu proyecto</label>
        <textarea
          id="message"
          rows={6}
          placeholder="¿Qué necesitás? Un sitio web, una app, un sistema…"
          aria-invalid={!!errors.message}
          aria-describedby="message-error"
          className={`resize-y ${fieldClass}`}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className={errorClass}>
            <i className="bi bi-exclamation-circle" aria-hidden="true" /> {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="cursor-pointer inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-b from-[color-mix(in_oklab,var(--color-quaternary)_40%,white)] to-quaternary px-6 py-3 font-medium text-primary shadow-[0_0_30px_-6px_var(--color-tertiary)] transition duration-300 hover:shadow-[0_0_40px_-4px_var(--color-tertiary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary motion-safe:hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 md:col-span-2"
      >
        {isSubmitting ? "Enviando..." : "Enviar consulta"}
      </button>

      {result && (
        <p
          role="status"
          className={`flex items-center gap-2 text-sm md:col-span-2 ${result.success ? "text-quaternary" : "text-tertiary"}`}
        >
          <i className={`bi ${result.success ? "bi-check-circle" : "bi-x-circle"}`} aria-hidden="true" />
          {result.message}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
