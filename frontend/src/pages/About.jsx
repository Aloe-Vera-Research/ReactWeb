import { Users, GraduationCap, Mail } from "lucide-react";

const members = [
  {
    name: "Eesara Megasooriya",
    role: "Yield Prediction & Forecasting",
    description:
      "Handles predictive modelling, agricultural feature analysis, and interpretation of model performance for yield estimation.",
    email: "it22337962@my.sliit.lk",
    image: "/images/members/Eesara.jpg",
  },
  {
    name: "Himash Rajapaksha",
    role: "Disease Detection",
    description:
      "Works on image-based disease awareness and practical support for identifying cultivation issues in Aloe vera leaves.",
    email: "it22909664@my.sliit.lk",
    image: "/images/members/Himash.jpg",
  },
  {
    name: "Amanda Bandara",
    role: "Fertilizer Recommendation",
    description:
      "Focuses on nutrient support strategies and recommendation logic linked to soil and crop condition inputs.",
    email: "it22338020@my.sliit.lk",
    image: "/images/members/Amanda.jpeg",
  },
  {
    name: "Shehani Yasodara",
    role: "Price Forecasting",
    description:
      "Contributes to market insight and predictive analysis that extends the platform toward cultivation economics.",
    email: "it22360946@my.sliit.lk",
    image: "/images/members/Shehani.jpg",
  },
];

const supervisors = [
  {
    title: "Supervisor",
    name: "Ms. Jenny Krishara",
    description:
      "Senior Lecturer | Department of Information Technology | Faculty of Computing",
    image: "/images/members/supervisor.jpeg",
  },
  {
    title: "Co-Supervisor",
    name: "Dr. Dinuka Wijendra",
    description:
      "Assistant Professor | Department of Information Technology | Faculty of Computing",
    image: "/images/members/cosupervisor.jpg",
  },
];

function MemberCard({ member }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <img
        src={member.image}
        alt={member.name}
        className="h-72 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>

        <p className="mt-3 text-sm leading-6 text-gray-600">
          <strong className="text-gray-900">Role:</strong> {member.role}
        </p>

        <p className="mt-3 leading-7 text-gray-600">{member.description}</p>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            <Mail size={14} />
            Email
          </span>

          <a
            href={`mailto:${member.email}`}
            className="text-sm font-semibold text-green-700 hover:text-green-800"
          >
            {member.email}
          </a>
        </div>
      </div>
    </article>
  );
}

function SupervisorCard({ person }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
      <img
        src={person.image}
        alt={person.name}
        className="h-80 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{person.title}</h3>

        <p className="mt-3 text-lg font-semibold text-green-700">
          {person.name}
        </p>

        <p className="mt-3 leading-7 text-gray-600">{person.description}</p>
      </div>
    </article>
  );
}

export default function About() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            <Users size={18} />
            Team & Supervision
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            About Us
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
            Meet the team members behind AloeGreen and the roles that shape the
            project across research, prediction, system design, and user-facing
            delivery.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <MemberCard key={member.email} member={member} />
          ))}
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm lg:p-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            <GraduationCap size={18} />
            Supervisor / Mentor
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Academic Supervision
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-gray-600">
            AloeGreen is guided by academic supervision from the Faculty of
            Computing, supporting the project through research direction,
            technical review, and academic evaluation.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {supervisors.map((person) => (
              <SupervisorCard key={person.title} person={person} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}