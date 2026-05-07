import { Icon } from "./Icons";

const items = [
  { n: "01", t: "Vallas", d: "Estructuras de gran formato en autopistas, avenidas y puntos estratégicos. Iluminadas, retroiluminadas o convencionales.", I: Icon.billboard },
  { n: "02", t: "Pantallas LED", d: "Displays digitales de alta resolución para campañas dinámicas. Programación remota y monitoreo continuo.", I: Icon.led },
  { n: "03", t: "Gigantografías", d: "Impresión de gran formato sobre vinil, mesh y lona. Diseño, producción e instalación llave en mano.", I: Icon.giga },
  { n: "04", t: "Mobiliario urbano", d: "Paradas, kioscos, totems y elementos de ciudad con espacio publicitario integrado.", I: Icon.bench },
  { n: "05", t: "Mantenimiento", d: "Rondas programadas, reemplazo de gráfica, iluminación y reparación estructural. Cobertura 24/7.", I: Icon.wrench },
  { n: "06", t: "Producción e instalación", d: "Equipos propios con grúas, andamios y cuadrillas certificadas. De la fábrica al fierro instalado.", I: Icon.crane },
];

export function Services() {
  return (
    <section className="section services" id="servicios">
      <div className="container">
        <div className="head">
          <div className="reveal">
            <div className="eyebrow dark" style={{ marginBottom: 22 }}>
              <span className="dot" /> 01 — Servicios
            </div>
            <h2>
              Todo lo que <em>se ve</em>,<br />
              bajo un mismo techo.
            </h2>
          </div>
          <p className="lede reveal delay-1">
            Operamos como fábrica integral: diseño, producción, instalación y
            mantenimiento. Sin tercerizaciones que retrasen la salida al aire de
            la campaña.
          </p>
        </div>
        <div className="grid">
          {items.map((it, i) => (
            <article className={"card reveal delay-" + ((i % 3) + 1)} key={it.n}>
              <span className="num">{it.n}</span>
              <span className="icon">
                <it.I width="26" height="26" />
              </span>
              <h3>{it.t}</h3>
              <p>{it.d}</p>
              <span className="more">
                Conocer más <Icon.arrow width="12" height="12" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
