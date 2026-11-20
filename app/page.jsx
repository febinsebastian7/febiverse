"use client";

import { useEffect, useRef, useState } from "react";
import {
  buyMeACoffeeUrl,
  personId,
  personName,
  siteDescription,
  siteUrl,
  socialProfiles,
  websiteId,
} from "./site";

const services = [
  {
    icon: "code",
    title: "Web\nDevelopment",
    text: "Modern websites and web applications built with clarity, performance, and purpose.",
  },
  {
    icon: "layout",
    title: "UI & Web\nDesign",
    text: "Clean interfaces and thoughtful visual systems that feel considered on every screen.",
  },
  {
    icon: "play",
    title: "Video &\nContent",
    text: "Editing, motion, and creative storytelling for distinctive digital content.",
  },
];

const SOCIAL_LINKS = {
  linkedin: socialProfiles[0],
  instagram: socialProfiles[1],
  github: socialProfiles[2],
};

const approachSteps = [
  {
    number: "01",
    icon: "eye",
    title: "UNDERSTAND",
    text: "Understand the idea, audience, and purpose.",
  },
  {
    number: "02",
    icon: "pen",
    title: "DESIGN",
    text: "Create a clear, responsive, visually considered interface.",
  },
  {
    number: "03",
    icon: "code",
    title: "BUILD",
    text: "Develop, test, and refine the experience across devices.",
  },
];

function ArrowIcon({ className = "" }) {
  return <svg className={`icon icon-arrow ${className}`} viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M6 3h7v7" /></svg>;
}

function MailIcon() {
  return <svg className="icon icon-mail" viewBox="0 0 18 18" aria-hidden="true"><rect x="2" y="3.5" width="14" height="11" rx="1" /><path d="m2.8 4.4 6.2 5 6.2-5" /></svg>;
}

function LinkedInIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="2" /><path d="M8 10v6M8 7.4v.1M11.5 16v-3.3c0-1.8 1.1-3 2.9-3s2.9 1.2 2.9 3V16" /></svg>;
}

function InstagramIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="4" /><circle cx="12" cy="12" r="3.4" /><circle cx="17.3" cy="6.8" r=".7" fill="currentColor" stroke="none" /></svg>;
}

function GitHubIcon() {
  return <svg className="github-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.9a9.1 9.1 0 0 0-2.88 17.73c.46.08.62-.2.62-.44v-1.72c-2.53.55-3.06-1.07-3.06-1.07-.42-1.06-1.02-1.34-1.02-1.34-.83-.57.06-.56.06-.56.92.07 1.4.94 1.4.94.81 1.39 2.14.99 2.66.76.08-.59.32-.99.57-1.22-2.02-.23-4.14-1.01-4.14-4.49 0-.99.35-1.8.93-2.44-.09-.23-.4-1.15.09-2.4 0 0 .76-.24 2.5.93A8.7 8.7 0 0 1 12 7.37c.77 0 1.54.1 2.27.31 1.73-1.17 2.49-.93 2.49-.93.49 1.25.18 2.17.09 2.4.58.64.93 1.45.93 2.44 0 3.49-2.12 4.26-4.14 4.49.32.28.61.82.61 1.65v2.45c0 .24.16.52.62.44A9.1 9.1 0 0 0 12 2.9Z" /></svg>;
}

function ServiceIcon({ type }) {
  if (type === "code") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" /></svg>;
  if (type === "layout") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="1" /><path d="M3 9h18M9 9v11" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="m10 8 6 4-6 4Z" /></svg>;
}

function ApproachIcon({ type }) {
  if (type === "eye") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.3-5.5 9.5-5.5 9.5 5.5 9.5 5.5-3.3 5.5-9.5 5.5S2.5 12 2.5 12Z" /><circle cx="12" cy="12" r="2.5" /></svg>;
  if (type === "pen") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 16 8.9-8.9 3 3L7 19l-4 1 1-4Z" /><path d="m11.9 7.1 2.1-2.1a2.1 2.1 0 0 1 3 3l-2.1 2.1M4 16l4 4" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" /></svg>;
}

function SectionLabel({ number, children, className = "" }) {
  return <p className={`section-label ${className}`.trim()}><span>[ {number} ]</span>{children}</p>;
}

function HeroName({ outlined = false }) {
  return (
    <div className={`giant-name ${outlined ? "giant-name--outline" : "giant-name--solid"}`} aria-hidden="true">
      <span className="name-word name-word--first">FEBIN</span>
      <span className="name-word name-word--second">SEBASTIAN</span>
    </div>
  );
}

