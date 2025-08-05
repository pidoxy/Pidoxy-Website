import Link from 'next/link'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
  { name: 'Research', href: '/research' },
  { name: 'Media', href: '/media' },
  { name: 'About', href: '/about' },
]

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600">
              Pidoxy
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
} 