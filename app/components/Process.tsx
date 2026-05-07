"use client";

import { useEffect, useRef } from "react";

const steps = [
  { n: "01", lbl: "Día 1–3",  t: "Brief & ubicación",       d: "Conversamos sobre tu marca y elegimos puntos estratégicos." },
  { n: "02", lbl: "Día 3–7",  t: "Diseño & propuesta",      d: "Arte, plan de medios y permisos en una sola entrega." },
  { n: "03", lbl: "Día 7–14", t: "Producción",              d: "Imprimimos y fabricamos en planta propia con QA." },
  { n: "04", lbl: "Día 15+",  t: "Instalación & monitoreo", d: "Cuadrillas certificadas. Mantenimiento durante toda la campaña." },
];

export function Process() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("in");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section process" id="proceso">
      <div className="container">
        <div className="head">
          <div className="reveal">
            <div className="eyebrow dark" style={{ marginBottom: 22 }}>
              <span className="dot" /> 03 — Proceso
            </div>
            <h2>
              De la idea al fierro,<br />
              en <em>cuatro pasos</em>.
            </h2>
          </div>
          <p className="lede reveal delay-1">
            Un proceso probado en cientos de campañas. Sin sorpresas, sin tiempos
            muertos, con un punto de contacto único desde el brief hasta el
            mantenimiento.
          </p>
        </div>

        <div className="route reveal" ref={ref}>
          <div className="stops">
            {steps.map((s) => (
              <div className="stop" key={s.n}>
                <span className="pin" />
                <div className="body">
                  <div className="lbl">
                    <span className="num">{s.n}</span>
                    <span className="sep" />
                    <span>{s.lbl}</span>
                  </div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="footstrip reveal">
          <div className="txt">
            ¿Tienes prisa? Salimos al aire en <em>tan poco como 7 días</em> para campañas express.
          </div>
          <div className="meta">
            <div className="it"><span className="v">7d</span><span className="k">Express</span></div>
            <div className="it"><span className="v">21d</span><span className="k">Estándar</span></div>
            <div className="it"><span className="v">24/7</span><span className="k">Soporte</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
