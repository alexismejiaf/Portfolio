import { ArrowDownIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900">
              Bryan Alexis
              <br />
              <span className="text-blue-600">Mejia Fonseca</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto">
              Software Developer & Network Engineer
            </p>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Building scalable web applications and cloud solutions with modern technologies
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-gray-600 space-y-1">
              <p className="flex items-center justify-center">
                📍 Tegucigalpa, Honduras
              </p>
              <p className="flex items-center justify-center">
                📞 +504 98428161
              </p>
              <p className="flex items-center justify-center">
                ✉️ bryamejia@gmail.com
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:bryamejia@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get In Touch
            </a>
            <a
              href="https://linkedin.com/in/alexismejiaf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
        
        <div className="mt-16 animate-bounce">
          <ArrowDownIcon className="w-8 h-8 mx-auto text-gray-400" />
        </div>
      </div>
    </section>
  );
}
