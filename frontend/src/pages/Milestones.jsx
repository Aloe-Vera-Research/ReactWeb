import {
  CalendarDays,
  CalendarRange,
  ChevronDown,
  ClipboardCheck,
  FileText,
  Flag,
  GraduationCap,
  Leaf,
  Presentation,
  Rocket,
  Sparkles,
} from "lucide-react";

const milestones = [
  {
    number: "01",
    title: "Project Proposal",
    shortLabel: "Proposal",
    date: "10 September 2025",
    icon: FileText,
    description:
      "Initial project definition, scope explanation, research problem identification, and concept validation for AloeGreen as an AI-IoT smart agriculture solution.",
    highlights: [
      "Research problem and scope definition",
      "Initial literature and domain review",
      "Proposed solution validation",
    ],
    open: true,
  },
  {
    number: "02",
    title: "Progress Presentation 1",
    shortLabel: "Progress 1",
    date: "5 January 2026",
    icon: Presentation,
    description:
      "Presentation of the initial research progress, platform architecture, methodology planning, technology selection, and module-level development work.",
    highlights: [
      "Architecture and methodology review",
      "Early module implementation",
      "Initial research progress presentation",
    ],
  },
  {
    number: "03",
    title: "Progress Presentation 2",
    shortLabel: "Progress 2",
    date: "12 March 2026",
    icon: ClipboardCheck,
    description:
      "Expanded evaluation of individual module implementations, model results, system integration, testing progress, and readiness for the final project stage.",
    highlights: [
      "Module implementation evaluation",
      "Model result interpretation",
      "System integration progress",
    ],
  },
  {
    number: "04",
    title: "Final Assessment",
    shortLabel: "Assessment",
    date: "4 May 2026",
    icon: Flag,
    description:
      "Final academic evaluation of the AloeGreen website, mobile application, IoT implementation, predictive modules, documentation, and overall research contribution.",
    highlights: [
      "Complete system evaluation",
      "Final research documentation",
      "Integrated platform presentation",
    ],
  },
  {
    number: "05",
    title: "Viva and Project Demonstration",
    shortLabel: "Viva",
    date: "4 May 2026",
    icon: GraduationCap,
    description:
      "Final viva and demonstration session explaining the research problem, literature foundation, methodology, technical implementation, results, and practical significance of AloeGreen.",
    highlights: [
      "Research contribution explanation",
      "Live platform demonstration",
      "Academic question and answer session",
    ],
  },
];

