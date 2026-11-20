import "./globals.css";
import "./brand-polish.css";
import {
  personId,
  personName,
  siteDescription,
  siteName,
  siteUrl,
  socialProfiles,
  websiteId,
} from "./site";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Febin Sebastian | Web Developer, Video Editor & Digital Creator",
    template: "%s | " + siteName,
  },
  description: siteDescription,
  applicationName: siteName,
  alternates: { canonical: "/" },
  authors: [{ name: personName, url: siteUrl }],
  creator: personName,
  publisher: personName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName,
    title: personName + " | " + siteName,
    description: siteDescription,
    url: "/",
    images: [
      {
        url: "/images/febin-hero.png",
        alt: "Portrait of Febin Sebastian",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: personName + " | " + siteName,
    description: siteDescription,
    images: ["/images/febin-hero.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: personName,
        alternateName: "Febin",
        url: siteUrl,
        image: siteUrl + "/images/febin-hero.png",
        description: siteDescription,
        jobTitle: "Student, Web Developer, Video Editor, and Digital Creator",
        knowsAbout: [
          "Web development",
          "Programming",
          "Video editing",
          "Digital content creation",
          "Creative technology",
        ],
        sameAs: socialProfiles,
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: siteName,
        description: siteDescription,
        publisher: { "@id": personId },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
