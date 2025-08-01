import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';

const experiences = [
  {
    title: "Software Developer",
    company: "Rita Group",
    location: "Remote",
    period: "Jan 2024 – Present",
    responsibilities: [
      "Developed a conversational AI assistant using AWS Lambda, API Gateway, DynamoDB, and integrated Chatbase and Twilio for messaging",
      "Built secure authentication systems using Google and Apple ID",
      "Designed and implemented serverless backend architecture with data persistence and analytics"
    ]
  },
  {
    title: "Security Engineer Intern",
    company: "Sumadi",
    location: "Honduras",
    period: "Jun 2023 – Dec 2023",
    responsibilities: [
      "Cut AWS cost and security incidents by 35% by implementing new security measures and best practices",
      "Automated patching process for AWS Linux servers using Python scripts, saving 35 hours monthly for employees",
      "Detected, prevented, and remediated over 100 vulnerabilities for AWS Linux servers using Nessus and PrismaCloud",
      "Documented and socialized processes, procedures, and user manuals using Confluence",
      "Collaborated with multidisciplinary teams under Scrum methodology"
    ]
  },
  {
    title: "IT Technician Intern",
    company: "Banco de Occidente",
    location: "Honduras",
    period: "May 2014 – Dec 2014",
    responsibilities: [
      "Provided technical support for software and hardware issues in bank branches",
      "Assisted in systems maintenance and updates",
      "Participated in IT inventory management and troubleshooting"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            My journey through various roles in software development and technology
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-blue-200"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 md:mb-16">
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-blue-600 rounded-full border-4 border-white shadow"></div>
              
              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-lg font-semibold text-blue-600 mb-2">
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <CalendarIcon className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPinIcon className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, resIndex) => (
                      <li key={resIndex} className="text-gray-600 flex items-start">
                        <span className="text-blue-600 mr-2 mt-1 text-sm">•</span>
                        <span className="text-sm leading-relaxed">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
