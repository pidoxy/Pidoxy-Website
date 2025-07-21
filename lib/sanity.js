import { client } from '../src/sanity/lib/client'

// GROQ queries for different content types
export async function getProjects() {
  return client.fetch(`*[_type == "project"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    "mainImage": mainImage.asset->url,
    tags,
    projectUrl,
    publishedAt
  }`)
}

export async function getProject(slug) {
  return client.fetch(`*[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    "mainImage": mainImage.asset->url,
    tags,
    projectUrl,
    body,
    publishedAt
  }`, { slug })
}

export async function getResearch() {
  return client.fetch(`*[_type == "research"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    summary,
    "mainImage": mainImage.asset->url,
    researchUrl,
    publishedAt
  }`)
}

export async function getResearchItem(slug) {
  return client.fetch(`*[_type == "research" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    summary,
    "mainImage": mainImage.asset->url,
    researchUrl,
    body,
    publishedAt
  }`, { slug })
}

export async function getArticles() {
  return client.fetch(`*[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    "mainImage": mainImage.asset->url,
    originalUrl,
    publishedAt
  }`)
}

export async function getArticle(slug) {
  return client.fetch(`*[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    "mainImage": mainImage.asset->url,
    originalUrl,
    body,
    publishedAt
  }`, { slug })
}

// Get featured/latest content for homepage
export async function getFeaturedContent() {
  const [projects, research, articles] = await Promise.all([
    client.fetch(`*[_type == "project"] | order(publishedAt desc)[0...3] {
      _id,
      title,
      slug,
      description,
      "mainImage": mainImage.asset->url,
      tags,
      projectUrl
    }`),
    client.fetch(`*[_type == "research"] | order(publishedAt desc)[0...3] {
      _id,
      title,
      slug,
      summary,
      "mainImage": mainImage.asset->url,
      researchUrl,
      publishedAt
    }`),
    client.fetch(`*[_type == "article"] | order(publishedAt desc)[0...3] {
      _id,
      title,
      slug,
      excerpt,
      "mainImage": mainImage.asset->url,
      originalUrl,
      publishedAt
    }`)
  ])

  return { projects, research, articles }
} 