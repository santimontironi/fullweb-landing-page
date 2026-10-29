# Especificaciones del proyecto

## Stack técnico

| Tecnología | Uso |
| --- | --- |
| **Next.js** (App Router) | Framework principal del sitio. |
| **React** | Librería de UI. |
| **TypeScript** | Tipado de todo el código. |
| **Tailwind CSS** | Estilos. |
| **Server Actions** (Next.js) | Procesar el envío del formulario de contacto (petición POST) del lado del servidor. |
| **Nodemailer** | Enviar por email al correo de FullWeb las consultas del formulario. |
| **Zod** | Definir y validar el esquema del formulario de contacto. |
| **React Hook Form** | Manejar el estado y la validación del formulario en el cliente. |

> Dependencias a instalar: `nodemailer`, `@types/nodemailer`, `zod`, `react-hook-form`, `@hookform/resolvers` (para conectar Zod con React Hook Form) y `server-only` (para impedir que código del servidor se importe en el cliente).

## Identidad visual

### Paleta de colores

| Rol | Color | Token |
| --- | --- | --- |
| Primario | `#16587B` | `--color-primary` |
| Secundario (A) | `#84B3CE` | `--color-secondary` |
| Secundario (B) | `#F5EEDD` | `--color-cream` |

* El secundario está formado por dos colores (`#84B3CE` y `#F5EEDD`) que se usan juntos y en proporción.
* No se usan otros colores; solo variaciones (opacidad, tonos más claros u oscuros) de estos tres.
* Los colores se definen como tokens en `app/globals.css` (`@theme`) y se usan siempre mediante esos tokens.

### Tipografía

* Fuente principal: **Libre Baskerville** (Google Fonts), cargada con `next/font/google` en `app/layout.tsx`.
  * Fuente variable: pesos de 400 a 700, estilos normal e itálica, subsets `latin` y `latin-ext`.
  * Se expone como la variable CSS `--font-libre-baskerville`.
* En `app/globals.css` se conecta a Tailwind como `--font-serif`, por lo que se usa con la clase `font-serif`.
* Se aplica por defecto a todo el sitio desde el `<body>`.

## Estructura de carpetas

```
app/
  layout.tsx          ← layout raíz: Navbar + Footer
  page.tsx            ← arma la landing con cada sección y su id
  globals.css
actions/
  contact.ts          ← Server Action: valida con Zod y envía con Nodemailer
components/
  layout/             ← componentes que envuelven la página
    Navbar.tsx
    Footer.tsx
  sections/           ← un componente por sección de la landing
    Hero.tsx          ← Inicio
    WhyUs.tsx         ← ¿Por qué elegir a FullWeb?
    Services.tsx      ← Servicios
    Contact.tsx       ← Contacto
  ui/                 ← componentes reutilizables
    Button.tsx
    Input.tsx
    Textarea.tsx
    ContactForm.tsx
schemas/
  contact.schema.ts   ← schema de Zod del formulario + tipo inferido
types/
  index.ts            ← tipos compartidos (props de componentes, ActionResult, etc.)
utils/
  mailer.ts           ← transporter de Nodemailer (solo servidor)
```

### Convenciones de la estructura

* **`components/layout`** contiene solo lo que envuelve a la página (Navbar, Footer), no las secciones.
* **`components/sections`** contiene un componente por cada sección de la landing.
* **`app/page.tsx`** envuelve cada sección en un `<section>` con su `id`, para que funcione la navegación por anclas:

  ```tsx
  <section id="inicio"><Hero /></section>
  <section id="por-que-elegirnos"><WhyUs /></section>
  <section id="servicios"><Services /></section>
  <section id="contacto"><Contact /></section>
  ```

  Por eso los componentes de sección **no** renderizan su propio `<section>` (para evitar secciones anidadas).
* **Tipos del formulario:** se infieren del schema de Zod (`type ContactFormData = z.infer<typeof contactSchema>`) y se exportan desde `schemas/contact.schema.ts`; no se duplican en `types/`.
* **`utils/mailer.ts`** usa credenciales SMTP, por lo que debe importar `"server-only"` para que nunca pueda incluirse en código del cliente.

