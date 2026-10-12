import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight, Check, Droplets, Sun, Thermometer } from "lucide-react";

import AloePlant from "../components/AloePlant";
import Architecture from "../components/Architecture";
import SensorConsole from "../components/SensorConsole";
import {
  Counter,
  Marquee,
  Parallax,
  Reveal,
  SplitText,
  SpotlightCard,
  Stagger,
  StaggerItem,
} from "../components/Motion";
import { Button, Eyebrow, Section, SectionHead } from "../components/Ui";
import {
  contributions,
  heroStats,
  members,
  modules,
  problems,
  project,
  techMarquee,
} from "../data/site";
import { gallery } from "../data/gallery";

const heroChips = [
  { icon: Thermometer, label: "Air temp", value: "29.4 °C", className: "left-0 top-[18%]", delay: 1.9 },
  { icon: Droplets, label: "Soil moisture", value: "23 %", className: "right-0 top-[30%]", delay: 2.1 },
  { icon: Sun, label: "Light", value: "41.2k lux", className: "left-[4%] bottom-[22%]", delay: 2.3 },
];

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const plantY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="grain relative min-h-screen overflow-hidden bg-ink-900 text-paper">
      <div aria-hidden="true" className="grid-lines absolute inset-0" />
      <motion.div
        aria-hidden="true"
        className="absolute -left-40 top-1/4 h-[560px] w-[560px] rounded-full bg-leaf/25 blur-[130px]"
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="shell relative z-10 grid min-h-screen items-center gap-6 pb-24 pt-32 lg:grid-cols-[1.1fr_0.9fr] lg:pt-28">
        <motion.div style={{ y: copyY, opacity: fade }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Eyebrow dark>
              Research project {project.id} · {project.instituteShort}
            </Eyebrow>
          </motion.div>

          <h1 className="h-display mt-7 text-[3.4rem] sm:text-7xl lg:text-[5.6rem] xl:text-[6.4rem]">
            <SplitText text="Aloe vera, grown on *data* not guesswork." delay={0.3} immediate />
          </h1>

          <motion.p
            className="mt-8 max-w-xl text-lg leading-8 text-paper/70"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95 }}
          >
            AloeGreen is a crop-specific AI–IoT platform for Sri Lankan Aloe vera
            growers. One field sensor node, five intelligent modules and a mobile
            app turn soil, weather, leaf and market data into decisions.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Button to="/domain">Explore the research</Button>
            <Button
              href="/documents/Smart%20IOT-Based%20System%20For%20Aloe%20Vera%20-%20Research%20Paper.pdf"
              target="_blank"
              rel="noreferrer"
              variant="ghost"
            >
              Read the paper
            </Button>
          </motion.div>
        </motion.div>

        <motion.div className="relative mx-auto w-full max-w-[560px]" style={{ y: plantY }}>
          <AloePlant className="w-full" />

          {heroChips.map((chip) => {
            const Icon = chip.icon;
            return (
              <motion.div
                key={chip.label}
                className={`absolute ${chip.className}`}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: chip.delay, type: "spring", bounce: 0.45 }}
              >
                <div
                  className="flex animate-floaty items-center gap-3 rounded-2xl border border-white/10 bg-ink-950/70 px-4 py-3 shadow-2xl backdrop-blur-md"
                  style={{ animationDelay: `${chip.delay}s` }}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gel/15 text-gel">
                    <Icon size={17} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-paper/50">
                      {chip.label}
                    </span>
                    <span className="block font-display text-lg font-semibold tabular-nums">{chip.value}</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <motion.a
        href="#numbers"
        className="eyebrow absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-3 text-paper/50 transition-colors hover:text-gel sm:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4 }}
      >
        Scroll
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown size={14} aria-hidden="true" />
        </motion.span>
      </motion.a>
    </section>
  );
}

