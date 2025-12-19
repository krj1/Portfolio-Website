import { Mail, Linkedin, Github, MapPin, Phone, Heart } from 'lucide-react';

export function Contact() {
  const hobbies = [
    'Unprofitable Business Ventures',
    'Economics',
    'Biking',
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center mb-12 text-gray-900">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="mb-6 text-gray-900">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: '#2DEB9820' }}>
                  <Mail style={{ color: '#2DEB98' }} size={20} />
                </div>
                <div>
                  <p className="text-gray-900">Email</p>
                  <a href="mailto:Thekrjackson@gmail.com" style={{ color: '#2DEB98' }} className="hover:opacity-80">
                    Thekrjackson@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: '#FF885420' }}>
                  <Phone style={{ color: '#FF8854' }} size={20} />
                </div>
                <div>
                  <p className="text-gray-900">Phone</p>
                  <a href="tel:+12245388526" style={{ color: '#FF8854' }} className="hover:opacity-80">
                    (224) 538-8526
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: '#2DEB9820' }}>
                  <MapPin style={{ color: '#2DEB98' }} size={20} />
                </div>
                <div>
                  <p className="text-gray-900">Location</p>
                  <p className="text-gray-600">Round Lake, IL 60073</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="mb-4 text-gray-900">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg transition-colors"
                  style={{ backgroundColor: '#2DEB9820' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2DEB9840'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2DEB9820'}
                >
                  <Linkedin style={{ color: '#2DEB98' }} size={24} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg transition-colors"
                  style={{ backgroundColor: '#FF885420' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FF885440'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF885420'}
                >
                  <Github style={{ color: '#FF8854' }} size={24} />
                </a>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex items-center gap-2 mb-4">
                <Heart style={{ color: '#FF8854' }} size={20} />
                <h3 className="text-gray-900">Interests & Hobbies</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {hobbies.map((hobby, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-gray-900">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  style={{ '--tw-ring-color': '#2DEB98' } as React.CSSProperties}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  style={{ '--tw-ring-color': '#2DEB98' } as React.CSSProperties}
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  style={{ '--tw-ring-color': '#2DEB98' } as React.CSSProperties}
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg text-black transition-colors"
                style={{ backgroundColor: '#2DEB98' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#26d989'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2DEB98'}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-gray-200 text-center text-gray-600">
        <p>© 2024 Kurt Jackson - Process Engineer. All rights reserved.</p>
      </footer>
    </section>
  );
}