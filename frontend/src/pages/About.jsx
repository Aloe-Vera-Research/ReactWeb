import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  FlaskConical,
  GraduationCap,
  Leaf,
  Mail,
  Microscope,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Sprout,
  TrendingUp,
  Users,
} from "lucide-react";

import Eesara from "../assets/images/members/Eesara.jpg";
import Himash from "../assets/images/members/Himash.jpg";
import Amanda from "../assets/images/members/Amanda.jpeg";
import Shehani from "../assets/images/members/Shehani.jpg";
import Supervisor from "../assets/images/members/supervisor.jpeg";
import CoSupervisor from "../assets/images/members/cosupervisor.jpg";

const members = [
  {
    name: "Eesara Megasooriya",
    role: "Yield Prediction & Forecasting",
    shortRole: "Yield Intelligence",
    description:
      "Handles predictive modelling, agricultural feature analysis, model comparison, and interpretation of performance for Aloe vera yield estimation.",
    email: "it22337962@my.sliit.lk",
    image: Eesara,
    icon: TrendingUp,
    number: "01",
  },
  {
    name: "Himash Rajapaksha",
    role: "Disease Detection",
    shortRole: "Computer Vision",
    description:
      "Works on image-based disease awareness and practical support for identifying visible cultivation issues in Aloe vera leaves.",
    email: "it22909664@my.sliit.lk",
    image: Himash,
    icon: ScanSearch,
    number: "02",
  },
  {
    name: "Amanda Bandara",
    role: "Fertilizer Recommendation",
    shortRole: "Nutrient Guidance",
    description:
      "Focuses on nutrient-support strategies and recommendation logic linked to soil conditions, plant age, and crop-related inputs.",
    email: "it22338020@my.sliit.lk",
    image: Amanda,
    icon: FlaskConical,
    number: "03",
  },
  {
    name: "Shehani Yasodara",
    role: "Price Forecasting",
    shortRole: "Market Intelligence",
    description:
      "Contributes to market insight and predictive analysis that extends the platform toward cultivation economics and informed planning.",
    email: "it22360946@my.sliit.lk",
    image: Shehani,
    icon: BarChart3,
    number: "04",
  },
];

const supervisors = [
  {
    title: "Project Supervisor",
    label: "Supervisor",
    name: "Ms. Jenny Krishara",
    position: "Senior Lecturer",
    department: "Department of Information Technology",
    faculty: "Faculty of Computing",
    description:
      "Provides academic direction, research guidance, technical review, and continuous evaluation throughout the development of AloeGreen.",
    image: Supervisor,
  },
  {
    title: "Project Co-Supervisor",
    label: "Co-Supervisor",
    name: "Dr. Dinuka Wijendra",
    position: "Assistant Professor",
    department: "Department of Information Technology",
    faculty: "Faculty of Computing",
    description:
      "Supports research refinement, technical decision-making, academic quality, and the overall alignment of the proposed solution.",
    image: CoSupervisor,
  },
];

