// lib/localData.js
// This module provides functions to read data from local JSON files

import projectsData from '../data/projects.json'
import experiencesData from '../data/experiences.json'
import researchData from '../data/research.json'
import mediaData from '../data/media.json'
import socialLinksData from '../data/socialLinks.json'

/**
 * Get all projects
 * @returns {Array} Array of project objects
 */
export function getProjects() {
  return projectsData
}

/**
 * Get a single project by slug
 * @param {string} slug - Project slug
 * @returns {Object|null} Project object or null
 */
export function getProjectBySlug(slug) {
  return projectsData.find(p => p.slug === slug) || null
}

/**
 * Get featured projects
 * @param {number} limit - Maximum number of projects to return
 * @returns {Array} Array of featured project objects
 */
export function getFeaturedProjects(limit = 3) {
  const featured = projectsData.filter(p => p.featured)
  return featured.length > 0 ? featured.slice(0, limit) : projectsData.slice(0, limit)
}

/**
 * Get all experiences
 * @returns {Array} Array of experience objects
 */
export function getExperiences() {
  return experiencesData
}

/**
 * Get recent experiences
 * @param {number} limit - Maximum number of experiences to return
 * @returns {Array} Array of experience objects
 */
export function getRecentExperiences(limit = 2) {
  const featured = experiencesData.filter(exp => exp.featured)
  return featured.length > 0 ? featured.slice(0, limit) : experiencesData.slice(0, limit)
}

/**
 * Get all research items
 * @returns {Array} Array of research objects
 */
export function getResearch() {
  return researchData
}

/**
 * Get a single research item by slug
 * @param {string} slug - Research slug
 * @returns {Object|null} Research object or null
 */
export function getResearchBySlug(slug) {
  return researchData.find(r => r.slug === slug) || null
}

/**
 * Get featured research
 * @param {number} limit - Maximum number of research items to return
 * @returns {Array} Array of featured research objects
 */
export function getFeaturedResearch(limit = 2) {
  const featured = researchData.filter(r => r.featured)
  return featured.length > 0 ? featured.slice(0, limit) : researchData.slice(0, limit)
}

/**
 * Get all media items
 * @returns {Array} Array of media objects
 */
export function getMedia() {
  return mediaData
}

/**
 * Get social links
 * @returns {Object} Social links object
 */
export function getSocialLinks() {
  return socialLinksData
}
