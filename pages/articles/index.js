import Layout from '../../components/Layout'
import ArticleCard from '../../components/ArticleCard'
import { getArticles } from '../../lib/sanity'

export default function Articles({ articles }) {
  return (
    <Layout title="Articles - Pidoxy">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">My Articles</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thoughts, insights, and tutorials on technology, development, and innovation. 
            Originally published on various platforms including Medium and Substack.
          </p>
        </div>
        
        {articles && articles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard key={article._id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl text-gray-600 mb-4">No articles published yet</h3>
            <p className="text-gray-500">Coming soon - exciting articles and insights!</p>
          </div>
        )}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  try {
    const articles = await getArticles()
    
    return {
      props: {
        articles: articles || [],
      },
      revalidate: 60,
    }
  } catch (error) {
    console.error('Error fetching articles:', error)
    return {
      props: {
        articles: [],
      },
      revalidate: 60,
    }
  }
} 