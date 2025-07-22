export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Pidoxy. All rights reserved.
        </p>
      </div>
    </footer>
  )
} 