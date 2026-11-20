import { siteName } from "../site";

const description = "Thank you for supporting FEBIVERSE and helping Febin Sebastian keep learning, creating, and building.";

export const metadata = {
  title: "Thank You",
  description,
  alternates: { canonical: "/thank-you" },
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    title: "Thank You | " + siteName,
    description,
    url: "/thank-you",
  },
};

function HeartIcon() {
  return <svg className="thank-you-heart" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.2 4.4 12.9A5.1 5.1 0 0 1 11.6 5.7L12 6.1l.4-.4a5.1 5.1 0 0 1 7.2 7.2L12 20.2Z" /></svg>;
}

export default function ThankYouPage() {
  return (
    <main className="thank-you-page">
      <div className="grain" aria-hidden="true" />
      <header className="thank-you-header"><a className="brand" href="/">FEBIVERSE<span>.</span></a></header>
      <section className="thank-you-content" aria-labelledby="thank-you-heading">
        <p className="section-label"><span>[ SUPPORT ]</span>THANK YOU</p>
        <h1 id="thank-you-heading">Thank you for supporting <em>FEBIVERSE.</em></h1>
        <p className="thank-you-message">Your support means a lot. It helps me keep learning, creating, experimenting, and turning ideas into reality.</p>
        <p className="thank-you-closing">Let&apos;s grow together.<HeartIcon /></p>
        <a className="button-fill" href="/">BACK TO FEBIVERSE<svg className="thank-you-arrow" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M6 3h7v7" /></svg></a>
      </section>
    </main>
  );
}
