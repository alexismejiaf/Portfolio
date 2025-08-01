import { 
  CodeBracketIcon, 
  ServerIcon, 
  CloudIcon, 
  CircleStackIcon,
  WrenchScrewdriverIcon 
} from '@heroicons/react/24/outline';

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: CodeBracketIcon,
    skills: ["Python", "C++", "Java", "JavaScript", "React", "Tailwind CSS", "Bootstrap"]
  },
  {
    title: "Backend & APIs",
    icon: ServerIcon,
    skills: ["FastAPI", "Express.js", "Node.js", "RESTful APIs"]
  },
  {
    title: "Cloud & DevOps",
    icon: CloudIcon,
    skills: ["AWS (Lambda, API Gateway, DynamoDB)", "Firebase", "Make (Integromat)"]
  },
  {
    title: "Databases",
    icon: CircleStackIcon,
    skills: ["SQL", "Cassandra", "Supabase"]
  },
  {
    title: "Tools & Practices",
    icon: WrenchScrewdriverIcon,
    skills: ["Git", "Postman", "Scrum", "Computer Vision", "OpenCV"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various domains
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <IconComponent className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mr-2 mb-2"
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
