import Layout from '../../components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { getProject, getProjects } from '../../lib/sanity'
import { PortableText } from '@portabletext/react'

export default function ProjectDetail({ project }) {
  if (!project) {
    return (
      <Layout title="Project Not Found - Pidoxy">
        <div className="text-center py-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Back to Projects
          </Link>
        </div>
      </Layout>
    )
  }

  return (
    <Layout title={`${project.title} - Projects - Pidoxy`}>
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <Link href="/projects" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          ← Back to Projects
        </Link>
        
        {/* Project header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{project.description}</p>
          
          {project.tags && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              View Live Project →
            </a>
          )}
        </div>
        
        {/* Project image */}
        {project.mainImage && (
          <div className="relative h-96 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={project.mainImage}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        
        {/* Project content */}
        {project.body && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Project Details</h2>
            <div className="prose prose-lg max-w-none">
              <PortableText value={project.body} />
            </div>
          </div>
        )}
        
        {/* Navigation to other projects */}
        <div className="text-center bg-gray-100 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More Projects</h3>
          <Link href="/projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            View All Projects
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  try {
    const projects = await getProjects()
    const paths = projects.map((project) => ({
      params: { slug: project.slug.current }
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
    const project = await getProject(params.slug)
    
    if (!project) {
      return {
        notFound: true
      }
    }
    
    return {
      props: {
        project
      },
      revalidate: 60
    }
  } catch (error) {
    console.error('Error fetching project:', error)
    return {
      notFound: true
    }
  }
} 