// pages/research/[slug].js
import { client, urlFor } from '../../lib/sanity'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'

export default function ResearchPage({ item }) {
  const { title, image, summary, paperUrl, presentationUrl } = item

  return (
    <>
      <Head>
        <title>{title} | Research</title>
      </Head>
      <div className="max-w-4xl mx-auto">
        <Link href="/research" className="text-blue-600 hover:underline mb-8 block">
          &larr; Back to all research
        </Link>
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
          {title}
        </h1>
        {image && (
          <div className="relative h-96 w-full my-8 rounded-lg overflow-hidden">
            <Image
              src={urlFor(image).width(1200).height(800).url()}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="prose prose-lg max-w-none mb-8">
          <PortableText value={summary} />
        </div>
        <div className="flex flex-wrap gap-4">
          {paperUrl && (
            <a
              href={paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Paper
            </a>
          )}
          {presentationUrl && (
            <a
              href={presentationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors"
            >
              View Presentation
            </a>
          )}
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "research" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const item = await client.fetch(
    `*[_type == "research" && slug.current == $slug][0]`,
    { slug: params.slug }
  )

  if (!item) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      item,
    },
    revalidate: 60,
  }
} 