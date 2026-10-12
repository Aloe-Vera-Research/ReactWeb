import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { Check, Minus, Plus, Quote, X } from "lucide-react";

import Architecture from "../components/Architecture";
import ResultsExplorer from "../components/ResultsExplorer";
import { Reveal, SpotlightCard, Stagger, StaggerItem } from "../components/Motion";
import { Button, NextPage, PageHero, Section, SectionHead } from "../components/Ui";
import {
  datasets,
  futureWork,
  literature,
  methodology,
  nonFunctional,
  objectives,
  plans,
  technologies,
} from "../data/site";

const chapters = [
  { id: "literature", label: "Literature survey" },
  { id: "gap", label: "Research gap" },
  { id: "problem", label: "Problem & question" },
  { id: "objectives", label: "Objectives" },
  { id: "methodology", label: "Methodology" },
  { id: "results", label: "Results" },
  { id: "technologies", label: "Technologies" },
  { id: "future", label: "Future work" },
];

const gapRows = [
  { feature: "Real-time IoT field sensing", others: "partial", aloe: true },
  { feature: "Forecast-informed yield prediction", others: false, aloe: true },
  { feature: "Image-based disease detection", others: "partial", aloe: true },
  { feature: "Disease alerts to nearby farmers", others: false, aloe: true },
  { feature: "Fertilizer recommendation with history", others: false, aloe: true },
  { feature: "Market price forecasting", others: "partial", aloe: true },
  { feature: "All of it unified for one crop", others: false, aloe: true },
];

function Mark({ value }) {
  if (value === true) {
    return (
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gel text-ink-900">
        <Check size={16} aria-label="Yes" />
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-paper/60">
        <Minus size={16} aria-label="In isolation only" />
      </span>
    );
  }
  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-paper/30">
      <X size={16} aria-label="No" />
    </span>
  );
}

function MethodTimeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return (
    <div ref={ref} className="relative mt-16">
      <div aria-hidden="true" className="absolute bottom-0 left-[19px] top-0 w-px bg-ink-900/15" />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-0 left-[19px] top-0 w-px origin-top bg-leaf-dark"
        style={{ scaleY }}
      />

      <div className="space-y-12">
        {methodology.map((step, index) => (
          <Reveal key={step.title} className="relative grid gap-3 pl-16 lg:grid-cols-[280px_1fr] lg:gap-10">
            <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-ink-900 font-mono text-xs text-gel">
              0{index + 1}
            </span>
            <h3 className="h-display pt-1.5 text-2xl">{step.title}</h3>
            <p className="max-w-2xl leading-7 text-ink-900/70">{step.body}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function Domain() {
  const [openTheme, setOpenTheme] = useState(literature[0].theme);

  return (
    <>
      <PageHero
        index="02"
        eyebrow="Research domain"
        title="The science behind a *smarter* aloe field."
        lead="Literature, gap, objectives, methodology and results — the full research story of AloeGreen, drawn from the published paper and project documents."
      >
        <nav aria-label="On this page" className="flex flex-wrap gap-2">
          {chapters.map((chapter) => (
            <a
              key={chapter.id}
              href={`#${chapter.id}`}
              className="rounded-full border border-white/15 px-4 py-2 text-sm text-paper/70 transition-colors duration-300 hover:border-gel hover:bg-gel hover:text-ink-900"
            >
              {chapter.label}
            </a>
          ))}
        </nav>
      </PageHero>

      {/* Literature survey */}
      <Section tone="paper" id="literature" className="scroll-mt-10">
        <SectionHead
          eyebrow="01 · Literature survey"
          title="What earlier work *found* — and what it left out."
          lead="Machine learning and IoT are well established in agriculture. Reviewing five strands of prior work shows the same pattern each time: strong results on one task, in isolation."
        />

        <Stagger className="mt-14 border-t border-ink-900/15">
          {literature.map((item, index) => {
            const open = openTheme === item.theme;
            return (
              <StaggerItem key={item.theme} y={16} className="border-b border-ink-900/15">
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenTheme(open ? null : item.theme)}
                  className="group flex w-full items-center gap-6 py-7 text-left"
                >
                  <span className="font-mono text-xs text-leaf-dark">0{index + 1}</span>
                  <span className="h-display flex-1 text-2xl transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl">
                    {item.theme}
                  </span>
                  <motion.span
                    animate={{ rotate: open ? 45 : 0 }}
                    className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 ${
                      open ? "border-ink-900 bg-ink-900 text-gel" : "border-ink-900/20"
                    }`}
                  >
                    <Plus size={18} aria-hidden="true" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-5 pb-9 sm:pl-12 md:grid-cols-2">
                        <div className="rounded-3xl bg-white/60 p-6">
                          <p className="eyebrow text-leaf-dark">What it established</p>
                          <p className="mt-3 leading-7 text-ink-900/75">{item.found}</p>
                        </div>
                        <div className="rounded-3xl bg-ink-900 p-6 text-paper">
                          <p className="eyebrow text-sun">What it left open</p>
                          <p className="mt-3 leading-7 text-paper/75">{item.missing}</p>
                        </div>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      {/* Research gap */}
      <Section tone="ink" id="gap" className="scroll-mt-10">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHead
              dark
              eyebrow="02 · Research gap"
              title="Capable tools, *fragmented.*"
              lead="Existing agricultural solutions address yield, disease or fertilizer one at a time. Little work combines real-time IoT acquisition, predictive analytics and continuous refinement inside a single crop-specific framework."
            />
            <Reveal delay={0.25}>
              <p className="mt-8 flex items-center gap-5 text-sm text-paper/55">
                <span className="flex items-center gap-2"><Mark value={true} /> Covered</span>
                <span className="flex items-center gap-2"><Mark value="partial" /> In isolation</span>
                <span className="flex items-center gap-2"><Mark value={false} /> Missing</span>
              </p>
            </Reveal>
          </div>

          <Reveal>
            <div className="overflow-hidden rounded-[2rem] border border-white/10">
              <div className="grid grid-cols-[1fr_88px_88px] items-center gap-2 bg-white/5 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.14em] text-paper/50 sm:grid-cols-[1fr_120px_120px] sm:px-7">
                <span>Capability</span>
                <span className="text-center">Typical prior work</span>
                <span className="text-center text-gel">AloeGreen</span>
              </div>
              {gapRows.map((row, index) => (
                <motion.div
                  key={row.feature}
                  className="grid grid-cols-[1fr_88px_88px] items-center gap-2 border-t border-white/10 px-5 py-4 sm:grid-cols-[1fr_120px_120px] sm:px-7"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07, duration: 0.5 }}
                >
                  <span className="text-sm text-paper/85 sm:text-base">{row.feature}</span>
                  <span className="text-center"><Mark value={row.others} /></span>
                  <motion.span
                    className="text-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.07, type: "spring", bounce: 0.5 }}
                  >
                    <Mark value={row.aloe} />
                  </motion.span>
                </motion.div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-5 text-paper/40">
              A summary of the gap described in the paper's literature review —
              a characterisation of the field, not a benchmark of specific products.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Problem & question */}
      <Section tone="paper2" id="problem" className="scroll-mt-10">
        <SectionHead
          eyebrow="03 · Research problem"
          title="Decisions made without *data.*"
          lead="Traditional Aloe vera farming relies on manual observation and farmer experience, which leads to inconsistent decisions and reduced productivity. Growers contend with environmental variability, inefficient nutrient management, disease outbreaks and fluctuating market prices — with no integrated tool built for their crop."
        />

        <Reveal className="mt-14">
          <figure className="relative overflow-hidden rounded-[2.5rem] bg-ink-900 p-9 text-paper sm:p-14">
            <Quote size={120} aria-hidden="true" className="absolute -right-4 -top-4 text-white/5" />
            <figcaption className="eyebrow text-gel">Research question</figcaption>
            <blockquote className="accent relative mt-6 text-3xl leading-[1.2] sm:text-5xl">
              {objectives.question}
            </blockquote>
          </figure>
        </Reveal>
      </Section>

      {/* Objectives */}
      <Section tone="paper" id="objectives" className="scroll-mt-10">
        <SectionHead eyebrow="04 · Research objectives" title="One aim, *four* specific objectives." />

        <Reveal className="mt-12">
          <div className="rounded-[2rem] border border-ink-900/15 p-8 sm:p-10">
            <p className="eyebrow text-leaf-dark">Main objective</p>
            <p className="h-display mt-4 text-2xl leading-[1.2] sm:text-3xl">{objectives.main}</p>
          </div>
        </Reveal>

        <Stagger className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {objectives.subs.map((item, index) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <SpotlightCard
                  spot="rgba(47,143,78,0.2)"
                  className="h-full rounded-[1.75rem] border border-ink-900/10 bg-white/55 p-7 transition-transform duration-500 hover:-translate-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-900 text-gel">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs text-ink-900/40">SO{index + 1}</span>
                  </div>
                  <h3 className="h-display mt-8 text-xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink-900/65">{item.body}</p>
                </SpotlightCard>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      {/* Methodology */}
      <Section tone="paper2" id="methodology" className="scroll-mt-10">
        <SectionHead
          eyebrow="05 · Methodology"
          title="A layered system, *end to end.*"
          lead="The architecture follows four layers — sensing, communication, processing and application — integrating real-time IoT sensing, cloud communication, machine-learning services and a mobile interface."
        />
        <div className="mt-14">
          <Architecture />
        </div>

        <MethodTimeline />

        <Reveal className="mt-20">
          <p className="eyebrow text-leaf-dark">Datasets by module · Table I</p>
          <div className="mt-5 overflow-x-auto rounded-[2rem] border border-ink-900/15 bg-paper">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-900/50">
                  <th className="px-6 py-4 font-normal">Module</th>
                  <th className="px-6 py-4 font-normal">Data type</th>
                  <th className="px-6 py-4 font-normal">Main inputs</th>
                  <th className="px-6 py-4 font-normal">Granularity</th>
                </tr>
              </thead>
              <tbody>
                {datasets.map((row) => (
                  <tr key={row.module} className="border-t border-ink-900/10 transition-colors hover:bg-gel/25">
                    <td className="px-6 py-4 font-semibold">{row.module}</td>
                    <td className="px-6 py-4 text-ink-900/70">{row.type}</td>
                    <td className="px-6 py-4 text-ink-900/70">{row.inputs}</td>
                    <td className="px-6 py-4 font-mono text-xs">{row.grain}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Section>

      {/* Results */}
      <Section tone="paper" id="results" className="scroll-mt-10">
        <SectionHead
          eyebrow="06 · Results"
          title="Tree ensembles *lead* — and the limits are stated."
          lead="Pick a module and a metric to compare every model evaluated. Across structured agricultural and market data, Random Forest and XGBoost gave the best balance of accuracy, efficiency and practicality."
        />
        <Reveal className="mt-14">
          <ResultsExplorer />
        </Reveal>
      </Section>

      {/* Technologies */}
      <Section tone="ink" id="technologies" className="scroll-mt-10">
        <SectionHead dark eyebrow="07 · Technologies" title="The stack, from *silicon* to screen." />

        <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {technologies.map((group) => (
            <StaggerItem key={group.group}>
              <SpotlightCard className="h-full rounded-[1.75rem] border border-white/10 bg-ink-800 p-7">
                <p className="eyebrow text-gel">{group.group}</p>
                <ul className="mt-6 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-paper/80">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gel" />
                      {item}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-gel">Non-functional focus</p>
            <ul className="mt-6 border-t border-white/10">
              {nonFunctional.map((item) => (
                <li key={item} className="flex items-center gap-4 border-b border-white/10 py-4 text-paper/85">
                  <Check size={18} aria-hidden="true" className="shrink-0 text-gel" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="eyebrow text-gel">Commercialization</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-[1.75rem] p-7 ${
                    plan.featured ? "bg-gel text-ink-900" : "border border-white/15"
                  }`}
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] opacity-70">{plan.name}</p>
                  <p className="h-display mt-5 text-4xl">{plan.price}</p>
                  <p className="mt-1 text-sm opacity-70">{plan.per ?? " "}</p>
                  <p className="mt-6 text-sm leading-6 opacity-80">{plan.note}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Future work */}
      <Section tone="paper" id="future" className="scroll-mt-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHead eyebrow="08 · Future work" title="Where it *grows* next." />
            <Reveal delay={0.2} className="mt-10">
              <Button
                href="/documents/Smart%20IOT-Based%20System%20For%20Aloe%20Vera%20-%20Research%20Paper.pdf"
                target="_blank"
                rel="noreferrer"
                variant="dark"
              >
                Read the full paper
              </Button>
            </Reveal>
          </div>

          <Stagger className="border-t border-ink-900/15">
            {futureWork.map((item, index) => (
              <StaggerItem key={item} y={14}>
                <div className="group flex items-baseline gap-6 border-b border-ink-900/15 py-5 transition-all duration-500 hover:pl-3">
                  <span className="font-mono text-xs text-leaf-dark">0{index + 1}</span>
                  <p className="text-lg leading-7">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      <NextPage to="/milestones" title="Project milestones" />
    </>
  );
}

export default Domain;
