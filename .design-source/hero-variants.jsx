// ───────────────────────── shared bits ─────────────────────────
const Arr = ({size=18}) => (
  <svg className="arr" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/>
  </svg>
);

const NavBar = ({dark=false}) => (
  <nav className={"nav" + (dark ? " dark" : "")}>
    <div className="brand">
      <span className="logomark">a</span>
      <span>alfa<span style={{color:"var(--alfa-orange)",fontWeight:500,marginLeft:6,fontSize:13,letterSpacing:".05em",textTransform:"uppercase"}}>publicidad</span></span>
    </div>
    <ul>
      <li><a href="#">Servicios</a></li>
      <li><a href="#">Ubicaciones</a></li>
      <li><a href="#">Portafolio</a></li>
      <li><a href="#">Nosotros</a></li>
      <li><a href="#">Contacto</a></li>
    </ul>
    <a className="cta" href="#">Cotizar <Arr size={14}/></a>
  </nav>
);

// ───────────────────────── V1 — Foto full-bleed + headline ─────────────────────────
const HeroV1 = () => (
  <div className="hero v1">
    <div className="photo" />
    <div className="scrim" />
    <NavBar />
    <div className="content">
      <div className="eyebrow"><span className="dot" /> Publicidad exterior · Caracas, Venezuela</div>
      <h1>
        Donde la ciudad<br/>
        mira, está <span className="or">tu marca</span>.
      </h1>
      <p className="sub">
        Diseñamos, producimos e instalamos vallas y pantallas en las
        avenidas con mayor tráfico del país. 20 años haciendo marcas imposibles de ignorar.
      </p>
      <div className="ctas">
        <a className="btn btn-primary" href="#">Ver portafolio <Arr/></a>
        <a className="btn btn-secondary" href="#">Cotiza tu valla</a>
      </div>
    </div>
    <div className="badge">
      <div className="num">+20</div>
      <div className="lbl">Años de oficio</div>
    </div>
  </div>
);

// ───────────────────────── V2 — Tipográfico bestial ─────────────────────────
const HeroV2 = () => (
  <div className="hero v2">
    <div className="grid-bg" />
    <NavBar />
    <div className="corner tl"/><div className="corner tr"/>
    <div className="corner bl"/><div className="corner br"/>
    <div className="content">
      <div className="eyebrow"><span className="dot"/> EST. 2004 · CARACAS</div>
      <h1>
        <span className="row">Haz</span>
        <span className="row stroke">visible</span>
        <span className="row">tu <span className="or">marca</span>.</span>
      </h1>
      <div className="meta">
        <p className="lede">
          Fábrica de publicidad exterior. Vallas, pantallas LED,
          gigantografías y mantenimiento. <strong>20 años montando ideas grandes.</strong>
        </p>
        <div className="ctas">
          <a className="btn btn-primary" href="#">Ver portafolio <Arr/></a>
          <a className="btn btn-secondary" href="#">Cotiza tu valla</a>
        </div>
      </div>
    </div>
  </div>
);

// ───────────────────────── V3 — Asimétrico ─────────────────────────
const HeroV3 = () => (
  <div className="hero v3">
    <div className="layout">
      <div className="left">
        <div>
          <div className="eyebrow"><span className="dot"/> Fábrica de publicidad exterior</div>
          <h1>
            Visibilidad<br/>
            que <em>se siente</em><br/>
            desde lejos.
          </h1>
          <p className="sub">
            Vallas, pantallas LED, gigantografías y mantenimiento integral.
            De la idea al fierro instalado, todo bajo un mismo techo.
          </p>
          <div className="ctas">
            <a className="btn btn-primary" href="#">Ver portafolio <Arr/></a>
            <a className="btn btn-secondary dark" href="#">Cotiza tu valla</a>
          </div>
        </div>
        <div className="stats">
          <div className="stat">
            <div className="num">+<em>20</em></div>
            <div className="lbl">Años de oficio</div>
          </div>
          <div className="stat">
            <div className="num">6</div>
            <div className="lbl">Servicios integrados</div>
          </div>
          <div className="stat">
            <div className="num">CCS</div>
            <div className="lbl">Operación nacional</div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="photo" />
        <div className="tags">
          <span className="tag solid">● En vivo</span>
          <span className="tag">Autopista Francisco Fajardo</span>
          <span className="tag">14×7m</span>
        </div>
      </div>
    </div>
    <NavBar dark />
  </div>
);

// ───────────────────────── V4 — Editorial premium ─────────────────────────
const HeroV4 = () => (
  <div className="hero v4">
    <NavBar dark />
    <div className="top">
      <div className="l">Vol. XX · Caracas</div>
      <div className="center"><span className="rule"/> publicidad exterior · desde 2004 <span className="rule"/></div>
      <div className="r">No. 001 · Hero</div>
    </div>
    <h1>
      Hacer marcas<br/>
      <span className="it">imposibles</span> de ignorar.
    </h1>
    <div className="bottom">
      <p className="lede">
        <strong>Alfa</strong> es una fábrica de publicidad exterior:
        diseñamos, producimos, instalamos y mantenemos vallas, pantallas LED
        y mobiliario urbano en las avenidas que más se miran.
      </p>
      <div className="photo" />
      <div className="ctaCol">
        <div>
          <div className="yrslbl">Años haciéndolo</div>
          <div className="yrs">+20</div>
        </div>
        <a className="btn btn-primary" href="#">Ver portafolio <Arr/></a>
      </div>
    </div>
  </div>
);

// ───────────────────────── V5 — Cargado / data-rich ─────────────────────────
const Services = [
  ["01","Vallas"],
  ["02","Pantallas LED"],
  ["03","Gigantografías"],
  ["04","Mobiliario urbano"],
  ["05","Mantenimiento"],
  ["06","Producción e instalación"],
];

const HeroV5 = () => {
  const marqueeItems = [
    "Caracas","●","Vallas iluminadas","●","Pantallas LED","●","Mantenimiento 24/7","●",
    "Gigantografías","●","Producción propia","●","+20 años","●",
  ];
  return (
    <div className="hero v5">
      <NavBar />
      <div className="layout">
        <div className="left">
          <div>
            <div className="eyebrow"><span className="dot"/> Fábrica de publicidad exterior · Caracas</div>
            <h1>
              Tu marca,<br/>
              en grande,<br/>
              <span className="or">imposible de ignorar.</span>
            </h1>
            <p className="sub">
              Vallas, pantallas LED, gigantografías, mobiliario urbano,
              producción e instalación. Todo el ciclo de la publicidad
              exterior bajo un mismo techo, desde 2004.
            </p>
            <div className="ctas">
              <a className="btn btn-primary" href="#">Ver portafolio <Arr/></a>
              <a className="btn btn-secondary" href="#">Cotiza tu valla</a>
            </div>
          </div>
          <div className="services">
            {Services.map(([n,s]) => (
              <span className="svc" key={n}><span className="num">{n}</span>{s}</span>
            ))}
          </div>
        </div>
        <div className="right">
          <div className="photoCard">
            <div className="floatStat">
              <div className="num">+20</div>
              <div className="lbl">años de oficio</div>
            </div>
            <div className="photoTag"><span className="pin"/> Av. Fco. Fajardo · Caracas</div>
          </div>
        </div>
      </div>
      <div className="marquee">
        <div className="track">
          {[0,1].map(k => (
            <span key={k}>
              {marqueeItems.map((t,i)=>(
                <span key={i} className={t==="●" ? "star" : ""}>{t}</span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { HeroV1, HeroV2, HeroV3, HeroV4, HeroV5, NavBar, Arr });
