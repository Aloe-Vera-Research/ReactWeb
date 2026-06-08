import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ArrowRight,
  FileText,
  Home,
  Image,
  Info,
  Leaf,
  Mail,
  Menu,
  Microscope,
  Navigation,
  Presentation,
  X,
} from "lucide-react";

import Logo from "../assets/images/Aloe.jpg";

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: Home,
    end: true,
  },
  {
    label: "Domain",
    href: "/domain",
    icon: Microscope,
  },
  {
    label: "Milestones",
    href: "/milestones",
    icon: Navigation,
  },
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
    label: "About Us",
    href: "/about",
    icon: Info,
  },
  {
    label: "Gallery",
    href: "/gallery",
    icon: Image,
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu after navigation.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent background scrolling while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close mobile navigation using the Escape key.
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 shadow-sm shadow-slate-900/[0.02] backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Brand */}
          <Link
            to="/"
            className="group flex min-w-0 items-center gap-3 rounded-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100"
            aria-label="AloeGreen home"
          >
            <div className="relative shrink-0">
              <div className="absolute -inset-1 rounded-2xl bg-emerald-200/60 opacity-0 blur transition group-hover:opacity-100" />

              <img
                src={Logo}
                alt=""
                className="relative h-11 w-11 rounded-2xl border border-emerald-100 object-cover shadow-sm"
              />

              <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-emerald-700 text-white">
                <Leaf size={10} strokeWidth={2.5} aria-hidden="true" />
              </span>
            </div>

            <span className="min-w-0">
              <span className="block text-xl font-black tracking-[-0.03em] text-slate-950 transition group-hover:text-emerald-800">
                Aloe<span className="text-emerald-700">Green</span>
              </span>

              <span className="hidden text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500 sm:block">
                AI-IoT Smart Agriculture
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-0.5 xl:flex"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.end}
                className={({ isActive }) =>
                  [
                    "relative rounded-full px-3.5 py-2.5 text-sm font-semibold transition duration-200",
                    "focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100",
                    isActive
                      ? "bg-emerald-50 text-emerald-800"
                      : "text-slate-600 hover:bg-slate-50 hover:text-emerald-800",
                  ].join(" ")
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}

                    {isActive && (
                      <span
                        className="absolute inset-x-4 -bottom-[18px] h-0.5 rounded-full bg-emerald-600"
                        aria-hidden="true"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            <NavLink
              to="/contact"
              className="group ml-2 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-emerald-700/15 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-800 hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
            >
              Contact Us
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </NavLink>
          </nav>

          {/* Tablet Contact Button */}
          <div className="hidden items-center gap-2 lg:flex xl:hidden">
            <NavLink
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-800"
            >
              <Mail size={16} aria-hidden="true" />
              Contact
            </NavLink>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100"
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              <Menu size={22} aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100 lg:hidden"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <Menu size={22} aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Mobile and Tablet Navigation */}
      <div
        className={`fixed inset-0 z-[60] transition ${
          menuOpen ? "visible" : "invisible"
        } xl:hidden`}
        aria-hidden={!menuOpen}
      >
        {/* Backdrop */}
        <button
          type="button"
          className={`absolute inset-0 bg-slate-950/50 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
          aria-label="Close navigation menu"
          tabIndex={menuOpen ? 0 : -1}
        />

        {/* Drawer */}
        <aside
          id="mobile-navigation"
          className={`absolute right-0 top-0 flex h-full w-full max-w-[390px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-label="Mobile navigation"
        >
          {/* Drawer Header */}
          <div className="flex h-[76px] items-center justify-between border-b border-slate-100 px-5">
            <Link
              to="/"
              className="flex items-center gap-3"
              tabIndex={menuOpen ? 0 : -1}
            >
              <img
                src={Logo}
                alt=""
                className="h-10 w-10 rounded-xl border border-emerald-100 object-cover"
              />

              <span>
                <span className="block text-lg font-black tracking-tight text-slate-950">
                  Aloe<span className="text-emerald-700">Green</span>
                </span>

                <span className="block text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500">
                  Smart Agriculture
                </span>
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-red-100 hover:bg-red-50 hover:text-red-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-red-100"
              aria-label="Close navigation menu"
              tabIndex={menuOpen ? 0 : -1}
            >
              <X size={21} aria-hidden="true" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 overflow-y-auto px-4 py-6">
            <p className="mb-3 px-3 text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">
              Explore AloeGreen
            </p>

            <div className="space-y-1.5">
              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    end={item.end}
                    tabIndex={menuOpen ? 0 : -1}
                    className={({ isActive }) =>
                      [
                        "group flex items-center justify-between rounded-2xl px-3 py-3 transition",
                        "focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100",
                        isActive
                          ? "bg-emerald-700 text-white shadow-md shadow-emerald-700/15"
                          : "text-slate-700 hover:bg-emerald-50 hover:text-emerald-800",
                      ].join(" ")
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span className="flex items-center gap-3">
                          <span
                            className={`flex h-10 w-10 items-center justify-center rounded-xl transition ${
                              isActive
                                ? "bg-white/15 text-white"
                                : "bg-slate-100 text-slate-500 group-hover:bg-white group-hover:text-emerald-700"
                            }`}
                          >
                            <Icon size={19} aria-hidden="true" />
                          </span>

                          <span className="text-sm font-bold">{item.label}</span>
                        </span>

                        <ArrowRight
                          size={17}
                          className={`transition-transform group-hover:translate-x-1 ${
                            isActive ? "text-emerald-100" : "text-slate-300"
                          }`}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </NavLink>
                );
              })}
            </div>

            <div className="mt-6 border-t border-slate-100 pt-6">
              <NavLink
                to="/contact"
                tabIndex={menuOpen ? 0 : -1}
                className="group flex items-center justify-between rounded-2xl bg-slate-950 px-4 py-4 text-white transition hover:bg-emerald-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <Mail size={19} aria-hidden="true" />
                  </span>

                  <span>
                    <span className="block text-sm font-bold">Contact Us</span>
                    <span className="mt-0.5 block text-xs text-slate-300">
                      Get in touch with the team
                    </span>
                  </span>
                </span>

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </NavLink>
            </div>
          </nav>

          {/* Drawer Footer */}
          <div className="border-t border-slate-100 bg-slate-50 px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Leaf size={18} aria-hidden="true" />
              </span>

              <div>
                <p className="text-xs font-bold text-slate-800">
                  AI-IoT Research Platform
                </p>
                <p className="mt-0.5 text-[11px] text-slate-500">
                  Smarter Aloe vera cultivation
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}