function SectionBadge({ icon: Icon, children, dark = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${
        dark
          ? "border-emerald-300/20 bg-emerald-300/10 text-emerald-200"
          : "border-emerald-200 bg-emerald-50 text-emerald-700"
      }`}
    >
      <Icon size={17} aria-hidden="true" />
      {children}
    </span>
  );
}

function MilestoneItem({ milestone, index }) {
  const Icon = milestone.icon;
  const isLast = index === milestones.length - 1;

  return (
    <div className="relative grid gap-5 md:grid-cols-[150px_1fr] md:gap-8">
      {/* Desktop date */}
      <div className="hidden pt-7 text-right md:block">
        <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-700">
          Milestone {milestone.number}
        </p>

        <p className="mt-2 text-sm font-bold leading-6 text-slate-700">
          {milestone.date}
        </p>
      </div>

      {/* Timeline point */}
      <div className="absolute left-5 top-6 z-10 md:left-[166px]">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl border-4 border-white bg-emerald-700 text-white shadow-lg shadow-emerald-700/20">
          <Icon size={19} aria-hidden="true" />
        </span>
      </div>

      {!isLast && (
        <div className="absolute bottom-[-24px] left-[41px] top-[68px] w-px bg-gradient-to-b from-emerald-300 to-emerald-100 md:left-[187px]" />
      )}

      {/* Milestone card */}
      <details
        open={milestone.open}
        className="group ml-16 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition duration-300 open:border-emerald-200 open:shadow-xl open:shadow-emerald-900/5 md:ml-14"
      >
        <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-6 transition hover:bg-emerald-50/50 sm:p-7 [&::-webkit-details-marker]:hidden">
          <div className="min-w-0">
            {/* Mobile date */}
            <div className="mb-3 flex flex-wrap items-center gap-2 md:hidden">
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-emerald-700">
                Milestone {milestone.number}
              </span>

              <span
                className="h-1 w-1 rounded-full bg-slate-300"
                aria-hidden="true"
              />

              <span className="text-xs font-semibold text-slate-500">
                {milestone.date}
              </span>
            </div>

            <h2 className="text-lg font-black tracking-tight text-slate-950 sm:text-xl">
              {milestone.title}
            </h2>

            <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
              {milestone.description}
            </p>
          </div>

          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition duration-300 group-open:rotate-180 group-open:border-emerald-200 group-open:bg-emerald-50 group-open:text-emerald-700">
            <ChevronDown size={19} aria-hidden="true" />
          </span>
        </summary>

        <div className="border-t border-slate-100 px-6 pb-7 pt-6 sm:px-7">
          <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            {milestone.description}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {milestone.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />

                <span className="text-sm font-semibold leading-6 text-slate-700">
                  {highlight}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3 rounded-2xl bg-emerald-50 p-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-700 shadow-sm">
              <CalendarDays size={18} aria-hidden="true" />
            </span>

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.14em] text-emerald-700">
                Assessment Date
              </p>

              <p className="mt-1 text-sm font-bold text-slate-800">
                {milestone.date}
              </p>
            </div>
          </div>
        </div>
      </details>
    </div>
  );
}

export default function Milestones() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#f7fcf8]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-emerald-200/40 blur-3xl" />
          <div className="absolute -right-36 top-0 h-[480px] w-[480px] rounded-full bg-lime-200/30 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08)_1px,transparent_1px)] [background-size:28px_28px]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div>
            <SectionBadge icon={CalendarRange}>
              Assessments & Project Progress
            </SectionBadge>

            <h1 className="mt-7 max-w-4xl text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
              The academic journey of{" "}
              <span className="text-emerald-700">AloeGreen.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Explore the key assessments and academic checkpoints that shaped
              AloeGreen from its initial proposal to the final research
              demonstration.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                <CalendarDays
                  size={16}
                  className="text-emerald-600"
                  aria-hidden="true"
                />
                5 Key Milestones
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                <GraduationCap
                  size={16}
                  className="text-emerald-600"
                  aria-hidden="true"
                />
                Academic Assessments
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                <Leaf
                  size={16}
                  className="text-emerald-600"
                  aria-hidden="true"
                />
                Research Development
              </span>
            </div>
          </div>

          {/* Hero journey preview */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-emerald-300/30 to-lime-200/30 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-[0_30px_80px_-25px_rgba(6,78,59,0.28)] backdrop-blur-xl sm:p-7">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-sm font-black text-slate-900">
                    Project Journey
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Proposal to final demonstration
                  </p>
                </div>

                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <Rocket size={21} aria-hidden="true" />
                </span>
              </div>

              <div className="relative mt-6 space-y-3">
                <div className="absolute bottom-5 left-5 top-5 w-px bg-emerald-200" />

                {milestones.map((milestone) => {
                  const Icon = milestone.icon;

                  return (
                    <div
                      key={milestone.number}
                      className="relative flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4"
                    >
                      <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-700 shadow-sm">
                        <Icon size={18} aria-hidden="true" />
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <p className="truncate text-sm font-extrabold text-slate-900">
                            {milestone.shortLabel}
                          </p>

                          <span className="shrink-0 text-[10px] font-black tracking-[0.15em] text-emerald-600">
                            {milestone.number}
                          </span>
                        </div>

                        <p className="mt-1 text-xs text-slate-500">
                          {milestone.date}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 flex items-start gap-3 rounded-2xl bg-emerald-700 p-4 text-white">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Sparkles size={18} aria-hidden="true" />
                </span>

                <div>
                  <p className="text-sm font-bold">Research progression</p>

                  <p className="mt-1 text-xs leading-5 text-emerald-100">
                    Each academic checkpoint supported the development and
                    refinement of the complete AloeGreen platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline introduction */}
      <section className="px-6 pb-4 pt-24 lg:px-8 lg:pt-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <SectionBadge icon={Flag}>Milestone Timeline</SectionBadge>

            <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">
              Key stages of the research project.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-slate-600 lg:text-lg">
            Expand each milestone to review its purpose, academic focus, key
            activities, and scheduled assessment date.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 py-14 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-5xl space-y-6">
          {milestones.map((milestone, index) => (
            <MilestoneItem
              key={milestone.number}
              milestone={milestone}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Journey summary */}
      <section className="bg-slate-950 px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionBadge icon={GraduationCap} dark>
              Academic Development
            </SectionBadge>

            <h2 className="mt-6 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
              Every milestone strengthened the final research contribution.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-400 lg:text-lg">
              The milestone process supported continuous evaluation of the
              problem definition, methodology, technical implementation,
              machine-learning modules, system integration, documentation, and
              final project presentation.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Research scope validation",
              "Architecture and methodology review",
              "Module-level evaluation",
              "Platform integration",
              "Final documentation",
              "System demonstration",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                  <Leaf size={17} aria-hidden="true" />
                </span>

                <span className="text-sm font-semibold text-slate-200">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing statement */}
      <section className="px-6 py-24 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-emerald-700 via-emerald-800 to-slate-950 px-7 py-14 sm:px-12 lg:py-16">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-lime-300/10 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-100">
                <CalendarRange size={17} aria-hidden="true" />
                AloeGreen Milestones
              </span>

              <h2 className="mt-6 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">
                From initial concept to complete research platform.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-8 text-emerald-50/80">
                The AloeGreen milestone journey reflects the continued
                development, evaluation, refinement, and presentation of the
                final AI-IoT smart agriculture solution.
              </p>
            </div>

            <span className="flex h-24 w-24 items-center justify-center rounded-[2rem] border border-white/15 bg-white/10 text-emerald-200 backdrop-blur">
              <Rocket size={40} strokeWidth={1.7} aria-hidden="true" />
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}