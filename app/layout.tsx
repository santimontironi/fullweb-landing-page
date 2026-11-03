import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  title: "FullWeb - Desarrollo de Software",
  description:
    "Creamos sitios web, aplicaciones y sistemas a medida para pymes, emprendedores y profesionales de Santa Fe y toda Argentina. Pedí tu presupuesto.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: "FullWeb",
    title: "FullWeb | Sistemas a medida para tu negocio",
    description: "Sitios web, aplicaciones y sistemas a medida. Pedí tu presupuesto.",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} h-full scroll-smooth scroll-pt-28 antialiased motion-reduce:scroll-auto`}
    >
      <body className="min-h-full flex flex-col bg-quaternary font-sans text-primary">
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
