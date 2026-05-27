import { Mail, MessageCircle, Microscope, Phone } from "lucide-react";

const contactCards = [
  {
    icon: Mail,
    title: "General Inquiry",
    description:
      "Use for website-related questions, project introductions, and general communication.",
    value: "aloegreen166@gmail.com",
    href: "mailto:aloegreen166@gmail.com",
  },
  {
    icon: Microscope,
    title: "Research Collaboration",
    description:
      "Use for academic discussions, literature-related communication, and collaboration opportunities.",
    value: "aloegreen166@gmail.com",
    href: "mailto:aloegreen166@gmail.com",
  },
  {
    icon: Phone,
    title: "Project Demo Request",
    description:
      "Use for presentation requests, project walkthroughs, or demo-based conversations.",
    value: "+94 77 335 5331",
    href: "tel:+94773355331",
  },
];

function ContactCard({ item }) {
  const Icon = item.icon;

  return (
    <article className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-700">
        <Icon size={24} />
      </div>

      <h3 className="mt-5 text-xl font-bold text-gray-900">{item.title}</h3>

      <p className="mt-3 leading-7 text-gray-600">{item.description}</p>

      <a
        href={item.href}
        className="mt-4 inline-flex font-semibold text-green-700 hover:text-green-800"
      >
        {item.value}
      </a>
    </article>
  );
}

export default function Contact() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            <Mail size={18} />
            Communication
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Contact Us
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
            For general inquiries, research collaboration, project
            demonstrations, or academic communication related to AloeGreen, use
            the details below.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm lg:p-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              <MessageCircle size={18} />
              Get in Touch
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900">
              Contact Information
            </h2>

            <div className="mt-5 space-y-5 leading-8 text-gray-600">
              <p>
                For general inquiries, research collaboration, project
                demonstrations, or academic communication related to AloeGreen,
                please contact us using the details shown here.
              </p>

              <p>
                AloeGreen is open for academic discussions, project walkthroughs,
                research-based feedback, and smart agriculture collaboration
                opportunities.
              </p>
            </div>

            <div className="mt-8 space-y-5 rounded-3xl bg-green-50 p-6">
              <p className="text-gray-700">
                <strong className="text-gray-900">Email:</strong>{" "}
                <a
                  href="mailto:aloegreen166@gmail.com"
                  className="font-semibold text-green-700 hover:text-green-800"
                >
                  aloegreen166@gmail.com
                </a>
              </p>

              <p className="text-gray-700">
                <strong className="text-gray-900">Phone:</strong>{" "}
                <a
                  href="tel:+94773355331"
                  className="font-semibold text-green-700 hover:text-green-800"
                >
                  +94 77 335 5331
                </a>
              </p>

              <p className="text-gray-700">
                <strong className="text-gray-900">Purpose:</strong> University
                research project, academic evaluation, and smart agriculture
                demonstrations.
              </p>
            </div>
          </article>

          <div className="grid gap-6">
            {contactCards.map((item) => (
              <ContactCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}