import type { Metadata } from "next";
import Script from "next/script";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ContactHashRedirect } from "@/components/ContactHashRedirect";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:9200"),
  title: "Eleva — Estratégia, design e tecnologia",
  description: "A Eleva cria marcas, experiências digitais e sistemas para empresas que querem avançar.",
  openGraph: {
    title: "Eleva — Estratégia, design e tecnologia",
    description: "A Eleva cria marcas, experiências digitais e sistemas para empresas que querem avançar.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-0MF75P25C5" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0MF75P25C5');
          `}
        </Script>
        <SmoothScroll />
        <ContactHashRedirect />
        {children}
      </body>
    </html>
  );
}
