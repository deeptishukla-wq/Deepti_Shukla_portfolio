import { Link, Navigate, useParams } from "react-router-dom";
import ArchDiagram from "../components/ArchDiagram";
import { Icon } from "../components/icons";
import { StatusPill } from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import { categoryLabel, getProject, projects, statusLabel } from "../data/projects";

export default function CaseStudy() {
  const { slug } = useParams();
  const p = slug ? getProject(slug) : undefined;
  if (!p) return <Navigate to="/projects" replace />;

  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <section className="cs-hero">
        <div className="container">
          <Link to="/projects" className="cs-back">← All projects</Link>
          <div className="cs-title-row">
            <h1>{p.name}</h1>
            <StatusPill status={p.status} />
          </div>
          <p className="cs-lead">{p.tagline}</p>
          {p.statusNote && (
            <p style={{ fontSize: "0.85rem", color: "var(--amber)", marginTop: 10, fontWeight: 600 }}>
              {p.statusNote}
            </p>
          )}
        </div>
      </section>

      <section style={{ paddingBottom: 20 }}>
        <div className="container">
          {p.shots.length > 0 && (
            <Reveal>
              <figure className="cs-shot">
                <img src={p.shots[0].src} alt={`${p.name} — ${p.shots[0].caption}`} />
                <figcaption>{p.shots[0].caption}</figcaption>
              </figure>
            </Reveal>
          )}
        </div>
      </section>

      <div className="container cs-grid">
        <div>
          <Reveal>
            <div className="cs-block">
              <h2>Overview</h2>
              <p>{p.overview}</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="cs-block">
              <h2>The problem it addresses</h2>
              <p>{p.problem}</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="cs-block">
              <h2>My contribution</h2>
              <ul>
                {p.contribution.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </div>
          </Reveal>

          {p.arch && (
            <Reveal>
              <div className="cs-block">
                <h2>Technical architecture</h2>
                <div className="card" style={{ padding: 22 }}>
                  <ArchDiagram layers={p.arch} />
                </div>
              </div>
            </Reveal>
          )}

          <Reveal>
            <div className="cs-block">
              <h2>Key features</h2>
              <ul>
                {p.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="cs-block">
              <h2>Technical challenges</h2>
              <ul>
                {p.challenges.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </div>
          </Reveal>

          {p.shots.slice(1).map((s) => (
            <Reveal key={s.src}>
              <figure className="cs-shot">
                <img src={s.src} alt={`${p.name} — ${s.caption}`} loading="lazy" />
                <figcaption>{s.caption}</figcaption>
              </figure>
            </Reveal>
          ))}

          <Reveal>
            <div className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <div>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--faint)" }}>Next project</div>
                <b style={{ fontFamily: "var(--font-head)", color: "var(--ink)" }}>{next.name}</b>
              </div>
              <Link to={`/projects/${next.slug}`} className="btn btn-outline btn-sm">
                View case study <Icon name="arrow" size={14} />
              </Link>
            </div>
          </Reveal>
        </div>

        <aside className="cs-side">
          <div className="card">
            <h4>Project</h4>
            <div className="kv"><b>Category</b><span>{categoryLabel[p.category]}</span></div>
            <div className="kv"><b>Status</b><span>{statusLabel[p.status]}</span></div>
            {p.liveUrl && (
              <div className="kv"><b>Link</b><span><a href={p.liveUrl} target="_blank" rel="noreferrer">{p.liveUrl.replace(/^https?:\/\//, "")}</a></span></div>
            )}
          </div>

          <div className="card">
            <h4>Frontend</h4>
            <div className="pill-list">{p.frontend.map((t) => <span key={t}>{t}</span>)}</div>
          </div>
          <div className="card">
            <h4>Backend</h4>
            <div className="pill-list">{p.backend.map((t) => <span key={t}>{t}</span>)}</div>
          </div>
          <div className="card">
            <h4>Data & integrations</h4>
            <div className="pill-list">{p.data.map((t) => <span key={t}>{t}</span>)}</div>
          </div>

          {p.liveUrl && (
            <a href={p.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ justifyContent: "center" }}>
              Open live application <Icon name="ext" size={15} />
            </a>
          )}
        </aside>
      </div>
    </>
  );
}