const projectValues = [
  {
    icon: BrainCircuit,
    title: "Research-Driven",
    description:
      "Project decisions are supported by research, data analysis, experimentation, and technical evaluation.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description:
      "Specialised individual components are developed as connected parts of one unified platform.",
  },
  {
    icon: Leaf,
    title: "Crop-Specific",
    description:
      "The team focuses on practical challenges and decision-support requirements related to Aloe vera.",
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

function MemberCard({ member }) {
  const Icon = member.icon;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5">
      {/* Member image */}
      <div className="relative aspect-[4/4.5] overflow-hidden bg-slate-100">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/5 to-transparent" />

        <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-slate-950/30 px-3 py-1.5 text-xs font-bold tracking-[0.12em] text-white backdrop-blur-md">
          MEMBER {member.number}
        </span>

        <div className="absolute inset-x-0 bottom-0 p-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
            <Icon size={14} aria-hidden="true" />
            {member.shortRole}
          </span>

          <h3 className="mt-3 text-xl font-black tracking-tight text-white">
            {member.name}
          </h3>
        </div>
      </div>

      {/* Member information */}
      <div className="flex flex-1 flex-col p-6">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-700">
            Research Component
          </p>

          <p className="mt-2 font-bold leading-6 text-slate-900">
            {member.role}
          </p>
        </div>

        <p className="mt-4 text-sm leading-7 text-slate-600">
          {member.description}
        </p>

        <div className="mt-auto pt-6">
          <a
            href={`mailto:${member.email}`}
            className="group/email flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-emerald-200 hover:bg-emerald-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100"
            aria-label={`Email ${member.name}`}
          >
            <span className="flex min-w-0 items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-700 shadow-sm">
                <Mail size={17} aria-hidden="true" />
              </span>

              <span className="min-w-0">
                <span className="block text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                  Email
                </span>

                <span className="block truncate text-xs font-semibold text-slate-700 group-hover/email:text-emerald-800">
                  {member.email}
                </span>
              </span>
            </span>

            <ArrowRight
              size={16}
              className="shrink-0 text-slate-300 transition group-hover/email:translate-x-1 group-hover/email:text-emerald-700"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </article>
  );
}

function SupervisorCard({ person }) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5">
      <div className="grid h-full sm:grid-cols-[0.8fr_1.2fr]">
        <div className="relative min-h-[330px] overflow-hidden bg-slate-100 sm:min-h-full">
          <img
            src={person.image}
            alt={person.name}
            className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

          <span className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-slate-950/30 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
            {person.label}
          </span>
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-8">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
            <GraduationCap size={24} aria-hidden="true" />
          </span>

          <p className="mt-6 text-xs font-black uppercase tracking-[0.15em] text-emerald-700">
            {person.title}
          </p>

          <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">
            {person.name}
          </h3>

          <div className="mt-4 border-l-2 border-emerald-200 pl-4">
            <p className="font-bold text-slate-800">{person.position}</p>
            <p className="mt-1 text-sm leading-6 text-slate-500">
              {person.department}
              <br />
              {person.faculty}
            </p>
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-600">
            {person.description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function About() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Hero section */}
      <section className="relative isolate overflow-hidden bg-[#f7fcf8]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-emerald-200/40 blur-3xl" />
          <div className="absolute -right-32 top-0 h-[450px] w-[450px] rounded-full bg-lime-200/30 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08)_1px,transparent_1px)] [background-size:28px_28px]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div>
            <SectionBadge icon={Users}>Team & Academic Guidance</SectionBadge>

            <h1 className="mt-7 max-w-3xl text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
              Meet the people behind{" "}
              <span className="text-emerald-700">AloeGreen.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              AloeGreen is developed by a multidisciplinary undergraduate
              research team combining machine learning, computer vision,
              agricultural decision support, market analysis, and integrated
              system development.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                <CheckCircle2
                  size={16}
                  className="text-emerald-600"
                  aria-hidden="true"
                />
                4 Research Members
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                <CheckCircle2
                  size={16}
                  className="text-emerald-600"
                  aria-hidden="true"
                />
                2 Academic Supervisors
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                <CheckCircle2
                  size={16}
                  className="text-emerald-600"
                  aria-hidden="true"
                />
                1 Integrated Platform
              </span>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-emerald-300/30 to-lime-200/30 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 p-5 shadow-[0_30px_80px_-25px_rgba(6,78,59,0.28)] backdrop-blur-xl sm:p-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <p className="text-sm font-black text-slate-900">
                    Research Team
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Specialised roles, shared platform
                  </p>
                </div>

                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <Users size={21} aria-hidden="true" />
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {members.map((member) => (
                  <div
                    key={member.email}
                    className="group/member relative overflow-hidden rounded-2xl bg-slate-100"
                  >
                    <img
                      src={member.image}
                      alt=""
                      className="aspect-square h-full w-full object-cover object-top transition duration-500 group-hover/member:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-3">
                      <p className="text-xs font-bold text-white">
                        {member.name.split(" ")[0]}
                      </p>
                      <p className="mt-0.5 text-[10px] text-slate-200">
                        {member.shortRole}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-2xl bg-emerald-50 p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-700 text-white">
                  <Sparkles size={19} aria-hidden="true" />
                </span>

                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Collaborative research
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    Independent research components connected through one
                    crop-specific ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative z-10 px-6 lg:px-8">
        <div className="mx-auto -mt-3 grid max-w-7xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 md:grid-cols-3">
          {projectValues.map((value, index) => {
            const Icon = value.icon;

            return (
              <article
                key={value.title}
                className={`p-6 sm:p-8 ${
                  index !== projectValues.length - 1
                    ? "border-b border-slate-100 md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <Icon size={21} aria-hidden="true" />
                  </span>

                  <div>
                    <h2 className="font-extrabold text-slate-900">
                      {value.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {value.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Team members */}
      <section className="px-6 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <SectionBadge icon={Sprout}>Undergraduate Researchers</SectionBadge>

              <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">
                Specialised expertise across the AloeGreen ecosystem.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-8 text-slate-600 lg:text-lg">
              Each member leads a specialised research component while
              contributing to the design and development of the complete
              platform.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {members.map((member) => (
              <MemberCard key={member.email} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Team collaboration section */}
      <section className="bg-slate-950 px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionBadge icon={Microscope} dark>
              Research Collaboration
            </SectionBadge>

            <h2 className="mt-6 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">
              Individual research components connected by a shared vision.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-400">
              The project combines specialised model development with a shared
              platform architecture. This allows predictions, recommendations,
              sensor information, and user-facing services to operate as one
              connected solution.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Shared system architecture",
              "Collaborative data integration",
              "Cross-module technical review",
              "Unified mobile experience",
              "Research-based validation",
              "Academic quality assurance",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                  <CheckCircle2 size={18} aria-hidden="true" />
                </span>

                <span className="text-sm font-semibold text-slate-200">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic supervision */}
      <section className="bg-slate-50 px-6 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionBadge icon={GraduationCap}>
              Academic Supervision
            </SectionBadge>

            <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">
              Guided by academic expertise.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600 lg:text-lg">
              AloeGreen is developed under academic supervision from the
              Faculty of Computing, with guidance across research direction,
              technical quality, evaluation, and project delivery.
            </p>
          </div>

          <div className="mt-14 grid gap-6 xl:grid-cols-2">
            {supervisors.map((person) => (
              <SupervisorCard key={person.title} person={person} />
            ))}
          </div>
        </div>
      </section>

      {/* Final statement */}
      <section className="px-6 py-24 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-emerald-700 via-emerald-800 to-slate-950 px-7 py-14 sm:px-12 lg:py-16">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-lime-300/10 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-100">
                <ShieldCheck size={17} aria-hidden="true" />
                One Team. One Platform.
              </span>

              <h2 className="mt-6 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">
                Building practical intelligence for Aloe vera cultivation.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-8 text-emerald-50/80">
                The AloeGreen team brings together research, artificial
                intelligence, IoT sensing, agricultural insight, and
                user-focused system development.
              </p>
            </div>

            <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] border border-white/15 bg-white/10 text-emerald-200 backdrop-blur">
              <Leaf size={42} strokeWidth={1.7} aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}