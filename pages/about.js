import Layout from '../components/Layout'
import Link from 'next/link'

export default function About() {
  return (
    <Layout title="About - Pidoxy">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
          <p className="text-xl text-gray-600">Get to know the person behind the projects</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Hello, I&apos;m Pidoxy</h2>
              <p className="text-gray-600 mb-4">
                I&apos;m a passionate software developer and researcher with a love for creating innovative 
                solutions and exploring new technologies. My journey in tech spans across various domains, 
                from web development to cutting-edge research.
              </p>
              <p className="text-gray-600 mb-4">
                I believe in the power of technology to solve real-world problems and make a positive 
                impact. Through my projects and research, I aim to contribute to the tech community 
                and share knowledge that can help others grow.
              </p>
              <p className="text-gray-600">
                When I&apos;m not coding or researching, you can find me writing articles, contributing 
                to open source projects, or exploring the latest trends in technology.
              </p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-6xl font-bold">P</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Skills & Expertise</h3>
            <div className="space-y-2">
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'React', 'Next.js', 'Node.js', 'Python', 'TypeScript', 'Sanity CMS', 'Tailwind CSS'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Connect With Me</h3>
            <div className="space-y-3">
              <a href="https://github.com/pidoxy" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <span className="mr-2">🔗</span> GitHub
              </a>
              <a href="https://www.linkedin.com/in/emmanuelidoko/" target="_blank" rel="noopener noreferrer"
                 className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <span className="mr-2">💼</span> LinkedIn
              </a>
              <a href="https://twitter.com/pidoxy_" target="_blank" rel="noopener noreferrer"
                 className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <span className="mr-2">🐦</span> Twitter
              </a>
              <a href="mailto:eemmanuel.idoko@gmail.com"
                 className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <span className="mr-2">✉️</span> Email
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center bg-gray-100 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Let&apos;s Work Together</h3>
          <p className="text-gray-600 mb-6">
            I&apos;m always open to interesting projects, collaboration opportunities, and meaningful conversations.
          </p>
          <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Get In Touch
          </Link>
        </div>
      </div>
    </Layout>
  )
} 