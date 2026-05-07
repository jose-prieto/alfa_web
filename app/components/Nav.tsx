"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icons";

export function Nav({ forceSolid = false }: { forceSolid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || forceSolid;

  return (
    <nav className={"nav" + (solid ? " solid" : "")}>
      <a className="brand" href="#top">
        <span className="logomark">a</span>
        <span>
          alfa
          <span className="pill">publicidad</span>
        </span>
      </a>
      <ul>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#portafolio">Portafolio</a></li>
        <li><a href="#proceso">Proceso</a></li>
        <li><a href="#nosotros">Nosotros</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
      <a className="cta" href="#cotiza">
        Cotizar <Icon.arrow width="14" height="14" />
      </a>
    </nav>
  );
}
