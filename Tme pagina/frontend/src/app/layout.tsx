import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Technology Moon Entertainment",
  description:
    "Empresa internacional de tecnología, IA, automatización, software y comercio electrónico.",
  metadataBase: new URL("https://www.technologymoon.com"),
  openGraph: {
    title: "Technology Moon Entertainment",
    description:
      "Soluciones tecnológicas premium para empresas, videojuegos, comercio electrónico e inteligencia artificial.",
    siteName: "TME",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-space text-white">{children}</body>
    </html>
  );
}
