import { Link } from "react-router-dom";
import { categoryLabel, statusLabel, type Project } from "../data/projects";
import { Icon } from "./icons";

export function StatusPill({ status }: { status: Project["status"] }) {
  return (
    <span className={`status-pill status-${status}`}>
      <span className="dot" />
      {statusLabel[status]}
    </span>
  );
}

export function ProjectMedia({ p }: { p: Project }) {
  return (
    <div className="proj-media">
      <StatusPill status={p.status} />
      {p.shots.length ? (
        <img src={p.shots[0].src} alt={`${p.name} screenshot`} loading="lazy" />
      ) : (
        <div className="placeholder-art">
          <span className="glyph">{p.name.slice(0, 1)}</span>
        </div>
      )}
    </div>
  );
}

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="proj-card">
      <ProjectMedia p={p} />
      <div className="proj-body">
        <div className="proj-cat">{categoryLabel[p.category]}</div>
        <h3>{p.name}</h3>
        <p>{p.tagline}</p>
        <div className="proj-stack">
          {p.stack.slice(0, 5).map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
        <div className="proj-actions">
          <Link to={`/projects/${p.slug}`} className="link primary">
            Case Study <Icon name="arrow" size={14} />
          </Link>
          {p.liveUrl && (
            <a href={p.liveUrl} target="_blank" rel="noreferrer" className="link ghost">
              Live Demo <Icon name="ext" size={13} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
