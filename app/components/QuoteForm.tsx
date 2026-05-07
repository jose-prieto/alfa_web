"use client";

import { useState, FormEvent } from "react";
import { Icon } from "./Icons";

const SVCS = ["Vallas", "Pantallas LED", "Gigantografías", "Mobiliario urbano", "Mantenimiento", "Producción"];

export function QuoteForm() {
  const [picked, setPicked] = useState<string[]>(["Vallas"]);
  const [sent, setSent] = useState(false);

  const toggle = (s: string) =>
    setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="quote" id="cotiza">
      <div className="container">
        <div className="grid">
          <div className="reveal">
            <div className="eyebrow light" style={{ marginBottom: 22 }}>
              <span className="dot" /> 06 — Cotizar
            </div>
            <h2>
              Cuéntanos qué<br />
              quieres <em>poner en grande</em>.
            </h2>
            <p className="lede">
              Respondemos en menos de 24 horas con propuesta, ubicaciones
              disponibles y tiempos de salida al aire.
            </p>
            <ul className="perks">
              <li><span className="ck"><Icon.check width="14" height="14" /></span>Asesoría sin costo</li>
              <li><span className="ck"><Icon.check width="14" height="14" /></span>Diseño + producción incluidos</li>
              <li><span className="ck"><Icon.check width="14" height="14" /></span>Mantenimiento durante toda la campaña</li>
              <li><span className="ck"><Icon.check width="14" height="14" /></span>Permisos gestionados por nosotros</li>
            </ul>

            <div className="quote-socials">
              <p className="label">Síguenos en redes</p>
              <div className="socials">
                <a href="https://www.instagram.com/alfapubli/" aria-label="Instagram" target="_blank" rel="noreferrer"><Icon.ig width="18" height="18" /></a>
                <a href="https://www.facebook.com/profile.php?id=100086876265052" aria-label="Facebook" target="_blank" rel="noreferrer"><Icon.fb width="18" height="18" /></a>
                <a href="https://tr.ee/NkqP5ieoTZ" aria-label="TikTok" target="_blank" rel="noreferrer"><Icon.tiktok width="18" height="18" /></a>
                <a href="https://tr.ee/UaDi3xVGnQ" aria-label="WhatsApp" target="_blank" rel="noreferrer"><Icon.whatsapp width="18" height="18" /></a>
                <a href="https://tr.ee/NkqP5ieoTZ" aria-label="Linktree" target="_blank" rel="noreferrer"><Icon.link width="18" height="18" /></a>
              </div>
            </div>
          </div>
          <form className="quoteform reveal delay-2" onSubmit={submit}>
            {sent ? (
              <div className="ok">
                <div className="icon"><Icon.check width="18" height="18" /></div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16 }}>
                    ¡Recibido!
                  </div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,.7)", marginTop: 4 }}>
                    Te escribimos en menos de 24 horas. También puedes adelantar la conversación por WhatsApp.
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="row">
                  <label>Nombre<input required type="text" placeholder="Tu nombre" /></label>
                  <label>Empresa<input type="text" placeholder="Marca / Empresa" /></label>
                </div>
                <div className="row">
                  <label>Email<input required type="email" placeholder="tu@correo.com" /></label>
                  <label>Teléfono<input type="tel" placeholder="+58 ..." /></label>
                </div>
                <label>
                  Servicios de interés
                  <div className="chips">
                    {SVCS.map((s) => (
                      <span key={s} className={"chip" + (picked.includes(s) ? " on" : "")} onClick={() => toggle(s)}>
                        {s}
                      </span>
                    ))}
                  </div>
                </label>
                <label>
                  Cuéntanos del proyecto
                  <textarea placeholder="Zona, fechas, presupuesto estimado, lo que quieras compartir..." />
                </label>
                <button className="btn btn-primary submit" type="submit">
                  Enviar solicitud <Icon.arrow width="18" height="18" />
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
