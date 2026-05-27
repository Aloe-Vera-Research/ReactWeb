import { CalendarRange } from "lucide-react";

const milestones = [
  {
    title: "Project Proposal",
    status: "Completed",
    statusType: "completed",
    open: true,
    description:
      "Initial project definition, scope explanation, and concept validation for AloeGreen as an AI-IoT Smart Agriculture solution.",
    date: "10 / 09 / 2025",
    marks: "XX%",
    statusText: "Completed and presented",
  },
  {
    title: "Progress Presentation 1",
    status: "Completed",
    statusType: "completed",
    description:
      "Presentation of initial research progress, architecture planning, and module-level development status.",
    date: "05 / 01 / 2026",
    marks: "XX%",
    statusText: "Completed",
  },
  {
    title: "Progress Presentation 2",
    status: "Completed",
    statusType: "completed",
    description:
      "Expanded evaluation of module implementation, results, system integration, and readiness for final submission.",
    date: "12 / 03 / 2026",
    marks: "XX%",
    statusText: "Completed",
  },
  {
    title: "Final Assessment",
    status: "Upcoming",
    statusType: "upcoming",
    description:
      "Final evaluation of the project website, system implementation, documentation, and complete research contribution.",
    date: "04 / 05 / 2026",
    marks: "XX%",
    statusText: "Pending",
  },
  {
    title: "Viva / Demonstration",
    status: "Future",
    statusType: "future",
    description:
      "Final viva and demonstration session to explain the problem, methodology, implementation, outcomes, and system significance.",
    date: "04 / 05 / 2026",
    marks: "XX%",
    statusText: "Scheduled / Upcoming",
  },
];

function StatusBadge({ type, children }) {
  const styles = {
    completed: "bg-green-100 text-green-700",
    upcoming: "bg-amber-100 text-amber-700",
    future: "bg-blue-100 text-blue-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        styles[type] || "bg-gray-100 text-gray-700"
      }`}
    >
      {children}
    </span>
  );
}

function InfoCard({ title, value }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <strong className="block text-sm font-semibold text-gray-900">
        {title}
      </strong>
      <p className="mt-2 text-gray-600">{value}</p>
    </div>
  );
}

export default function Milestones() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            <CalendarRange size={18} />
            Assessments & Progress
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Project Milestones
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
            This page organizes the key academic assessments and project
            checkpoints for AloeGreen, including dates, marks, and current
            status.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="relative space-y-6 before:absolute before:left-5 before:top-4 before:h-[calc(100%-2rem)] before:w-0.5 before:bg-green-100">
            {milestones.map((milestone) => (
              <details
                key={milestone.title}
                className="group relative rounded-3xl border border-gray-100 bg-white p-6 shadow-sm open:shadow-lg"
                open={milestone.open}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white shadow-md">
                      ✓
                    </span>

                    <strong className="text-lg font-bold text-gray-900">
                      {milestone.title}
                    </strong>
                  </div>

                  <StatusBadge type={milestone.statusType}>
                    {milestone.status}
                  </StatusBadge>
                </summary>

                <div className="mt-6 pl-14">
                  <p className="leading-8 text-gray-600">
                    {milestone.description}
                  </p>

                  <div className="mt-6 grid gap-4 md:grid-cols-3">
                    <InfoCard title="Date" value={milestone.date} />
                    <InfoCard title="Marks Allocated" value={milestone.marks} />
                    <InfoCard title="Status" value={milestone.statusText} />
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900">
            Milestone Notes
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-gray-600">
            Update the dates, marks, and status labels according to the latest
            official assessment schedule. This layout is intentionally simple,
            clear, and easy for evaluators to scan.
          </p>
        </div>
      </section>
    </main>
  );
}