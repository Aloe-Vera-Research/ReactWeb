import {
  Target,
  BookOpen,
  SearchX,
  AlertCircle,
  Crosshair,
  Workflow,
  Cpu,
} from "lucide-react";

const objectiveList = [
  "Design a crop-specific AI-IoT platform for Aloe vera cultivation.",
  "Integrate real-time field sensing and cloud-based data flow.",
  "Support yield prediction and environmental forecasting using predictive models.",
  "Provide disease detection, fertilizer recommendation, and price forecasting capabilities.",
  "Deliver research-backed outputs in a usable format for practical decision support.",
];

const techList = [
  {
    title: "ESP32-based sensing",
    description: "field-level data acquisition.",
  },
  {
    title: "Environmental and agricultural sensors",
    description: "monitoring soil and climate related conditions.",
  },
  {
    title: "MQTT / HiveMQ Cloud",
    description: "reliable communication and cloud data transfer.",
  },
  {
    title: "FastAPI backend",
    description: "model serving, orchestration, and API support.",
  },
  {
    title: "React Native mobile app",
    description: "accessible user-facing delivery of results.",
  },
];

function IconBox({ children }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-700">
      {children}
    </div>
  );
}

function Card({ icon, title, children }) {
  return (
    <article className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <IconBox>{icon}</IconBox>

      <h2 className="mt-5 text-2xl font-bold text-gray-900">{title}</h2>

      <div className="mt-4 space-y-4 leading-8 text-gray-600">{children}</div>
    </article>
  );
}

export default function Domain() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            <Target size={18} />
            Domain Details
          </span>

          <h1 className="mt-6 max-w-5xl text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Research Domain and Academic Foundation
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
            This page presents the literature background, research gap, problem
            statement, objectives, methodology, and technologies used in
            AloeGreen.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <Card icon={<BookOpen size={24} />} title="Literature Survey">
            <p>
              Recent smart agriculture studies highlight the value of integrating
              sensing, predictive analytics, and mobile interfaces. However,
              many systems focus on broad crop settings, isolated weather
              functions, or single-task monitoring.
            </p>

            <p>
              Literature in IoT agriculture, machine learning-based crop
              prediction, and disease analysis supports the importance of
              data-driven cultivation support, yet still leaves space for
              crop-specific platforms tailored to narrower domains such as Aloe
              vera.
            </p>

            <p>
              AloeGreen builds on this foundation by treating cultivation support
              as a connected workflow. It combines real-time monitoring,
              model-based reasoning, and user-facing insights in a single
              research-driven environment.
            </p>
          </Card>

          <Card icon={<SearchX size={24} />} title="Research Gap">
            <p>
              The main gap lies in the fragmentation of current digital
              agriculture tools. Existing solutions often support only one
              activity at a time such as weather checking, image classification,
              generic dashboards, or record keeping.
            </p>

            <p>
              Very few provide an integrated, crop-specific platform dedicated to
              Aloe vera cultivation. AloeGreen addresses this gap by proposing
              one intelligent ecosystem that unifies multiple modules for
              monitoring, analysis, and decision support.
            </p>
          </Card>
        </div>
      </section>

      <section className="px-6 py-10 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <Card icon={<AlertCircle size={24} />} title="Research Problem">
            <p>
              Aloe vera cultivation still lacks an integrated smart agriculture
              platform capable of connecting IoT sensing, predictive analytics,
              disease awareness, nutrient support, and market-oriented insight in
              one system.
            </p>

            <p>
              As a result, users face difficulty converting raw agricultural
              data into timely and practical decisions.
            </p>
          </Card>

          <Card icon={<Crosshair size={24} />} title="Research Objectives">
            <ul className="space-y-3">
              {objectiveList.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-3 h-2 w-2 rounded-full bg-green-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <Card icon={<Workflow size={24} />} title="Methodology">
            <p>
              The AloeGreen methodology combines data acquisition, system
              integration, model development, and evaluation. Field-related
              inputs are captured through sensing devices and supporting
              datasets.
            </p>

            <p>
              Information is transmitted through MQTT-based communication,
              processed by backend services, and interpreted by predictive
              modules. Outputs are then presented to users through a mobile-ready
              interface that translates technical results into understandable
              recommendations.
            </p>

            <p>
              The platform is evaluated by considering both system integration
              and model behavior, with performance interpretation used to support
              the research contribution.
            </p>
          </Card>

          <Card icon={<Cpu size={24} />} title="Technologies Used">
            <ul className="space-y-3">
              {techList.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="mt-3 h-2 w-2 rounded-full bg-green-600" />
                  <span>
                    <strong className="text-gray-900">{item.title}:</strong>{" "}
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-br from-green-700 via-emerald-700 to-green-900 p-8 shadow-xl lg:p-12">
          <h2 className="text-3xl font-bold text-white">
            Research Perspective
          </h2>

          <p className="mt-4 max-w-4xl text-lg leading-8 text-green-50">
            AloeGreen demonstrates how an AI-IoT system can move beyond separate
            experiments and function as a coherent smart agriculture concept.
            The project is shaped to satisfy academic requirements while
            remaining grounded in real cultivation needs.
          </p>
        </div>
      </section>
    </main>
  );
}