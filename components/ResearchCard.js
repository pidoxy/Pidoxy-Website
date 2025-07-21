import Link from 'next/link'
import Image from 'next/image'

export default function ResearchCard({ research }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {research.mainImage && (
        <div className="relative h-48 w-full">
          <Image
            src={research.mainImage}
            alt={research.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {research.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {research.summary}
        </p>
        
        {research.publishedAt && (
          <p className="text-sm text-gray-500 mb-4">
            Published: {new Date(research.publishedAt).toLocaleDateString()}
          </p>
        )}
        
        <div className="flex justify-between items-center">
          <Link
            href={`/research/${research.slug}`}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Read More →
          </Link>
          
          {research.researchUrl && (
            <a
              href={research.researchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
            >
              View Research
            </a>
          )}
        </div>
      </div>
    </div>
  )
} 