import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { Magnetic, Reveal, SplitText } from "./Motion";

export function LeafMark({ className = "h-8 w-8" }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path
        d="M20 37C20 24 16 12 20 3c4 9 0 21 0 34Z"
        fill="#c5f467"
      />
      <path
        d="M19 37C17 27 9 19 4 15c1 9 7 17 15 22Z"
        fill="#7fbf2a"
      />
      <path
        d="M21 37c2-10 10-18 15-22-1 9-7 17-15 22Z"
        fill="#2f8f4e"
      />
    </svg>
  );
}

export function Logo({ className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LeafMark className="h-7 w-7" />
      <span className="font-display text-xl font-semibold tracking-tight">
        Aloe<span className="accent text-[1.15em] text-gel">Green</span>
      </span>
    </span>
  );
}

export function Eyebrow({ children, dark = false, className = "" }) {
  return (
    <span
      className={`eyebrow inline-flex items-center gap-3 ${
        dark ? "text-gel" : "text-leaf-dark"
      } ${className}`}
    >
      <span className={`h-px w-8 ${dark ? "bg-gel/60" : "bg-leaf-dark/50"}`} />
      {children}
    </span>
  );
}

const buttonStyles = {
  solid:
    "bg-gel text-ink-900 hover:bg-white",
  ghost:
    "border border-white/20 text-white hover:border-gel hover:text-gel",
  dark:
    "bg-ink-900 text-paper hover:bg-leaf-dark",
  outline:
    "border border-ink-900/20 text-ink-900 hover:border-ink-900 hover:bg-ink-900 hover:text-paper",
};

/* Renders a router link for `to`, an anchor for `href`. */
export function Button({ to, href, variant = "solid", children, icon: Icon = ArrowUpRight, className = "", ...rest }) {
  const classes = `group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors duration-300 ${buttonStyles[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {Icon ? (
        <Icon
          size={17}
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      ) : null}
    </>
  );

  return (
    <Magnetic>
      {to ? (
        <Link to={to} className={classes} {...rest}>
          {inner}
        </Link>
      ) : (
        <a href={href} className={classes} {...rest}>
          {inner}
        </a>
      )}
    </Magnetic>
  );
}

export function Section({ children, tone = "paper", className = "", id }) {
  const tones = {
    paper: "bg-paper text-ink-900",
    paper2: "bg-paper-2 text-ink-900",
    ink: "bg-ink-900 text-paper grain",
    ink2: "bg-ink-800 text-paper grain",
  };

  return (
    <section id={id} className={`relative overflow-hidden py-24 sm:py-32 ${tones[tone]} ${className}`}>
      <div className="shell relative z-10">{children}</div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, lead, dark = false, className = "", align = "left" }) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      {eyebrow ? (
        <Reveal y={12}>
          <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
        </Reveal>
      ) : null}
      <h2 className="h-display mt-5 text-4xl sm:text-5xl lg:text-6xl">
        <SplitText text={title} accentClass={dark ? "text-gel" : "text-leaf"} />
      </h2>
      {lead ? (
        <Reveal delay={0.15}>
          <p className={`mt-6 text-lg leading-8 ${dark ? "text-paper/70" : "text-ink-900/70"}`}>
            {lead}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

/* Dark hero shared by every inner page. */
export function PageHero({ eyebrow, title, lead, children, index }) {
  return (
    <section className="grain relative overflow-hidden bg-ink-900 pb-20 pt-40 text-paper sm:pb-28 sm:pt-48">
      <div aria-hidden="true" className="grid-lines absolute inset-0" />
      <motion.div
        aria-hidden="true"
        className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-leaf/30 blur-[120px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-52 -left-32 h-[420px] w-[420px] rounded-full bg-gel/10 blur-[110px]"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {index ? (
        <span
          aria-hidden="true"
          className="h-display pointer-events-none absolute -bottom-10 right-4 select-none text-[11rem] text-white/[0.04] sm:text-[18rem]"
        >
          {index}
        </span>
      ) : null}

      <div className="shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <Eyebrow dark>{eyebrow}</Eyebrow>
        </motion.div>

        <h1 className="h-display mt-6 max-w-5xl text-5xl sm:text-7xl lg:text-[5.5rem]">
          <SplitText text={title} delay={0.3} immediate />
        </h1>

        {lead ? (
          <motion.p
            className="mt-8 max-w-2xl text-lg leading-8 text-paper/70"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
          >
            {lead}
          </motion.p>
        ) : null}

        {children ? (
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95 }}
          >
            {children}
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}

/* Closing call-to-action band reused at the foot of inner pages. */
export function NextPage({ to, eyebrow = "Keep exploring", title }) {
  return (
    <section className="grain relative overflow-hidden bg-ink-800 text-paper">
      <Link to={to} className="group shell relative z-10 flex items-center justify-between gap-8 py-20 sm:py-28">
        <div>
          <Eyebrow dark>{eyebrow}</Eyebrow>
          <p className="h-display mt-5 text-4xl transition-colors duration-500 group-hover:text-gel sm:text-6xl lg:text-7xl">
            {title}
          </p>
        </div>
        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/20 transition-all duration-500 group-hover:rotate-45 group-hover:border-gel group-hover:bg-gel group-hover:text-ink-900 sm:h-24 sm:w-24">
          <ArrowUpRight size={30} aria-hidden="true" />
        </span>
      </Link>
    </section>
  );
}
