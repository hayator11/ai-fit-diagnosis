import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PROJECT_NAME, PROJECT_TAGLINE, SITE_URL } from "@/lib/project";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${PROJECT_NAME} | ${PROJECT_TAGLINE}`,
    template: `%s | ${PROJECT_NAME}`
  },
  description: PROJECT_TAGLINE,
  applicationName: PROJECT_NAME,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: PROJECT_NAME,
    description: PROJECT_TAGLINE,
    url: SITE_URL,
    siteName: PROJECT_NAME,
    locale: "ja_JP",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: PROJECT_NAME,
    description: PROJECT_TAGLINE
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: PROJECT_NAME,
    url: SITE_URL,
    description: PROJECT_TAGLINE,
    inLanguage: "ja"
  };

  return (
    <html lang="ja">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
