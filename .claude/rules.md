# Reglas del proyecto

Estas reglas son obligatorias. Si alguna entra en conflicto con lo que parezca más práctico en un caso puntual, se respeta la regla.

## 1. Responsive: mobile first con breakpoints `md`, `xl` y `2xl`

* Los estilos se escriben **mobile first**: las clases sin prefijo son para móvil, y los breakpoints agregan o modifican estilos hacia pantallas más grandes.
* Los **únicos** breakpoints permitidos son:

  | Breakpoint | Ancho mínimo |
  | --- | --- |
  | (sin prefijo) | móvil |
  | `md:` | 768px |
  | `xl:` | 1280px |
  | `2xl:` | 1536px |

  (En Tailwind el breakpoint "xxl" se escribe `2xl:`).
* **Prohibido** usar cualquier otro breakpoint: nada de `sm:`, `lg:`, `max-*:`, breakpoints arbitrarios (`min-[...]:`) ni breakpoints personalizados en la configuración.
* **Prohibido** escribir media queries a mano en CSS (`@media`); todo el responsive se resuelve con las clases de Tailwind.

```tsx
// ✅ Correcto
<h1 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl">

// ❌ Incorrecto
<h1 className="text-3xl sm:text-4xl lg:text-6xl">
```

## 2. Sin arrays de datos mapeados: todo por props

* **No** se definen datos en arrays (u objetos) para luego recorrerlos con `.map()` en el componente.
* Cada elemento se renderiza **explícitamente**, instanciando el componente hijo las veces que sea necesario y pasándole sus datos **por props**.

```tsx
// ✅ Correcto
<ServiceCard
  title="Desarrollo web"
  description="Sitios y aplicaciones web a medida."
/>
<ServiceCard
  title="E-commerce"
  description="Tiendas online listas para vender."
/>

// ❌ Incorrecto
const services = [
  { title: "Desarrollo web", description: "..." },
  { title: "E-commerce", description: "..." },
];

{services.map((service) => (
  <ServiceCard key={service.title} {...service} />
))}
```

* Los tipos de las props de cada componente se definen con TypeScript (en el propio componente o en `types/` si se comparten).

## 3. Estructura y arquitectura

* Se respeta la estructura de carpetas definida en `.claude/spec.md`; no se crean carpetas nuevas en la raíz sin actualizar antes el spec.
* Las secciones de la landing van en `components/sections`, los componentes que envuelven la página en `components/layout` y los componentes reutilizables en `components/ui`.
* Los componentes de sección no renderizan su propio `<section>`; el `<section id="...">` se pone en `app/page.tsx`.
* Los componentes son **Server Components** por defecto. Solo se usa `"use client"` cuando el componente lo necesita (estado, eventos, hooks), como el formulario de contacto.

## 4. Formulario y servidor

* El schema de Zod del formulario se define una sola vez en `schemas/` y se usa tanto en el cliente (React Hook Form + `zodResolver`) como en la Server Action.
* La Server Action **siempre** vuelve a validar los datos con Zod antes de enviar el email.
* Todo código que use credenciales o variables de entorno sensibles (por ejemplo `utils/mailer.ts`) importa `"server-only"`.
* Las credenciales nunca se escriben en el código: se leen de variables de entorno (`.env.local`, que no se sube al repositorio).

## 5. Estilos y código

* Los estilos se escriben **solo con Tailwind CSS**. No se crean archivos CSS adicionales salvo `app/globals.css`.
* Todo el código se escribe en **TypeScript**; no se usa `any`.
* Los nombres de componentes y archivos de componentes van en `PascalCase` (`ServiceCard.tsx`).
* Los textos visibles del sitio están en **español**.
