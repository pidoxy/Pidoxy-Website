// pages/experience.js
import { client } from '../lib/sanity'
import ExperienceTimeline from '../components/ExperienceTimeline'
import Head from 'next/head'

export default function Experience({ experiences }) {
  return (
    <>
      <Head>
        <title>Experience | Pidoxy</title>
      </Head>
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            My Experience
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            A timeline of my professional journey and accomplishments.
          </p>
        </div>

        <ExperienceTimeline experiences={experiences} />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const experiences = await client.fetch(`*[_type == "experience"] | order(startDate desc)`)
  return {
    props: {
      experiences,
    },
    revalidate: 60,
  }
} 