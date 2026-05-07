export function About() {
  return (
    <section className="about" id="nosotros">
      <div className="container">
        <div className="grid">
          <div className="reveal">
            <div className="eyebrow dark" style={{ marginBottom: 22 }}>
              <span className="dot" /> 04 — Nosotros
            </div>
            <h2>
              Veinte años montando<br />
              ideas <em>grandes</em>.
            </h2>
            <p>
              <strong>Alfa Publicidad y Mantenimiento C.A.</strong> nació en Caracas
              con una idea sencilla: que la publicidad exterior se hiciera bien,
              de principio a fin, sin tercerizar lo que importa.
            </p>
            <p>
              Hoy somos una fábrica integral con planta propia, cuadrillas certificadas
              y la experiencia de haber puesto al aire campañas para marcas locales
              e internacionales en las avenidas más miradas del país.
            </p>
            <div className="stats">
              <div className="stat">
                <div className="num">+<em>20</em></div>
                <div className="lbl">Años en oficio</div>
              </div>
              <div className="stat">
                <div className="num">+<em>250</em></div>
                <div className="lbl">Marcas atendidas</div>
              </div>
              <div className="stat">
                <div className="num"><em>CCS</em></div>
                <div className="lbl">Operación nacional</div>
              </div>
            </div>
          </div>
          <div className="visual reveal delay-2">
            <div className="photo" />
            <span className="frame-corner tl" aria-hidden />
            <span className="frame-corner tr" aria-hidden />
            <span className="frame-corner bl" aria-hidden />
            <span className="frame-corner br" aria-hidden />
            <div className="quote">
              <span className="q">&ldquo;</span>
              Hacemos visible lo que las marcas quieren <em>contar</em>.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
