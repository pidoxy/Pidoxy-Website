// schemas/research.js
export default {
  name: 'research',
  title: 'Research',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'featured',
      title: 'Featured on Homepage',
      type: 'boolean',
      description: 'Check this to feature this research on the homepage',
      initialValue: false,
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'paperUrl',
      title: 'Paper URL',
      type: 'url',
    },
    {
      name: 'presentationUrl',
      title: 'Presentation URL',
      type: 'url',
    },
  ],
} 