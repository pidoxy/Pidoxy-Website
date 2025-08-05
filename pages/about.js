// pages/about.js
import Head from 'next/head'
import Image from 'next/image'
import { client } from '../lib/sanity'
import SocialLinks from '../components/SocialLinks'

export default function About({ socialLinks }) {
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
              When I&apos;m not at my computer, I enjoy exploring new technologies and contributing to the developer community. Feel free to connect with me through my social channels!
            </p>
          </div>
        </div>

        {/* Social Links Section */}
        {socialLinks && (
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Connect With Me</h2>
            <SocialLinks 
              socialLinks={socialLinks} 
              className="justify-center" 
              size="lg"
            />
            <p className="mt-6 text-gray-500">
              I&apos;m always open to interesting conversations and collaboration opportunities.
            </p>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Let&apos;s Work Together</h2>
          <p className="text-gray-600 mb-6">
            Whether you have a project in mind, want to collaborate on research, or just want to say hello, I&apos;d love to hear from you.
          </p>
          {socialLinks?.email ? (
            <a 
              href={`mailto:${socialLinks.email}`}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-block"
            >
              Get In Touch
            </a>
          ) : (
            <div className="text-gray-500">
              Add your email in Sanity Studio to enable contact.
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  // Fetch social links
  const socialLinksQuery = `*[_type == "socialLinks"][0] {
    email,
    linkedin,
    twitter,
    github,
    medium,
    devto,
    hashnode,
    website,
    youtube,
    instagram,
    portfolio
  }`

  const socialLinks = await client.fetch(socialLinksQuery)

  return {
    props: {
      socialLinks: socialLinks || null,
    },
    revalidate: 60,
  }
} 