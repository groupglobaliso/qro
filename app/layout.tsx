import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://qrocert.pe"),

  title: {
    default: "QRO Cert | Certificación ISO Internacional",
    template: "%s | QRO Cert",
  },

  description:
    "Organismo certificador especializado en sistemas de gestión ISO 9001, ISO 14001, ISO 45001, ISO 27001 e ISO 37001.",

  keywords: [
    "ISO 9001",
    "ISO 14001",
    "ISO 45001",
    "ISO 27001",
    "ISO 37001",
    "Certificación ISO Perú",
    "Auditoría ISO",
    "Certificadora ISO",
  ],

  openGraph: {
    title: "QRO Cert",
    description:
      "Certificación ISO con reconocimiento internacional.",
    url: "https://qrocert.pe",
    siteName: "QRO Cert",
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
