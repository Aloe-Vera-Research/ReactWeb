import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BookOpen,
  FileText,
  GraduationCap,
  Image,
  Leaf,
  Mail,
  MapPin,
  Microscope,
  Phone,
  Presentation,
  Sprout,
} from "lucide-react";

import Logo from "../assets/images/Aloe.jpg";

const pageLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Research Domain",
    href: "/domain",
  },
  {
    label: "Milestones",
    href: "/milestones",
  },
  {
    label: "About Us",
    href: "/about",
  },
];

const resourceLinks = [
  {
    label: "Documents",
    href: "/documents",
    icon: FileText,
  },
  {
    label: "Presentations",
    href: "/presentations",
    icon: Presentation,
  },
  {
    label: "Project Gallery",
    href: "/gallery",
    icon: Image,
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[440px] w-[440px] rounded-full bg-lime-400/5 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.08)_1px,transparent_1px)] [background-size:30px_30px]" />
      </div>

      {/* Main footer */}
      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-16 lg:px-8 lg:pt-20">
        {/* Footer introduction */}
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="max-w-2xl">
            <Link
              to="/"
              className="group inline-flex items-center gap-3 rounded-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/20"
              aria-label="Visit AloeGreen home page"
            >
              <div className="relative shrink-0">
                <div className="absolute -inset-1 rounded-2xl bg-emerald-300/20 opacity-0 blur transition group-hover:opacity-100" />

                <img
                  src={Logo}
                  alt=""
                  className="relative h-14 w-14 rounded-2xl border border-emerald-300/20 object-cover shadow-lg"
                />

                <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-slate-950 bg-emerald-500 text-white">
                  <Leaf size={12} strokeWidth={2.5} aria-hidden="true" />
                </span>
              </div>

              <span>
                <span className="block text-2xl font-black tracking-[-0.03em] text-white">
                  Aloe<span className="text-emerald-400">Green</span>
                </span>

                <span className="mt-0.5 block text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-300">
                  AI-IoT Smart Agriculture
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              A research-driven AI and IoT platform created to support smarter
              Aloe vera cultivation through connected monitoring, predictive
              intelligence, recommendations, and accessible decision support.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-slate-300">
                <Microscope
                  size={15}
                  className="text-emerald-300"
                  aria-hidden="true"
                />
                Research-Driven
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-slate-300">
                <Sprout
                  size={15}
                  className="text-emerald-300"
                  aria-hidden="true"
                />
                Crop-Specific
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-slate-300">
                <GraduationCap
                  size={15}
                  className="text-emerald-300"
                  aria-hidden="true"
                />
                Final-Year Project
              </span>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="rounded-[1.75rem] border border-emerald-300/15 bg-gradient-to-br from-emerald-400/10 to-white/[0.03] p-6 backdrop-blur-sm sm:p-7">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20">
                <BookOpen size={21} aria-hidden="true" />
              </span>

              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-300">
                  Explore the Research
                </p>

                <h2 className="mt-2 text-xl font-extrabold text-white">
                  Discover the academic foundation of AloeGreen.
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Review the problem, objectives, methodology, technologies,
                  and research contribution.
                </p>
              </div>
            </div>

            <Link
              to="/domain"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-emerald-300 transition hover:text-emerald-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/20"
            >
              Visit Research Domain
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        {/* Links and contact */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.25fr]">
          {/* Navigation links */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.18em] text-white">
              Explore
            </h2>

            <nav className="mt-6" aria-label="Footer page navigation">
              <ul className="space-y-3">
                {pageLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="group inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-emerald-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/20"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-700 transition group-hover:bg-emerald-400" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.18em] text-white">
              Resources
            </h2>

            <nav className="mt-6" aria-label="Footer resources navigation">
              <ul className="space-y-3">
                {resourceLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <li key={item.href}>
                      <Link
                        to={item.href}
                        className="group inline-flex items-center gap-3 text-sm font-medium text-slate-400 transition hover:text-emerald-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/20"
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-500 transition group-hover:border-emerald-400/20 group-hover:bg-emerald-400/10 group-hover:text-emerald-300">
                          <Icon size={15} aria-hidden="true" />
                        </span>

                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.18em] text-white">
              Contact the Team
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
              Contact the AloeGreen research team regarding the platform,
              academic research, documentation, or project information.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href="mailto:aloegreen166@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-emerald-400/20 hover:bg-emerald-400/[0.07] focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/20"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                  <Mail size={18} aria-hidden="true" />
                </span>

                <span className="min-w-0">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                    Email
                  </span>

                  <span className="mt-1 block truncate text-sm font-semibold text-slate-200 transition group-hover:text-emerald-300">
                    aloegreen166@gmail.com
                  </span>
                </span>
              </a>

              <a
                href="tel:+94773355331"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-emerald-400/20 hover:bg-emerald-400/[0.07] focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/20"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                  <Phone size={18} aria-hidden="true" />
                </span>

                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                    Telephone
                  </span>

                  <span className="mt-1 block text-sm font-semibold text-slate-200 transition group-hover:text-emerald-300">
                    +94 77 335 5331
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                  <MapPin size={18} aria-hidden="true" />
                </span>

                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                    Academic Institution
                  </span>

                  <span className="mt-1 block text-sm font-semibold text-slate-200">
                    Faculty of Computing, SLIIT
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 border-t border-white/10 pt-7 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>
            <p>
              © {currentYear}{" "}
              <span className="font-semibold text-slate-400">AloeGreen</span>.
              All rights reserved.
            </p>

            <p className="mt-1 text-xs text-slate-600">
              Developed as a final-year research project.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/contact"
              className="font-semibold text-slate-400 transition hover:text-emerald-300"
            >
              Contact Us
            </Link>

            <span
              className="hidden h-1 w-1 rounded-full bg-slate-700 sm:block"
              aria-hidden="true"
            />

            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex w-fit items-center gap-2 font-semibold text-slate-400 transition hover:text-emerald-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/20"
            >
              Back to top
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}