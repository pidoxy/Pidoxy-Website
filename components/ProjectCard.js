// components/ProjectCard.js
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../lib/sanity'

function getYouTubeVideoId(url) {
  if (!url) return null
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
  const match = url.match(regExp)
  return (match && match[2].length === 11) ? match[2] : null
}

export default function ProjectCard({ project }) {
  const { title, slug, image, description, tags, youtubeUrl } = project

  let thumbnailSrc = null
  if (image) {
    thumbnailSrc = urlFor(image).width(500).height(300).url()
  } else if (youtubeUrl) {
    const videoId = getYouTubeVideoId(youtubeUrl)
    if (videoId) {
      thumbnailSrc = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {thumbnailSrc && (
        <div className="relative h-48 w-full">
          <Image
            src={thumbnailSrc}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags?.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/projects/${slug.current}`}
          className="text-blue-600 hover:text-blue-800 font-semibold"
        >
          Learn More &rarr;
        </Link>
      </div>
    </div>
  )
} 