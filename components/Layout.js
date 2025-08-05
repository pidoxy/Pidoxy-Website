import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children, socialLinks }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <Footer socialLinks={socialLinks} />
    </div>
  )
} 