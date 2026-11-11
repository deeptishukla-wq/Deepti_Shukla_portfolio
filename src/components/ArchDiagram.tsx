import type { ArchLayer } from "../data/projects";

export default function ArchDiagram({ layers }: { layers: ArchLayer[] }) {
  return (
    <div className="arch">
      {layers.map((layer, i) => (
        <div key={layer.label}>
          <div className="arch-layer">
            <div className="arch-label">{layer.label}</div>
            <div className="arch-nodes">
              {layer.nodes.map((n) => (
                <div key={n.name} className={`arch-node ${n.accent ? "accent" : ""}`}>
                  <b>{n.name}</b>
                  {n.sub && <span>{n.sub}</span>}
                </div>
              ))}
            </div>
          </div>
          {layer.conn && i < layers.length - 1 && (
            <div className="arch-conn">{layer.conn}</div>
          )}
        </div>
      ))}
    </div>
  );
}
