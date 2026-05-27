import { FileText, FolderOpen, Clock3 } from "lucide-react";

const documents = [
  {
    name: "Project Charter",
    note: "Initial project planning document",
    status: "Available",
    statusType: "available",
    link: "/documents/TAF_25-26J-166.pdf",
    linkText: "Open Link",
    downloadable: true,
  },
  {
    name: "Proposal Document",
    note: "Research proposal and scope definition",
    status: "Available",
    statusType: "available",
    link: "/documents/ProposalDoc.zip",
    linkText: "Open Link",
    downloadable: true,
  },
  {
    name: "Checklist Documents",
    note: "Assessment checklists and supporting forms",
    status: "Pending",
    statusType: "pending",
    link: "#",
    linkText: "Pending Link",
    downloadable: false,
  },
  {
    name: "Final Report",
    note: "Main final document set",
    status: "Pending",
    statusType: "pending",
    link: "#",
    linkText: "Pending Link",
    downloadable: false,
  },
  {
    name: "Research Paper",
    note: "Publication-oriented project paper",
    status: "Available",
    statusType: "available",
    link: "/documents/Smart IOT-Based System For Aloe Vera - Research Paper.pdf",
    linkText: "Open Link",
    downloadable: true,
  },
];

function StatusBadge({ type, children }) {
  const styles = {
    available: "bg-green-100 text-green-700",
    pending: "bg-amber-100 text-amber-700",
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

function InfoCard({ icon, title, description }) {
  return (
    <article className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-700">
        {icon}
      </div>

      <h2 className="mt-5 text-2xl font-bold text-gray-900">{title}</h2>

      <p className="mt-4 leading-8 text-gray-600">{description}</p>
    </article>
  );
}

export default function Documents() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            <FileText size={18} />
            Project Files
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Documents
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
            This page lists produced and pending project documents. Replace
            placeholder links with actual files as they become available.
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
                    Document
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                    Type / Note
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                    Link
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100 bg-white">
                {documents.map((doc) => (
                  <tr key={doc.name} className="transition hover:bg-green-50/50">
                    <td className="whitespace-nowrap px-6 py-5 text-sm font-semibold text-gray-900">
                      {doc.name}
                    </td>

                    <td className="px-6 py-5 text-sm leading-6 text-gray-600">
                      {doc.note}
                    </td>

                    <td className="whitespace-nowrap px-6 py-5">
                      <StatusBadge type={doc.statusType}>
                        {doc.status}
                      </StatusBadge>
                    </td>

                    <td className="whitespace-nowrap px-6 py-5 text-sm">
                      <a
                        href={doc.link}
                        target={doc.link === "#" ? undefined : "_blank"}
                        rel={doc.link === "#" ? undefined : "noreferrer"}
                        download={doc.downloadable}
                        className={`font-semibold ${
                          doc.link === "#"
                            ? "cursor-not-allowed text-gray-400"
                            : "text-green-700 hover:text-green-800"
                        }`}
                      >
                        {doc.linkText}
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
          <InfoCard
            icon={<FolderOpen size={24} />}
            title="Completed Items"
            description={
              <>
                Place uploaded or finalised documents in a dedicated{" "}
                <strong className="text-gray-900">documents</strong> folder and
                update each placeholder link with the relative file path.
              </>
            }
          />

          <InfoCard
            icon={<Clock3 size={24} />}
            title="Pending Items"
            description="Keep future submissions visible so visitors and evaluators can understand the full document roadmap of the project."
          />
        </div>
      </section>
    </main>
  );
}