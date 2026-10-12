import { ArrowUpRight, CalendarDays, Clock, Download, Layers } from "lucide-react";

import { LeafMark, NextPage, PageHero, Section, SectionHead } from "../components/Ui";
import { Stagger, StaggerItem } from "../components/Motion";
import { presentations, project } from "../data/site";

/* Stylised slide thumbnail; hovering fans the stacked slides out. */
function Deck({ item }) {
  return (
    <div className="relative aspect-[16/10]">
      <span className="absolute inset-0 rounded-3xl bg-ink-900/15 transition-transform duration-500 group-hover:translate-x-5 group-hover:translate-y-3 group-hover:rotate-6" />
      <span className="absolute inset-0 rounded-3xl bg-ink-900/30 transition-transform duration-500 group-hover:translate-x-2.5 group-hover:translate-y-1.5 group-hover:rotate-3" />
      <div className="grain absolute inset-0 flex flex-col justify-between overflow-hidden rounded-3xl bg-ink-900 p-6 text-paper transition-transform duration-500 group-hover:-translate-y-2 group-hover:-rotate-1 sm:p-8">
        <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-leaf/40 blur-3xl transition-transform duration-700 group-hover:scale-150" />
        <div className="relative flex items-center justify-between">
          <LeafMark className="h-8 w-8" />
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/50">{project.id}</span>
        </div>
        <div className="relative">
          <p className="font-mono text-xs text-gel">{item.number}</p>
          <p className="h-display mt-2 text-2xl sm:text-4xl">{item.name}</p>
        </div>
      </div>
    </div>
  );
}

function Presentations() {
  return (
    <>
      <PageHero
        index="05"
        eyebrow="Presentations"
        title="The story, told *slide by slide.*"
        lead="The decks presented at each assessment — from the first pitch of the idea to the integrated system."
      />

      <Section tone="paper">
        <SectionHead eyebrow="Slide decks" title="Four *presentations.*" />

        <Stagger className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2" gap={0.12}>
          {presentations.map((item) => {
            const available = Boolean(item.href);
            return (
              <StaggerItem key={item.number}>
                <article className={`group ${available ? "" : "opacity-60"}`}>
                  {available ? (
                    <a href={item.href} target="_blank" rel="noreferrer" aria-label={`Open ${item.name}`} className="block">
                      <Deck item={item} />
                    </a>
                  ) : (
                    <Deck item={item} />
                  )}

                  <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-900/55">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays size={14} aria-hidden="true" />
                      {item.date}
                    </span>
                    {item.slides ? (
                      <span className="inline-flex items-center gap-2">
                        <Layers size={14} aria-hidden="true" />
                        {item.slides} slides
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-4 leading-7 text-ink-900/70">{item.body}</p>

                  {available ? (
                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-3 text-sm font-semibold text-paper transition-colors duration-300 hover:bg-leaf-dark"
                      >
                        View slides
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </a>
                      <a
                        href={item.href}
                        download={item.fileName}
                        className="inline-flex items-center gap-2 rounded-full border border-ink-900/20 px-5 py-3 text-sm font-semibold transition-colors duration-300 hover:border-ink-900 hover:bg-ink-900 hover:text-paper"
                      >
                        <Download size={16} aria-hidden="true" />
                        Download PDF
                      </a>
                    </div>
                  ) : (
                    <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                      <Clock size={16} aria-hidden="true" />
                      Not published here yet
                    </p>
                  )}
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      <NextPage to="/about" title="Meet the team" />
    </>
  );
}

export default Presentations;
