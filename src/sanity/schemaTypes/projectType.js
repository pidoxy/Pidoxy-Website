import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } }),
    defineField({ name: 'description', type: 'text', title: 'Short Description' }),
    defineField({ name: 'mainImage', type: 'image', title: 'Main Image', options: { hotspot: true }, fields: [defineField({ name: 'alt', type: 'string', title: 'Alternative text' })] }),
    defineField({ name: 'tags', type: 'array', title: 'Tags', of: [{ type: 'string' }] }),
    defineField({ name: 'projectUrl', type: 'url', title: 'Project URL' }),
    defineField({ name: 'body', type: 'blockContent', title: 'Details' }),
  ],
  preview: {
    select: { title: 'title', media: 'mainImage' },
  },
}) 