"use server";

import { contactSchema } from "@/schemas/contact.schema";
import { transporter } from "@/utils/mailer";
import type { ActionResult } from "@/types";

export async function sendContact(data: unknown): Promise<ActionResult> {
  const parsed = contactSchema.safeParse(data);

  if (!parsed.success) {
    return { success: false, message: "Revisá los datos del formulario." };
  }

  const { name, surname, email, message } = parsed.data;

  try {
    await transporter.sendMail({
      from: `"FullWeb Web" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Nueva consulta desde FullWeb - ${name} ${surname}`,
      text: `Nombre: ${name} ${surname}\nEmail: ${email}\n\nMensaje:\n${message}`,
    });

    return { success: true, message: "¡Gracias! Recibimos tu consulta y te responderemos pronto." };
  } catch (error) {
    console.error("Error al enviar el email de contacto:", error);
    return { success: false, message: "No pudimos enviar tu consulta. Intentá de nuevo más tarde." };
  }
}
