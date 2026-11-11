import { useMemo, useState } from "react";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import { categories, projects, type Category } from "../data/projects";

export default function Projects() {
  const [cat, setCat] = useState<Category | "all">("all");
  const [tech, setTech] = useState("");

  const allTech = useMemo(() => {
    const s = new Set<string>();
    projects.forEach((p) => p.stack.forEach((t) => s.add(t)));
    return [...s].sort();
  }, []);

  const filtered = projects.filter(
    (p) =>
      (cat === "all" || p.category === cat) &&
      (!tech || p.stack.some((t) => t.toLowerCase().includes(tech.toLowerCase())))
  );

  return (
    <section className="section" style={{ paddingTop: 64 }}>
      <div className="container">
        <Reveal>
          <div className="section-head">
            <div className="section-kicker">Projects</div>
            <h2>Everything I've worked on</h2>
            <p>
              Filter by category or technology. Each project links to a case study with architecture,
              contribution details and live demos where available.
            </p>
          </div>
        </Reveal>

        <div className="filter-bar">
          {categories.map((c) => (
            <button
              key={c.id}
              className={`filter-btn ${cat === c.id ? "on" : ""}`}
              onClick={() => setCat(c.id)}
            >
              {c.label}
            </button>
          ))}
          <select
            aria-label="Filter by technology"
            value={tech}
            onChange={(e) => setTech(e.target.value)}
            className="filter-btn"
            style={{ marginLeft: "auto", fontFamily: "var(--font-body)" }}
          >
            <option value="">All technologies</option>
            {allTech.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div className="grid-3">
          {filtered.map((p, i) => (
            <Reveal key={p.slug} delay={i * 50}>
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>
        {filtered.length === 0 && (
          <p style={{ color: "var(--muted)", textAlign: "center", padding: "40px 0" }}>
            No projects match this filter.
          </p>
        )}
      </div>
    </section>
  );
}
