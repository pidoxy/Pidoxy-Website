import Layout from '../../components/Layout'
import ResearchCard from '../../components/ResearchCard'
import { getResearch } from '../../lib/sanity'

export default function Research({ research }) {
  return (
    <Layout title="Research - Pidoxy">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">My Research</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exploring new frontiers in technology and sharing findings with the community. 
            My research spans various domains and aims to solve real-world problems.
          </p>
        </div>
        
        {research && research.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {research.map((item) => (
              <ResearchCard key={item._id} research={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl text-gray-600 mb-4">No research published yet</h3>
            <p className="text-gray-500">Stay tuned for upcoming research findings!</p>
          </div>
        )}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  try {
    const research = await getResearch()
    
    return {
      props: {
        research: research || [],
      },
      revalidate: 60,
    }
  } catch (error) {
    console.error('Error fetching research:', error)
    return {
      props: {
        research: [],
      },
      revalidate: 60,
    }
  }
} 