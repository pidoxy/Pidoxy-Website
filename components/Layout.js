import Head from 'next/head'
import Navbar from './Navbar'

export default function Layout({ children, title = 'Pidoxy - Personal Website' }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Personal website showcasing projects, research, and articles" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Pidoxy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
} 