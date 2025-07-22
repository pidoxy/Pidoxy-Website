// pages/projects/[slug].js
import { client, urlFor } from '../../lib/sanity'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import YouTube from 'react-youtube'
import BrowserFrame from '../../components/BrowserFrame'
import GitHubCard from '../../components/GitHubCard'

function getYouTubeVideoId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
  const match = url.match(regExp)
  return (match && match[2].length === 11) ? match[2] : null
}

export default function ProjectPage({ project }) {
  const { title, image, body, liveUrl, codeUrl, youtubeUrl } = project
  const videoId = youtubeUrl ? getYouTubeVideoId(youtubeUrl) : null

  return (
    <>
      <Head>
        <title>{title} | Projects</title>
      </Head>
      <div className="max-w-6xl mx-auto">
        <Link href="/projects" className="text-blue-600 hover:underline mb-8 block">
          &larr; Back to all projects
        </Link>
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
            {title}
          </h1>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column: Previews */}
          <div className="space-y-8">
            {liveUrl && (
              <BrowserFrame url={liveUrl}>
                <div className="relative h-64 w-full">
                  <iframe
                    src={liveUrl}
                    className="w-full h-full border-0"
                    title={`Live preview of ${title}`}
                    sandbox="allow-scripts allow-same-origin"
                  />
                </div>
              </BrowserFrame>
            )}
            {videoId && <YouTube videoId={videoId} className="w-full h-64 rounded-lg shadow-lg overflow-hidden" />}
            {codeUrl && <GitHubCard url={codeUrl} />}
          </div>

          {/* Right Column: Details */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About This Project</h2>
            <PortableText value={body} />
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "project" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const project = await client.fetch(
    `*[_type == "project" && slug.current == $slug][0]{
      ...,
      "tags": tags[]
    }`,
    { slug: params.slug }
  )

  if (!project) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      project,
    },
    revalidate: 60,
  }
} 