// pages/about.js
import Head from 'next/head'
import Image from 'next/image'

export default function About() {
  return (
    <>
      <Head>
        <title>About Me | Pidoxy</title>
      </Head>
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            About Me
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            A little bit about my journey as a developer and researcher.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="md:col-span-1 flex justify-center">
            <div className="relative h-48 w-48 rounded-full overflow-hidden">
              {/* You can replace this with an actual image in Sanity later */}
              <div className="h-full w-full bg-gray-200" />
            </div>
          </div>
          <div className="md:col-span-2 space-y-4 text-gray-600">
            <p>
              Hello! I&apos;m Pidoxy, a passionate software developer and researcher with a love for building innovative applications and exploring the frontiers of technology. My journey in the tech world has been driven by a relentless curiosity and a desire to solve real-world problems.
            </p>
            <p>
              From diving deep into code to conducting detailed research, I enjoy every aspect of the creative process. This portfolio is a showcase of my work, my skills, and the knowledge I&apos;ve gathered along the way.
            </p>
            <p>
              When I&apos;m not at my computer, I enjoy [Your Hobby Here, e.g., reading, hiking, etc.]. Feel free to connect with me through my social channels!
            </p>
          </div>
        </div>
      </div>
    </>
  )
} 