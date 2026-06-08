import { Link } from "react-router-dom";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Cloud,
  Cpu,
  Crosshair,
  Database,
  FileText,
  FlaskConical,
  Layers3,
  Microscope,
  Network,
  Radio,
  SearchX,
  ShieldCheck,
  Smartphone,
  Sprout,
  Target,
  Workflow,
} from "lucide-react";

const objectives = [
  {
    number: "01",
    title: "Crop-Specific Platform",
    description:
      "Design an AI-IoT smart agriculture platform created specifically for Aloe vera cultivation.",
  },
  {
    number: "02",
    title: "Connected Field Monitoring",
    description:
      "Integrate real-time field sensing, communication services, and cloud-supported data flow.",
  },
  {
    number: "03",
    title: "Predictive Intelligence",
    description:
      "Support yield prediction and environmental forecasting using suitable predictive models.",
  },
  {
    number: "04",
    title: "Integrated Decision Support",
    description:
      "Provide disease detection, fertilizer recommendations, and market price forecasting capabilities.",
  },
  {
    number: "05",
    title: "Practical Research Delivery",
    description:
      "Present research-backed outputs in an understandable and usable format for agricultural decision support.",
  },
];

const technologies = [
  {
    icon: Radio,
    title: "ESP32-Based Sensing",
    category: "Edge and IoT",
    description:
      "Supports field-level acquisition of agricultural and environmental sensor readings.",
  },
  {
    icon: FlaskConical,
    title: "Agricultural Sensors",
    category: "Data Collection",
    description:
      "Measure conditions such as soil moisture, temperature, pH, EC, and NPK values.",
  },
  {
    icon: Network,
    title: "MQTT and HiveMQ Cloud",
    category: "Communication",
    description:
      "Provide lightweight messaging and reliable transfer of sensor data between devices and services.",
  },
  {
    icon: Cpu,
    title: "FastAPI Backend",
    category: "Backend Services",
    description:
      "Supports API orchestration, machine-learning model serving, validation, and data processing.",
  },
  {
    icon: Smartphone,
    title: "React Native Application",
    category: "User Interface",
    description:
      "Delivers predictions, sensor readings, alerts, and recommendations through a field-ready mobile experience.",
  },
  {
    icon: Database,
    title: "Cloud Data Services",
    category: "Storage and Integration",
    description:
      "Support the management and availability of sensor data, model outputs, and platform records.",
  },
];

const methodologySteps = [
  {
    step: "01",
    icon: Radio,
    title: "Acquire Data",
    description:
      "Collect field readings, agricultural inputs, images, historical records, and market-related information.",
  },
  {
    step: "02",
    icon: Cloud,
    title: "Transmit and Store",
    description:
      "Transfer sensor readings through MQTT-based communication and make them available to backend services.",
  },
  {
    step: "03",
    icon: Cpu,
    title: "Process and Predict",
    description:
      "Apply preprocessing, feature engineering, machine-learning models, and supporting business logic.",
  },
  {
    step: "04",
    icon: BarChart3,
    title: "Evaluate",
    description:
      "Assess model behaviour, prediction quality, system integration, and the relevance of generated outputs.",
  },
  {
    step: "05",
    icon: Smartphone,
    title: "Deliver Insights",
    description:
      "Present technical results as understandable predictions, warnings, and recommendations for users.",
  },
];

