// pages/research.js
import { client } from '../lib/sanity'
import ResearchCard from '../components/ResearchCard'
import Head from 'next/head'

export default function Research({ researchItems }) {
  return (
    <>
      <Head>
        <title>Research | Pidoxy</title>
      </Head>
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            My Research
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Explorations into new technologies and findings from my studies.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {researchItems.map((item) => (
            <ResearchCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const researchItems = await client.fetch(`*[_type == "research"]`)
  return {
    props: {
      researchItems,
    },
    revalidate: 60,
  }
} 