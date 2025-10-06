import { ArrowUpRightIcon, SparklesIcon } from "@heroicons/react/24/outline";

const projects = [
  {
    title: "MKT by Rita - Small Business Marketplace",
    description:
      "A next-generation marketplace connecting local businesses with customers. Features role-based onboarding, discovery filters, collections, and event marketing tools.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Vercel",
      "Serverless",
    ],
    category: "Full-Stack",
    link: "https://mkt-by-rita.vercel.app/",
  },
  {
    title: "AI Tetris with Computer Vision",
    description:
      "Gesture-controlled Tetris experience using Python and OpenCV to track player movement in real time and automate gameplay.",
    technologies: ["Python", "OpenCV", "AI", "Computer Vision"],
    category: "AI & CV",
  },
  {
    title: "AWS Serverless Chatbot",
    description:
      "Composable chatbot architecture running on AWS Lambda with API Gateway, DynamoDB, Chatbase, and Twilio integrations for multi-channel conversations.",
    technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "Chatbase", "Twilio"],
    category: "Cloud",
  },
  {
    title: "Bookstall Inventory App",
    description:
      "Lightweight inventory and sales dashboard for book vendors with real-time sync and responsive UI.",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    category: "Full-Stack",
  },
  {
    title: "Snack Identifier",
    description:
      "Computer vision pipeline that classifies snack products using custom datasets and OpenCV preprocessing techniques.",
    technologies: ["Python", "OpenCV", "Machine Learning"],
    category: "AI & CV",
  },
];

const achievements = [
  {
    title: "Honduras Startup Finalist",
    description:
      "Recognized in national competitions (2018 & 2019) for building tech solutions that empower local businesses.",
  },
];

const growthHighlights = [
  "Constantly prototyping AI-assisted tools and automation workflows.",
  "Active interest in edge computing and low-latency architectures.",
  "Collaborating with founders and small teams to accelerate product delivery.",
];

export default function Projects() {
  return (
    <section id="projects" className="relative">
      <div className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-sky-500/10 to-transparent blur-3xl" />
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-slate-200">
            Projects
          </span>
          <h2 className="mt-6 text-3xl font-semibold text-white sm:text-4xl">
            Products and experiments that move the needle.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            A selection of recent work spanning marketplaces, AI, and cloud-first
            experiences designed for resilience and delightful UX.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-indigo-500/10 backdrop-blur transition hover:border-white/20 hover:bg-white/8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 transition group-hover:border-white/20 group-hover:bg-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <div className="mt-8">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-slate-200 transition hover:border-white/40 hover:text-white"
                  >
                    Visit live site
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.65fr_0.35fr]">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 via-white/5 to-transparent p-8 shadow-lg shadow-indigo-500/10 backdrop-blur">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300">
              <SparklesIcon className="h-5 w-5" />
              Continuous growth
            </span>
            <ul className="mt-6 space-y-4 text-sm text-slate-200 sm:text-base">
              {growthHighlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-xl shadow-sky-500/10 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
              Recognition
            </p>
            {achievements.map((achievement) => (
              <div key={achievement.title} className="mt-4 space-y-2">
                <h3 className="text-lg font-semibold text-white">
                  {achievement.title}
                </h3>
                <p className="text-sm text-slate-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
