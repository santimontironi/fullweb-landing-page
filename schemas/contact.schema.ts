import { z } from "zod"

export const contactSchema = z.object({
  name: z.string().trim().min(1, "El nombre es obligatorio"),
  surname: z.string().trim().min(1, "El apellido es obligatorio"),
  email: z.email("El correo electrónico no es válido"),
  message: z.string().trim().min(1, "El mensaje es obligatorio"),
})

export type ContactCredentials = z.infer<typeof contactSchema>