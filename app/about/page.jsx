import { personId, personName, siteDescription, siteUrl, socialProfiles, websiteId } from "../site";

function SocialIcon({ type }) {
  if (type === "linkedin") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="2" /><path d="M8 10v6M8 7.4v.1M11.5 16v-3.3c0-1.8 1.1-3 2.9-3s2.9 1.2 2.9 3V16" /></svg>;
  if (type === "github") return <svg className="github-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.9a9.1 9.1 0 0 0-2.88 17.73c.46.08.62-.2.62-.44v-1.72c-2.53.55-3.06-1.07-3.06-1.07-.42-1.06-1.02-1.34-1.02-1.34-.83-.57.06-.56.06-.56.92.07 1.4.94 1.4.94.81 1.39 2.14.99 2.66.76.08-.59.32-.99.57-1.22-2.02-.23-4.14-1.01-4.14-4.49 0-.99.35-1.8.93-2.44-.09-.23-.4-1.15.09-2.4 0 0 .76-.24 2.5.93A8.7 8.7 0 0 1 12 7.37c.77 0 1.54.1 2.27.31 1.73-1.17 2.49-.93 2.49-.93.49 1.25.18 2.17.09 2.4.58.64.93 1.45.93 2.44 0 3.49-2.12 4.26-4.14 4.49.32.28.61.82.61 1.65v2.45c0 .24.16.52.62.44A9.1 9.1 0 0 0 12 2.9Z" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="4" /><circle cx="12" cy="12" r="3.4" /><circle cx="17.3" cy="6.8" r=".7" fill="currentColor" stroke="none" /></svg>;
}

export const metadata = {
  title: "About " + personName,
  description: siteDescription,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About " + personName,
    description: siteDescription,
    url: "/about",
  },
};

export default function AboutPage() {
  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": siteUrl + "/about/#webpage",
    url: siteUrl + "/about",
    name: "About Febin Sebastian",
    description: siteDescription,
    isPartOf: { "@id": websiteId },
    mainEntity: { "@id": personId },
  };

  return (
    <main className="about-page">
      <header className="about-page__header">
        <a className="brand" href="/">FEBIVERSE<span>.</span></a>
        <a className="about-page__back" href="/">BACK TO HOME</a>
      </header>
      <article className="about-page__content">
        <p className="section-label"><span>[ 01 ]</span>ABOUT FEBIN SEBASTIAN</p>
        <h1>A little <em>about me.</em></h1>
        <div className="about-page__body">
          <p>Hey, I&apos;m {personName}.</p>
          <p>I&apos;m a student and a curious mind who enjoys figuring out how things work. I explore technology, experiment with creative ideas, and turn things I imagine into something real.</p>
          <p>From building websites and writing code to editing videos and creating digital content, I&apos;m always learning, trying new things, and getting better with every project.</p>
          <p>FEBIVERSE is my corner of the internet, a place to share what I create, what I learn, and what I&apos;m working on.</p>
        </div>
        <section className="about-page__socials" aria-labelledby="about-socials-heading">
          <p id="about-socials-heading">FIND FEBIN ONLINE</p>
          <div>
            <a href={socialProfiles[0]} target="_blank" rel="noopener noreferrer" aria-label="Visit Febin Sebastian on LinkedIn"><SocialIcon type="linkedin" /><span>LINKEDIN</span></a>
            <a href={socialProfiles[1]} target="_blank" rel="noopener noreferrer" aria-label="Visit Febin Sebastian on Instagram"><SocialIcon type="instagram" /><span>INSTAGRAM</span></a>
            <a href={socialProfiles[2]} target="_blank" rel="noopener noreferrer" aria-label="Visit Febin Sebastian on GitHub"><SocialIcon type="github" /><span>GITHUB</span></a>
          </div>
        </section>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema).replace(/</g, "\\u003c") }}
      />
    </main>
  );
}