## Estructura de la landing

La landing es una página única (`/`) con navegación hacia las siguientes secciones, en este orden:

1. **Inicio**
2. **¿Por qué elegir a FullWeb?**
3. **Servicios**
4. **Contacto**

### Navegación

* Barra de navegación con enlaces a cada sección (anclas, por ejemplo `#inicio`, `#por-que-elegirnos`, `#servicios`, `#contacto`).
* Al hacer clic en un enlace, la página se desplaza hasta la sección correspondiente.
* La navegación debe adaptarse a dispositivos móviles (menú responsive).

### 1. Inicio

* Sección principal (hero) con el nombre/marca **FullWeb**.
* Un título y un subtítulo que expliquen brevemente qué hace FullWeb.
* Un botón de llamada a la acción (CTA) que lleve a la sección **Contacto**.

### 2. ¿Por qué elegir a FullWeb?

* Presenta la propuesta de valor de FullWeb.
* Muestra los diferenciales o beneficios de trabajar con FullWeb (por ejemplo, en tarjetas o ítems con ícono, título y descripción).

### 3. Servicios

* Lista los servicios de desarrollo de software que ofrece FullWeb.
* Cada servicio tiene un título y una descripción breve.

### 4. Contacto

* Formulario de contacto para que el visitante envíe una consulta.
* Al enviarse, la consulta llega por email al correo de FullWeb.

## Formulario de contacto

### Campos

| Campo | Tipo | Obligatorio | Validación |
| --- | --- | --- | --- |
| Nombre | texto | Sí | Mínimo 2 caracteres. |
| Apellido | texto | Sí | Mínimo 2 caracteres. |
| Email | email | Sí | Formato de email válido. |
| Mensaje | textarea | Sí | Mínimo 10 caracteres. |

### Validación

* El esquema de validación se define **una sola vez con Zod** y se reutiliza:
  * En el **cliente**, mediante React Hook Form + `zodResolver`.
  * En el **servidor**, dentro de la Server Action, antes de enviar el email (nunca se confía solo en la validación del cliente).
* Los mensajes de error se muestran **en español**, debajo de cada campo.

### Flujo de envío

1. El usuario completa el formulario.
2. React Hook Form valida los datos en el cliente con el esquema de Zod.
3. Si los datos son válidos, se llama a la **Server Action** (petición POST).
4. La Server Action vuelve a validar los datos con Zod.
5. Si son válidos, envía el email con **Nodemailer** al correo de FullWeb.
6. La Server Action devuelve un resultado (éxito o error) al cliente.

### Comportamiento esperado

* Mientras se envía, el botón queda deshabilitado y muestra un estado de carga (por ejemplo, "Enviando...").
* Si el envío es exitoso, se muestra un mensaje de confirmación y se limpia el formulario.
* Si ocurre un error (validación en el servidor o fallo al enviar el email), se muestra un mensaje de error claro al usuario.

### Email recibido

El email que llega a FullWeb debe incluir:

* Asunto que identifique que es una consulta desde la web (por ejemplo, "Nueva consulta desde FullWeb - {nombre} {apellido}").
* Nombre, apellido, email y mensaje del visitante.
* El campo **reply-to** configurado con el email del visitante, para poder responderle directamente.

### Variables de entorno

La configuración de Nodemailer se toma de variables de entorno (archivo `.env.local`, que no se sube al repositorio):

```env
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
CONTACT_EMAIL=   # correo de FullWeb que recibe las consultas
```

## Criterios de aceptación

* La landing muestra las cuatro secciones en el orden indicado y la navegación lleva a cada una.
* El sitio es responsive (móvil, tablet y escritorio).
* El formulario no se puede enviar con datos inválidos y muestra los errores correspondientes.
* Una consulta válida llega al correo de FullWeb con todos los datos ingresados.
* Las credenciales SMTP nunca se exponen en el cliente.
