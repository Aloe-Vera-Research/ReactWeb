import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Globe, Mail, MapPin, Phone, Send } from "lucide-react";

import { Reveal, SpotlightCard, Stagger, StaggerItem } from "../components/Motion";
import { PageHero, Section, SectionHead } from "../components/Ui";
import { members, project } from "../data/site";

const topics = ["General inquiry", "Research collaboration", "Project demo request"];

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="eyebrow text-ink-900/50">{label}</span>
      {children}
    </label>
  );
}

const inputClass =
  "mt-2 w-full border-b border-ink-900/20 bg-transparent py-3 text-lg outline-none transition-colors duration-300 placeholder:text-ink-900/30 focus:border-leaf-dark";

function Contact() {
  const leader = members.find((member) => member.leader);
  const [topic, setTopic] = useState(topics[0]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // No backend: compose the message in the visitor's own mail app.
  const mailto = `mailto:${project.email}?subject=${encodeURIComponent(
    `AloeGreen — ${topic}`,
  )}&body=${encodeURIComponent(`${message}\n\n${name}`)}`;

  const channels = [
    { icon: Mail, label: "Email", value: project.email, href: `mailto:${project.email}` },
    { icon: Phone, label: "Phone", value: project.phone, href: `tel:${project.phoneHref}` },
    { icon: Globe, label: "Leader's website", value: project.leaderSiteLabel, href: project.leaderSite, external: true },
  ];

  return (
    <>
      <PageHero
        index="08"
        eyebrow="Contact"
        title="Let's talk about *aloe* and data."
        lead="Questions about the research, a collaboration in mind, or want to see the platform running? Reach the team directly."
      />

      <Section tone="paper">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <SectionHead eyebrow="Reach us" title="Ways to *get in touch.*" />

            <Reveal delay={0.15} className="mt-10">
              <SpotlightCard className="grain relative overflow-hidden rounded-[2rem] bg-ink-900 p-7 text-paper sm:p-8">
                <div className="relative z-10 flex items-center gap-5">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="h-20 w-20 rounded-full object-cover object-top ring-2 ring-gel"
                  />
                  <div>
                    <p className="h-display text-2xl">{leader.name}</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-gel">
                      Contact person · {project.id}
                    </p>
                  </div>
                </div>
                <a
                  href={leader.site}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative z-10 mt-7 flex items-center justify-between rounded-2xl bg-gel px-5 py-4 font-semibold text-ink-900 transition-colors duration-300 hover:bg-white"
                >
                  <span className="inline-flex items-center gap-3">
                    <Globe size={18} aria-hidden="true" />
                    {leader.siteLabel}
                  </span>
                  <ArrowUpRight size={18} aria-hidden="true" className="transition-transform duration-300 group-hover:rotate-45" />
                </a>
              </SpotlightCard>
            </Reveal>

            <Stagger className="mt-6 border-t border-ink-900/15" delay={0.2}>
              {channels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <StaggerItem key={channel.label} y={14}>
                    <a
                      href={channel.href}
                      {...(channel.external ? { target: "_blank", rel: "noreferrer" } : {})}
                      className="group flex items-center gap-5 border-b border-ink-900/15 py-5 transition-all duration-500 hover:pl-3"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-900/15 transition-colors duration-300 group-hover:border-ink-900 group-hover:bg-ink-900 group-hover:text-gel">
                        <Icon size={17} aria-hidden="true" />
                      </span>
                      <span className="flex-1">
                        <span className="eyebrow block text-ink-900/45">{channel.label}</span>
                        <span className="mt-1 block text-lg font-semibold">{channel.value}</span>
                      </span>
                      <ArrowUpRight size={18} aria-hidden="true" className="text-ink-900/30 transition-all duration-300 group-hover:rotate-45 group-hover:text-ink-900" />
                    </a>
                  </StaggerItem>
                );
              })}
            </Stagger>

            <Reveal delay={0.3}>
              <p className="mt-8 flex items-start gap-3 text-sm leading-6 text-ink-900/60">
                <MapPin size={17} aria-hidden="true" className="mt-0.5 shrink-0 text-leaf-dark" />
                {project.department}, {project.faculty}, {project.institute}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form
              className="rounded-[2.5rem] border border-ink-900/10 bg-white/55 p-7 sm:p-11"
              onSubmit={(event) => {
                event.preventDefault();
                window.location.href = mailto;
              }}
            >
              <p className="h-display text-3xl sm:text-4xl">Send a message</p>
              <p className="mt-3 text-sm leading-6 text-ink-900/60">
                This opens your own email app with the message filled in — nothing
                is stored on this site.
              </p>

              <div className="mt-9">
                <span className="eyebrow text-ink-900/50">Topic</span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {topics.map((item) => (
                    <button
                      key={item}
                      type="button"
                      aria-pressed={item === topic}
                      onClick={() => setTopic(item)}
                      className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                        item === topic ? "text-paper" : "text-ink-900/65"
                      }`}
                    >
                      {item === topic ? (
                        <motion.span layoutId="contact-topic" className="absolute inset-0 rounded-full bg-ink-900" />
                      ) : (
                        <span className="absolute inset-0 rounded-full border border-ink-900/15" />
                      )}
                      <span className="relative">{item}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 space-y-7">
                <Field label="Your name">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Jane Perera"
                    autoComplete="name"
                    className={inputClass}
                  />
                </Field>
                <Field label="Message">
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Tell us what you would like to know…"
                    className={`${inputClass} resize-none`}
                  />
                </Field>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="group mt-10 flex w-full items-center justify-center gap-3 rounded-full bg-ink-900 px-6 py-4 font-semibold text-paper transition-colors duration-300 hover:bg-leaf-dark"
              >
                Open in email app
                <Send size={17} aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
              </motion.button>
            </form>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

export default Contact;
