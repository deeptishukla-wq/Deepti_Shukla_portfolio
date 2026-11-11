import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import { Icon } from "../components/icons";
import { projects } from "../data/projects";
import { capabilities, education, experience, site, skillGroups } from "../data/site";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      {/* ================= Hero ================= */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="hero-eyebrow">
              <span className="dot" />
              {site.status} · {site.location}
            </span>
            <h1>
              Building Intelligent Applications, Scalable Backend Systems &{" "}
              <span className="hl">AI-Powered Products.</span>
            </h1>
            <p className="hero-sub">{site.intro}</p>
            <p className="hero-sub">{site.intro2}</p>
            <div className="hero-roles">
              <span>Python Backend</span>
              <span>Data Engineering</span>
              <span>AI / ML Integration</span>
              <span>Full-Stack Products</span>
            </div>
            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary">
                Explore My Projects <Icon name="arrow" size={16} />
              </Link>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <div className="hero-photo-frame" />
            <img className="hero-photo" src={site.photo} alt="Deepti Shukla" />
            <div className="hero-badge">
              <span className="dot" />
              Available for freelance work
            </div>
          </div>
        </div>
      </section>

      {/* ================= About ================= */}
      <section className="section tinted" id="about">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div className="section-kicker">About Me</div>
              <h2>Engineer who ships complete products</h2>
            </div>
          </Reveal>
          <div className="about-grid">
            <Reveal>
              <div>
                <p style={{ marginBottom: 14 }}>
                  I work independently on software products end to end — designing the backend
                  architecture, building the APIs, wiring the data layer, crafting the frontend, and
                  deploying to the cloud. Most of my work sits at the intersection of{" "}
                  <strong style={{ color: "var(--ink)" }}>Python backend engineering, data, and applied AI</strong>.
                </p>
                <p style={{ marginBottom: 14 }}>
                  My recent work spans a bilingual AI voice tutor with chapter-grounded RAG, K-12
                  learning platforms, e-commerce and retail-management systems with auth &amp; RBAC,
                  an AI skill-assessment backend, and ML inference services — all visible in the
                  projects section with live demos.
                </p>
                <p>
                  Earlier in my career I worked as a backend developer at Symantec, Chennai. I hold an
                  MCA and a B.Sc in Mathematics.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="about-facts">
                <div className="fact">
                  <span className="ic"><Icon name="pin" size={18} /></span>
                  <div><b>Based in New Delhi, India</b><span>Working remotely with clients & teams</span></div>
                </div>
                <div className="fact">
                  <span className="ic"><Icon name="api" size={18} /></span>
                  <div><b>Primary stack</b><span>Python · FastAPI · Django · React · PostgreSQL</span></div>
                </div>
                <div className="fact">
                  <span className="ic"><Icon name="ai" size={18} /></span>
                  <div><b>AI focus</b><span>LLM integration · RAG · real-time voice · ML inference</span></div>
                </div>
                <div className="fact">
                  <span className="ic"><Icon name="ship" size={18} /></span>
                  <div><b>Delivery</b><span>Docker · Render · Heroku · AWS · CI/CD · Electron</span></div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= Technical expertise ================= */}
      <section className="section" id="expertise">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div className="section-kicker">Technical Expertise</div>
              <h2>Technologies I work with</h2>
              <p>Organized by where they sit in a product — not an exhaustive badge wall.</p>
            </div>
          </Reveal>
          <div className="grid-3">
            {skillGroups.map((g, i) => (
              <Reveal key={g.label} delay={i * 60}>
                <div className="card skill-group" style={{ height: "100%" }}>
                  <h3><span className="skill-icon">{g.icon}</span>{g.label}</h3>
                  <div className="skill-chips">
                    {g.skills.map((s) => <span key={s}>{s}</span>)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Featured projects ================= */}
      <section className="section tinted" id="projects">
        <div className="container">
          <Reveal>
            <div className="section-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", maxWidth: "none", gap: 20, flexWrap: "wrap" }}>
              <div>
                <div className="section-kicker">Featured Work</div>
                <h2>Products I've built & shipped</h2>
                <p>Real applications with live demos — click through for full case studies.</p>
              </div>
              <Link to="/projects" className="btn btn-outline btn-sm">
                All projects <Icon name="arrow" size={14} />
              </Link>
            </div>
          </Reveal>
          <div className="grid-3">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70}>
                <ProjectCard p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= How I build ================= */}
      <section className="section" id="how">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div className="section-kicker">How I Build Products</div>
              <h2>Engineering capabilities, end to end</h2>
            </div>
          </Reveal>
          <div className="grid-4">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 50}>
                <div className="card cap-card">
                  <span className="cap-icon"><Icon name={c.icon} size={22} /></span>
                  <div>
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Journey + Experience ================= */}
      <section className="section tinted" id="journey">
        <div className="container">
          <div className="two-col" style={{ gap: 56 }}>
            <Reveal>
              <div className="section-head" style={{ marginBottom: 30 }}>
                <div className="section-kicker">Development Journey</div>
                <h2>My path so far</h2>
              </div>
              <div className="timeline">
                <div className="tl-item">
                  <div className="tl-date">2006 — 2009</div>
                  <h3>MCA — Computer Applications</h3>
                  <p>Built the CS foundation — programming, databases, systems — followed by a backend role at Symantec.</p>
                </div>
                <div className="tl-item">
                  <div className="tl-date">2009 — 2010</div>
                  <h3>Backend Developer — Symantec, Chennai</h3>
                  <p>Backend modules in Java and PHP, database workflows, SQL optimization.</p>
                </div>
                <div className="tl-item">
                  <div className="tl-date">2023 — Present</div>
                  <h3>Independent Freelance Developer</h3>
                  <p>
                    Building products across the stack: ML &amp; data systems, e-commerce and retail
                    platforms, education technology with AI voice tutoring, and cloud-deployed backends.
                  </p>
                  <div className="tl-tags">
                    <span>FastAPI</span><span>Django</span><span>React</span><span>LLM / RAG</span><span>Docker</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="section-head" id="experience" style={{ marginBottom: 30 }}>
                <div className="section-kicker">Experience</div>
                <h2>Where I've worked</h2>
              </div>
              <div style={{ display: "grid", gap: 18 }}>
                {experience.map((e) => (
                  <div className="card" key={e.org} style={e.current ? { borderColor: "#c9cffb", background: "linear-gradient(180deg,#fbfbff,#fff)" } : undefined}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", marginBottom: 4 }}>
                      <h3 style={{ fontSize: "1.05rem" }}>{e.org}</h3>
                      <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--accent-ink)" }}>{e.period}</span>
                    </div>
                    <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--muted)", marginBottom: 10 }}>
                      {e.role}{e.location ? ` · ${e.location}` : ""}
                    </div>
                    <ul style={{ paddingLeft: 18, fontSize: "0.88rem", color: "var(--ink-2)", display: "grid", gap: 5 }}>
                      {e.points.map((pt) => <li key={pt}>{pt}</li>)}
                    </ul>
                    <div className="tl-tags" style={{ marginTop: 14 }}>
                      {e.tags.map((t) => <span key={t}>{t}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= Education ================= */}
      <section className="section" id="education" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="container">
          <Reveal>
            <div className="section-head" style={{ marginBottom: 28 }}>
              <div className="section-kicker">Education</div>
              <h2>Academic background</h2>
            </div>
          </Reveal>
          <div className="grid-2">
            {education.map((e) => (
              <Reveal key={e.degree}>
                <div className="card edu-card">
                  <span className="ic">🎓</span>
                  <div>
                    <span className="yr">{e.years}</span>
                    <h3>{e.degree}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Contact ================= */}
      <section className="section tinted" id="contact">
        <div className="container">
          <div className="contact-grid">
            <Reveal>
              <div>
                <div className="section-kicker">Contact</div>
                <h2 style={{ fontSize: "1.9rem", marginBottom: 12 }}>Let's build something together</h2>
                <p style={{ color: "var(--muted)", maxWidth: 440 }}>
                  I'm available for freelance work in Python backend development, data engineering,
                  AI/ML integration and full-stack product development. Reach out and I'll get back
                  to you.
                </p>
                <div className="contact-methods">
                  <a className="contact-method" href={`mailto:${site.email}`}>
                    <span className="ic"><Icon name="mail" size={20} /></span>
                    <div><b>Email</b><span>{site.email}</span></div>
                  </a>
                  <a className="contact-method" href={`tel:${site.phoneHref}`}>
                    <span className="ic"><Icon name="phone" size={20} /></span>
                    <div><b>Phone</b><span>+91 {site.phone}</span></div>
                  </a>
                  <a className="contact-method" href={site.linkedin} target="_blank" rel="noreferrer">
                    <span className="ic"><Icon name="linkedin" size={20} /></span>
                    <div><b>LinkedIn</b><span>linkedin.com/in/deepti-shukla-8457b5264</span></div>
                  </a>
                  <a className="contact-method" href={site.resume} download>
                    <span className="ic"><Icon name="doc" size={20} /></span>
                    <div><b>Resume</b><span>Download PDF</span></div>
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="card" style={{ padding: 30 }}>
                <h3 style={{ marginBottom: 6 }}>Send a message</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--muted)", marginBottom: 18 }}>
                  This opens your mail client with the message pre-filled.
                </p>
                <form
                  className="form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const f = e.target as HTMLFormElement;
                    const name = (f.elements.namedItem("name") as HTMLInputElement).value;
                    const email = (f.elements.namedItem("email") as HTMLInputElement).value;
                    const msg = (f.elements.namedItem("message") as HTMLTextAreaElement).value;
                    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
                    const body = encodeURIComponent(`${msg}\n\n— ${name} (${email})`);
                    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
                  }}
                >
                  <div>
                    <label htmlFor="name">Your name</label>
                    <input id="name" name="name" required placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label htmlFor="email">Your email</label>
                    <input id="email" name="email" type="email" required placeholder="jane@company.com" />
                  </div>
                  <div>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" required placeholder="Tell me about your project or role…" />
                  </div>
                  <button className="btn btn-primary" type="submit" style={{ justifyContent: "center" }}>
                    Send Message <Icon name="arrow" size={15} />
                  </button>
                  <span className="form-note">Prefer email directly? {site.email}</span>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
