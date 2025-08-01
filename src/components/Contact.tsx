import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  ArrowTopRightOnSquareIcon 
} from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, collaborations, or just having a chat about technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 gap-12 max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  <MapPinIcon className="w-6 h-6 text-blue-600 mr-4" />
                  <div className="text-center">
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">Tegucigalpa, Honduras</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <PhoneIcon className="w-6 h-6 text-blue-600 mr-4" />
                  <div className="text-center">
                    <p className="font-medium text-gray-900">Phone</p>
                    <a 
                      href="tel:+50498428161"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      +504 98428161
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <EnvelopeIcon className="w-6 h-6 text-blue-600 mr-4" />
                  <div className="text-center">
                    <p className="font-medium text-gray-900">Email</p>
                    <a 
                      href="mailto:bryamejia@gmail.com"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      bryamejia@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <ArrowTopRightOnSquareIcon className="w-6 h-6 text-blue-600 mr-4" />
                  <div className="text-center">
                    <p className="font-medium text-gray-900">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/alexismejiaf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      linkedin.com/in/alexismejiaf
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <h4 className="font-semibold text-gray-900 mb-2">
                Let&apos;s Build Something Amazing Together!
              </h4>
              <p className="text-gray-600 text-sm">
                Whether you&apos;re looking for a developer to join your team, 
                need help with a project, or want to collaborate on something innovative, 
                I&apos;d love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-gray-200 text-center">
        <p className="text-gray-600">
          © 2025 Bryan Alexis Mejia Fonseca. Built with Next.js and Tailwind CSS.
        </p>
      </footer>
    </section>
  );
}
