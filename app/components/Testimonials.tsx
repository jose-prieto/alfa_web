type T = { q: string; n: string; r: string };

const all: T[] = [
  { q: "Salimos al aire en tiempo récord. Alfa coordinó diseño, impresión e instalación sin que tuviéramos que mover un dedo.", n: "Carolina Méndez", r: "Marketing · Retail" },
  { q: "La pantalla LED en Altamira nos cambió la conversación con clientes. Servicio impecable.", n: "Ricardo Pérez", r: "Director comercial" },
  { q: "Llevamos 6 años trabajando con ellos. Lo que prometen, lo cumplen. La gráfica siempre se ve nueva.", n: "Andrea Linares", r: "Brand manager" },
  { q: "Atención personalizada de principio a fin. El equipo de Alfa entiende lo que una marca necesita.", n: "Luis Fernández", r: "CEO · Tech" },
  { q: "La calidad de impresión es superior. Las vallas se ven impecables incluso a 6 meses de instaladas.", n: "María Antonieta R.", r: "Marketing manager" },
  { q: "Nos ayudaron con permisos, ubicación y diseño. Salir a la calle nunca había sido tan fácil.", n: "Jorge Castillo", r: "Gerente de marca" },
  { q: "Profesionales en cada paso. Cumplieron tiempos y presupuesto sin fricción.", n: "Isabel Rojas", r: "Marketing digital" },
  { q: "Las pantallas LED en zonas premium nos dieron exposición que la digital no logra. Recomendado.", n: "Daniel Ortiz", r: "Director creativo" },
  { q: "Mantenimiento puntual, gráfica siempre limpia. Es la diferencia entre verse bien y verse abandonado.", n: "Sofía Mendoza", r: "Coordinadora de medios" },
  { q: "Un proveedor de los que ya casi no quedan: serios, puntuales y con planta propia.", n: "Carlos Vargas", r: "VP Marketing" },
  { q: "Salimos en autopista en menos de 10 días. Increíble la capacidad de respuesta.", n: "Patricia Salas", r: "Trade marketing" },
  { q: "El proceso es claro desde el primer correo. Cero sorpresas, cero excusas.", n: "Eduardo Ramírez", r: "Brand director" },
  { q: "Nos asesoraron en cuáles ubicaciones convenían para nuestro target. Datos sobre la mesa, no opiniones.", n: "Verónica Díaz", r: "Planner senior" },
  { q: "Trabajar con Alfa es trabajar con gente que ama lo que hace. Se nota en cada detalle.", n: "Andrés Bolívar", r: "Account director" },
  { q: "Llevamos 3 campañas seguidas con ellos. Cada vez mejor.", n: "Lorena Pacheco", r: "Marketing manager" },
  { q: "La instalación nocturna en Fajardo fue impecable. Cero retrasos al tráfico, cero quejas.", n: "Fernando Gil", r: "Operaciones" },
  { q: "Calidad de gigantografía top. La marca se ve premium incluso en formato 14×7.", n: "Gabriela Núñez", r: "Diseñadora senior" },
  { q: "Soporte 24/7 real. Tuve un imprevisto un sábado y respondieron en menos de una hora.", n: "Manuel Suárez", r: "Brand manager" },
  { q: "De los pocos proveedores que entrega exactamente lo que vende. Sin asteriscos.", n: "Alejandra Torres", r: "Directora de marketing" },
  { q: "Recomiendo Alfa para cualquier marca que quiera hacerse notar bien hecha en Caracas.", n: "Roberto Echeverría", r: "Founder · F&B" },
];

const initials = (n: string) => n.split(" ").map((p) => p[0]).slice(0, 2).join("");

const cols: T[][] = [all.slice(0, 7), all.slice(7, 14), all.slice(14, 20)];
const colClass = ["up", "down", "up2"] as const;

function Card({ t }: { t: T }) {
  return (
    <div className="card">
      <div className="stars">★★★★★</div>
      <blockquote>
        <span className="open-q">&ldquo;</span>
        {t.q}&rdquo;
      </blockquote>
      <div className="by">
        <div className="ava">{initials(t.n)}</div>
        <div>
          <div className="name">{t.n}</div>
          <div className="role">{t.r}</div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="section testi">
      <div className="container">
        <div className="head">
          <div className="reveal">
            <div className="eyebrow dark" style={{ marginBottom: 22 }}>
              <span className="dot" /> 05 — Testimonios
            </div>
            <h2>
              Lo que dicen<br />
              <em>las marcas</em>.
            </h2>
          </div>
          <p className="lede reveal delay-1">
            Veinte voces de marcas que han confiado sus campañas a Alfa en los
            últimos cinco años. Pasa el cursor sobre cualquier columna para pausar.
          </p>
        </div>
        <div className="columns reveal">
          {cols.map((col, ci) => (
            <div className={"col " + colClass[ci]} key={ci}>
              {col.map((t, i) => <Card t={t} key={"a" + ci + i} />)}
              {col.map((t, i) => <Card t={t} key={"b" + ci + i} />)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
