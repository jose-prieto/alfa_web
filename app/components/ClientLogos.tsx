type Item = { label: string; style?: "italic" | "serif" | "mono" | "plain"; glyph?: string };

const items: Item[] = [
  { label: "NORTE", style: "plain" },
  { label: "polaris", style: "italic" },
  { label: "Mercado", style: "serif" },
  { label: "VANTAGE", style: "mono" },
  { label: "Solar Co.", style: "plain", glyph: "◐" },
  { label: "Estela", style: "italic" },
  { label: "FUTURO", style: "plain", glyph: "▲" },
  { label: "Hábito", style: "serif" },
  { label: "PRISMA", style: "mono" },
  { label: "Origen", style: "italic" },
  { label: "NÓMADA", style: "plain", glyph: "●" },
  { label: "Vértice", style: "serif" },
];

function Logo({ l }: { l: Item }) {
  return (
    <div className={"logo " + (l.style || "")}>
      {l.glyph && <span className="glyph">{l.glyph}</span>}
      {l.label}
    </div>
  );
}

export function ClientLogos() {
  return (
    <section className="clients">
      <div className="header">
        <span className="rule" />
        <span className="lbl">+250 marcas confían en Alfa</span>
        <span className="rule" />
      </div>
      <div className="track">
        {items.map((l, i) => <Logo l={l} key={"a" + i} />)}
        {items.map((l, i) => <Logo l={l} key={"b" + i} />)}
      </div>
    </section>
  );
}
