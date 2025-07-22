import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pidoxy | Software Developer & Researcher</title>
        <meta name="description" content="The portfolio of a passionate software developer and researcher." />
      </Head>
      <div className="space-y-12">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
            Software Developer & Researcher
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-500">
            Welcome to my digital space. I build impactful applications and explore the frontiers of technology through research.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Projects</h2>
          <div className="p-8 border rounded-lg bg-gray-100 text-center">
            <p className="text-gray-500">Featured projects from Sanity will be displayed here soon.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Research</h2>
          <div className="p-8 border rounded-lg bg-gray-100 text-center">
            <p className="text-gray-500">Latest research from Sanity will be displayed here soon.</p>
          </div>
        </section>
      </div>
    </>
  )
}