function FooterSocialLink({ label, href, children }) {
  if (!href) {
    return <span className="social-link social-link--placeholder" role="img" aria-label={`${label} URL needs to be added`}>{children}</span>;
  }
  return <a className="social-link" href={href} target="_blank" rel="noopener noreferrer" aria-label={`Visit Febin Sebastian on ${label}`}>{children}</a>;
}

function HeroSocialLink({ label, href, children }) {
  return <a className="hero-social-link" href={href} target="_blank" rel="noopener noreferrer" aria-label={`Visit Febin Sebastian on ${label}`}>{children}<span>{label.toUpperCase()}</span></a>;
}

function HomePageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": siteUrl + "/#webpage",
    url: siteUrl,
    name: "Febin Sebastian | Web Developer, Video Editor & Digital Creator",
    description: siteDescription,
    isPartOf: { "@id": websiteId },
    about: { "@id": personId },
    mainEntity: { "@id": personId },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />;
}

function SupportAction() {
  if (!buyMeACoffeeUrl) {
    return <span className="button-fill button-fill--disabled" aria-disabled="true">BUY ME A COFFEE</span>;
  }

  return <a className="button-fill" href={buyMeACoffeeUrl} target="_blank" rel="noopener noreferrer" aria-label="Support FEBIVERSE in a new tab">BUY ME A COFFEE <ArrowIcon /></a>;
}