const researchPrinciples = [
  "Crop-specific research focus",
  "Connected AI and IoT architecture",
  "Multiple decision-support modules",
  "Research-based model evaluation",
  "Accessible user-facing delivery",
  "Practical agricultural relevance",
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

function ResearchCard({
  icon: Icon,
  label,
  title,
  children,
  className = "",
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 sm:p-8 ${className}`}
    >
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-emerald-50 transition duration-500 group-hover:scale-125" />

      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
          <Icon size={24} aria-hidden="true" />
        </div>

        {label && (
          <p className="mt-6 text-xs font-black uppercase tracking-[0.16em] text-emerald-700">
            {label}
          </p>
        )}

        <h2 className={`${label ? "mt-2" : "mt-6"} text-2xl font-black tracking-tight text-slate-950`}>
          {title}
        </h2>

        <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          {children}
        </div>
      </div>
    </article>
  );
}

function ObjectiveCard({ objective }) {
  return (
    <article className="group relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg">
      <span className="absolute right-5 top-3 text-5xl font-black text-emerald-700/[0.05]">
        {objective.number}
      </span>

      <div className="relative">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-sm font-black text-emerald-700">
          {objective.number}
        </span>

        <h3 className="mt-5 text-lg font-extrabold text-slate-900">
          {objective.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          {objective.description}
        </p>
      </div>
    </article>
  );
}

function TechnologyCard({ technology }) {
  const Icon = technology.icon;

  return (
    <article className="group rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.09]">
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20">
          <Icon size={23} aria-hidden="true" />
        </span>

        <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
          {technology.category}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-extrabold text-white">
        {technology.title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-400">
        {technology.description}
      </p>
    </article>
  );
}

export default function Domain() {
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
            <SectionBadge icon={Target}>Research Domain</SectionBadge>

            <h1 className="mt-7 max-w-4xl text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
              The academic foundation behind{" "}
              <span className="text-emerald-700">AloeGreen.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Explore the literature background, identified research gap,
              research problem, objectives, methodology, technologies, and
              contribution of the AloeGreen AI-IoT smart agriculture platform.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "AI and Machine Learning",
                "Internet of Things",
                "Smart Agriculture",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
                >
                  <CheckCircle2
                    size={16}
                    className="text-emerald-600"
                    aria-hidden="true"
                  />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Research map */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-emerald-300/30 to-lime-200/30 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-[0_30px_80px_-25px_rgba(6,78,59,0.28)] backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-sm font-black text-slate-900">
                    Research Structure
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    From academic gap to practical contribution
                  </p>
                </div>

                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <Microscope size={22} aria-hidden="true" />
                </span>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  {
                    number: "01",
                    icon: BookOpen,
                    title: "Literature Foundation",
                    text: "Review existing smart agriculture approaches.",
                  },
                  {
                    number: "02",
                    icon: SearchX,
                    title: "Research Gap",
                    text: "Identify fragmentation and crop-specific limitations.",
                  },
                  {
                    number: "03",
                    icon: AlertTriangle,
                    title: "Research Problem",
                    text: "Define the practical challenge addressed.",
                  },
                  {
                    number: "04",
                    icon: Workflow,
                    title: "Proposed Solution",
                    text: "Develop and evaluate the integrated platform.",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.number}
                      className="relative flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4"
                    >
                      {index !== 3 && (
                        <span className="absolute left-[34px] top-[58px] h-5 w-px bg-emerald-200" />
                      )}

                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-700 shadow-sm">
                        <Icon size={19} aria-hidden="true" />
                      </span>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-black tracking-[0.16em] text-emerald-600">
                            {item.number}
                          </span>
                          <h2 className="text-sm font-extrabold text-slate-900">
                            {item.title}
                          </h2>
                        </div>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-2xl bg-emerald-700 p-4 text-white">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Sprout size={19} aria-hidden="true" />
                </span>

                <div>
                  <p className="text-sm font-bold">Research Outcome</p>
                  <p className="mt-1 text-xs leading-5 text-emerald-100">
                    A unified AI-IoT decision-support platform for Aloe vera.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domain summary */}
      <section className="relative z-10 px-6 lg:px-8">
        <div className="mx-auto -mt-3 grid max-w-7xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              value: "AI",
              label: "Predictive Analytics",
              description: "Model-supported agricultural insight",
            },
            {
              value: "IoT",
              label: "Field Monitoring",
              description: "Connected environmental sensing",
            },
            {
              value: "5",
              label: "Research Modules",
              description: "Integrated decision support",
            },
            {
              value: "1",
              label: "Unified Platform",
              description: "Crop-specific ecosystem",
            },
          ].map((item, index) => (
            <article
              key={item.label}
              className={`p-6 text-center lg:text-left ${
                index !== 3
                  ? "border-b border-slate-100 sm:border-b-0 sm:border-r"
                  : ""
              }`}
            >
              <p className="text-3xl font-black text-emerald-700">
                {item.value}
              </p>
              <p className="mt-1 text-sm font-extrabold text-slate-900">
                {item.label}
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Literature and research gap */}
      <section className="px-6 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <SectionBadge icon={BookOpen}>Research Foundation</SectionBadge>

            <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">
              Understanding the existing research landscape.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600 lg:text-lg">
              AloeGreen is informed by existing work in IoT agriculture,
              predictive modelling, computer vision, recommendation systems,
              and mobile agricultural applications.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <ResearchCard
              icon={BookOpen}
              label="Existing Knowledge"
              title="Literature Survey"
            >
              <p>
                Recent smart agriculture studies demonstrate the value of
                combining environmental sensing, predictive analytics, and
                mobile interfaces to improve agricultural monitoring and
                planning.
              </p>

              <p>
                Research in machine-learning-based crop prediction, image-based
                disease analysis, nutrient recommendation, and IoT monitoring
                confirms that data-driven systems can improve the interpretation
                of complex cultivation conditions.
              </p>

              <p>
                However, many existing studies focus on broad agricultural
                settings, generic crop applications, isolated weather
                functions, or individual prediction tasks.
              </p>
            </ResearchCard>

            <ResearchCard
              icon={SearchX}
              label="Unaddressed Area"
              title="Research Gap"
            >
              <p>
                Existing digital agriculture tools are often fragmented. One
                application may provide weather information while another
                performs image classification, sensor monitoring, or farm
                record management.
              </p>

              <p>
                This fragmentation makes it difficult to convert different forms
                of agricultural data into a consistent and practical
                decision-support process.
              </p>

              <p>
                There is limited research on integrated, crop-specific smart
                agriculture platforms developed specifically for Aloe vera.
                AloeGreen addresses this gap by connecting multiple intelligent
                modules through one ecosystem.
              </p>
            </ResearchCard>
          </div>
        </div>
      </section>

      {/* Research problem */}
      <section className="bg-slate-950 px-6 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionBadge icon={AlertTriangle} dark>
              Research Problem
            </SectionBadge>

            <h2 className="mt-6 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
              Agricultural data exists, but meaningful integration remains
              limited.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-400 lg:text-lg">
              Aloe vera cultivation lacks a unified smart agriculture platform
              capable of connecting field sensing, predictive analytics,
              disease awareness, nutrient guidance, environmental intelligence,
              and market-oriented forecasting.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-400">
              As a result, users may receive isolated measurements without the
              context required to transform those readings into timely,
              practical, and understandable decisions.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 sm:p-9">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />

            <div className="relative">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-300">
                Core Research Question
              </p>

              <blockquote className="mt-5 text-2xl font-bold leading-relaxed text-white sm:text-3xl">
                How can AI, IoT sensing, forecasting, and recommendation
                technologies be integrated into one crop-specific platform to
                improve decision support for Aloe vera cultivation?
              </blockquote>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Disconnected agricultural tools",
                  "Limited Aloe vera-specific solutions",
                  "Difficulty interpreting raw data",
                  "Insufficient integrated guidance",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4"
                  >
                    <AlertTriangle
                      size={17}
                      className="shrink-0 text-amber-300"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-semibold text-slate-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="px-6 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <SectionBadge icon={Crosshair}>
                Research Objectives
              </SectionBadge>

              <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">
                Clear objectives guide the research and implementation.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-slate-600 lg:ml-auto lg:text-lg">
              The project objectives cover platform architecture, IoT
              integration, machine-learning development, decision-support
              services, and accessible delivery of results.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {objectives.map((objective, index) => (
              <ObjectiveCard key={objective.number} objective={objective} />
            ))}

            <article className="relative flex min-h-[250px] flex-col justify-between overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-emerald-700 to-slate-950 p-6 text-white shadow-lg">
              <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-lime-300/10 blur-2xl" />

              <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <Layers3 size={20} aria-hidden="true" />
              </span>

              <div className="relative mt-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                  Combined Outcome
                </p>

                <h3 className="mt-3 text-xl font-extrabold">
                  One connected AloeGreen research platform
                </h3>

                <p className="mt-3 text-sm leading-7 text-emerald-50/80">
                  Each objective contributes to a single crop-specific system
                  rather than a collection of disconnected experiments.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-slate-50 px-6 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionBadge icon={Workflow}>Research Methodology</SectionBadge>

            <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">
              A connected workflow from data collection to decision support.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600 lg:text-lg">
              The methodology combines data acquisition, communication,
              preprocessing, model development, evaluation, backend integration,
              and user-facing delivery.
            </p>
          </div>

          <div className="relative mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            <div className="absolute left-[10%] right-[10%] top-10 hidden h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent lg:block" />

            {methodologySteps.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.step}
                  className="relative rounded-[1.5rem] border border-slate-200 bg-white p-6 text-center shadow-sm"
                >
                  <span className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border-4 border-white bg-emerald-700 text-white shadow-lg shadow-emerald-700/20">
                    <Icon size={22} aria-hidden="true" />
                  </span>

                  <p className="mt-5 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-600">
                    Step {item.step}
                  </p>

                  <h3 className="mt-2 text-lg font-extrabold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-8 rounded-[1.75rem] border border-emerald-100 bg-emerald-50 p-7 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-700 text-white">
                <ShieldCheck size={23} aria-hidden="true" />
              </span>

              <div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  Evaluation Perspective
                </h3>

                <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  The project evaluates both the behaviour of individual
                  predictive models and the effectiveness of integrating those
                  models with sensing, backend services, and a usable mobile
                  interface. Model metrics, functional testing, and practical
                  interpretation support the final research contribution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-slate-950 px-6 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <SectionBadge icon={Cpu} dark>
                Technology Architecture
              </SectionBadge>

              <h2 className="mt-6 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
                Technologies selected for an integrated AI-IoT ecosystem.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-400 lg:text-lg">
                The platform combines field devices, cloud communication,
                backend APIs, machine-learning services, data storage, and a
                mobile application.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                <Layers3 size={20} aria-hidden="true" />
              </span>

              <div>
                <p className="text-sm font-bold text-white">Layered Design</p>
                <p className="mt-1 text-xs text-slate-400">
                  Device → Cloud → API → AI → Mobile
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.title}
                technology={technology}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Research contribution */}
      <section className="px-6 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-emerald-100 bg-emerald-50 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative overflow-hidden bg-gradient-to-br from-emerald-700 via-emerald-800 to-slate-950 p-8 sm:p-10 lg:p-12">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
            <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-lime-300/10 blur-3xl" />

            <div className="relative flex h-full min-h-[320px] flex-col justify-between">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-emerald-200 ring-1 ring-white/10">
                <Microscope size={27} aria-hidden="true" />
              </span>

              <div className="mt-16">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-300">
                  Research Contribution
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  Moving beyond isolated agricultural experiments.
                </h2>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-10 lg:p-12">
            <p className="text-base leading-8 text-slate-600 lg:text-lg">
              AloeGreen demonstrates how IoT sensing, machine-learning models,
              image analysis, recommendations, environmental forecasting, and
              market intelligence can operate as parts of one coherent
              crop-specific decision-support platform.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {researchPrinciples.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-emerald-600"
                    aria-hidden="true"
                  />

                  <span className="text-sm font-semibold leading-6 text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/documents"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-emerald-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
              >
                <FileText size={17} aria-hidden="true" />
                View Research Documents
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>

              <Link
                to="/milestones"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-200 bg-white px-6 py-3 text-sm font-bold text-emerald-800 transition hover:bg-emerald-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100"
              >
                View Project Milestones
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}