import {
  Sprout,
  Target,
  FileText,
  Leaf,
  Cpu,
  Radio,
  Smartphone,
  Microscope,
  Navigation,
} from "lucide-react";

const stats = [
  { value: "5", label: "Main Modules" },
  { value: "AI", label: "Prediction Support" },
  { value: "IoT", label: "Real-Time Monitoring" },
  { value: "Mobile", label: "Field-Ready Access" },
];

const introCards = [
  {
    icon: Cpu,
    title: "AI-Powered Intelligence",
    description:
      "Machine learning supports yield prediction, pattern recognition, and smarter data interpretation.",
  },
  {
    icon: Radio,
    title: "Connected Sensing",
    description:
      "ESP32-based devices and field sensors capture environmental and cultivation data for monitoring and analysis.",
  },
  {
    icon: Smartphone,
    title: "Accessible Delivery",
    description:
      "A mobile-oriented interface helps turn model outputs and sensor readings into practical user support.",
  },
];

const modules = [
  {
    title: "Yield Prediction",
    description:
      "Forecast Aloe vera yield using structured agricultural and environmental data. XGBoost produced the strongest yield-prediction performance in model comparisons.",
  },
  {
    title: "Environmental Forecasting",
    description:
      "Support planning with weather-aware intelligence that helps users anticipate short-term field conditions.",
  },
  {
    title: "Disease Detection",
    description:
      "Provide image-based disease awareness to support earlier recognition of cultivation issues.",
  },
  {
    title: "Fertilizer Recommendation",
    description:
      "Guide nutrient decisions using crop and soil-related inputs for more informed resource management.",
  },
  {
    title: "Price Forecasting",
    description:
      "Extend platform value beyond cultivation by supporting market-aware planning and economic visibility.",
  },
  {
    title: "Integrated Platform",
    description:
      "Bring monitoring, analytics, recommendations, and forecasting together rather than relying on isolated tools.",
  },
];

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              <Sprout size={18} />
              Final Year Research Project
            </span>

            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              AloeGreen for smarter Aloe vera cultivation.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              AloeGreen is a research-backed AI-IoT Smart Agriculture platform
              created specifically for Aloe vera cultivation. It integrates
              real-time monitoring, intelligent prediction, environmental
              forecasting, disease awareness, fertilizer guidance, and market
              insight within one crop-specific ecosystem.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/domain"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700"
              >
                <Target size={18} />
                Explore Domain
              </a>

              <a
                href="/documents"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-green-200 bg-white px-6 py-3 text-sm font-semibold text-green-700 transition hover:bg-green-50"
              >
                <FileText size={18} />
                View Documents
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-green-100 bg-white/80 p-5 text-center shadow-sm backdrop-blur"
                >
                  <strong className="block text-2xl font-extrabold text-green-700">
                    {item.value}
                  </strong>
                  <span className="mt-1 block text-sm font-medium text-gray-500">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <aside
            aria-label="Project summary panel"
            className="rounded-3xl border border-green-100 bg-white p-8 shadow-xl shadow-green-900/5"
          >
            <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              Project Overview
            </span>

            <h3 className="mt-5 text-2xl font-bold text-gray-900">
              Why AloeGreen Matters
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Many digital agriculture solutions are fragmented or generic.
              AloeGreen responds to this gap by combining multiple intelligent
              functions into a single platform designed for Aloe vera farming.
            </p>

            <ul className="mt-6 space-y-4 text-gray-600">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-green-600" />
                Unified decision support instead of disconnected tools.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-green-600" />
                Research-driven architecture with field-level relevance.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-green-600" />
                Designed to support farmers, evaluators, and researchers.
              </li>
            </ul>
          </aside>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              <Leaf size={18} />
              Project Introduction
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              General Introduction
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              AloeGreen is proposed as both an academic research outcome and a
              practical smart agriculture product concept. The platform connects
              IoT sensing, AI analytics, and mobile accessibility to support
              better cultivation decisions for Aloe vera through one integrated
              workflow.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {introCards.map((card) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.title}
                  className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-gray-900">
                    {card.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {card.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Module Highlights */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-br from-green-700 via-emerald-700 to-green-900 p-8 shadow-xl lg:p-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Quick Module Highlights
            </h2>

            <p className="mt-4 text-lg leading-8 text-green-50">
              Each module contributes to a complete crop-specific smart
              agriculture workflow.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module) => (
              <article
                key={module.title}
                className="rounded-3xl bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900">
                  {module.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {module.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Research and Navigation */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
            <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              <Microscope size={18} />
              Research & Product Perspective
            </span>

            <h2 className="mt-5 text-3xl font-bold text-gray-900">
              AloeGreen as a Research-Driven Platform
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              The project is positioned as a unified AI-IoT platform that
              addresses the research gap created by fragmented agricultural
              tools. It aims to demonstrate how crop-specific system design can
              turn sensing, forecasting, and predictive intelligence into a
              usable decision-support environment.
            </p>

            <a
              href="/domain"
              className="mt-6 inline-flex font-semibold text-green-700 hover:text-green-800"
            >
              Read the full domain analysis →
            </a>
          </article>

          <article className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
            <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              <Navigation size={18} />
              Navigation Shortcuts
            </span>

            <ul className="mt-6 space-y-5 leading-7 text-gray-600">
              <li>
                <a
                  href="/milestones"
                  className="font-semibold text-green-700 hover:text-green-800"
                >
                  Visit Milestones
                </a>{" "}
                for assessment progress, dates, marks, and status.
              </li>

              <li>
                <a
                  href="/documents"
                  className="font-semibold text-green-700 hover:text-green-800"
                >
                  Visit Documents
                </a>{" "}
                for document links, availability, and pending items.
              </li>

              <li>
                <a
                  href="/presentations"
                  className="font-semibold text-green-700 hover:text-green-800"
                >
                  Visit Presentations
                </a>{" "}
                for slide resources and presentation history.
              </li>

              <li>
                <a
                  href="/about"
                  className="font-semibold text-green-700 hover:text-green-800"
                >
                  Visit About Us
                </a>{" "}
                for team roles, member profiles, and supervisor details.
              </li>
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}