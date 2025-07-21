import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import ResearchCard from '../components/ResearchCard'
import ArticleCard from '../components/ArticleCard'
import Link from 'next/link'
import { getFeaturedContent } from '../lib/sanity'

export default function Home({ projects, research, articles }) {
  return (
    <Layout title="Pidoxy - Personal Website">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Welcome to My Digital Space</h1>
          <p className="text-xl mb-8 opacity-90">
            I&apos;m passionate about building innovative projects, conducting meaningful research, 
            and sharing insights through writing. Explore my journey in technology and discovery.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/projects" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View Projects
            </Link>
            <Link href="/contact" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {projects && projects.length > 0 && (
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Featured Projects</h2>
            <Link href="/projects" className="text-blue-600 hover:text-blue-800 font-medium">
              View All Projects →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* Latest Research */}
      {research && research.length > 0 && (
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Latest Research</h2>
            <Link href="/research" className="text-green-600 hover:text-green-800 font-medium">
              View All Research →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {research.map((item) => (
              <ResearchCard key={item._id} research={item} />
            ))}
          </div>
        </section>
      )}

      {/* Recent Articles */}
      {articles && articles.length > 0 && (
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Recent Articles</h2>
            <Link href="/articles" className="text-purple-600 hover:text-purple-800 font-medium">
              View All Articles →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard key={article._id} article={article} />
            ))}
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="text-center py-16 bg-gray-100 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Let&apos;s Connect</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Interested in collaboration, have questions about my work, or just want to say hello? 
          I&apos;d love to hear from you.
        </p>
        <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          Contact Me
        </Link>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  try {
    const { projects, research, articles } = await getFeaturedContent()
    
    return {
      props: {
        projects: projects || [],
        research: research || [],
        articles: articles || [],
      },
      revalidate: 60, // Revalidate every minute
    }
  } catch (error) {
    console.error('Error fetching featured content:', error)
    return {
      props: {
        projects: [],
        research: [],
        articles: [],
      },
      revalidate: 60,
    }
  }
}
