import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  CloudSun,
  Cpu,
  FileText,
  FlaskConical,
  ImagePlus,
  Layers3,
  Leaf,
  Microscope,
  Navigation,
  Radio,
  ScanSearch,
  ShieldCheck,
  Smartphone,
  Sprout,
  TrendingUp,
  Wifi,
} from "lucide-react";

const stats = [
  {
    value: "5",
    label: "Core AI Modules",
    description: "Crop-specific intelligence",
  },
  {
    value: "AI",
    label: "Decision Support",
    description: "Data-driven recommendations",
  },
  {
    value: "IoT",
    label: "Live Monitoring",
    description: "Connected field sensors",
  },
  {
    value: "Mobile",
    label: "Field Access",
    description: "Support wherever it is needed",
  },
];

const platformFeatures = [
  {
    icon: BrainCircuit,
    title: "AI-Powered Intelligence",
    description:
      "Machine-learning models convert agricultural, environmental, and market data into useful predictions and recommendations.",
    accent: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: Radio,
    title: "Connected IoT Sensing",
    description:
      "ESP32-based devices and agricultural sensors capture soil and environmental conditions for continuous monitoring.",
    accent: "bg-teal-100 text-teal-700",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Delivery",
    description:
      "A field-ready mobile experience presents sensor readings, alerts, predictions, and recommendations in an accessible format.",
    accent: "bg-lime-100 text-lime-700",
  },
];

const modules = [
  {
    number: "01",
    icon: TrendingUp,
    title: "Yield Prediction",
    subtitle: "Production intelligence",
    description:
      "Forecast Aloe vera yield using structured agricultural and environmental data. XGBoost produced the strongest performance during model comparison.",
    tags: ["XGBoost", "Yield Forecast", "Planning"],
  },
  {
    number: "02",
    icon: CloudSun,
    title: "Environmental Forecasting",
    subtitle: "Weather-aware decisions",
    description:
      "Combine environmental readings and forecast information to help users anticipate field conditions and plan agricultural activities.",
    tags: ["Weather", "Environment", "Alerts"],
  },
  {
    number: "03",
    icon: ScanSearch,
    title: "Disease Detection",
    subtitle: "Image-based awareness",
    description:
      "Analyse Aloe vera leaf images to support earlier recognition of visible disease symptoms and cultivation issues.",
    tags: ["Computer Vision", "Leaf Analysis", "Detection"],
  },
  {
    number: "04",
    icon: FlaskConical,
    title: "Fertilizer Recommendation",
    subtitle: "Nutrient guidance",
    description:
      "Generate fertilizer guidance using soil conditions, crop characteristics, plant age, and other cultivation-related inputs.",
    tags: ["Soil Data", "Nutrients", "Recommendation"],
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Price Forecasting",
    subtitle: "Market intelligence",
    description:
      "Support market-aware planning by forecasting Aloe vera price behaviour and improving economic visibility for users.",
    tags: ["Market Trends", "Price Forecast", "Insights"],
  },
];

const workflow = [
  {
    icon: Wifi,
    step: "01",
    title: "Collect",
    description:
      "Sensors and user inputs capture environmental, soil, crop, image, and market information.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "Analyse",
    description:
      "AI models and platform services process the collected information.",
  },
  {
    icon: Activity,
    step: "03",
    title: "Interpret",
    description:
      "Complex model outputs are converted into understandable insights and alerts.",
  },
  {
    icon: Smartphone,
    step: "04",
    title: "Act",
    description:
      "Users receive practical support through the mobile-oriented interface.",
  },
];

const navigationItems = [
  {
    icon: Sprout,
    title: "Domain",
    description:
      "Explore the research problem, literature gap, objectives, and proposed solution.",
    href: "/domain",
  },
  {
    icon: Navigation,
    title: "Milestones",
    description:
      "Review project assessments, progress stages, important dates, and status.",
    href: "/milestones",
  },
  {
    icon: FileText,
    title: "Documents",
    description:
      "Access research documents, reports, submissions, and related resources.",
    href: "/documents",
  },
  {
    icon: ImagePlus,
    title: "Presentations",
    description:
      "View project presentation materials and previous presentation resources.",
    href: "/presentations",
  },
];

