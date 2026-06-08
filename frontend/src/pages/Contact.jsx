import { useState } from "react";
import {
  ArrowRight,
  Check,
  Clipboard,
  Clock3,
  GraduationCap,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Microscope,
  Phone,
  Presentation,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const EMAIL_ADDRESS = "aloegreen166@gmail.com";
const PHONE_NUMBER = "+94 77 335 5331";
const PHONE_HREF = "+94773355331";

const contactCards = [
  {
    icon: Mail,
    title: "General Inquiry",
    category: "General Communication",
    description:
      "For website-related questions, project introductions, feedback, and other general communication.",
    value: EMAIL_ADDRESS,
    copyValue: EMAIL_ADDRESS,
    href: `mailto:${EMAIL_ADDRESS}?subject=AloeGreen%20General%20Inquiry`,
    actionLabel: "Send an email",
  },
  {
    icon: Microscope,
    title: "Research Collaboration",
    category: "Academic Communication",
    description:
      "For academic discussions, literature-related communication, research feedback, and collaboration opportunities.",
    value: EMAIL_ADDRESS,
    copyValue: EMAIL_ADDRESS,
    href: `mailto:${EMAIL_ADDRESS}?subject=AloeGreen%20Research%20Collaboration`,
    actionLabel: "Discuss research",
  },
  {
    icon: Presentation,
    title: "Project Demo Request",
    category: "Demonstration Request",
    description:
      "For project presentations, system walkthroughs, technical discussions, and AloeGreen demonstration requests.",
    value: PHONE_NUMBER,
    copyValue: PHONE_NUMBER,
    href: `tel:${PHONE_HREF}`,
    actionLabel: "Call the team",
  },
];

const communicationDetails = [
  {
    icon: GraduationCap,
    title: "Academic Project",
    description:
      "A final-year research project developed through the Faculty of Computing.",
  },
  {
    icon: Clock3,
    title: "Response Time",
    description:
      "The team will review academic and project-related inquiries as soon as possible.",
  },
  {
    icon: ShieldCheck,
    title: "Appropriate Use",
    description:
      "Contact information is provided for genuine academic, research, and project communication.",
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

function ContactCard({ item, copiedValue, onCopy }) {
  const Icon = item.icon;
  const isCopied = copiedValue === item.copyValue;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5">
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-emerald-50 transition duration-500 group-hover:scale-125" />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
            <Icon size={23} aria-hidden="true" />
          </span>

          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.13em] text-slate-500">
            {item.category}
          </span>
        </div>

        <h3 className="mt-6 text-xl font-extrabold text-slate-950">
          {item.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          {item.description}
        </p>

        <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-4">
          <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
            Contact Detail
          </p>

          <p className="mt-2 break-all text-sm font-bold text-slate-800">
            {item.value}
          </p>
        </div>

        <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
          <a
            href={item.href}
            className="group/action inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-emerald-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
          >
            {item.actionLabel}

            <ArrowRight
              size={17}
              className="transition-transform group-hover/action:translate-x-1"
              aria-hidden="true"
            />
          </a>

          <button
            type="button"
            onClick={() => onCopy(item.copyValue)}
            className={`inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-bold transition focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100 ${
              isCopied
                ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                : "border-slate-200 bg-white text-slate-600 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
            }`}
            aria-label={`Copy ${item.value}`}
          >
            {isCopied ? (
              <>
                <Check size={16} aria-hidden="true" />
                Copied
              </>
            ) : (
              <>
                <Clipboard size={16} aria-hidden="true" />
                Copy
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Contact() {
  const [copiedValue, setCopiedValue] = useState("");

  const copyToClipboard = async (value) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = value;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }

      setCopiedValue(value);

      window.setTimeout(() => {
        setCopiedValue("");
      }, 2000);
    } catch (error) {
      console.error("Unable to copy contact information:", error);
    }
  };

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
            <SectionBadge icon={MessageCircle}>
              Contact & Communication
            </SectionBadge>

            <h1 className="mt-7 max-w-3xl text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
              Start a conversation with the{" "}
              <span className="text-emerald-700">AloeGreen team.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Contact us regarding research collaboration, academic feedback,
              project demonstrations, technical discussions, or general
              information about the AloeGreen smart agriculture platform.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                <Microscope
                  size={16}
                  className="text-emerald-600"
                  aria-hidden="true"
                />
                Research Discussions
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                <Presentation
                  size={16}
                  className="text-emerald-600"
                  aria-hidden="true"
                />
                Project Demonstrations
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                <Users
                  size={16}
                  className="text-emerald-600"
                  aria-hidden="true"
                />
                Academic Collaboration
              </span>
            </div>
          </div>

          {/* Hero contact panel */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-emerald-300/30 to-lime-200/30 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-[0_30px_80px_-25px_rgba(6,78,59,0.28)] backdrop-blur-xl sm:p-7">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-sm font-black text-slate-900">
                    Direct Contact
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Choose the most convenient contact method
                  </p>
                </div>

                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <MessageCircle size={22} aria-hidden="true" />
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <a
                  href={`mailto:${EMAIL_ADDRESS}?subject=AloeGreen%20Project%20Inquiry`}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition hover:border-emerald-200 hover:bg-emerald-50"
                >
                  <span className="flex min-w-0 items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-700 shadow-sm">
                      <Mail size={20} aria-hidden="true" />
                    </span>

                    <span className="min-w-0">
                      <span className="block text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">
                        Email Address
                      </span>

                      <span className="mt-1 block truncate text-sm font-bold text-slate-800">
                        {EMAIL_ADDRESS}
                      </span>
                    </span>
                  </span>

                  <ArrowRight
                    size={18}
                    className="shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-emerald-700"
                    aria-hidden="true"
                  />
                </a>

                <a
                  href={`tel:${PHONE_HREF}`}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition hover:border-emerald-200 hover:bg-emerald-50"
                >
                  <span className="flex min-w-0 items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-700 shadow-sm">
                      <Phone size={20} aria-hidden="true" />
                    </span>

                    <span>
                      <span className="block text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">
                        Telephone
                      </span>

                      <span className="mt-1 block text-sm font-bold text-slate-800">
                        {PHONE_NUMBER}
                      </span>
                    </span>
                  </span>

                  <ArrowRight
                    size={18}
                    className="shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-emerald-700"
                    aria-hidden="true"
                  />
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-700 shadow-sm">
                    <MapPin size={20} aria-hidden="true" />
                  </span>

                  <span>
                    <span className="block text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">
                      Academic Institution
                    </span>

                    <span className="mt-1 block text-sm font-bold text-slate-800">
                      Faculty of Computing, SLIIT
                    </span>
                  </span>
                </div>
              </div>

              <div className="mt-5 flex items-start gap-3 rounded-2xl bg-emerald-700 p-4 text-white">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Sparkles size={19} aria-hidden="true" />
                </span>

                <div>
                  <p className="text-sm font-bold">
                    Academic communication welcomed
                  </p>

                  <p className="mt-1 text-xs leading-5 text-emerald-100">
                    The team welcomes genuine research feedback, technical
                    discussions, and collaboration inquiries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact methods */}
      <section className="px-6 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <SectionBadge icon={Mail}>Contact Options</SectionBadge>

              <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">
                Choose the right channel for your inquiry.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-8 text-slate-600 lg:text-lg">
              Selecting the most relevant contact option helps the team
              understand your request and respond more effectively.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {contactCards.map((item) => (
              <ContactCard
                key={item.title}
                item={item}
                copiedValue={copiedValue}
                onCopy={copyToClipboard}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Communication information */}
      <section className="bg-slate-950 px-6 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionBadge icon={ShieldCheck} dark>
              Communication Information
            </SectionBadge>

            <h2 className="mt-6 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
              Purposeful communication for research and project engagement.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-400 lg:text-lg">
              AloeGreen is an academic research project. The listed contact
              channels are intended for relevant project inquiries, university
              communication, research feedback, collaboration, and
              demonstration requests.
            </p>
          </div>

          <div className="grid gap-4">
            {communicationDetails.map((detail) => {
              const Icon = detail.icon;

              return (
                <article
                  key={detail.title}
                  className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 transition hover:border-emerald-400/20 hover:bg-white/[0.08]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20">
                    <Icon size={21} aria-hidden="true" />
                  </span>

                  <div>
                    <h3 className="font-extrabold text-white">
                      {detail.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      {detail.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final contact CTA */}
      <section className="px-6 py-24 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-emerald-700 via-emerald-800 to-slate-950 px-7 py-14 text-center shadow-2xl shadow-emerald-900/20 sm:px-12 lg:py-20">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-lime-300/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-100">
              <Leaf size={17} aria-hidden="true" />
              Connect with AloeGreen
            </span>

            <h2 className="mt-6 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
              Have a question about our research or platform?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-emerald-50/80 lg:text-lg">
              Send the team an email for academic discussions, research
              feedback, collaboration opportunities, or project information.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={`mailto:${EMAIL_ADDRESS}?subject=AloeGreen%20Project%20Inquiry`}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-emerald-800 transition hover:-translate-y-0.5 hover:bg-emerald-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
              >
                <Mail size={18} aria-hidden="true" />
                Email the Team

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>

              <a
                href={`tel:${PHONE_HREF}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/15 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
              >
                <Phone size={18} aria-hidden="true" />
                Call {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}