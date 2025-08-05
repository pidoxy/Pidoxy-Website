import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { client, urlFor } from '../lib/sanity'

const typeColors = {
  newspaper: 'bg-blue-100 text-blue-800',
  article: 'bg-green-100 text-green-800',
  video: 'bg-red-100 text-red-800',
  tutorial: 'bg-purple-100 text-purple-800',
  social: 'bg-pink-100 text-pink-800',
  podcast: 'bg-yellow-100 text-yellow-800',
  interview: 'bg-indigo-100 text-indigo-800',
  award: 'bg-orange-100 text-orange-800',
  other: 'bg-gray-100 text-gray-800',
}

const typeLabels = {
  newspaper: 'Newspaper',
  article: 'Article',
  video: 'Video',
  tutorial: 'Tutorial',
  social: 'Social Media',
  podcast: 'Podcast',
  interview: 'Interview',
  award: 'Award',
  other: 'Other',
}

export default function MediaPage({ mediaItems }) {
  return (
    <>
      <Head>
        <title>Media & Press | Pidoxy</title>
        <meta name="description" content="Press coverage, media mentions, and features of Pidoxy's work." />
      </Head>
      <div className="space-y-12">
        {/* Header */}
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
            Media & Press
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Press coverage, media mentions, and features showcasing my work and achievements.
          </p>
        </section>

        {/* Media Items */}
        <section>
          {mediaItems.length > 0 ? (
            <div className="space-y-8">
              {mediaItems.map((item) => (
                <div key={item._id} className="bg-white rounded-lg shadow-md border hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Image */}
                      {item.image && (
                        <div className="flex-shrink-0">
                          <div className="relative h-48 w-full lg:w-64 rounded-lg overflow-hidden">
                            <Image
                              src={urlFor(item.image).width(256).height(192).url()}
                              alt={item.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      )}

                      {/* Content */}
                      <div className="flex-grow">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                          <div className="flex flex-wrap items-center gap-3">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${typeColors[item.type] || typeColors.other}`}>
                              {typeLabels[item.type] || 'Other'}
                            </span>
                            <span className="text-sm text-gray-500">
                              {new Date(item.publishDate).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </span>
                          </div>
                          <Link 
                            href={item.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                          >
                            View Original
                          </Link>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h3>

                        <div className="text-sm text-gray-600 mb-3">
                          <span className="font-medium">{item.publication}</span>
                          {item.author && <span> • by {item.author}</span>}
                        </div>

                        {item.description && (
                          <p className="text-gray-700 mb-4">
                            {item.description}
                          </p>
                        )}

                        {item.excerpt && (
                          <blockquote className="border-l-4 border-blue-500 pl-4 py-2 mb-4 bg-blue-50 rounded-r">
                            <p className="text-gray-700 italic">
                              &ldquo;{item.excerpt}&rdquo;
                            </p>
                          </blockquote>
                        )}

                        {item.tags && item.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag, index) => (
                              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Media Coverage Yet</h3>
                <p className="text-gray-500 mb-6">
                  Add your press mentions, articles, videos, and social media features through the Sanity Studio.
                </p>
                <Link 
                  href="/studio" 
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Add Media Coverage
                </Link>
              </div>
            </div>
          )}
        </section>

        {/* Call to Action */}
        {mediaItems.length > 0 && (
          <section className="bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Interested in featuring my work?
            </h2>
            <p className="text-gray-600 mb-6">
              I&apos;m always open to interviews, collaborations, and sharing insights about my projects and research.
            </p>
            <Link href="/about" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Get In Touch
            </Link>
          </section>
        )}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const query = `*[_type == "media"] | order(publishDate desc) {
    _id,
    title,
    slug,
    type,
    publication,
    author,
    publishDate,
    description,
    excerpt,
    url,
    image,
    tags
  }`

  const mediaItems = await client.fetch(query)

  return {
    props: {
      mediaItems,
    },
    revalidate: 60,
  }
} 