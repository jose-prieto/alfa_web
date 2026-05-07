import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  axes: ["opsz", "wdth"],
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Alfa Publicidad y Mantenimiento C.A. — Publicidad exterior en Caracas",
  description:
    "Fábrica integral de publicidad exterior en Caracas: vallas, pantallas LED, gigantografías, mobiliario urbano, mantenimiento e instalación. +20 años haciendo marcas imposibles de ignorar.",
  metadataBase: new URL("https://alfapublicidad.com"),
  openGraph: {
    title: "Alfa Publicidad y Mantenimiento C.A.",
    description:
      "Donde la ciudad mira, está tu marca. Vallas, LED, gigantografías y mobiliario urbano en Caracas.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${bricolage.variable} ${geist.variable} ${geistMono.variable} ${instrument.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
