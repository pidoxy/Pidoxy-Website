// schemas/project.js
export default {
  name: 'project',
  title: 'Project',
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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      description: 'A short summary of the project for the preview card.',
      type: 'text',
    },
    {
      name: 'body',
      title: 'Project Details / README',
      description: 'The full description of the project. You can paste your GitHub README content here.',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
    },
    {
      name: 'codeUrl',
      title: 'Code URL',
      type: 'url',
    },
    {
      name: 'youtubeUrl',
      title: 'YouTube Demo URL',
      type: 'url',
    },
  ],
} 