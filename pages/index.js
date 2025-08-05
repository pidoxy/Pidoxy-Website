import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { client, urlFor } from '../lib/sanity'
import { PortableText } from '@portabletext/react'

export default function Home({ featuredProjects, recentExperiences, latestResearch }) {
  return (
    <>
      <Head>
        <title>Pidoxy | Software Developer & Researcher</title>
        <meta name="description" content="The portfolio of a passionate software developer and researcher. Explore my projects, experience, and research." />
      </Head>
      <div className="space-y-16">
        {/* Hero Section */}
        <section className="text-center py-12">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            Software Developer & Researcher
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 mb-8">
            Building impactful applications and exploring the frontiers of technology through research. 
            Welcome to my digital space where innovation meets implementation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              View Projects
            </Link>
            <Link href="/experience" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
              My Experience
            </Link>
          </div>
        </section>

        {/* Recent Experience Section */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Recent Experience</h2>
            <Link href="/experience" className="text-blue-600 hover:text-blue-800 font-medium">
              View all experience →
            </Link>
          </div>
          {recentExperiences.length > 0 ? (
            <div className="space-y-6">
              {recentExperiences.map((exp) => (
                <div key={exp._id} className="bg-white rounded-lg shadow-md p-6 border hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row gap-6">
                    {exp.image && (
                      <div className="flex-shrink-0">
                        <div className="relative h-16 w-16 rounded-lg overflow-hidden">
                          <Image
                            src={urlFor(exp.image).width(64).height(64).url()}
                            alt={`${exp.company} logo`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    )}
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                        <span className="text-sm text-gray-500">
                          {new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - 
                          {exp.endDate ? new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Present'}
                        </span>
                      </div>
                      <p className="text-lg text-gray-700 mb-3">{exp.company}</p>
                      <div className="prose prose-sm max-w-none text-gray-600">
                        <PortableText value={exp.description} />
                      </div>
                      {exp.skills && exp.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.skills.map((skill, index) => (
                            <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 border-2 border-dashed border-gray-300 rounded-lg text-center">
              <p className="text-gray-500">Add your experience through the Sanity Studio to showcase them here.</p>
            </div>
          )}
        </section>

        {/* Featured Projects Section */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
            <Link href="/projects" className="text-blue-600 hover:text-blue-800 font-medium">
              View all projects →
            </Link>
          </div>
          {featuredProjects.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project) => {
                const getYouTubeVideoId = (url) => {
                  if (!url) return null
                  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
                  const match = url.match(regex)
                  return match ? match[1] : null
                }

                let thumbnailSrc = null
                if (project.image) {
                  thumbnailSrc = urlFor(project.image).width(400).height(240).url()
                } else if (project.youtubeUrl) {
                  const videoId = getYouTubeVideoId(project.youtubeUrl)
                  if (videoId) {
                    thumbnailSrc = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                  }
                }

                return (
                  <Link key={project._id} href={`/projects/${project.slug.current}`}>
                    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                      {thumbnailSrc && (
                        <div className="relative h-48 w-full overflow-hidden">
                          <Image
                            src={thumbnailSrc}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                        {project.tags && project.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {project.tags.slice(0, 3).map((tag, index) => (
                              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                                {tag}
                              </span>
                            ))}
                            {project.tags.length > 3 && (
                              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                                +{project.tags.length - 3} more
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          ) : (
            <div className="p-8 border-2 border-dashed border-gray-300 rounded-lg text-center">
              <p className="text-gray-500">Add your projects through the Sanity Studio to showcase them here.</p>
            </div>
          )}
        </section>

        {/* Latest Research Section */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Research</h2>
            <Link href="/research" className="text-blue-600 hover:text-blue-800 font-medium">
              View all research →
            </Link>
          </div>
          {latestResearch.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {latestResearch.map((research) => (
                <Link key={research._id} href={`/research/${research.slug.current}`}>
                  <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                    {research.image && (
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={urlFor(research.image).width(400).height(240).url()}
                          alt={research.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {research.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-3">{research.summary}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-8 border-2 border-dashed border-gray-300 rounded-lg text-center">
              <p className="text-gray-500">Add your research through the Sanity Studio to showcase it here.</p>
            </div>
          )}
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Work Together</h2>
          <p className="text-xl mb-6 opacity-90">
            Interested in collaborating or learning more about my work?
          </p>
          <Link href="/about" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
            Get In Touch
          </Link>
        </section>
      </div>
    </>
  )
}

export async function getStaticProps() {
  // Fetch featured projects (with fallback to latest)
  const featuredProjectsQuery = `*[_type == "project" && featured == true] | order(_createdAt desc)[0...3] {
    _id,
    title,
    slug,
    image,
    description,
    tags,
    youtubeUrl,
    liveUrl,
    codeUrl
  }`

  const fallbackProjectsQuery = `*[_type == "project"] | order(_createdAt desc)[0...3] {
    _id,
    title,
    slug,
    image,
    description,
    tags,
    youtubeUrl,
    liveUrl,
    codeUrl
  }`

  // Fetch featured experiences (with fallback to latest)
  const featuredExperiencesQuery = `*[_type == "experience" && featured == true] | order(startDate desc)[0...2] {
    _id,
    company,
    role,
    startDate,
    endDate,
    description,
    skills,
    image
  }`

  const fallbackExperiencesQuery = `*[_type == "experience"] | order(startDate desc)[0...2] {
    _id,
    company,
    role,
    startDate,
    endDate,
    description,
    skills,
    image
  }`

  // Fetch featured research (with fallback to latest)
  const featuredResearchQuery = `*[_type == "research" && featured == true] | order(_createdAt desc)[0...2] {
    _id,
    title,
    slug,
    summary,
    image
  }`

  const fallbackResearchQuery = `*[_type == "research"] | order(_createdAt desc)[0...2] {
    _id,
    title,
    slug,
    summary,
    image
  }`

  // Try to get featured content first, fall back to recent if no featured items
  let featuredProjects = await client.fetch(featuredProjectsQuery)
  if (featuredProjects.length === 0) {
    featuredProjects = await client.fetch(fallbackProjectsQuery)
  }

  let recentExperiences = await client.fetch(featuredExperiencesQuery)
  if (recentExperiences.length === 0) {
    recentExperiences = await client.fetch(fallbackExperiencesQuery)
  }

  let latestResearch = await client.fetch(featuredResearchQuery)
  if (latestResearch.length === 0) {
    latestResearch = await client.fetch(fallbackResearchQuery)
  }

  return {
    props: {
      featuredProjects,
      recentExperiences,
      latestResearch
    },
    revalidate: 60, // Revalidate every minute
  }
}
