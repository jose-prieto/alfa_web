"use client";

import { useState } from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { ClientLogos } from "./components/ClientLogos";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Process } from "./components/Process";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { QuoteForm } from "./components/QuoteForm";
import { Footer } from "./components/Footer";
import { SocialDock } from "./components/SocialDock";
import { useReveal } from "./components/useReveal";

export default function Page() {
  const [heroTextShown, setHeroTextShown] = useState(false);
  useReveal();
  return (
    <>
      <Nav />
      <Hero onTextShow={() => setHeroTextShown(true)} />
      <div className="hero-blend" aria-hidden />
      <ClientLogos />
      <Services />
      <Portfolio />
      <Process />
      <About />
      <Testimonials />
      <QuoteForm />
      <Footer />
      <SocialDock visible={heroTextShown} hideOnSection="cotiza,contacto" />
    </>
  );
}
