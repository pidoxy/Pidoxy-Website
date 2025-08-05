import Link from 'next/link'

const socialIcons = {
  email: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  ),
  linkedin: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  twitter: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  github: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  medium: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
    </svg>
  ),
  devto: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.32-.02c.32-.02.6-.1.86-.25s.42-.37.42-.64c0-.18-.06-.35-.18-.5s-.30-.24-.54-.29c.24-.05.42-.13.54-.28s.18-.32.18-.5c0-.27-.1-.49-.26-.65zm-.16 1.4c.1.12.1.25 0 .37-.1.12-.25.18-.44.18l-.24.01-.02-.76.24-.01c.19 0 .34.06.44.18zm.14 2.1c-.12.14-.29.21-.51.21l-.28.01-.02-.86.28-.01c.22 0 .39.07.51.21s.18.33.18.55-.06.41-.18.55zm5.07-4.5a.9.9 0 00-1.05-.13c-.31.17-.49.5-.49.86v5.24c0 .36.18.69.49.86a.9.9 0 001.05-.13c.17-.16.27-.39.27-.64V9.19c0-.25-.1-.48-.27-.64zm-.5 5.82c0 .05-.03.1-.08.13a.1.1 0 01-.14 0c-.05-.03-.08-.08-.08-.13V9.37c0-.05.03-.1.08-.13a.1.1 0 01.14 0c.05.03.08.08.08.13v5.5zM19.71 8.1H4.29a4.29 4.29 0 00-4.29 4.29v7.33A4.29 4.29 0 004.29 24h15.42a4.29 4.29 0 004.29-4.29V12.4a4.29 4.29 0 00-4.29-4.29z"/>
    </svg>
  ),
  hashnode: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z"/>
    </svg>
  ),
  youtube: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  ),
  instagram: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  ),
  website: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.499-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.499.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.497-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.029 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
    </svg>
  ),
}

export default function SocialLinks({ socialLinks, className = '', size = 'md', showLabels = false }) {
  if (!socialLinks) return null

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  }

  const linkClasses = {
    sm: 'p-2',
    md: 'p-3',
    lg: 'p-4',
  }

  const getSocialLinks = () => {
    const links = []
    
    if (socialLinks.email) {
      links.push({
        type: 'email',
        url: `mailto:${socialLinks.email}`,
        label: 'Email',
        color: 'hover:text-red-600',
      })
    }
    
    if (socialLinks.linkedin) {
      links.push({
        type: 'linkedin',
        url: socialLinks.linkedin,
        label: 'LinkedIn',
        color: 'hover:text-blue-700',
      })
    }
    
    if (socialLinks.twitter) {
      links.push({
        type: 'twitter',
        url: socialLinks.twitter,
        label: 'Twitter',
        color: 'hover:text-blue-400',
      })
    }
    
    if (socialLinks.github) {
      links.push({
        type: 'github',
        url: socialLinks.github,
        label: 'GitHub',
        color: 'hover:text-gray-900',
      })
    }
    
    if (socialLinks.medium) {
      links.push({
        type: 'medium',
        url: socialLinks.medium,
        label: 'Medium',
        color: 'hover:text-green-600',
      })
    }
    
    if (socialLinks.devto) {
      links.push({
        type: 'devto',
        url: socialLinks.devto,
        label: 'Dev.to',
        color: 'hover:text-gray-900',
      })
    }
    
    if (socialLinks.hashnode) {
      links.push({
        type: 'hashnode',
        url: socialLinks.hashnode,
        label: 'Hashnode',
        color: 'hover:text-blue-600',
      })
    }
    
    if (socialLinks.youtube) {
      links.push({
        type: 'youtube',
        url: socialLinks.youtube,
        label: 'YouTube',
        color: 'hover:text-red-600',
      })
    }
    
    if (socialLinks.instagram) {
      links.push({
        type: 'instagram',
        url: socialLinks.instagram,
        label: 'Instagram',
        color: 'hover:text-pink-600',
      })
    }
    
    if (socialLinks.website) {
      links.push({
        type: 'website',
        url: socialLinks.website,
        label: 'Website',
        color: 'hover:text-blue-600',
      })
    }

    return links
  }

  const links = getSocialLinks()

  if (links.length === 0) return null

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {links.map((link) => (
        <Link
          key={link.type}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center ${linkClasses[size]} bg-gray-100 text-gray-600 rounded-full transition-colors ${link.color} hover:bg-gray-200`}
          title={link.label}
        >
          <div className={sizeClasses[size]}>
            {socialIcons[link.type]}
          </div>
          {showLabels && (
            <span className="ml-2 text-sm font-medium">{link.label}</span>
          )}
        </Link>
      ))}
    </div>
  )
} 