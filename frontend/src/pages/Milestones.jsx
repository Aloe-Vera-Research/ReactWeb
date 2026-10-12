import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { ArrowUpRight, CalendarDays, Check } from "lucide-react";

import { Counter, Reveal, Stagger, StaggerItem } from "../components/Motion";
import { NextPage, PageHero, Section, SectionHead } from "../components/Ui";
import { milestones } from "../data/site";

function Timeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 65%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return (
    <div ref={ref} className="relative mt-20">
      <div aria-hidden="true" className="absolute bottom-0 left-[23px] top-0 w-px bg-ink-900/15 lg:left-1/2" />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-0 left-[23px] top-0 w-[3px] -translate-x-px origin-top rounded-full bg-leaf-dark lg:left-1/2"
        style={{ scaleY }}
      />

      <div className="space-y-14 lg:space-y-24">
        {milestones.map((milestone, index) => {
          const left = index % 2 === 0;
          return (
            <div key={milestone.number} className="relative grid gap-6 pl-16 lg:grid-cols-2 lg:gap-24 lg:pl-0">
              <motion.span
                className="absolute left-0 top-0 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-ink-900 font-mono text-sm text-gel ring-8 ring-paper lg:left-1/2 lg:-translate-x-1/2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ type: "spring", bounce: 0.5 }}
              >
                {milestone.number}
              </motion.span>

              <motion.div
                className={`${left ? "lg:text-right" : "lg:order-2"} lg:pt-1.5`}
                initial={{ opacity: 0, x: left ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <p className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-leaf-dark`}>
                  <CalendarDays size={14} aria-hidden="true" />
                  {milestone.date}
                </p>
                <h3 className="h-display mt-3 text-4xl sm:text-5xl">{milestone.title}</h3>
                <p className={`mt-3 inline-flex items-center gap-2 rounded-full bg-ink-900/5 px-3 py-1 text-xs font-semibold text-leaf-dark`}>
                  <Check size={13} aria-hidden="true" />
                  Completed
                </p>
              </motion.div>

              <motion.div
                className={left ? "" : "lg:order-1"}
                initial={{ opacity: 0, x: left ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <div className="rounded-[1.75rem] border border-ink-900/10 bg-white/55 p-7 transition-shadow duration-500 hover:shadow-2xl hover:shadow-leaf-dark/10">
                  <p className="leading-7 text-ink-900/75">{milestone.body}</p>
                  <ul className="mt-5 space-y-2.5 border-t border-ink-900/10 pt-5">
                    {milestone.highlights.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-leaf" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {milestone.deck ? (
                    <a
                      href={milestone.deck}
                      target="_blank"
                      rel="noreferrer"
                      className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-leaf-dark"
                    >
                      View the slide deck
                      <ArrowUpRight size={16} aria-hidden="true" className="transition-transform group-hover:rotate-45" />
                    </a>
                  ) : null}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Milestones() {
  return (
    <>
      <PageHero
        index="03"
        eyebrow="Milestones"
        title="From a proposal to a *working* platform."
        lead="Five assessed checkpoints carried AloeGreen from an idea in September 2025 to a final viva and live demonstration in May 2026."
      />

      <Section tone="paper">
        <Stagger className="grid gap-px overflow-hidden rounded-[2rem] bg-ink-900/10 sm:grid-cols-3">
          {[
            { value: 5, label: "Assessed milestones" },
            { value: 8, label: "Months, proposal to viva" },
            { value: 3, label: "Slide decks published" },
          ].map((item) => (
            <StaggerItem key={item.label} className="bg-paper p-8">
              <p className="h-display text-6xl text-leaf-dark">
                <Counter value={item.value} duration={1.4} />
              </p>
              <p className="mt-3 font-semibold">{item.label}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-24">
          <SectionHead eyebrow="Timeline" title="Every checkpoint, *in order.*" />
        </Reveal>

        <Timeline />
      </Section>

      <NextPage to="/documents" title="Project documents" />
    </>
  );
}

export default Milestones;