export default function Home() {
  const serviceListRef = useRef(null);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = document.querySelectorAll(".reveal");
    if (!elements.length || !("IntersectionObserver" in window)) return undefined;
    let observer;
    const disableMotion = () => {
      observer?.disconnect();
      observer = undefined;
      document.documentElement.classList.remove("motion-ready");
    };
    const enableMotion = () => {
      if (reducedMotionQuery.matches) return;
      document.documentElement.classList.add("motion-ready");
      observer = new IntersectionObserver(
        (entries) => entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer?.unobserve(entry.target);
          }
        }),
        { threshold: 0.12, rootMargin: "0px 0px -24px" },
      );
      elements.forEach((element) => {
        if (!element.classList.contains("is-revealed")) observer.observe(element);
      });
    };
    const handleMotionPreference = () => {
      disableMotion();
      enableMotion();
    };

    enableMotion();
    reducedMotionQuery.addEventListener("change", handleMotionPreference);
    return () => {
      disableMotion();
      reducedMotionQuery.removeEventListener("change", handleMotionPreference);
    };
  }, []);

  useEffect(() => {
    const serviceList = serviceListRef.current;
    if (!serviceList) return undefined;

    const mobileQuery = window.matchMedia("(max-width: 700px)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let intervalId;
    let resumeId;
    let scrollEndId;
    let resizeFrame;
    let isInteracting = false;
    let currentIndex = 0;
    let dragStartX = 0;
    let dragStartScroll = 0;
    let isMouseDragging = false;
    const isEligible = () => mobileQuery.matches && !reducedMotionQuery.matches;
    const slideWidth = () => serviceList.clientWidth || 1;
    const getPhysicalIndex = () => Math.round(serviceList.scrollLeft / slideWidth());
    const setPhysicalIndex = (index, behavior = "smooth") => {
      serviceList.scrollTo({ left: slideWidth() * index, behavior });
    };

    const updateActiveSlide = () => {
      if (!isEligible()) return;
      const physicalIndex = getPhysicalIndex();
      const nextIndex = physicalIndex % services.length;
      if (nextIndex !== currentIndex) {
        currentIndex = nextIndex;
        setActiveService(nextIndex);
      }
    };
    const settleCarousel = () => {
      if (!isEligible() || isInteracting || getPhysicalIndex() !== services.length) return;
      serviceList.style.scrollSnapType = "none";
      setPhysicalIndex(0, "auto");
      currentIndex = 0;
      setActiveService(0);
      window.requestAnimationFrame(() => {
        serviceList.style.scrollSnapType = "";
      });
    };
    const syncCarousel = () => {
      updateActiveSlide();
      window.clearTimeout(scrollEndId);
      scrollEndId = window.setTimeout(settleCarousel, 140);
    };

    const advanceCarousel = () => {
      if (document.hidden || !isEligible() || isInteracting) return;
      const physicalIndex = getPhysicalIndex();
      setPhysicalIndex(physicalIndex >= services.length ? 0 : physicalIndex + 1);
    };
    const stopCarousel = () => window.clearInterval(intervalId);
    const startCarousel = () => {
      stopCarousel();
      if (!document.hidden && isEligible()) intervalId = window.setInterval(advanceCarousel, 3800);
    };
    const pauseForInteraction = () => {
      isInteracting = true;
      stopCarousel();
      window.clearTimeout(resumeId);
      window.clearTimeout(scrollEndId);
    };
    const resumeAfterInteraction = () => {
      isInteracting = false;
      syncCarousel();
      window.clearTimeout(resumeId);
      resumeId = window.setTimeout(startCarousel, 3800);
    };
    const handleVisibility = () => (document.hidden ? stopCarousel() : startCarousel());
    const handleEligibilityChange = () => {
      stopCarousel();
      window.clearTimeout(resumeId);
      window.clearTimeout(scrollEndId);
      if (isEligible()) startCarousel();
    };
    const handleResize = () => {
      window.cancelAnimationFrame(resizeFrame);
      resizeFrame = window.requestAnimationFrame(() => {
        if (isEligible()) setPhysicalIndex(getPhysicalIndex(), "auto");
      });
    };
    const handlePointerDown = (event) => {
      pauseForInteraction();
      if (event.pointerType !== "mouse" || !mobileQuery.matches) return;
      isMouseDragging = true;
      dragStartX = event.clientX;
      dragStartScroll = serviceList.scrollLeft;
      serviceList.classList.add("is-dragging");
      serviceList.setPointerCapture?.(event.pointerId);
    };
    const handlePointerMove = (event) => {
      if (!isMouseDragging) return;
      serviceList.scrollLeft = dragStartScroll - (event.clientX - dragStartX);
    };
    const endPointerInteraction = (event) => {
      if (isMouseDragging) {
        if (serviceList.hasPointerCapture?.(event.pointerId)) serviceList.releasePointerCapture?.(event.pointerId);
        serviceList.classList.remove("is-dragging");
        isMouseDragging = false;
      }
      resumeAfterInteraction();
    };
    const handleWheel = () => {
      if (!mobileQuery.matches) return;
      pauseForInteraction();
      resumeAfterInteraction();
    };
    const handleKeyboard = (event) => {
      if (!mobileQuery.matches) return;
      const physicalIndex = getPhysicalIndex();
      if (event.key === "ArrowRight") {
        event.preventDefault();
        pauseForInteraction();
        setPhysicalIndex(physicalIndex >= services.length ? 0 : physicalIndex + 1);
        resumeAfterInteraction();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        pauseForInteraction();
        setPhysicalIndex(physicalIndex <= 0 ? services.length - 1 : physicalIndex - 1);
        resumeAfterInteraction();
      } else if (event.key === "Home") {
        event.preventDefault();
        pauseForInteraction();
        setPhysicalIndex(0);
        resumeAfterInteraction();
      } else if (event.key === "End") {
        event.preventDefault();
        pauseForInteraction();
        setPhysicalIndex(services.length - 1);
        resumeAfterInteraction();
      }
    };

    serviceList.addEventListener("scroll", syncCarousel, { passive: true });
    serviceList.addEventListener("pointerdown", handlePointerDown);
    serviceList.addEventListener("pointermove", handlePointerMove);
    serviceList.addEventListener("pointerup", endPointerInteraction);
    serviceList.addEventListener("pointercancel", endPointerInteraction);
    serviceList.addEventListener("keydown", handleKeyboard);
    serviceList.addEventListener("wheel", handleWheel, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);
    mobileQuery.addEventListener("change", handleEligibilityChange);
    reducedMotionQuery.addEventListener("change", handleEligibilityChange);
    window.addEventListener("resize", handleResize, { passive: true });
    startCarousel();

    return () => {
      stopCarousel();
      window.clearTimeout(resumeId);
      window.clearTimeout(scrollEndId);
      window.cancelAnimationFrame(resizeFrame);
      serviceList.removeEventListener("scroll", syncCarousel);
      serviceList.removeEventListener("pointerdown", handlePointerDown);
      serviceList.removeEventListener("pointermove", handlePointerMove);
      serviceList.removeEventListener("pointerup", endPointerInteraction);
      serviceList.removeEventListener("pointercancel", endPointerInteraction);
      serviceList.removeEventListener("keydown", handleKeyboard);
      serviceList.removeEventListener("wheel", handleWheel);
      document.removeEventListener("visibilitychange", handleVisibility);
      mobileQuery.removeEventListener("change", handleEligibilityChange);
      reducedMotionQuery.removeEventListener("change", handleEligibilityChange);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main>
      <HomePageSchema />
      <section className="hero" id="top">
        <div className="grain" aria-hidden="true" />
        <div className="hero-glow hero-glow-left" aria-hidden="true" />
        <div className="hero-glow hero-glow-right" aria-hidden="true" />
        <nav className="nav container nav-enter" aria-label="Main navigation">
          <a className="brand" href="#top">FEBIVERSE<span>.</span></a>
          <div className="nav-links"><a href="#about">ABOUT</a><a href="#work">WORK</a><a href="#services">SERVICES</a><a href="#contact">CONTACT</a></div>
          <a className="nav-contact" href="#contact">LET&apos;S TALK <ArrowIcon /></a>
        </nav>

        <div className="hero-inner container">
          <div className="hero-copy">
            <p className="eyebrow hero-copy-item hero-copy-item--eyebrow">[ FULL-STACK DEVELOPER&nbsp; · &nbsp;CREATIVE TECHNOLOGIST ]</p>
            <h1 className="hero-copy-item hero-headline"><span>I build digital</span><span>experiences that</span><span>work <em>as good</em></span><span><em>as they look.</em></span></h1>
            <p className="hero-description hero-copy-item hero-copy-item--description">I design and build modern websites that combine thoughtful visuals, useful functionality, and clean development.</p>
            <div className="hero-actions hero-copy-item hero-copy-item--action"><a className="button-fill" href="#contact">START A PROJECT <ArrowIcon /></a></div>
            <div className="hero-socials hero-copy-item" aria-label="Find Febin Sebastian online"><span className="hero-socials__label">FIND ME</span><HeroSocialLink label="LinkedIn" href={SOCIAL_LINKS.linkedin}><LinkedInIcon /></HeroSocialLink><HeroSocialLink label="Instagram" href={SOCIAL_LINKS.instagram}><InstagramIcon /></HeroSocialLink><HeroSocialLink label="GitHub" href={SOCIAL_LINKS.github}><GitHubIcon /></HeroSocialLink></div>
            <p className="availability hero-copy-item hero-copy-item--availability"><b /> AVAILABLE FOR SELECT PROJECTS</p>
          </div>

          <div className="hero-poster" aria-label="Portrait of Febin Sebastian">
            <HeroName />
            <div className="portrait-wrap portrait-enter"><img src="/images/febin-hero.png" width="1121" height="1403" alt="Portrait of Febin Sebastian" /></div>
            <HeroName outlined />
            <p className="side-note">TURNING<br />IDEAS<br />INTO<br />REALITY</p>
            <p className="portrait-signature signature-enter">Developer<br />Creative<br />Technologist</p>
          </div>
        </div>
      </section>

      <div className="ticker" aria-label="Services">{["DESIGN", "DEVELOPMENT", "DEPLOYMENT", "VIDEO EDITING", "BRANDING", "PROBLEM SOLVING"].map((item) => <span key={item}>{item}<i className="ticker-mark" aria-hidden="true" /></span>)}</div>

      <section className="section approach-section container" id="work">
        <SectionLabel number="01" className="reveal">MY APPROACH</SectionLabel>
        <div className="approach-layout">
          <div className="approach-intro reveal reveal-stagger" style={{ "--reveal-delay": "70ms" }}><h2>From idea<br />to <em>digital<br />experience.</em></h2><p>Every website starts with a purpose. I focus on making digital experiences that look thoughtful, work smoothly, and serve a real need.</p></div>
          <ol className="approach-steps">
            {approachSteps.map((step, index) => <li className="approach-step reveal reveal-stagger" style={{ "--reveal-delay": `${120 + index * 95}ms` }} key={step.number}><span className="approach-number">{step.number}</span><span className="approach-step-icon"><ApproachIcon type={step.icon} /></span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}
          </ol>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="container">
          <div className="section-head"><SectionLabel number="02" className="reveal">WHAT I DO</SectionLabel></div>
          <div className="services-layout">
            <h2 className="reveal">From idea<br />to a complete<br /><em>digital product.</em></h2>
            <div className="services-list" ref={serviceListRef} tabIndex="0" aria-label="Services. Swipe or scroll horizontally on small screens.">
              {services.map((service, index) => <article className={`service ${index === activeService ? "service--active" : ""}`} key={service.title}><span className="service-icon"><ServiceIcon type={service.icon} /></span><h3>{service.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3><p>{service.text}</p></article>)}
              <article className={`service service-clone ${activeService === 0 ? "service--active" : ""}`} aria-hidden="true"><span className="service-icon"><ServiceIcon type={services[0].icon} /></span><h3>{services[0].title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3><p>{services[0].text}</p></article>
            </div>
            <div className="service-pagination" aria-hidden="true"><span>{String(activeService + 1).padStart(2, "0")} / 03</span>{services.map((service, index) => <i className={index === activeService ? "is-active" : ""} key={service.title} />)}</div>
          </div>
        </div>
      </section>

      <section className="section about-section" id="about" aria-labelledby="about-heading">
        <div className="about-image reveal"><img src="/images/febin-about.jpg" width="4672" height="5840" alt="Portrait of Febin Sebastian outdoors" /><div className="about-image-shade" /><p className="about-script">Same<br />person,<br />different<br />perspectives.</p></div>
        <div className="about-content container">
          <div className="about-copy"><SectionLabel number="03" className="reveal">ABOUT ME</SectionLabel><h2 id="about-heading" className="reveal reveal-stagger" style={{ "--reveal-delay": "75ms" }}>A little <em>about me.</em></h2><div className="about-copy__body reveal reveal-stagger" style={{ "--reveal-delay": "145ms" }}><p>Hey, I&apos;m {personName}. I&apos;m a student and a curious mind who enjoys figuring out how things work.</p><p>I explore technology, experiment with creative ideas, and turn things I imagine into something real. From building websites and writing code to editing videos and creating digital content, I&apos;m always learning along the way.</p><p>FEBIVERSE is my corner of the internet, a place to share what I create, what I learn, and what I&apos;m working on.</p></div><a className="text-link reveal reveal-stagger" style={{ "--reveal-delay": "220ms" }} href="/about">READ MORE ABOUT FEBIN <ArrowIcon /></a></div>
          <p className="about-vertical">DEVELOP<br />DESIGN<br />EDIT<br />EXPLORE<br />REPEAT</p>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container contact-grid reveal"><div><SectionLabel number="04">CONTACT</SectionLabel><h2>Have a project<br /><em>in mind?</em></h2></div><div className="contact-copy"><p>Let&apos;s build something useful, distinctive, and well-designed.</p><a className="email-placeholder" href="mailto:febiverse@gmail.com"><MailIcon /><span>febiverse@gmail.com</span><ArrowIcon /></a></div><div className="contact-action"><a className="button-fill" href="mailto:febiverse@gmail.com">LET&apos;S BUILD SOMETHING <ArrowIcon /></a></div></div>
      </section>

      <section className="section support-section" aria-labelledby="support-heading">
        <div className="container support-grid reveal">
          <div><SectionLabel number="05">SUPPORT</SectionLabel><h2 id="support-heading">Enjoying what I <em>create?</em></h2></div>
          <div className="support-copy"><span className="support-coffee" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 9h11v6.5A3.5 3.5 0 0 1 12.5 19h-4A3.5 3.5 0 0 1 5 15.5V9Z" /><path d="M16 11h1.2a2.3 2.3 0 0 1 0 4.6H16M7 5.5c.6.5.6 1.2 0 1.7M11 5.5c.6.5.6 1.2 0 1.7" /></svg></span><p>Every project starts with curiosity and a little experimentation. If you&apos;ve enjoyed something I&apos;ve built or shared, consider supporting my work. It helps me keep learning, creating, and building more.</p><SupportAction />{!buyMeACoffeeUrl && <p className="support-note">Support link coming soon.</p>}</div>
        </div>
      </section>

      <footer className="reveal"><div className="container"><div><a className="brand" href="#top">FEBIVERSE<span>.</span></a><p>FULL-STACK DEVELOPER&nbsp; · &nbsp;CREATIVE TECHNOLOGIST</p></div><div className="footer-meta"><div className="footer-socials" aria-label="Social links"><FooterSocialLink label="LinkedIn" href={SOCIAL_LINKS.linkedin}><LinkedInIcon /></FooterSocialLink><FooterSocialLink label="Instagram" href={SOCIAL_LINKS.instagram}><InstagramIcon /></FooterSocialLink><FooterSocialLink label="GitHub" href={SOCIAL_LINKS.github}><GitHubIcon /></FooterSocialLink></div><p>BUILT WITH INTENTION.</p></div></div></footer>
    </main>
  );
}
