import Layout from '../../components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { getArticle, getArticles } from '../../lib/sanity'
import { PortableText } from '@portabletext/react'

export default function ArticleDetail({ article }) {
  if (!article) {
    return (
      <Layout title="Article Not Found - Pidoxy">
        <div className="text-center py-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/articles" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
            Back to Articles
          </Link>
        </div>
      </Layout>
    )
  }

  return (
    <Layout title={`${article.title} - Articles - Pidoxy`}>
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <Link href="/articles" className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-8">
          ← Back to Articles
        </Link>
        
        {/* Article header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{article.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{article.excerpt}</p>
          
          {article.publishedAt && (
            <p className="text-gray-500 mb-6">
              Published: {new Date(article.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          )}
          
          {article.originalUrl && (
            <div className="flex gap-4 mb-6">
              <a
                href={article.originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
              >
                Read Original Article →
              </a>
            </div>
          )}
        </div>
        
        {/* Article image */}
        {article.mainImage && (
          <div className="relative h-96 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={article.mainImage}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        
        {/* Article content */}
        {article.body && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Article Summary</h2>
            <div className="prose prose-lg max-w-none">
              <PortableText value={article.body} />
            </div>
            
            {article.originalUrl && (
              <div className="mt-8 p-4 bg-purple-50 rounded-lg border border-purple-200">
                <p className="text-purple-800 mb-2">
                  <strong>Want to read the full article?</strong>
                </p>
                <p className="text-purple-700 mb-4">
                  This is a summary of the original article. Click below to read the complete version.
                </p>
                <a
                  href={article.originalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
                >
                  Read Full Article
                </a>
              </div>
            )}
          </div>
        )}
        
        {/* Navigation to other articles */}
        <div className="text-center bg-gray-100 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Read More Articles</h3>
          <Link href="/articles" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
            View All Articles
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  try {
    const articles = await getArticles()
    const paths = articles.map((article) => ({
      params: { slug: article.slug.current }
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
    const article = await getArticle(params.slug)
    
    if (!article) {
      return {
        notFound: true
      }
    }
    
    return {
      props: {
        article
      },
      revalidate: 60
    }
  } catch (error) {
    console.error('Error fetching article:', error)
    return {
      notFound: true
    }
  }
} 