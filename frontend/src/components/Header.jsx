import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { nav, project } from "../data/site";
import { Logo } from "./Ui";

function Header() {
  const { pathname } = useLocation();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);

  // Close the mobile menu whenever the route changes.
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 24);
    setHidden(latest > 320 && latest > previous);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4"
        initial={{ y: -90 }}
        animate={{ y: hidden && !open ? -110 : 0 }}
        transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border px-4 py-2.5 text-paper transition-all duration-500 sm:px-5 ${
            scrolled || open
              ? "border-white/10 bg-ink-900/80 shadow-2xl shadow-black/30 backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <Link to="/" aria-label="AloeGreen home" className="shrink-0">
            <Logo />
          </Link>

          <nav aria-label="Primary" className="hidden items-center lg:flex">
            {nav.map((item) => {
              const active = item.to === pathname;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    active ? "text-ink-900" : "text-paper/70 hover:text-paper"
                  }`}
                >
                  {active ? (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-gel"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                  <span className="relative">{item.label}</span>
                </NavLink>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="group hidden items-center gap-1.5 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold transition-colors duration-300 hover:border-gel hover:bg-gel hover:text-ink-900 sm:inline-flex"
            >
              Contact
              <ArrowUpRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </Link>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="grain fixed inset-0 z-40 flex flex-col overflow-y-auto bg-ink-900 px-6 pb-10 pt-28 text-paper lg:hidden"
            initial={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 44px) 44px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
            transition={{ duration: 0.7, ease: [0.7, 0, 0.2, 1] }}
          >
            <nav aria-label="Mobile" className="relative z-10 flex flex-col">
              {[...nav, { to: "/contact", label: "Contact" }].map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 + index * 0.06, duration: 0.5 }}
                >
                  <Link
                    to={item.to}
                    className={`h-display flex items-baseline gap-4 border-b border-white/10 py-4 text-4xl ${
                      item.to === pathname ? "text-gel" : ""
                    }`}
                  >
                    <span className="font-mono text-xs font-normal tracking-widest text-paper/40">
                      0{index + 1}
                    </span>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.p
              className="eyebrow relative z-10 mt-auto pt-10 text-paper/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Project {project.id} · {project.instituteShort}
            </motion.p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default Header;
