"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icons";

const waLinks = [
  {
    n: "01",
    t1: "Cotizaciones y nuevos proyectos",
    t2: "Vallas, LED, gigantografías",
    url: "https://tr.ee/UaDi3xVGnQ",
  },
  {
    n: "02",
    t1: "Soporte y mantenimiento",
    t2: "Clientes activos · 24/7",
    url: "https://tr.ee/-6V_pA8Wnd",
  },
];

export function SocialDock({
  visible = true,
  hideOnSection,
}: {
  visible?: boolean;
  hideOnSection?: string;
}) {
  const [open, setOpen] = useState(false);
  const [hideAtSection, setHideAtSection] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // Close menu on click outside
  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  // Hide once any of the configured sections is in view (comma-separated ids)
  useEffect(() => {
    if (!hideOnSection) return;
    const ids = hideOnSection.split(",").map((s) => s.trim()).filter(Boolean);
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (targets.length === 0) return;

    const intersecting = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) intersecting.add(e.target);
          else intersecting.delete(e.target);
        });
        setHideAtSection(intersecting.size > 0);
      },
      { threshold: 0.05 }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [hideOnSection]);

  const isVisible = visible && !hideAtSection;

  return (
    <div className={`sdock${isVisible ? " is-visible" : ""}`} ref={ref}>
      <div className={"wamenu" + (open ? " open" : "")}>
        <div className="head">
          <span className="av"><Icon.whatsapp width="18" height="18" /></span>
          <div>
            <div className="nm">Alfa Publicidad</div>
            <div className="st">En línea · Responde rápido</div>
          </div>
        </div>
        {waLinks.map((l) => (
          <a
            key={l.n}
            href={l.url}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            <span className="num"><Icon.whatsapp width="16" height="16" /></span>
            <span className="tx">
              <span className="t1">{l.t1}</span>
              <span className="t2">{l.t2}</span>
            </span>
            <span className="arr"><Icon.arrow width="14" height="14" /></span>
          </a>
        ))}
      </div>
      <button
        className="bubble wa"
        aria-label="WhatsApp"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((o) => !o);
        }}
      >
        <Icon.whatsapp width="20" height="20" />
      </button>
      <a className="bubble ig" href="https://www.instagram.com/alfapubli/" target="_blank" rel="noreferrer" aria-label="Instagram">
        <Icon.ig width="17" height="17" />
      </a>
      <a className="bubble tt" href="https://tr.ee/NkqP5ieoTZ" target="_blank" rel="noreferrer" aria-label="TikTok">
        <Icon.tiktok width="17" height="17" />
      </a>
      <a className="bubble fb" href="https://www.facebook.com/profile.php?id=100086876265052" target="_blank" rel="noreferrer" aria-label="Facebook">
        <Icon.fb width="17" height="17" />
      </a>
    </div>
  );
}
