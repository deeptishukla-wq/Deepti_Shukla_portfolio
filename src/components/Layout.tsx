import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { site } from "../data/site";
import { Icon } from "./icons";

const sectionLinks = [
  { to: "/#about", label: "About" },
  { to: "/#expertise", label: "Expertise" },
  { to: "/#journey", label: "Journey" },
  { to: "/#experience", label: "Experience" },
];

export function scrollToHash(hash: string) {
  const el = document.querySelector(hash);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SectionLink({ to, label, onClick }: { to: string; label: string; onClick?: () => void }) {
  const location = useLocation();
  const navigate = useNavigate();
  const hash = to.slice(to.indexOf("#"));
  return (
    <a
      href={to}
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
        if (location.pathname !== "/") {
          navigate("/");
          setTimeout(() => scrollToHash(hash), 60);
        } else {
          scrollToHash(hash);
        }
      }}
    >
      {label}
    </a>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    if (!location.hash) window.scrollTo(0, 0);
    else setTimeout(() => scrollToHash(location.hash), 60);
  }, [location.pathname, location.hash]);

  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <Link to="/" className="nav-brand">
            <span className="mono">DS</span>
            Deepti Shukla
          </Link>
          <button
            className={`nav-burger ${open ? "open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
          <ul className={`nav-links ${open ? "open" : ""}`}>
            {sectionLinks.map((l) => (
              <li key={l.to}>
                <SectionLink to={l.to} label={l.label} onClick={() => setOpen(false)} />
              </li>
            ))}
            <li>
              <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
                Projects
              </NavLink>
            </li>
            <li>
              <a
                href="/#contact"
                className="nav-cta"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  if (location.pathname !== "/") {
                    window.location.href = "/#contact";
                  } else {
                    scrollToHash("#contact");
                  }
                }}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>
            © {new Date().getFullYear()} {site.name} · {site.status} · {site.location}
          </p>
          <div className="footer-links">
            <a href={site.linkedin} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <Icon name="linkedin" size={15} /> LinkedIn
            </a>
            <a href={`mailto:${site.email}`} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <Icon name="mail" size={15} /> Email
            </a>
            <a href={site.resume} download style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <Icon name="doc" size={15} /> Resume
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
