// components/ExperienceTimeline.js
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '../lib/sanity'

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  })
}

export default function ExperienceTimeline({ experiences }) {
  return (
    <div className="relative border-l-2 border-gray-200 ml-4">
      {experiences.map((exp, index) => (
        <div key={exp._id} className="mb-10 ml-8">
          <span className="absolute -left-5 flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full ring-8 ring-white">
            <svg className="w-5 h-5 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
            {exp.role} at {exp.company}
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
            {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : 'Present'}
          </time>
          {exp.image && (
            <div className="relative h-48 w-full my-4 rounded-lg overflow-hidden">
              <Image
                src={urlFor(exp.image).width(400).url()}
                alt={`${exp.company} image`}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="prose prose-sm max-w-none text-gray-600">
            <PortableText value={exp.description} />
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {exp.skills?.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-semibold rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
} 