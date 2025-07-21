import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout title="Contact - Pidoxy">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600">I&apos;d love to hear from you. Let&apos;s start a conversation!</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600 text-xl">✉️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <a href="mailto:eemmanuel.idoko@gmail.com" className="text-blue-600 hover:text-blue-800">
                    eemmanuel.idoko@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600 text-xl">💼</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/emmanuelidoko/" target="_blank" rel="noopener noreferrer" 
                     className="text-blue-600 hover:text-blue-800">
                    /in/emmanuelidoko
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600 text-xl">🐦</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Twitter</h3>
                  <a href="https://twitter.com/pidoxy_" target="_blank" rel="noopener noreferrer" 
                     className="text-blue-600 hover:text-blue-800">
                    @pidoxy_
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600 text-xl">🔗</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">GitHub</h3>
                  <a href="https://github.com/pidoxy" target="_blank" rel="noopener noreferrer" 
                     className="text-blue-600 hover:text-blue-800">
                    github.com/pidoxy
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Send Message
              </button>
            </form>
            
            <p className="text-sm text-gray-500 mt-4">
              Note: This form is for display purposes. Please use the email link above to contact me directly.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center bg-gray-100 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Looking for collaboration?</h3>
          <p className="text-gray-600 mb-4">
            I&apos;m always interested in exciting projects, research opportunities, 
            and connecting with fellow developers and researchers.
          </p>
          <p className="text-gray-600">
            Feel free to reach out whether you want to discuss a project, 
            share ideas, or just have a friendly chat about technology!
          </p>
        </div>
      </div>
    </Layout>
  )
} 