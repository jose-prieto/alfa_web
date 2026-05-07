// ─── Icons ──────────────────────────────────────────────────────────
const Icon = {
  arrow: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/></svg>,
  check: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="5 12 10 17 19 7"/></svg>,
  whatsapp: (p) => <svg {...p} viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.8-2.7-1.5-3.8-3.4-.3-.5.3-.5.8-1.5.1-.2 0-.3 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.3 3.1c.2.2 2.2 3.4 5.4 4.6 2 .8 2.7.8 3.7.7.6 0 1.7-.7 2-1.4.3-.7.3-1.2.2-1.4-.1-.2-.3-.2-.6-.3M12 2C6.5 2 2 6.5 2 12c0 1.7.4 3.4 1.3 4.9L2 22l5.3-1.3c1.4.8 3.1 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2"/></svg>,
  ig: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/></svg>,
  fb: (p) => <svg {...p} viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h2.5l.5-3H14V9.5c0-.3.2-.5.5-.5z"/></svg>,
  link: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>,
  phone: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>,
  mail: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3 7 12 13 21 7"/></svg>,
  pin: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>,
  tiktok: (p) => <svg {...p} viewBox="0 0 24 24" fill="currentColor"><path d="M19 8.5a6 6 0 0 1-3.5-1.1V15a5 5 0 1 1-5-5v2.6a2.4 2.4 0 1 0 1.7 2.3V3h2.6A3.7 3.7 0 0 0 19 6z"/></svg>,
  // Service icons
  billboard: (p)=> <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="11" rx="1.5"/><line x1="8" y1="15" x2="6" y2="22"/><line x1="16" y1="15" x2="18" y2="22"/><line x1="6" y1="9" x2="14" y2="9"/><line x1="6" y1="12" x2="11" y2="12"/></svg>,
  led: (p)=> <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><circle cx="8" cy="9" r="1" fill="currentColor"/><circle cx="12" cy="9" r="1" fill="currentColor"/><circle cx="16" cy="9" r="1" fill="currentColor"/></svg>,
  giga: (p)=> <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="1.5"/><path d="M3 14l5-5 4 4 3-3 6 6"/><circle cx="9" cy="8" r="1.5"/></svg>,
  bench: (p)=> <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="9" rx="1"/><path d="M3 15v3M21 15v3M7 15v3M17 15v3"/><path d="M3 11h18"/></svg>,
  wrench: (p)=> <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 6a4 4 0 1 1 4 4l-9 9a2.5 2.5 0 0 1-3.5-3.5l9-9z"/><circle cx="17" cy="7" r="1"/></svg>,
  crane: (p)=> <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21V6l16-2v4"/><path d="M4 6h6"/><path d="M14 8v3a3 3 0 0 0 3 3h3"/><rect x="14" y="14" width="6" height="6" rx="1"/></svg>,
};

// ─── Reveal hook ────────────────────────────────────────────────────
const useReveal = () => {
  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    },{threshold:.15,rootMargin:'0px 0px -10% 0px'});
    els.forEach(el=>io.observe(el));
    return ()=>io.disconnect();
  },[]);
};

// ─── Nav ────────────────────────────────────────────────────────────
const Nav = () => {
  const [solid,setSolid] = React.useState(false);
  React.useEffect(()=>{
    const onScroll=()=>setSolid(window.scrollY > 60);
    window.addEventListener('scroll',onScroll,{passive:true});
    return ()=>window.removeEventListener('scroll',onScroll);
  },[]);
  return (
    <nav className={"nav" + (solid ? " solid" : "")}>
      <a className="brand" href="#top" style={{textDecoration:"none"}}>
        <span className="logomark">a</span>
        <span>alfa<span className="pill">publicidad</span></span>
      </a>
      <ul>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#portafolio">Portafolio</a></li>
        <li><a href="#proceso">Proceso</a></li>
        <li><a href="#nosotros">Nosotros</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
      <a className="cta" href="#cotiza">Cotizar <Icon.arrow width="14" height="14"/></a>
    </nav>
  );
};

