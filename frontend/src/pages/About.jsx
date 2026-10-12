import { Globe, Mail } from "lucide-react";

import { Reveal, SpotlightCard, Stagger, StaggerItem } from "../components/Motion";
import { NextPage, PageHero, Section, SectionHead } from "../components/Ui";
import { members, project, supervisors } from "../data/site";

function MemberCard({ member }) {
  const Icon = member.icon;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-ink-900/10 bg-white/55 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-leaf-dark/15">
      <div className="relative aspect-[4/4.4] overflow-hidden bg-ink-900">
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-transparent to-transparent" />
        <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-gel text-ink-900 transition-transform duration-500 group-hover:rotate-12">
          <Icon size={20} aria-hidden="true" />
        </span>
        <p className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.16em] text-gel">
          {member.id}
          {member.leader ? " · Group leader" : ""}
        </p>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="h-display text-2xl">{member.name}</h3>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-900/45">{member.formal}</p>
        <p className="mt-5 font-semibold leading-6 text-leaf-dark">{member.component}</p>
        <p className="mb-6 mt-2 text-sm leading-6 text-ink-900/65">{member.bio}</p>
        <div className="mt-auto flex flex-col items-start gap-2 border-t border-ink-900/10 pt-5 text-sm font-semibold">
          <a
            href={`mailto:${member.email}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-leaf-dark"
          >
            <Mail size={15} aria-hidden="true" />
            {member.email}
          </a>
          {member.site ? (
            <a
              href={member.site}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-leaf-dark"
            >
              <Globe size={15} aria-hidden="true" />
              {member.siteLabel}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function About() {
  return (
    <>
      <PageHero
        index="06"
        eyebrow="About us"
        title="The people *growing* AloeGreen."
        lead={`Four undergraduates and two supervisors from the ${project.department}, ${project.faculty}, ${project.institute}.`}
      />

      <Section tone="paper">
        <SectionHead eyebrow="Research team" title="Four components, *one* team." />
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <StaggerItem key={member.id}>
              <MemberCard member={member} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section tone="ink">
        <SectionHead
          dark
          eyebrow="Supervision"
          title="Guided by *experience.*"
          lead="Academic direction, technical review and continuous evaluation came from two members of the SLIIT Faculty of Computing."
        />

        <Stagger className="mt-14 grid gap-6 lg:grid-cols-2">
          {supervisors.map((person) => (
            <StaggerItem key={person.name}>
              <SpotlightCard className="group flex h-full flex-col gap-7 rounded-[2rem] border border-white/10 bg-ink-800 p-7 sm:flex-row sm:p-9">
                <div className="h-40 w-40 shrink-0 overflow-hidden rounded-[1.5rem] bg-ink-700">
                  <img
                    src={person.image}
                    alt={person.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div>
                  <p className="eyebrow text-gel">{person.label}</p>
                  <h3 className="h-display mt-3 text-3xl">{person.name}</h3>
                  <p className="mt-2 text-sm text-paper/55">
                    {person.position} · {project.department}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-paper/70">{person.bio}</p>
                  <a
                    href={`mailto:${person.email}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-paper/85 transition-colors hover:text-gel"
                  >
                    <Mail size={15} aria-hidden="true" />
                    {person.email}
                  </a>
                </div>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section tone="paper2">
        <div className="grid gap-10 lg:grid-cols-3">
          {[
            { label: "Project ID", value: project.id },
            { label: "Module", value: project.module },
            { label: "Research group", value: project.group },
          ].map((item, index) => (
            <Reveal key={item.label} delay={index * 0.1}>
              <p className="eyebrow text-leaf-dark">{item.label}</p>
              <p className="h-display mt-4 text-3xl sm:text-4xl">{item.value}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <NextPage to="/gallery" title="Field gallery" />
    </>
  );
}

export default About;
