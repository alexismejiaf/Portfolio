import {
  CircleStackIcon,
  CloudIcon,
  CodeBracketIcon,
  ServerIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: CodeBracketIcon,
    skills: [
      "TypeScript",
      "Python",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "C++",
    ],
  },
  {
    title: "Backend & APIs",
    icon: ServerIcon,
    skills: ["FastAPI", "Node.js", "Express.js", "RESTful APIs", "Graph modeling"],
  },
  {
    title: "Cloud & DevOps",
    icon: CloudIcon,
    skills: [
      "AWS Lambda",
      "API Gateway",
      "DynamoDB",
      "Firebase",
      "CI/CD",
      "Infrastructure as Code",
    ],
  },
  {
    title: "Data & Storage",
    icon: CircleStackIcon,
    skills: ["SQL", "Supabase", "Cassandra", "Data modeling", "Analytics pipelines"],
  },
  {
    title: "Tools & Practices",
    icon: WrenchScrewdriverIcon,
    skills: ["Git", "Scrum", "Postman", "Automation", "Computer Vision", "OpenCV"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-indigo-500/10 to-transparent blur-3xl" />
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-slate-200">
            Skillset
          </span>
          <h2 className="mt-6 text-3xl font-semibold text-white sm:text-4xl">
            A versatile toolkit for modern product teams.
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            From front-end polish to resilient back-end systems, I bring a holistic
            mindset and pick the right tool for the outcome—not the other way around.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-indigo-500/10 backdrop-blur transition hover:border-white/20 hover:bg-white/8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/30 via-indigo-500/30 to-blue-600/30 text-sky-200">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-wider text-slate-400">
                        Category
                      </p>
                      <h3 className="text-xl font-semibold text-white">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 transition group-hover:border-white/20 group-hover:bg-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
