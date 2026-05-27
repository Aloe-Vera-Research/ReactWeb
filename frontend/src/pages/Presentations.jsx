import { Presentation } from "lucide-react";

const presentations = [
  {
    name: "Proposal Presentation",
    description: "Initial concept, research motivation, and scope overview",
    date: "10 / 09 / 2025",
    status: "Completed",
    statusType: "completed",
    link: "/presentations/ProposalPresentation.pdf",
    linkText: "Open Slides",
    downloadable: true,
  },
  {
    name: "Progress Presentation 1",
    description:
      "Early progress, domain understanding, and architecture discussion",
    date: "05 / 01 / 2026",
    status: "Completed",
    statusType: "completed",
    link: "/presentations/ProgressPresentation1.pdf",
    linkText: "Open Slides",
    downloadable: true,
  },
  {
    name: "Progress Presentation 2",
    description:
      "Evaluation progress, module outcomes, and implementation status",
    date: "12 / 03 / 2026",
    status: "Completed",
    statusType: "completed",
    link: "/presentations/ProgressPresentation2.pdf",
    linkText: "Open Slides",
    downloadable: true,
  },
  {
    name: "Final Presentation",
    description:
      "Final overview of the research, implementation, results, and website",
    date: "04 / 05 / 2026",
    status: "Upcoming",
    statusType: "upcoming",
    link: "#",
    linkText: "Pending Link",
    downloadable: false,
  },
];

function StatusBadge({ type, children }) {
  const styles = {
    completed: "bg-green-100 text-green-700",
    upcoming: "bg-amber-100 text-amber-700",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
        styles[type] || "bg-gray-100 text-gray-700"
      }`}
    >
      {children}
    </span>
  );
}

function NoteCard({ title, description }) {
  return (
    <article className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>

      <p className="mt-4 leading-8 text-gray-600">{description}</p>
    </article>
  );
}

export default function Presentations() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            <Presentation size={18} />
            Slides & Decks
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Presentations
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
            This page keeps past and future slide decks in one place, making it
            easier to track presentation history and replace links when files
            are ready.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-100">
              <thead className="bg-green-700">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                    Presentation
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                    Description
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                    Slides Link
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100 bg-white">
                {presentations.map((item) => (
                  <tr key={item.name} className="transition hover:bg-green-50/50">
                    <td className="whitespace-nowrap px-6 py-5 text-sm font-semibold text-gray-900">
                      {item.name}
                    </td>

                    <td className="px-6 py-5 text-sm leading-6 text-gray-600">
                      {item.description}
                    </td>

                    <td className="whitespace-nowrap px-6 py-5 text-sm text-gray-600">
                      {item.date}
                    </td>

                    <td className="whitespace-nowrap px-6 py-5">
                      <StatusBadge type={item.statusType}>
                        {item.status}
                      </StatusBadge>
                    </td>

                    <td className="whitespace-nowrap px-6 py-5 text-sm">
                      <a
                        href={item.link}
                        target={item.link === "#" ? undefined : "_blank"}
                        rel={item.link === "#" ? undefined : "noreferrer"}
                        download={item.downloadable}
                        className={`font-semibold ${
                          item.link === "#"
                            ? "cursor-not-allowed text-gray-400"
                            : "text-green-700 hover:text-green-800"
                        }`}
                      >
                        {item.linkText}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <NoteCard
            title="Presentation Notes"
            description={
              <>
                Store slide decks in the{" "}
                <strong className="text-gray-900">presentations</strong> folder
                and update the links in this table using relative paths. Use
                consistent file names for easier maintenance.
              </>
            }
          />

          <NoteCard
            title="Future Provision"
            description="This page intentionally keeps placeholders for future presentations so the website remains ready for continuous academic updates."
          />
        </div>
      </section>
    </main>
  );
}