// ─── Hero (V1) ──────────────────────────────────────────────────────
const Hero = () => (
  <header className="hero" id="top">
    <div className="photo" />
    <div className="scrim" />
    <div className="content">
      <div className="eyebrow light"><span className="dot"/> Publicidad exterior · Caracas, Venezuela</div>
      <h1>Donde la ciudad<br/>mira, está <span className="or">tu marca</span>.</h1>
      <p className="sub">
        Diseñamos, producimos e instalamos vallas, pantallas LED y mobiliario urbano
        en las avenidas con mayor tráfico del país. 20 años haciendo marcas
        imposibles de ignorar.
      </p>
      <div className="ctas">
        <a className="btn btn-primary" href="#portafolio">Ver portafolio <Icon.arrow width="18" height="18"/></a>
        <a className="btn btn-secondary" href="#cotiza">Cotiza tu valla</a>
      </div>
    </div>
    <div className="badge">
      <div className="num">+20</div>
      <div className="lbl">Años de oficio</div>
    </div>
    <div className="scrollHint">
      <span>Scroll</span>
      <span className="line" />
    </div>
  </header>
);

// ─── Clients marquee ────────────────────────────────────────────────
const ClientLogos = () => {
  const items = [
    {label:"NORTE", style:"plain"},
    {label:"polaris", style:"italic"},
    {label:"Mercado", style:"serif"},
    {label:"VANTAGE", style:"mono"},
    {label:"Solar Co.", style:"plain", glyph:"◐"},
    {label:"Estela", style:"italic"},
    {label:"FUTURO", style:"plain", glyph:"▲"},
    {label:"Hábito", style:"serif"},
    {label:"PRISMA", style:"mono"},
    {label:"Origen", style:"italic"},
    {label:"NÓMADA", style:"plain", glyph:"●"},
    {label:"Vértice", style:"serif"},
  ];
  const Logo = ({l}) => (
    <div className={"logo " + (l.style||"")}>
      {l.glyph && <span className="glyph">{l.glyph}</span>}
      {l.label}
    </div>
  );
  return (
    <section className="clients">
      <div className="header">
        <span className="rule"/>
        <span className="lbl">+250 marcas confían en Alfa</span>
        <span className="rule"/>
      </div>
      <div className="track">
        {items.map((l,i)=><Logo l={l} key={"a"+i}/>)}
        {items.map((l,i)=><Logo l={l} key={"b"+i}/>)}
      </div>
    </section>
  );
};

