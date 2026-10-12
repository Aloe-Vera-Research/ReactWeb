import { motion } from "motion/react";
import { ArrowUpRight, Clock, Download, FileText } from "lucide-react";

import { Reveal, SpotlightCard, Stagger, StaggerItem } from "../components/Motion";
import { NextPage, PageHero, Section, SectionHead } from "../components/Ui";
import { documents, proposals } from "../data/site";

function DocumentCard({ item }) {
  const Icon = item.icon;
  const available = Boolean(item.href);

  const body = (
    <SpotlightCard
      spot="rgba(47,143,78,0.2)"
      className={`flex h-full flex-col rounded-[1.75rem] border p-7 transition-all duration-500 ${
        item.featured
          ? "border-ink-900 bg-ink-900 text-paper"
          : "border-ink-900/10 bg-white/55"
      } ${available ? "group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-leaf-dark/15" : "opacity-70"}`}
    >
      <div className="flex items-start justify-between">
        <span
          className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:rotate-[-8deg] ${
            item.featured ? "bg-gel text-ink-900" : "bg-ink-900 text-gel"
          }`}
        >
          <Icon size={24} aria-hidden="true" />
        </span>
        <span className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] ${item.featured ? "border-white/20 text-paper/60" : "border-ink-900/15 text-ink-900/50"}`}>
          {item.type}
        </span>
      </div>

      <p className={`eyebrow mt-10 ${item.featured ? "text-gel" : "text-leaf-dark"}`}>{item.category}</p>
      <h3 className="h-display mt-3 text-2xl sm:text-3xl">{item.name}</h3>
      <p className={`mt-4 flex-1 text-sm leading-6 ${item.featured ? "text-paper/70" : "text-ink-900/65"}`}>
        {item.note}
      </p>

      <p className={`mt-8 flex items-center gap-2 border-t pt-5 text-sm font-semibold ${item.featured ? "border-white/15" : "border-ink-900/10"}`}>
        {available ? (
          <>
            {item.download ? <Download size={16} aria-hidden="true" /> : <FileText size={16} aria-hidden="true" />}
            {item.download ? "Download" : "Open document"}
            <ArrowUpRight size={16} aria-hidden="true" className="ml-auto transition-transform duration-300 group-hover:rotate-45" />
          </>
        ) : (
          <>
            <Clock size={16} aria-hidden="true" />
            Not published here yet
          </>
        )}
      </p>
    </SpotlightCard>
  );

  if (!available) return <div className="h-full">{body}</div>;

  return (
    <a
      href={item.href}
      className="group block h-full"
      {...(item.download ? { download: item.download } : { target: "_blank", rel: "noreferrer" })}
    >
      {body}
    </a>
  );
}

function Documents() {
  return (
    <>
      <PageHero
        index="04"
        eyebrow="Documents"
        title="The research, *on paper.*"
        lead="The topic assessment, the individual proposals and the research paper — every document produced along the way, ready to open or download."
      />

      <Section tone="paper">
        <SectionHead eyebrow="Library" title="Project *documents.*" />
        <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {documents.map((item) => (
            <StaggerItem key={item.name} className={item.featured ? "md:row-span-1" : ""}>
              <DocumentCard item={item} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section tone="ink">
        <SectionHead
          dark
          eyebrow="Individual proposals"
          title="Four components, *four* proposals."
          lead="Each member wrote a proposal for their own component. Open any one on its own."
        />

        <Reveal className="mt-14 border-t border-white/10">
          {proposals.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-wrap items-center gap-x-8 gap-y-2 overflow-hidden border-b border-white/10 py-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
            >
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-gel transition-transform duration-500 ease-out group-hover:scale-y-100" />
              <span className="relative font-mono text-xs text-paper/40 transition-colors duration-300 group-hover:text-ink-900/60 sm:pl-4">
                {item.id}
              </span>
              <span className="h-display relative flex-1 basis-64 text-2xl transition-colors duration-300 group-hover:text-ink-900 sm:text-4xl">
                {item.topic}
              </span>
              <span className="relative text-sm text-paper/60 transition-colors duration-300 group-hover:text-ink-900/70">
                {item.member}
              </span>
              <ArrowUpRight
                size={26}
                aria-hidden="true"
                className="relative transition-all duration-500 group-hover:rotate-45 group-hover:text-ink-900 sm:mr-4"
              />
            </motion.a>
          ))}
        </Reveal>
      </Section>

      <NextPage to="/presentations" title="Presentations" />
    </>
  );
}

export default Documents;
