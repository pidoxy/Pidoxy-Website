import Layout from '../../components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { getResearchItem, getResearch } from '../../lib/sanity'
import { PortableText } from '@portabletext/react'

export default function ResearchDetail({ research }) {
  if (!research) {
    return (
      <Layout title="Research Not Found - Pidoxy">
        <div className="text-center py-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Research Not Found</h1>
          <p className="text-gray-600 mb-8">The research you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/research" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
            Back to Research
          </Link>
        </div>
      </Layout>
    )
  }

  return (
    <Layout title={`${research.title} - Research - Pidoxy`}>
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <Link href="/research" className="inline-flex items-center text-green-600 hover:text-green-800 mb-8">
          ← Back to Research
        </Link>
        
        {/* Research header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{research.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{research.summary}</p>
          
          {research.publishedAt && (
            <p className="text-gray-500 mb-6">
              Published: {new Date(research.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          )}
          
          {research.researchUrl && (
            <a
              href={research.researchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              View Full Research →
            </a>
          )}
        </div>
        
        {/* Research image */}
        {research.mainImage && (
          <div className="relative h-96 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={research.mainImage}
              alt={research.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        
        {/* Research content */}
        {research.body && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Research Details</h2>
            <div className="prose prose-lg max-w-none">
              <PortableText value={research.body} />
            </div>
          </div>
        )}
        
        {/* Navigation to other research */}
        <div className="text-center bg-gray-100 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More Research</h3>
          <Link href="/research" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
            View All Research
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  try {
    const research = await getResearch()
    const paths = research.map((item) => ({
      params: { slug: item.slug.current }
    }))
    
    return {
      paths,
      fallback: 'blocking'
    }
  } catch (error) {
    console.error('Error generating paths:', error)
    return {
      paths: [],
      fallback: 'blocking'
    }
  }
}

export async function getStaticProps({ params }) {
  try {
    const research = await getResearchItem(params.slug)
    
    if (!research) {
      return {
        notFound: true
      }
    }
    
    return {
      props: {
        research
      },
      revalidate: 60
    }
  } catch (error) {
    console.error('Error fetching research:', error)
    return {
      notFound: true
    }
  }
} 