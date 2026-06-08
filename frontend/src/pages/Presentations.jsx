
import {
  ArrowRight,
  CalendarDays,
  ClipboardCheck,
  Download,
  ExternalLink,
  FileSliders,
  Flag,
  GraduationCap,
  Layers3,
  Leaf,
  Library,
  LockKeyhole,
  MonitorPlay,
  Presentation,
  Sparkles,
} from "lucide-react";

import ProposalPresentation from "../assets/presentations/ProposalPresentation.pdf";
import ProgressPresentation1 from "../assets/presentations/ProgressPresentation1.pdf";
import ProgressPresentation2 from "../assets/presentations/ProgressPresentation2.pdf";

const presentations = [
  {
    number: "01",
    name: "Proposal Presentation",
    shortName: "Proposal",
    category: "Project Foundation",
    description:
      "Introduces the initial project concept, research motivation, problem definition, objectives, scope, and proposed AloeGreen solution.",
    date: "10 September 2025",
    fileType: "PDF",
    icon: FileSliders,
    link: ProposalPresentation,
    fileName: "AloeGreen-Proposal-Presentation.pdf",
  },
  {
    number: "02",
    name: "Progress Presentation 1",
    shortName: "Progress 1",
    category: "Initial Development",
    description:
      "Presents the early research progress, domain understanding, platform architecture, technology selection, and initial module development.",
    date: "5 January 2026",
    fileType: "PDF",
    icon: MonitorPlay,
    link: ProgressPresentation1,
    fileName: "AloeGreen-Progress-Presentation-1.pdf",
  },
  {
    number: "03",
    name: "Progress Presentation 2",
    shortName: "Progress 2",
    category: "Implementation Review",
    description:
      "Covers module implementation, model evaluation, technical outcomes, system integration, testing, and overall research progress.",
    date: "12 March 2026",
    fileType: "PDF",
    icon: ClipboardCheck,
    link: ProgressPresentation2,
    fileName: "AloeGreen-Progress-Presentation-2.pdf",
  },
  {
    number: "04",
    name: "Final Presentation",
    shortName: "Final",
    category: "Final Research Delivery",
    description:
      "Provides the complete overview of the research problem, methodology, platform implementation, model results, evaluation, and final contribution.",
    date: "4 May 2026",
    fileType: "PDF",
    icon: GraduationCap,
    link: null,
    fileName: null,
  },
];