const SectionBadge = ({ icon: Icon, children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
    <Icon size={17} aria-hidden="true" />
    {children}
  </span>
);

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-[#f7fcf8]">
        {/* Decorative backgrounds */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-emerald-200/40 blur-3xl" />
          <div className="absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-lime-200/30 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08)_1px,transparent_1px)] [background-size:28px_28px]" />
        </div>

        <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          {/* Hero content */}
          <div className="max-w-3xl">
            <SectionBadge icon={Sprout}>
              Final Year Research Project
            </SectionBadge>

            <h1 className="mt-7 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl xl:text-7xl">
              Smarter decisions for{" "}
              <span className="relative whitespace-nowrap text-emerald-700">
                Aloe vera
                <svg
                  className="absolute -bottom-2 left-0 w-full text-emerald-300"
                  viewBox="0 0 300 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 9C75 2 217 2 297 8"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              cultivation.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              AloeGreen is a crop-specific AI and IoT smart agriculture
              platform that brings monitoring, prediction, disease awareness,
              fertilizer guidance, and market intelligence into one connected
              ecosystem.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/domain"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-emerald-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-700/20 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-800 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-emerald-200"
              >
                Explore the Research
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>

              <Link
                to="/documents"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-100"
              >
                <FileText size={18} aria-hidden="true" />
                View Documents
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
              <span className="flex items-center gap-2">
                <CheckCircle2
                  size={17}
                  className="text-emerald-600"
                  aria-hidden="true"
                />
                Research-backed design
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2
                  size={17}
                  className="text-emerald-600"
                  aria-hidden="true"
                />
                Crop-specific intelligence
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2
                  size={17}
                  className="text-emerald-600"
                  aria-hidden="true"
                />
                Integrated AI-IoT workflow
              </span>
            </div>
          </div>

          {/* Hero platform preview */}
          <div className="relative mx-auto w-full max-w-[570px] lg:mx-0 lg:ml-auto">
            <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-emerald-300/30 to-lime-200/30 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 p-4 shadow-[0_30px_80px_-25px_rgba(6,78,59,0.30)] backdrop-blur-xl sm:p-6">
              {/* Browser header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>

                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                  AloeGreen Platform
                </span>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                {/* Yield card */}
                <div className="rounded-3xl bg-gradient-to-br from-emerald-700 to-emerald-900 p-5 text-white">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">
                        Predicted yield
                      </p>

                      <p className="mt-3 text-3xl font-black">
                        87.4
                        <span className="ml-1 text-sm font-semibold text-emerald-200">
                          kg
                        </span>
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white/10 p-3">
                      <TrendingUp size={22} aria-hidden="true" />
                    </div>
                  </div>

                  <div className="mt-8 flex h-20 items-end gap-1.5">
                    {[32, 48, 40, 59, 52, 70, 64, 82, 74, 94].map(
                      (height, index) => (
                        <span
                          key={index}
                          className="flex-1 rounded-t-full bg-emerald-300/80"
                          style={{ height: `${height}%` }}
                        />
                      ),
                    )}
                  </div>

                  <div className="mt-3 flex items-center gap-2 text-xs text-emerald-100">
                    <TrendingUp size={14} aria-hidden="true" />
                    Model-supported forecast
                  </div>
                </div>

                {/* Live monitoring */}
                <div className="rounded-3xl border border-slate-100 bg-slate-50 p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold text-slate-800">
                      Live Monitoring
                    </p>

                    <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                      </span>
                      Online
                    </span>
                  </div>

                  <div className="mt-5 space-y-3">
                    <div className="rounded-2xl bg-white p-3 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-slate-500">
                          Soil moisture
                        </span>
                        <span className="text-sm font-extrabold text-slate-800">
                          64%
                        </span>
                      </div>

                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
                        <div className="h-full w-[64%] rounded-full bg-emerald-500" />
                      </div>
                    </div>

                    <div className="rounded-2xl bg-white p-3 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-slate-500">
                          Soil temperature
                        </span>
                        <span className="text-sm font-extrabold text-slate-800">
                          27°C
                        </span>
                      </div>

                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
                        <div className="h-full w-[55%] rounded-full bg-amber-400" />
                      </div>
                    </div>

                    <div className="rounded-2xl bg-white p-3 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-slate-500">
                          Soil pH
                        </span>
                        <span className="text-sm font-extrabold text-slate-800">
                          6.8
                        </span>
                      </div>

                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
                        <div className="h-full w-[68%] rounded-full bg-sky-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommendation */}
              <div className="mt-4 flex flex-col gap-4 rounded-3xl border border-emerald-100 bg-emerald-50 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <div className="rounded-2xl bg-emerald-700 p-3 text-white">
                    <BrainCircuit size={21} aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-sm font-extrabold text-slate-900">
                      Smart Recommendation
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-600">
                      Current conditions are suitable for the planned
                      cultivation activity.
                    </p>
                  </div>
                </div>

                <span className="whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-xs font-bold text-emerald-700 shadow-sm">
                  Low risk
                </span>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -left-5 top-20 hidden items-center gap-3 rounded-2xl border border-white bg-white p-3 shadow-xl sm:flex">
              <div className="rounded-xl bg-lime-100 p-2 text-lime-700">
                <Leaf size={20} aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Crop-specific</p>
                <p className="text-[11px] text-slate-500">Designed for Aloe</p>
              </div>
            </div>

            <div className="absolute -bottom-5 right-8 hidden items-center gap-3 rounded-2xl border border-white bg-white p-3 shadow-xl sm:flex">
              <div className="rounded-xl bg-emerald-100 p-2 text-emerald-700">
                <ShieldCheck size={20} aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">
                  Decision support
                </p>
                <p className="text-[11px] text-slate-500">
                  Research-driven insights
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="relative z-10 px-6 lg:px-8">
        <div className="mx-auto -mt-2 grid max-w-7xl overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-900/5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <article
              key={item.label}
              className={`p-6 text-center sm:p-7 lg:text-left ${
                index !== stats.length - 1
                  ? "border-b border-slate-100 sm:border-b-0 sm:border-r"
                  : ""
              }`}
            >
              <p className="text-3xl font-black tracking-tight text-emerald-700">
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

      {/* Introduction */}
      <section className="px-6 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionBadge icon={Leaf}>Platform Foundation</SectionBadge>

              <h2 className="mt-5 max-w-xl text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">
                Technology designed around real agricultural decisions.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-slate-600 lg:ml-auto lg:text-lg">
              AloeGreen connects IoT sensing, AI analytics, and mobile access
              through one integrated workflow. Instead of presenting isolated
              measurements, the platform turns collected data into practical
              support for Aloe vera cultivation.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {platformFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-emerald-100 hover:shadow-xl hover:shadow-emerald-900/5 sm:p-8"
                >
                  <div className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-emerald-50 transition-transform duration-500 group-hover:scale-150" />

                  <div
                    className={`relative flex h-13 w-13 items-center justify-center rounded-2xl p-3 ${feature.accent}`}
                  >
                    <Icon size={25} aria-hidden="true" />
                  </div>

                  <h3 className="relative mt-6 text-xl font-extrabold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core modules */}
      <section className="bg-slate-950 px-6 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
                <Layers3 size={17} aria-hidden="true" />
                Core Intelligence Modules
              </span>

              <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
                Five connected modules. One complete platform.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 lg:text-lg">
                Each module solves a specific cultivation or planning problem,
                while the integrated platform creates a more complete
                decision-support experience.
              </p>
            </div>

            <Link
              to="/domain"
              className="group inline-flex w-fit items-center gap-2 font-bold text-emerald-300 transition hover:text-emerald-200"
            >
              Explore the complete domain
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
            {modules.map((module, index) => {
              const Icon = module.icon;

              return (
                <article
                  key={module.title}
                  className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.09] ${
                    index < 2
                      ? "lg:col-span-3"
                      : index === 2
                        ? "lg:col-span-2"
                        : "lg:col-span-2"
                  }`}
                >
                  <div className="absolute right-5 top-3 text-6xl font-black text-white/[0.035]">
                    {module.number}
                  </div>

                  <div className="relative flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20">
                      <Icon size={23} aria-hidden="true" />
                    </div>

                    <span className="text-xs font-black tracking-[0.18em] text-slate-600">
                      {module.number}
                    </span>
                  </div>

                  <p className="relative mt-6 text-xs font-bold uppercase tracking-[0.14em] text-emerald-300">
                    {module.subtitle}
                  </p>

                  <h3 className="relative mt-2 text-xl font-extrabold text-white">
                    {module.title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-7 text-slate-400">
                    {module.description}
                  </p>

                  <div className="relative mt-6 flex flex-wrap gap-2">
                    {module.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[11px] font-semibold text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          {/* Integrated platform callout */}
          <div className="mt-6 flex flex-col gap-6 rounded-[1.75rem] border border-emerald-400/20 bg-gradient-to-r from-emerald-500/10 to-lime-400/5 p-7 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex max-w-3xl items-start gap-4">
              <div className="hidden rounded-2xl bg-emerald-400/10 p-3 text-emerald-300 sm:block">
                <Layers3 size={25} aria-hidden="true" />
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-white">
                  Integrated AloeGreen Platform
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Monitoring, predictions, recommendations, and market insights
                  are brought together instead of being delivered through
                  disconnected tools.
                </p>
              </div>
            </div>

            <Link
              to="/about"
              className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-emerald-50 lg:self-center"
            >
              About the project
              <ChevronRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="px-6 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionBadge icon={Activity}>Platform Workflow</SectionBadge>

            <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">
              From field data to practical action.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600 lg:text-lg">
              AloeGreen follows a clear information flow that transforms raw
              agricultural data into understandable and usable guidance.
            </p>
          </div>

          <div className="relative mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-[12.5%] right-[12.5%] top-12 hidden h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent lg:block" />

            {workflow.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.step}
                  className="relative rounded-[1.75rem] border border-slate-100 bg-white p-7 text-center shadow-sm"
                >
                  <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-white bg-emerald-700 text-white shadow-lg shadow-emerald-700/20">
                    <Icon size={25} aria-hidden="true" />
                  </div>

                  <span className="mt-5 inline-block text-xs font-black tracking-[0.18em] text-emerald-600">
                    STEP {item.step}
                  </span>

                  <h3 className="mt-2 text-xl font-extrabold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research perspective */}
      <section className="px-6 pb-24 lg:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-emerald-50 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative min-h-[360px] overflow-hidden bg-gradient-to-br from-emerald-700 via-emerald-800 to-slate-950 p-8 sm:p-10 lg:p-12">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10" />
            <div className="absolute -right-4 -top-4 h-40 w-40 rounded-full border border-white/10" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-lime-300/10 blur-2xl" />

            <div className="relative flex h-full flex-col justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-emerald-200 ring-1 ring-white/10">
                <Microscope size={28} aria-hidden="true" />
              </div>

              <div className="mt-16">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
                  Research Perspective
                </p>

                <h2 className="mt-4 max-w-md text-3xl font-black tracking-tight text-white sm:text-4xl">
                  A unified response to fragmented agricultural tools.
                </h2>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
            <p className="text-base leading-8 text-slate-600 lg:text-lg">
              AloeGreen investigates how a crop-specific platform can bring
              sensing, forecasting, computer vision, recommendation systems,
              and market intelligence into a usable agricultural
              decision-support environment.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Crop-specific platform architecture",
                "AI and IoT integration",
                "Field-oriented decision support",
                "Research and product relevance",
              ].map((item) => (
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

            <Link
              to="/domain"
              className="group mt-9 inline-flex w-fit items-center gap-2 font-bold text-emerald-700 transition hover:text-emerald-900"
            >
              Read the full domain analysis
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-y border-slate-100 bg-slate-50 px-6 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <SectionBadge icon={Navigation}>Explore AloeGreen</SectionBadge>

              <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl">
                Continue exploring the project.
              </h2>

              <p className="mt-4 text-base leading-8 text-slate-600">
                Access the research background, project progress, documentation,
                and presentation materials.
              </p>
            </div>

            <Link
              to="/about"
              className="group inline-flex w-fit items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-900"
            >
              Meet the project team
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {navigationItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  to={item.href}
                  className="group flex min-h-[245px] flex-col rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 transition group-hover:bg-emerald-700 group-hover:text-white">
                      <Icon size={23} aria-hidden="true" />
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition group-hover:border-emerald-200 group-hover:bg-emerald-50 group-hover:text-emerald-700">
                      <ChevronRight
                        size={18}
                        className="transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <span className="mt-auto pt-5 text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">
                    Explore section
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-24 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-emerald-700 via-emerald-800 to-slate-950 px-7 py-14 text-center shadow-2xl shadow-emerald-900/20 sm:px-12 lg:py-20">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-lime-300/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-100">
              <Sprout size={17} aria-hidden="true" />
              AloeGreen Research Platform
            </span>

            <h2 className="mt-6 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
              Discover the research behind smarter Aloe vera cultivation.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-emerald-50/80 lg:text-lg">
              Explore the project domain, research objectives, technical
              approach, documentation, and development journey.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/domain"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-emerald-800 transition hover:-translate-y-0.5 hover:bg-emerald-50"
              >
                Explore Project Domain
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                <Microscope size={18} aria-hidden="true" />
                Meet the Research Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}