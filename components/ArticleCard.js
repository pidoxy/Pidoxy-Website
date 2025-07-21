import Link from 'next/link'
import Image from 'next/image'

export default function ArticleCard({ article }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {article.mainImage && (
        <div className="relative h-48 w-full">
          <Image
            src={article.mainImage}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {article.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {article.excerpt}
        </p>
        
        {article.publishedAt && (
          <p className="text-sm text-gray-500 mb-4">
            Published: {new Date(article.publishedAt).toLocaleDateString()}
          </p>
        )}
        
        <div className="flex justify-between items-center">
          <Link
            href={`/articles/${article.slug}`}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Read Summary →
          </Link>
          
          {article.originalUrl && (
            <a
              href={article.originalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
            >
              Read Original
            </a>
          )}
        </div>
      </div>
    </div>
  )
} 