const projects = [
  {
    title: "MKT by Rita - Small Business Marketplace",
    description: "Developed a comprehensive marketplace platform connecting diverse small businesses with customers. Features business registration, collections, events, and community discovery.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    category: "Full-Stack Web",
    link: "https://mkt-by-rita.vercel.app/"
  },
  {
    title: "AI Tetris with Computer Vision",
    description: "Created an AI-controlled Tetris using Python and OpenCV, enabling play via gesture recognition.",
    technologies: ["Python", "OpenCV", "Computer Vision", "AI"],
    category: "AI & Computer Vision"
  },
  {
    title: "AWS Serverless Chatbot",
    description: "Designed a scalable chatbot architecture using AWS Lambda, API Gateway, DynamoDB with third-party integrations.",
    technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "Chatbase", "Twilio"],
    category: "Cloud & Backend"
  },
  {
    title: "Bookstall Inventory App",
    description: "Built a full-stack React/Firebase CRUD web application with responsive UI using Tailwind CSS.",
    technologies: ["React", "Firebase", "Tailwind CSS", "JavaScript"],
    category: "Full-Stack Web"
  },
  {
    title: "Snack Identifier",
    description: "Developed a computer vision system to identify snacks using object recognition techniques in Python.",
    technologies: ["Python", "OpenCV", "Machine Learning", "Object Recognition"],
    category: "AI & Computer Vision"
  }
];

const achievements = [
  {
    title: "Honduras Startup Finalist",
    description: "Participated in national startup competitions with innovative tech projects",
    dates: "April 2018 and May 2019"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Project Highlights</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Showcasing innovative solutions and technical expertise across various domains
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 flex-1">
                    {project.title}
                  </h3>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full ml-2">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {project.link && (
                <div className="mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    Visit Live Site →
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Achievements Section */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Notable Achievements
          </h3>
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">
                {achievement.title}
              </h4>
              <p className="text-gray-600 mb-2">
                {achievement.description}
              </p>
              <p className="text-sm text-gray-500">
                {achievement.dates}
              </p>
            </div>
          ))}
        </div>
        
        {/* Additional Information */}
        <div className="mt-12 text-center bg-blue-50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Continuous Growth
          </h3>
          <div className="space-y-2 text-gray-600">
            <p>• Continues to develop personal and freelance software projects</p>
            <p>• Strong interest in AI, automation, and full-stack development</p>
            <p>• Actively exploring scalable cloud architectures and edge computing applications</p>
          </div>
        </div>
      </div>
    </section>
  );
}
