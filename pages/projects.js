// pages/projects.js
import { client } from '../lib/sanity'
import ProjectCard from '../components/ProjectCard'
import Head from 'next/head'

export default function Projects({ projects }) {
  return (
    <>
      <Head>
        <title>Projects | Pidoxy</title>
      </Head>
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            My Projects
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            A collection of applications I’ve built, from personal experiments to client work.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const projects = await client.fetch(`*[_type == "project"]`)
  return {
    props: {
      projects,
    },
    revalidate: 60, // Revalidate every 60 seconds
  }
} 