// ─── Services ───────────────────────────────────────────────────────
const Services = () => {
  const items = [
    {n:"01", t:"Vallas", d:"Estructuras de gran formato en autopistas, avenidas y puntos estratégicos. Iluminadas, retroiluminadas o convencionales.", I:Icon.billboard},
    {n:"02", t:"Pantallas LED", d:"Displays digitales de alta resolución para campañas dinámicas. Programación remota y monitoreo continuo.", I:Icon.led},
    {n:"03", t:"Gigantografías", d:"Impresión de gran formato sobre vinil, mesh y lona. Diseño, producción e instalación llave en mano.", I:Icon.giga},
    {n:"04", t:"Mobiliario urbano", d:"Paradas, kioscos, totems y elementos de ciudad con espacio publicitario integrado.", I:Icon.bench},
    {n:"05", t:"Mantenimiento", d:"Rondas programadas, reemplazo de gráfica, iluminación y reparación estructural. Cobertura 24/7.", I:Icon.wrench},
    {n:"06", t:"Producción e instalación", d:"Equipos propios con grúas, andamios y cuadrillas certificadas. De la fábrica al fierro instalado.", I:Icon.crane},
  ];
  return (
    <section className="section services" id="servicios">
      <div className="container">
        <div className="head">
          <div className="reveal">
            <div className="eyebrow dark" style={{marginBottom:18}}><span className="dot"/> 01 · Servicios</div>
            <h2>Todo lo que <em>se ve</em>,<br/>bajo un mismo techo.</h2>
          </div>
          <p className="lede reveal delay-1">
            Operamos como fábrica integral: diseño, producción, instalación y
            mantenimiento. Sin tercerizaciones que retrasan la salida al aire
            de tu campaña.
          </p>
        </div>
        <div className="grid">
          {items.map((it,i)=>(
            <article className={"card reveal delay-" + ((i%3)+1)} key={it.n}>
              <span className="num">{it.n}</span>
              <span className="icon"><it.I width="26" height="26"/></span>
              <h3>{it.t}</h3>
              <p>{it.d}</p>
              <span className="more">Conocer más <Icon.arrow width="12" height="12"/></span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Portfolio ──────────────────────────────────────────────────────
const Portfolio = () => {
  const items = [
    {t:"Av. Francisco Fajardo", s:"Valla iluminada · 14×7m", img:"assets/hero.jpeg", cls:"span2"},
    {t:"CC Sambil", s:"Pantalla LED · P6", img:"assets/proj-1.jpg", cls:""},
    {t:"Distribuidor Altamira", s:"Doble cara · 12×6m", img:"assets/proj-2.jpg", cls:""},
    {t:"Av. Libertador", s:"Gigantografía · mesh", img:"assets/proj-3.jpg", cls:""},
    {t:"Las Mercedes", s:"Totem urbano", img:"assets/proj-4.jpg", cls:""},
  ];
  return (
    <section className="portfolio" id="portafolio">
      <div className="container">
        <div className="head">
          <div className="reveal">
            <div className="eyebrow" style={{marginBottom:18}}><span className="dot"/> 02 · Portafolio</div>
            <h2>Trabajos<br/>en el aire.</h2>
          </div>
          <p className="lede reveal delay-1">
            Una selección de instalaciones recientes en Caracas. Dale clic a
            cualquier pieza para ver el caso completo.
          </p>
        </div>
        <div className="grid">
          {items.map((it,i)=>(
            <article className={"item reveal delay-" + ((i%3)+1) + " " + it.cls} key={i}>
              <div className="ph" style={{backgroundImage:`url('${it.img}')`,backgroundSize:'cover',backgroundPosition:'center'}}/>
              <div className="meta">
                <div>
                  <div className="ttl">{it.t}</div>
                  <div className="sub">{it.s}</div>
                </div>
                <div className="btn-mini"><Icon.arrow width="16" height="16"/></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Process — minimal route ──────────────────────────────────────
const Process = () => {
  const steps = [
    {n:"01", lbl:"Día 1–3",  t:"Brief & ubicación",        d:"Conversamos sobre tu marca y elegimos puntos estratégicos."},
    {n:"02", lbl:"Día 3–7",  t:"Diseño & propuesta",       d:"Arte, plan de medios y permisos en una sola entrega."},
    {n:"03", lbl:"Día 7–14", t:"Producción",               d:"Imprimimos y fabricamos en planta propia con QA."},
    {n:"04", lbl:"Día 15+",  t:"Instalación & monitoreo",  d:"Cuadrillas certificadas. Mantenimiento durante toda la campaña."},
  ];

  const ref = React.useRef(null);
  React.useEffect(()=>{
    const el = ref.current; if(!el) return;
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ el.classList.add('in'); io.unobserve(el); } });
    },{threshold:.3});
    io.observe(el);
    return ()=>io.disconnect();
  },[]);

  return (
    <section className="section process" id="proceso">
      <div className="container">
        <div className="head">
          <div className="reveal">
            <div className="eyebrow dark" style={{marginBottom:18}}><span className="dot"/> 03 · Proceso</div>
            <h2>De la idea al fierro,<br/>en <em>4 pasos</em>.</h2>
          </div>
          <p className="lede reveal delay-1">
            Un proceso probado en cientos de campañas. Sin sorpresas,
            sin tiempos muertos, con un punto de contacto único de inicio a fin.
          </p>
        </div>

        <div className="route reveal" ref={ref}>
          <div className="line"><div className="fill"/></div>
          <div className="stops">
            {steps.map((s)=>(
              <div className="stop" key={s.n}>
                <span className="pin"/>
                <div className="body">
                  <div className="lbl">
                    <span className="num">{s.n}</span>
                    <span className="sep"/>
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
          <div className="txt">¿Tienes prisa? Salimos al aire en <em>tan poco como 7 días</em> para campañas express.</div>
          <div className="meta">
            <div className="it"><span className="v">7d</span><span className="k">Express</span></div>
            <div className="it"><span className="v">21d</span><span className="k">Estándar</span></div>
            <div className="it"><span className="v">24/7</span><span className="k">Soporte</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── About ──────────────────────────────────────────────────────────
const About = () => (
  <section className="about" id="nosotros">
    <div className="container">
      <div className="grid">
        <div className="reveal">
          <div className="eyebrow dark" style={{marginBottom:18}}><span className="dot"/> 04 · Nosotros</div>
          <h2>20 años montando<br/>ideas <em>grandes</em>.</h2>
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
              <div className="num">CCS</div>
              <div className="lbl">Operación nacional</div>
            </div>
          </div>
        </div>
        <div className="visual reveal delay-2">
          <div className="photo"/>
          <div className="quote">
            <span className="q">“</span>Hacemos visible lo que las marcas
            quieren <em style={{color:"var(--alfa-orange)",fontStyle:"normal"}}>contar</em>.
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── Testimonials — 20 moving columns ───────────────────────────────
const Testimonials = () => {
  const all = [
    {q:"Salimos al aire en tiempo récord. Alfa coordinó diseño, impresión e instalación sin que tuviéramos que mover un dedo.", n:"Carolina Méndez", r:"Marketing · Retail"},
    {q:"La pantalla LED en Altamira nos cambió la conversación con clientes. Servicio impecable.", n:"Ricardo Pérez", r:"Director comercial"},
    {q:"Llevamos 6 años trabajando con ellos. Lo que prometen, lo cumplen. La gráfica siempre se ve nueva.", n:"Andrea Linares", r:"Brand manager"},
    {q:"Atención personalizada de principio a fin. El equipo de Alfa entiende lo que una marca necesita.", n:"Luis Fernández", r:"CEO · Tech"},
    {q:"La calidad de impresión es superior. Las vallas se ven impecables incluso a 6 meses de instaladas.", n:"María Antonieta R.", r:"Marketing manager"},
    {q:"Nos ayudaron con permisos, ubicación y diseño. Salir a la calle nunca había sido tan fácil.", n:"Jorge Castillo", r:"Gerente de marca"},
    {q:"Profesionales en cada paso. Cumplieron tiempos y presupuesto sin fricción.", n:"Isabel Rojas", r:"Marketing digital"},
    {q:"Las pantallas LED en zonas premium nos dieron exposición que la digital no logra. Recomendado.", n:"Daniel Ortiz", r:"Director creativo"},
    {q:"Mantenimiento puntual, gráfica siempre limpia. Es la diferencia entre verse bien y verse abandonado.", n:"Sofía Mendoza", r:"Coordinadora de medios"},
    {q:"Un proveedor de los que ya casi no quedan: serios, puntuales y con planta propia.", n:"Carlos Vargas", r:"VP Marketing"},
    {q:"Salimos en autopista en menos de 10 días. Increíble la capacidad de respuesta.", n:"Patricia Salas", r:"Trade marketing"},
    {q:"El proceso es claro desde el primer correo. Cero sorpresas, cero excusas.", n:"Eduardo Ramírez", r:"Brand director"},
    {q:"Nos asesoraron en cuáles ubicaciones convenían para nuestro target. Datos sobre la mesa, no opiniones.", n:"Verónica Díaz", r:"Planner senior"},
    {q:"Trabajar con Alfa es trabajar con gente que ama lo que hace. Se nota en cada detalle.", n:"Andrés Bolívar", r:"Account director"},
    {q:"Llevamos 3 campañas seguidas con ellos. Cada vez mejor.", n:"Lorena Pacheco", r:"Marketing manager"},
    {q:"La instalación nocturna en Fajardo fue impecable. Cero retrasos al tráfico, cero quejas.", n:"Fernando Gil", r:"Operaciones"},
    {q:"Calidad de gigantografía top. La marca se ve premium incluso en formato 14×7.", n:"Gabriela Núñez", r:"Diseñadora senior"},
    {q:"Soporte 24/7 real. Tuve un imprevisto un sábado y respondieron en menos de una hora.", n:"Manuel Suárez", r:"Brand manager"},
    {q:"De los pocos proveedores que entrega exactamente lo que vende. Sin asteriscos.", n:"Alejandra Torres", r:"Directora de marketing"},
    {q:"Recomiendo Alfa para cualquier marca que quiera hacerse notar bien hecha en Caracas.", n:"Roberto Echeverría", r:"Founder · F&B"},
  ];
  const initials = (n)=> n.split(" ").map(p=>p[0]).slice(0,2).join("");
  const cols = [
    all.slice(0,7),
    all.slice(7,14),
    all.slice(14,20),
  ];
  const colClass = ["up","down","up2"];
  const Card = ({t}) => (
    <div className="card">
      <div className="stars">★★★★★</div>
      <blockquote>“{t.q}”</blockquote>
      <div className="by">
        <div className="ava">{initials(t.n)}</div>
        <div>
          <div className="name">{t.n}</div>
          <div className="role">{t.r}</div>
        </div>
      </div>
    </div>
  );
  return (
    <section className="section testi">
      <div className="container">
        <div className="head">
          <div className="reveal">
            <div className="eyebrow dark" style={{marginBottom:18}}><span className="dot"/> 05 · Testimonios</div>
            <h2>Lo que dicen<br/>las marcas.</h2>
          </div>
          <p className="lede reveal delay-1">
            +20 testimonios de marcas que han confiado sus campañas a Alfa.
            Pasa el cursor para pausar.
          </p>
        </div>
        <div className="columns reveal">
          {cols.map((col,ci)=>(
            <div className={"col " + colClass[ci]} key={ci}>
              {col.map((t,i)=> <Card t={t} key={"a"+ci+i}/>)}
              {col.map((t,i)=> <Card t={t} key={"b"+ci+i}/>)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Quote form ─────────────────────────────────────────────────────
const QuoteForm = () => {
  const SVCS = ["Vallas","Pantallas LED","Gigantografías","Mobiliario urbano","Mantenimiento","Producción"];
  const [picked,setPicked] = React.useState(["Vallas"]);
  const [sent,setSent] = React.useState(false);
  const toggle = (s)=> setPicked(p=> p.includes(s) ? p.filter(x=>x!==s) : [...p,s]);
  const submit = (e)=>{ e.preventDefault(); setSent(true); };
  return (
    <section className="quote" id="cotiza">
      <div className="container">
        <div className="grid">
          <div className="reveal">
            <div className="eyebrow light" style={{marginBottom:18}}><span className="dot"/> 06 · Cotiza tu valla</div>
            <h2>Cuéntanos qué<br/>quieres <em>poner en grande</em>.</h2>
            <p className="lede">
              Te respondemos en menos de 24 horas con propuesta, ubicaciones
              disponibles y tiempos de salida al aire.
            </p>
            <ul className="perks">
              <li><span className="ck"><Icon.check width="14" height="14"/></span>Asesoría sin costo</li>
              <li><span className="ck"><Icon.check width="14" height="14"/></span>Diseño + producción incluidos</li>
              <li><span className="ck"><Icon.check width="14" height="14"/></span>Mantenimiento durante toda la campaña</li>
              <li><span className="ck"><Icon.check width="14" height="14"/></span>Permisos gestionados por nosotros</li>
            </ul>
          </div>
          <form className="quoteform reveal delay-2" onSubmit={submit}>
            {sent ? (
              <div className="ok">
                <div className="icon"><Icon.check width="18" height="18"/></div>
                <div>
                  <div style={{fontFamily:"Inter Tight",fontWeight:700,fontSize:16}}>¡Recibido!</div>
                  <div style={{fontSize:13,color:"rgba(255,255,255,.7)",marginTop:4}}>
                    Te escribimos en menos de 24 horas. También puedes adelantar la conversación por WhatsApp.
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="row">
                  <label>Nombre<input required type="text" placeholder="Tu nombre"/></label>
                  <label>Empresa<input type="text" placeholder="Marca / Empresa"/></label>
                </div>
                <div className="row">
                  <label>Email<input required type="email" placeholder="tu@correo.com"/></label>
                  <label>Teléfono<input type="tel" placeholder="+58 ..."/></label>
                </div>
                <label>
                  Servicios de interés
                  <div className="chips">
                    {SVCS.map(s=>(
                      <span key={s} className={"chip" + (picked.includes(s)?" on":"")} onClick={()=>toggle(s)}>{s}</span>
                    ))}
                  </div>
                </label>
                <label>Cuéntanos del proyecto<textarea placeholder="Zona, fechas, presupuesto estimado, lo que quieras compartir..."/></label>
                <button className="btn btn-primary submit" type="submit">Enviar solicitud <Icon.arrow width="18" height="18"/></button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

// ─── Footer ─────────────────────────────────────────────────────────
const Footer = () => (
  <footer className="footer" id="contacto">
    <div className="container">
      <div className="top">
        <div>
          <div className="brand">
            <span className="logomark">a</span>
            <span>alfa</span>
          </div>
          <p className="blurb">
            Fábrica de publicidad exterior. Vallas, pantallas LED,
            gigantografías y mobiliario urbano. Caracas, Venezuela.
          </p>
          <div className="socials">
            <a href="https://www.instagram.com/alfapubli/" aria-label="Instagram" target="_blank" rel="noreferrer"><Icon.ig width="18" height="18"/></a>
            <a href="https://www.facebook.com/profile.php?id=100086876265052" aria-label="Facebook" target="_blank" rel="noreferrer"><Icon.fb width="18" height="18"/></a>
            <a href="https://wa.me/" aria-label="WhatsApp" target="_blank" rel="noreferrer"><Icon.whatsapp width="18" height="18"/></a>
            <a href="https://tr.ee/NkqP5ieoTZ" aria-label="Linktree" target="_blank" rel="noreferrer"><Icon.link width="18" height="18"/></a>
          </div>
        </div>
        <div>
          <h4>Servicios</h4>
          <ul>
            <li><a href="#servicios">Vallas</a></li>
            <li><a href="#servicios">Pantallas LED</a></li>
            <li><a href="#servicios">Gigantografías</a></li>
            <li><a href="#servicios">Mobiliario urbano</a></li>
            <li><a href="#servicios">Mantenimiento</a></li>
          </ul>
        </div>
        <div>
          <h4>Compañía</h4>
          <ul>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#portafolio">Portafolio</a></li>
            <li><a href="#proceso">Proceso</a></li>
            <li><a href="#cotiza">Cotizar</a></li>
          </ul>
        </div>
        <div>
          <h4>Contacto</h4>
          <ul className="contactlist">
            <li className="contactrow"><span className="ic"><Icon.phone width="16" height="16"/></span><span>+58 212 000 0000<br/><span style={{color:"rgba(255,255,255,.5)",fontSize:12}}>L–V · 8:00 a 17:00</span></span></li>
            <li className="contactrow"><span className="ic"><Icon.mail width="16" height="16"/></span><span>contacto@alfapublicidad.com</span></li>
            <li className="contactrow"><span className="ic"><Icon.pin width="16" height="16"/></span><span>Caracas, Venezuela</span></li>
            <li className="contactrow"><span className="ic"><Icon.ig width="16" height="16"/></span><a href="https://www.instagram.com/alfapubli/" target="_blank" rel="noreferrer">@alfapubli</a></li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <span>© 2026 Alfa Publicidad y Mantenimiento C.A. — Todos los derechos reservados</span>
        <span><a href="#">Aviso legal</a> · <a href="#">Privacidad</a></span>
      </div>
    </div>
  </footer>
);

// ─── Social dock (bottom-right) ─────────────────────────────────────
const SocialDock = () => {
  const [open,setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(()=>{
    const onDoc = (e)=>{ if(ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('click', onDoc);
    return ()=>document.removeEventListener('click', onDoc);
  },[]);
  const waLinks = [
    {n:"01", t1:"Cotizaciones y nuevos proyectos", t2:"Vallas, LED, gigantografías", url:"https://tr.ee/UaDi3xVGnQ"},
    {n:"02", t1:"Soporte y mantenimiento", t2:"Clientes activos · 24/7", url:"https://tr.ee/-6V_pA8Wnd"},
  ];
  return (
    <div className="sdock" ref={ref}>
      <div className={"wamenu" + (open?" open":"")}>
        <div className="head">
          <span className="av"><Icon.whatsapp width="18" height="18"/></span>
          <div>
            <div className="nm">Alfa Publicidad</div>
            <div className="st">En línea · Responde rápido</div>
          </div>
        </div>
        {waLinks.map(l=>(
          <a key={l.n} href={l.url} target="_blank" rel="noreferrer" onClick={()=>setOpen(false)}>
            <span className="num"><Icon.whatsapp width="16" height="16"/></span>
            <span className="tx">
              <span className="t1">{l.t1}</span>
              <span className="t2">{l.t2}</span>
            </span>
            <span className="arr"><Icon.arrow width="14" height="14"/></span>
          </a>
        ))}
      </div>
      <button className="bubble wa" aria-label="WhatsApp" onClick={(e)=>{e.stopPropagation();setOpen(o=>!o)}}>
        <Icon.whatsapp width="20" height="20"/>
      </button>
      <a className="bubble ig" href="https://www.instagram.com/alfapubli/" target="_blank" rel="noreferrer" aria-label="Instagram"><Icon.ig width="17" height="17"/></a>
      <a className="bubble tt" href="https://tr.ee/NkqP5ieoTZ" target="_blank" rel="noreferrer" aria-label="TikTok"><Icon.tiktok width="17" height="17"/></a>
      <a className="bubble fb" href="https://www.facebook.com/profile.php?id=100086876265052" target="_blank" rel="noreferrer" aria-label="Facebook"><Icon.fb width="17" height="17"/></a>
    </div>
  );
};

Object.assign(window, { Nav, Hero, ClientLogos, Services, Portfolio, Process, About, Testimonials, QuoteForm, Footer, SocialDock, useReveal });
