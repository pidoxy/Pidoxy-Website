import SocialLinks from './SocialLinks'

export default function Footer({ socialLinks }) {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          {socialLinks && (
            <SocialLinks 
              socialLinks={socialLinks} 
              className="justify-center" 
              size="md"
            />
          )}
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Pidoxy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 