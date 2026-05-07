import { Icon } from "./Icons";

const items = [
  { t: "Av. Francisco Fajardo", s: "Valla iluminada · 14×7 m",  tag: "Bebida · 2025", img: "/assets/hero.jpeg",  cls: "span2" },
  { t: "CC Sambil",             s: "Pantalla LED · P6",         tag: "Retail · 2025",  img: "/assets/proj-1.jpg", cls: "" },
  { t: "Distribuidor Altamira", s: "Doble cara · 12×6 m",       tag: "Banca · 2024",   img: "/assets/proj-2.jpg", cls: "" },
  { t: "Av. Libertador",        s: "Gigantografía · mesh",      tag: "Auto · 2024",    img: "/assets/proj-3.jpg", cls: "" },
  { t: "Las Mercedes",          s: "Totem urbano",              tag: "F&B · 2024",     img: "/assets/proj-4.jpg", cls: "" },
];

export function Portfolio() {
  return (
    <section className="portfolio" id="portafolio">
      <div className="container">
        <div className="head">
          <div className="reveal">
            <div className="eyebrow" style={{ marginBottom: 22 }}>
              <span className="dot" /> 02 — Portafolio
            </div>
            <h2>
              Trabajos<br />
              <em>en el aire</em>.
            </h2>
          </div>
          <p className="lede reveal delay-1">
            Una selección de instalaciones recientes en Caracas. Cada pieza
            documentada con coordenadas, formato, tiempo de instalación y reportes
            fotográficos.
          </p>
        </div>
        <div className="grid">
          {items.map((it, i) => (
            <article className={"item reveal delay-" + ((i % 3) + 1) + " " + it.cls} key={i}>
              <div className="ph" style={{ backgroundImage: `url('${it.img}')` }} />
              <span className="tag">{it.tag}</span>
              <div className="meta">
                <div>
                  <div className="ttl">{it.t}</div>
                  <div className="sub">{it.s}</div>
                </div>
                <div className="btn-mini">
                  <Icon.arrow width="16" height="16" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
