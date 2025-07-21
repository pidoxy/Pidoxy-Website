import Layout from '../../components/Layout'
import ProjectCard from '../../components/ProjectCard'
import { getProjects } from '../../lib/sanity'

export default function Projects({ projects }) {
  return (
    <Layout title="Projects - Pidoxy">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of projects I&apos;ve built, ranging from web applications to research tools. 
            Each project represents a unique challenge and learning experience.
          </p>
        </div>
        
        {projects && projects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl text-gray-600 mb-4">No projects yet</h3>
            <p className="text-gray-500">Check back soon for exciting new projects!</p>
          </div>
        )}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  try {
    const projects = await getProjects()
    
    return {
      props: {
        projects: projects || [],
      },
      revalidate: 60,
    }
  } catch (error) {
    console.error('Error fetching projects:', error)
    return {
      props: {
        projects: [],
      },
      revalidate: 60,
    }
  }
} 