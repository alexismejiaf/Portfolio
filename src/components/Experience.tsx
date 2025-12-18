import {
  CalendarIcon,
  CheckCircleIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    title: "Software Developer",
    company: "Rita Group",
    location: "Remote",
    period: "Jan 2024 - Present",
    responsibilities: [
      "Developed a conversational AI assistant using AWS Lambda, API Gateway, DynamoDB, and integrated Chatbase and Twilio for messaging.",
      "Built secure authentication systems using Google and Apple ID.",
      "Designed and implemented serverless backend architecture with data persistence and analytics.",
      "Architected and developed MKT by Rita (mkt.ritaxyz.com) — a comprehensive B2B marketplace platform connecting diverse small businesses with customers.",
      "Built responsive web application with advanced filtering capabilities by category and location, supporting business discovery and community engagement.",
      "Implemented secure user authentication and business registration system with role-based access control for customers and business owners.",
      "Developed scalable backend infrastructure handling business listings, collections, events management, and user account systems.",
      "Created intuitive UX/UI design with modern web standards, mobile-responsive layout, and accessibility best practices.",
      "Integrated social media connectivity and implemented SEO optimization strategies for enhanced online visibility.",
      "Established CI/CD pipeline and deployment processes ensuring reliable platform performance and scalability for growing user base.",
    ],
  },
  {
    title: "Security Engineer Intern",
    company: "Sumadi",
    location: "Honduras",
    period: "Jun 2023 - Dec 2023",
    responsibilities: [
      "Cut AWS cost and security incidents by 35% by implementing new security measures and best practices.",
      "Automated patching process for AWS Linux servers using Python scripts, saving 35 hours monthly for employees.",
      "Detected, prevented, and remediated over 100 vulnerabilities for AWS Linux servers using Nessus and PrismaCloud.",
      "Documented and socialized processes, procedures, and user manuals using Confluence.",
      "Collaborated with multidisciplinary teams under Scrum methodology.",
    ],
  },
  {
    title: "IT Technician Intern",
    company: "Banco de Occidente",
    location: "Honduras",
    period: "May 2014 - Dec 2014",
    responsibilities: [
      "Provided technical support for software and hardware issues in bank branches.",
      "Assisted in systems maintenance and updates.",
      "Participated in IT inventory management and troubleshooting.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative" aria-labelledby="experience-heading">
      <div className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-indigo-500/15 to-transparent blur-3xl" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="space-y-6 text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-slate-200">
            Experience
          </span>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl" id="experience-heading">
            Hands-on impact across SaaS, cloud, and enterprise.
          </h2>
          <p className="mx-auto max-w-3xl text-base text-slate-300 sm:text-lg">
            I partner with startups and established teams to launch products,
            harden infrastructure, and scale operations with automation.
          </p>
        </div>

        <div className="mt-16 space-y-10">
          {experiences.map((experience, index) => (
            <AnimatedSection
              key={experience.title}
              animation="fade-in"
              delay={index * 150}
            >
              <div
                className="relative rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-sky-500/10 backdrop-blur transition-all hover:scale-[1.01] hover:border-white/20 hover:bg-white/8"
              >
              <div className="absolute inset-y-8 left-5 w-px bg-gradient-to-b from-sky-300/80 via-indigo-400/40 to-transparent" />
              <span className="absolute left-3 top-10 inline-flex h-3 w-3 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500">
                <span className="absolute inset-0 rounded-full bg-sky-400/20 blur-sm" />
              </span>

              <div className="grid gap-6 pl-12 sm:grid-cols-[minmax(0,_1fr)_minmax(0,_240px)] sm:items-start sm:gap-10">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-400">
                      {`Role ${index + 1}`}
                    </p>
                    <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                      {experience.title}
                    </h3>
                    <p className="text-lg font-medium text-sky-300">
                      {experience.company}
                    </p>
                  </div>

                  <ul className="space-y-3 text-sm text-slate-200 sm:text-base">
                    {experience.responsibilities.map((item) => (
                      <li key={item} className="flex gap-3">
                        <CheckCircleIcon className="mt-1 h-4 w-4 flex-none text-sky-300" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-950/40 p-6 text-sm text-slate-200">
                  <div className="flex items-center gap-2 text-slate-300">
                    <CalendarIcon className="h-5 w-5 text-sky-300" />
                    <span>{experience.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <MapPinIcon className="h-5 w-5 text-sky-300" />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>
            </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
