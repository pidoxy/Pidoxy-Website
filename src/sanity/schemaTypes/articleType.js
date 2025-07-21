import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const articleType = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } }),
    defineField({ name: 'excerpt', type: 'text', title: 'Excerpt' }),
    defineField({ name: 'mainImage', type: 'image', title: 'Main Image', options: { hotspot: true }, fields: [defineField({ name: 'alt', type: 'string', title: 'Alternative text' })] }),
    defineField({ name: 'publishedAt', type: 'datetime', title: 'Published At' }),
    defineField({ name: 'originalUrl', type: 'url', title: 'Original Article URL' }),
    defineField({ name: 'body', type: 'blockContent', title: 'Content' }),
  ],
  preview: {
    select: { title: 'title', media: 'mainImage' },
  },
}) 