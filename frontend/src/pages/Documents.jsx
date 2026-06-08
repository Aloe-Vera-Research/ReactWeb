import {
  Archive,
  ArrowRight,
  BookOpen,
  Download,
  FileArchive,
  FileCheck2,
  FileText,
  FolderOpen,
  Leaf,
  Library,
  LockKeyhole,
  Microscope,
  ScrollText,
  Sparkles,
} from "lucide-react";


const documents = [
  {
    number: "01",
    name: "Project Charter",
    category: "Project Planning",
    note: "Initial project planning, team structure, research scope, and project definition document.",
    fileType: "PDF",
    icon: ScrollText,
    link: "/documents/TAF_25-26J-166.pdf",
    actionLabel: "Open Document",
    download: false,
  },
  {
    number: "02",
    name: "Proposal Documents",
    category: "Research Proposal",
    note: "A compressed collection containing the individual research proposal documents prepared by the project members.",
    fileType: "ZIP",
    icon: FileArchive,
    link: "/documents/ProposalDoc.zip",
    actionLabel: "Download Package",
    download: true,
  },
  {
    number: "03",
    name: "Checklist Documents",
    category: "Assessment Material",
    note: "Assessment checklists, evaluation forms, and supporting documents related to the project review process.",
    fileType: "Document Set",
    icon: FileCheck2,
    link: null,
  },
  {
    number: "04",
    name: "Final Report",
    category: "Final Submission",
    note: "The complete final research report covering the project background, methodology, implementation, results, and conclusion.",
    fileType: "PDF",
    icon: BookOpen,
    link: null,
  },
  {
    number: "05",
    name: "Research Paper",
    category: "Publication",
    note: "Publication-oriented research paper presenting the AloeGreen problem, proposed approach, implementation, and research outcomes.",
    fileType: "PDF",
    icon: Microscope,
    link:
      "/documents/Smart%20IOT-Based%20System%20For%20Aloe%20Vera%20-%20Research%20Paper.pdf",
    actionLabel: "Open Research Paper",
    download: false,
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

function DocumentCard({ document }) {
  const Icon = document.icon;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 sm:p-7">
      <span className="absolute right-5 top-2 text-6xl font-black text-emerald-700/[0.04]">
        {document.number}
      </span>

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 transition group-hover:bg-emerald-700 group-hover:text-white">
            <Icon size={23} aria-hidden="true" />
          </span>

          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-slate-500">
            {document.fileType}
          </span>
        </div>

        <p className="mt-6 text-xs font-black uppercase tracking-[0.16em] text-emerald-700">
          {document.category}
        </p>

        <h2 className="mt-2 text-xl font-black tracking-tight text-slate-950">
          {document.name}
        </h2>

        <p className="mt-4 text-sm leading-7 text-slate-600">
          {document.note}
        </p>

        <div className="mt-auto pt-7">
          {document.link ? (
            <a
              href={document.link}
              target={document.download ? undefined : "_blank"}
              rel={document.download ? undefined : "noreferrer"}
              download={document.download ? document.name : undefined}
              className="group/action inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-700 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
            >
              {document.download ? (
                <Download size={17} aria-hidden="true" />
              ) : (
                <FileText size={17} aria-hidden="true" />
              )}

              {document.actionLabel}

              <ArrowRight
                size={17}
                className="transition-transform group-hover/action:translate-x-1"
                aria-hidden="true"
              />
            </a>
          ) : (
            <div className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-bold text-slate-400">
              <LockKeyhole size={16} aria-hidden="true" />
              File Not Added Yet
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Documents() {
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
            <SectionBadge icon={FileText}>Project Resources</SectionBadge>

            <h1 className="mt-7 max-w-4xl text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
              AloeGreen research{" "}
              <span className="text-emerald-700">document library.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Access the planning documents, research proposals, academic
              reports, supporting material, and publication resources produced
              throughout the AloeGreen project.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                <Library
                  size={16}
                  className="text-emerald-600"
                  aria-hidden="true"
                />
                Research Resources
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                <FileText
                  size={16}
                  className="text-emerald-600"
                  aria-hidden="true"
                />
                PDF Documents
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                <Archive
                  size={16}
                  className="text-emerald-600"
                  aria-hidden="true"
                />
                Downloadable Packages
              </span>
            </div>
          </div>

          {/* Hero document preview */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-emerald-300/30 to-lime-200/30 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-[0_30px_80px_-25px_rgba(6,78,59,0.28)] backdrop-blur-xl sm:p-7">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-sm font-black text-slate-900">
                    Document Collection
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Research files and academic resources
                  </p>
                </div>

                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <FolderOpen size={22} aria-hidden="true" />
                </span>
              </div>

              <div className="mt-6 space-y-3">
                {documents.slice(0, 4).map((document) => {
                  const Icon = document.icon;

                  return (
                    <div
                      key={document.number}
                      className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-700 shadow-sm">
                        <Icon size={18} aria-hidden="true" />
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <p className="truncate text-sm font-extrabold text-slate-900">
                            {document.name}
                          </p>

                          <span className="shrink-0 text-[10px] font-black tracking-[0.14em] text-emerald-600">
                            {document.number}
                          </span>
                        </div>

                        <p className="mt-1 text-xs text-slate-500">
                          {document.category}
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
                  <p className="text-sm font-bold">Centralized resources</p>

                  <p className="mt-1 text-xs leading-5 text-emerald-100">
                    Important AloeGreen research material is organized in one
                    accessible document library.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Document library introduction */}
      <section className="px-6 pb-4 pt-24 lg:px-8 lg:pt-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <SectionBadge icon={Library}>Document Collection</SectionBadge>

            <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">
              Explore the project documentation.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-slate-600 lg:text-lg">
            Open PDF documents in a new browser tab or download packaged
            resources directly to your device.
          </p>
        </div>
      </section>

      {/* Document cards */}
      <section className="px-6 py-14 lg:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {documents.map((document) => (
            <DocumentCard key={document.number} document={document} />
          ))}

          <article className="relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-emerald-700 via-emerald-800 to-slate-950 p-7 text-white shadow-xl">
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-lime-300/10 blur-3xl" />

            <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-200">
              <Leaf size={23} aria-hidden="true" />
            </span>

            <div className="relative mt-12">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-300">
                AloeGreen Research
              </p>

              <h2 className="mt-3 text-2xl font-black">
                Documentation supporting the complete project journey.
              </h2>

              <p className="mt-4 text-sm leading-7 text-emerald-50/75">
                The library brings together planning, proposal, evaluation, and
                publication-oriented materials produced throughout the
                research project.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Documentation purpose */}
      <section className="bg-slate-950 px-6 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionBadge icon={BookOpen} dark>
              Documentation Purpose
            </SectionBadge>

            <h2 className="mt-6 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
              Recording every important stage of the research.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-400 lg:text-lg">
              Project documentation records the academic reasoning, technical
              decisions, implementation process, evaluation results, and
              research contribution behind AloeGreen.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: ScrollText,
                title: "Planning",
                description:
                  "Documents explaining the initial research scope and project structure.",
              },
              {
                icon: Microscope,
                title: "Research",
                description:
                  "Material covering the problem, literature, methodology, and analysis.",
              },
              {
                icon: FileCheck2,
                title: "Evaluation",
                description:
                  "Supporting documents used throughout academic assessments.",
              },
              {
                icon: BookOpen,
                title: "Final Contribution",
                description:
                  "Reports and publications presenting the complete project outcome.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                    <Icon size={19} aria-hidden="true" />
                  </span>

                  <h3 className="mt-5 font-extrabold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing panel */}
      <section className="px-6 py-24 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-emerald-700 via-emerald-800 to-slate-950 px-7 py-14 sm:px-12 lg:py-16">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-lime-300/10 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-100">
                <FolderOpen size={17} aria-hidden="true" />
                AloeGreen Documents
              </span>

              <h2 className="mt-6 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">
                Research resources organized for easy access.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-8 text-emerald-50/80">
                Browse the documents that communicate the planning,
                implementation, academic evaluation, and research contribution
                of the AloeGreen platform.
              </p>
            </div>

            <span className="flex h-24 w-24 items-center justify-center rounded-[2rem] border border-white/15 bg-white/10 text-emerald-200 backdrop-blur">
              <Library size={40} strokeWidth={1.7} aria-hidden="true" />
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}