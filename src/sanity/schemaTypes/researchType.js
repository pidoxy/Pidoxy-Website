import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const researchType = defineType({
  name: 'research',
  title: 'Research',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } }),
    defineField({ name: 'summary', type: 'text', title: 'Summary' }),
    defineField({ name: 'mainImage', type: 'image', title: 'Main Image', options: { hotspot: true }, fields: [defineField({ name: 'alt', type: 'string', title: 'Alternative text' })] }),
    defineField({ name: 'publishedAt', type: 'datetime', title: 'Published At' }),
    defineField({ name: 'researchUrl', type: 'url', title: 'Research URL' }),
    defineField({ name: 'body', type: 'blockContent', title: 'Details' }),
  ],
  preview: {
    select: { title: 'title', media: 'mainImage' },
  },
}) 