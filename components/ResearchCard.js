// components/ResearchCard.js
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../lib/sanity'

export default function ResearchCard({ item }) {
  const { title, slug, image, summary } = item

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {image && (
        <div className="relative h-48 w-full">
          <Image
            src={urlFor(image).width(500).height(300).url()}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{summary}</p>
        <Link
          href={`/research/${slug.current}`}
          className="text-blue-600 hover:text-blue-800 font-semibold"
        >
          Read More &rarr;
        </Link>
      </div>
    </div>
  )
} 