const presentationStages = [
  {
    number: "01",
    title: "Define",
    description:
      "Introduce the research problem, objectives, scope, and proposed AloeGreen concept.",
  },
  {
    number: "02",
    title: "Develop",
    description:
      "Present the initial architecture, methodology, technologies, and module development.",
  },
  {
    number: "03",
    title: "Evaluate",
    description:
      "Discuss model performance, module outcomes, integration, and testing progress.",
  },
  {
    number: "04",
    title: "Demonstrate",
    description:
      "Communicate the complete research contribution and demonstrate the final platform.",
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

function PresentationCard({ item }) {
  const Icon = item.icon;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 sm:p-7">
      <span className="pointer-events-none absolute right-5 top-1 text-7xl font-black text-emerald-700/[0.04]">
        {item.number}
      </span>

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 transition duration-300 group-hover:bg-emerald-700 group-hover:text-white">
            <Icon size={23} aria-hidden="true" />
          </span>

          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-slate-500">
            {item.fileType}
          </span>
        </div>

        <p className="mt-6 text-xs font-black uppercase tracking-[0.16em] text-emerald-700">
          {item.category}
        </p>

        <h2 className="mt-2 text-xl font-black tracking-tight text-slate-950">
          {item.name}
        </h2>

        <p className="mt-4 text-sm leading-7 text-slate-600">
          {item.description}
        </p>

        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-700 shadow-sm">
            <CalendarDays size={18} aria-hidden="true" />
          </span>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">
              Presentation Date
            </p>

            <p className="mt-1 text-sm font-bold text-slate-800">
              {item.date}
            </p>
          </div>
        </div>

        <div className="mt-auto pt-7">
          {item.link ? (
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="group/action inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-emerald-700 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
              >
                <ExternalLink size={17} aria-hidden="true" />
                Open Slides

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover/action:translate-x-1"
                  aria-hidden="true"
                />
              </a>

              <a
                href={item.link}
                download={item.fileName}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100"
                aria-label={`Download ${item.name}`}
              >
                <Download size={17} aria-hidden="true" />
                Download
              </a>
            </div>
          ) : (
            <div className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-bold text-slate-400">
              <LockKeyhole size={16} aria-hidden="true" />
              Slides Not Added Yet
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Presentations() {
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
            <SectionBadge icon={Presentation}>
              Slides & Research Decks
            </SectionBadge>

            <h1 className="mt-7 max-w-4xl text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
              AloeGreen presentation{" "}
              <span className="text-emerald-700">library.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Explore the slide decks used to communicate the AloeGreen
              research journey, from the initial project proposal to progress
              evaluations and final academic delivery.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                <Library
                  size={16}
                  className="text-emerald-600"
                  aria-hidden="true"
                />
                Research Presentations
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                <Presentation
                  size={16}
                  className="text-emerald-600"
                  aria-hidden="true"
                />
                Academic Slide Decks
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                <Download
                  size={16}
                  className="text-emerald-600"
                  aria-hidden="true"
                />
                Downloadable Files
              </span>
            </div>
          </div>

          {/* Presentation preview */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-emerald-300/30 to-lime-200/30 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-[0_30px_80px_-25px_rgba(6,78,59,0.28)] backdrop-blur-xl sm:p-7">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-sm font-black text-slate-900">
                    Presentation Journey
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    From concept introduction to final delivery
                  </p>
                </div>

                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <MonitorPlay size={22} aria-hidden="true" />
                </span>
              </div>

              <div className="relative mt-6 space-y-3">
                <div className="absolute bottom-5 left-5 top-5 w-px bg-emerald-200" />

                {presentations.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.number}
                      className="relative flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4"
                    >
                      <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-700 shadow-sm">
                        <Icon size={18} aria-hidden="true" />
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <p className="truncate text-sm font-extrabold text-slate-900">
                            {item.shortName}
                          </p>

                          <span className="shrink-0 text-[10px] font-black tracking-[0.14em] text-emerald-600">
                            {item.number}
                          </span>
                        </div>

                        <p className="mt-1 text-xs text-slate-500">
                          {item.date}
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
                  <p className="text-sm font-bold">
                    Research communicated clearly
                  </p>

                  <p className="mt-1 text-xs leading-5 text-emerald-100">
                    Each presentation records an important stage in the
                    development and evaluation of AloeGreen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Presentation collection introduction */}
      <section className="px-6 pb-4 pt-24 lg:px-8 lg:pt-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <SectionBadge icon={Library}>
              Presentation Collection
            </SectionBadge>

            <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">
              Review each stage of the project.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-slate-600 lg:text-lg">
            Open available slide decks in a new browser tab or download a copy
            for offline viewing.
          </p>
        </div>
      </section>

      {/* Presentation cards */}
      <section className="px-6 py-14 lg:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {presentations.map((item) => (
            <PresentationCard key={item.number} item={item} />
          ))}
        </div>
      </section>

      {/* Presentation progression */}
      <section className="bg-slate-950 px-6 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionBadge icon={Layers3} dark>
                Academic Communication
              </SectionBadge>

              <h2 className="mt-6 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
                Presenting the research as a clear progression.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-slate-400 lg:ml-auto lg:text-lg">
              Each presentation builds on the previous stage, communicating how
              the initial research concept developed into a complete integrated
              AI-IoT platform.
            </p>
          </div>

          <div className="relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-[12.5%] right-[12.5%] top-9 hidden h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent lg:block" />

            {presentationStages.map((stage) => (
              <article
                key={stage.number}
                className="relative rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6"
              >
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-sm font-black text-emerald-300 ring-1 ring-emerald-400/20">
                  {stage.number}
                </span>

                <h3 className="mt-6 text-xl font-extrabold text-white">
                  {stage.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {stage.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Presentation purpose */}
      <section className="px-6 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-emerald-100 bg-emerald-50 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative overflow-hidden bg-gradient-to-br from-emerald-700 via-emerald-800 to-slate-950 p-8 sm:p-10 lg:p-12">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full border border-white/10" />

            <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-lime-300/10 blur-3xl" />

            <div className="relative flex h-full min-h-[320px] flex-col justify-between">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-emerald-200 ring-1 ring-white/10">
                <Presentation size={27} aria-hidden="true" />
              </span>

              <div className="mt-16">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-300">
                  Presentation Purpose
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  Communicating complex research in an understandable format.
                </h2>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
            <p className="text-base leading-8 text-slate-600 lg:text-lg">
              The presentation series documents the development of AloeGreen
              while communicating the research problem, methodology,
              architecture, technical decisions, model evaluation, system
              integration, and final contribution.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Research problem communication",
                "Architecture explanation",
                "Module progress reporting",
                "Model result interpretation",
                "Platform demonstration",
                "Academic evaluation support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm"
                >
                  <Leaf
                    size={18}
                    className="mt-0.5 shrink-0 text-emerald-600"
                    aria-hidden="true"
                  />

                  <span className="text-sm font-semibold leading-6 text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing panel */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-emerald-700 via-emerald-800 to-slate-950 px-7 py-14 sm:px-12 lg:py-16">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full border border-white/10" />

          <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-lime-300/10 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-100">
                <Flag size={17} aria-hidden="true" />
                AloeGreen Presentations
              </span>

              <h2 className="mt-6 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">
                From proposal to final research delivery.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-8 text-emerald-50/80">
                The presentation collection reflects the continued
                development, evaluation, refinement, and communication of the
                AloeGreen smart agriculture platform.
              </p>
            </div>

            <span className="flex h-24 w-24 items-center justify-center rounded-[2rem] border border-white/15 bg-white/10 text-emerald-200 backdrop-blur">
              <GraduationCap
                size={40}
                strokeWidth={1.7}
                aria-hidden="true"
              />
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