function ModuleShowcase() {
  const [activeKey, setActiveKey] = useState(modules[0].key);
  const active = modules.find((module) => module.key === activeKey);
  const Icon = active.icon;

  return (
    <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
      <Stagger className="border-t border-white/10">
        {modules.map((module) => {
          const selected = module.key === activeKey;
          return (
            <StaggerItem key={module.key} y={16}>
              <button
                type="button"
                onMouseEnter={() => setActiveKey(module.key)}
                onFocus={() => setActiveKey(module.key)}
                onClick={() => setActiveKey(module.key)}
                aria-pressed={selected}
                className="group relative flex w-full items-center gap-5 border-b border-white/10 py-6 text-left"
              >
                <span className={`font-mono text-xs transition-colors duration-300 ${selected ? "text-gel" : "text-paper/35"}`}>
                  {module.number}
                </span>
                <span
                  className={`h-display flex-1 text-2xl transition-all duration-500 sm:text-4xl ${
                    selected ? "translate-x-2 text-gel" : "text-paper/55 group-hover:text-paper"
                  }`}
                >
                  {module.title}
                </span>
                <ArrowUpRight
                  size={24}
                  aria-hidden="true"
                  className={`transition-all duration-500 ${selected ? "rotate-45 text-gel opacity-100" : "opacity-0"}`}
                />
              </button>
            </StaggerItem>
          );
        })}
      </Stagger>

      <Reveal className="lg:sticky lg:top-28 lg:self-start">
        <SpotlightCard className="min-h-[470px] overflow-hidden rounded-[2rem] border border-white/10 bg-ink-800 p-7 sm:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.key}
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-start justify-between gap-6">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gel text-ink-900">
                  <Icon size={26} aria-hidden="true" />
                </span>
                <div className="text-right">
                  <p className="h-display text-5xl text-gel">{active.stat.value}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/50">
                    {active.stat.label}
                  </p>
                </div>
              </div>

              <p className="accent mt-8 text-3xl text-paper">{active.tagline}</p>
              <p className="mt-4 leading-7 text-paper/70">{active.body}</p>

              <ul className="mt-6 space-y-2.5">
                {active.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-6 text-paper/80">
                    <Check size={16} aria-hidden="true" className="mt-1 shrink-0 text-gel" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
                <div className="flex flex-wrap gap-2">
                  {active.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-paper/60">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-paper/50">Led by {active.owner}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </SpotlightCard>
      </Reveal>
    </div>
  );
}

function Home() {
  const strip = gallery.slice(0, 10);

  return (
    <>
      <Hero />

      {/* Technology ticker */}
      <div className="border-y border-white/10 bg-ink-950 py-5 text-paper/60">
        <Marquee duration={36}>
          {techMarquee.map((item) => (
            <span key={item} className="flex items-center gap-10 px-5 font-mono text-sm uppercase tracking-[0.2em]">
              {item}
              <span className="h-1.5 w-1.5 rounded-full bg-gel" />
            </span>
          ))}
        </Marquee>
      </div>

      {/* Headline numbers */}
      <Section tone="paper" id="numbers" className="!py-20">
        <Stagger className="grid gap-px overflow-hidden rounded-[2rem] bg-ink-900/10 sm:grid-cols-2 lg:grid-cols-4">
          {heroStats.map((stat) => (
            <StaggerItem key={stat.label} className="bg-paper p-8">
              <p className="h-display text-5xl text-leaf-dark xl:text-6xl">
                <Counter value={stat.value} decimals={stat.decimals ?? 0} />
              </p>
              <p className="mt-4 font-semibold">{stat.label}</p>
              <p className="mt-1 text-sm text-ink-900/55">{stat.note}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* The problem */}
      <Section tone="paper" className="!pt-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHead
              eyebrow="The problem"
              title="A valuable export crop, still farmed *by feel.*"
            />
            <Reveal delay={0.2}>
              <p className="mt-6 text-lg leading-8 text-ink-900/70">
                In 2022 Sri Lanka exported 2,080 metric tons of Aloe vera and its
                derivatives, earning about USD 15.06 million. Yet cultivation
                still leans on manual observation and experience — and existing
                research treats disease, yield and market analysis as separate
                problems.
              </p>
            </Reveal>

            <Reveal delay={0.3} className="mt-10 grid grid-cols-2 gap-6 border-t border-ink-900/15 pt-8">
              <div>
                <p className="h-display text-5xl">
                  <Counter value={2080} />
                  <span className="ml-2 text-xl text-ink-900/50">MT</span>
                </p>
                <p className="mt-2 text-sm text-ink-900/60">exported in 2022</p>
              </div>
              <div>
                <p className="h-display text-5xl">
                  <Counter value={15.06} decimals={2} prefix="$" />
                  <span className="ml-1 text-xl text-ink-900/50">M</span>
                </p>
                <p className="mt-2 text-sm text-ink-900/60">in export revenue</p>
              </div>
            </Reveal>
            <Reveal delay={0.35}>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-900/40">
                Source: Department of Export Agriculture, Annual Performance Report 2022
              </p>
            </Reveal>
          </div>

          <Stagger className="grid gap-4 sm:grid-cols-2">
            {problems.map((problem, index) => (
              <StaggerItem key={problem.title} className={index % 2 === 1 ? "sm:translate-y-10" : ""}>
                <SpotlightCard
                  spot="rgba(47,143,78,0.18)"
                  className="h-full rounded-[1.75rem] border border-ink-900/10 bg-white/50 p-7 transition-transform duration-500 hover:-translate-y-1.5"
                >
                  <p className="font-mono text-xs text-leaf-dark">0{index + 1}</p>
                  <h3 className="h-display mt-8 text-2xl">{problem.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink-900/65">{problem.body}</p>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* Modules */}
      <Section tone="ink">
        <SectionHead
          dark
          eyebrow="The platform"
          title="Five modules. *One* field of view."
          lead="Each module answers a question a grower actually asks. Together they cover the cultivation lifecycle — from what the soil needs today to what the market pays next."
        />
        <ModuleShowcase />
      </Section>

      {/* Architecture */}
      <Section tone="paper">
        <SectionHead
          eyebrow="How it works"
          title="From a probe in the soil to a *phone* in the hand."
          lead="A layered architecture carries each reading through sensing, communication and processing to the application. Hover a layer to follow the data."
        />
        <div className="mt-16">
          <Architecture />
        </div>
      </Section>

      {/* Sensor console */}
      <Section tone="ink2">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <SectionHead
            dark
            eyebrow="Live monitoring"
            title="Ten signals, *one* node."
            lead="An ESP32-based device measures the air, the light, the rain and the soil continuously — so models see the field as it is, not as it was last recorded by hand."
          />
          <Reveal delay={0.2}>
            <p className="max-w-xs text-sm leading-6 text-paper/50">
              The console below is an animated illustration with simulated
              values. It shows the parameters the real node reports.
            </p>
          </Reveal>
        </div>
        <Reveal className="mt-14" delay={0.1}>
          <SensorConsole />
        </Reveal>
      </Section>

      {/* Contributions */}
      <Section tone="paper">
        <SectionHead
          eyebrow="What is new"
          title="Contributions that go beyond *prediction.*"
        />
        <Stagger className="mt-16 grid gap-px overflow-hidden rounded-[2rem] bg-ink-900/10 md:grid-cols-2 lg:grid-cols-6">
          {contributions.map((item, index) => {
            const Icon = item.icon;
            return (
              <StaggerItem
                key={item.title}
                className={`group bg-paper p-8 transition-colors duration-500 hover:bg-ink-900 hover:text-paper ${
                  index < 2 ? "lg:col-span-3" : "lg:col-span-2"
                }`}
              >
                <Icon size={28} aria-hidden="true" className="text-leaf-dark transition-colors duration-500 group-hover:text-gel" />
                <h3 className="h-display mt-10 text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink-900/65 transition-colors duration-500 group-hover:text-paper/70">
                  {item.body}
                </p>
              </StaggerItem>
            );
          })}
        </Stagger>
        <Reveal className="mt-12">
          <Button to="/domain" variant="dark">See methodology and results</Button>
        </Reveal>
      </Section>

      {/* Field visit strip */}
      <section className="grain relative overflow-hidden bg-ink-900 py-24 text-paper">
        <div className="shell relative z-10 flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            dark
            eyebrow="In the field"
            title="Built *with* growers, not just for them."
          />
          <Reveal>
            <Button to="/gallery" variant="ghost">Open the gallery</Button>
          </Reveal>
        </div>
        <div className="relative z-10 mt-14 space-y-4">
          <Marquee duration={60}>
            {strip.map((item) => (
              <img
                key={item.src}
                src={item.src}
                alt={item.caption}
                loading="lazy"
                className="mx-2 h-56 w-80 rounded-3xl object-cover grayscale transition-all duration-700 hover:grayscale-0 sm:h-72 sm:w-[26rem]"
              />
            ))}
          </Marquee>
        </div>
      </section>

      {/* Team teaser */}
      <Section tone="paper2">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHead
              eyebrow="The people"
              title="Four researchers, *two* supervisors."
              lead="AloeGreen is a final-year research project at the Sri Lanka Institute of Information Technology."
            />
            <Reveal delay={0.2} className="mt-10 flex flex-wrap gap-4">
              <Button to="/about" variant="dark">Meet the team</Button>
              <Button to="/contact" variant="outline">Get in touch</Button>
            </Reveal>
          </div>

          <Parallax offset={30}>
            <Stagger className="grid grid-cols-2 gap-4">
              {members.map((member, index) => (
                <StaggerItem key={member.id} className={index % 2 === 1 ? "translate-y-8" : ""}>
                  <Link to="/about" className="group relative block aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-ink-900">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/10 to-transparent" />
                    <span className="absolute inset-x-0 bottom-0 p-5 text-paper">
                      <span className="block font-display text-lg font-semibold leading-tight">{member.name}</span>
                      <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.14em] text-gel">
                        {member.id}
                      </span>
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </Parallax>
        </div>
      </Section>
    </>
  );
}

export default Home;
