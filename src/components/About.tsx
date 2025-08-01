export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I&apos;m a passionate Software Developer and Network Engineer based in Tegucigalpa, Honduras, 
              with a strong background in building scalable web applications and cloud solutions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With experience in modern technologies like Python, JavaScript, React, and AWS, 
              I specialize in creating efficient, user-friendly applications that solve real-world problems.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I&apos;m continuously exploring new technologies and methodologies, with a particular 
              interest in AI, automation, and full-stack development.
            </p>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Education</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900">
                  Bachelor of Science in Computer Systems Engineering
                </h4>
                <p className="text-blue-600 font-medium">
                  Universidad Tecnológica Centroamericana (UNITEC)
                </p>
                <p className="text-gray-600">Tegucigalpa, Honduras</p>
                <p className="text-gray-500">Graduated: 2023</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Certifications</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900">
                  CCNA (Cisco Certified Network Associate)
                </h4>
                <p className="text-blue-600 font-medium">Cisco</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Languages</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-700">Spanish</span>
                  <span className="text-gray-500">Native</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">English</span>
                  <span className="text-gray-500">Advanced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
