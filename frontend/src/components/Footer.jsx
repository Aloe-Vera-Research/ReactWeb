import { Link } from "react-router-dom";
import { ArrowUp, ArrowUpRight, Globe, Mail, Phone } from "lucide-react";

import { nav, project } from "../data/site";
import { Marquee, Reveal } from "./Motion";
import { LeafMark, Logo } from "./Ui";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="grain relative overflow-hidden bg-ink-950 text-paper">
      <div className="border-y border-white/10 py-6">
        <Marquee duration={32}>
          {Array.from({ length: 4 }).map((_, index) => (
            <span
              key={index}
              className="h-display flex items-center gap-8 px-4 text-5xl text-paper/90 sm:text-7xl"
            >
              Grown on data
              <LeafMark className="h-10 w-10 sm:h-14 sm:w-14" />
              <span className="accent text-gel">not guesswork</span>
              <LeafMark className="h-10 w-10 sm:h-14 sm:w-14" />
            </span>
          ))}
        </Marquee>
      </div>

      <div className="shell relative z-10 grid gap-14 py-20 lg:grid-cols-[1.3fr_0.7fr_1fr]">
        <Reveal>
          <Logo className="text-paper" />
          <p className="mt-6 max-w-sm leading-7 text-paper/60">
            {project.title}. A final-year research project at the{" "}
            {project.institute}, {project.faculty}.
          </p>
          <p className="eyebrow mt-8 text-paper/40">
            {project.module} · {project.id}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow text-gel">Explore</p>
          <ul className="mt-6 space-y-3">
            {[...nav, { to: "/contact", label: "Contact" }].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="group inline-flex items-center gap-2 text-paper/70 transition-colors hover:text-gel"
                >
                  <span className="h-px w-0 bg-gel transition-all duration-300 group-hover:w-5" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="eyebrow text-gel">Contact</p>
          <ul className="mt-6 space-y-4 text-paper/70">
            <li>
              <a href={`mailto:${project.email}`} className="inline-flex items-center gap-3 transition-colors hover:text-gel">
                <Mail size={17} aria-hidden="true" />
                {project.email}
              </a>
            </li>
            <li>
              <a href={`tel:${project.phoneHref}`} className="inline-flex items-center gap-3 transition-colors hover:text-gel">
                <Phone size={17} aria-hidden="true" />
                {project.phone}
              </a>
            </li>
            <li>
              <a
                href={project.leaderSite}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 transition-colors hover:text-gel"
              >
                <Globe size={17} aria-hidden="true" />
                {project.leaderSiteLabel}
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </li>
          </ul>
          <p className="mt-6 text-sm leading-6 text-paper/45">
            Contact person: Eesara Megasooriya, group leader.
          </p>
        </Reveal>
      </div>

      <div className="shell relative z-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 py-7 text-sm text-paper/45 sm:flex-row sm:items-center">
        <p>
          © {year} AloeGreen research team. Built by{" "}
          <a
            href={project.leaderSite}
            target="_blank"
            rel="noreferrer"
            className="text-paper/70 underline decoration-gel/50 underline-offset-4 transition-colors hover:text-gel"
          >
            Eesara Megasooriya
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group inline-flex items-center gap-2 transition-colors hover:text-gel"
        >
          Back to top
          <ArrowUp size={15} aria-hidden="true" className="transition-transform group-hover:-translate-y-1" />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
