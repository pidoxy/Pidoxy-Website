// schemas/media.js
export default {
  name: 'media',
  title: 'Media & Press',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the article, video, or mention',
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
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Newspaper Article', value: 'newspaper' },
          { title: 'Online Article', value: 'article' },
          { title: 'Video Feature', value: 'video' },
          { title: 'Tutorial/Demo', value: 'tutorial' },
          { title: 'Social Media Mention', value: 'social' },
          { title: 'Podcast', value: 'podcast' },
          { title: 'Interview', value: 'interview' },
          { title: 'Award/Recognition', value: 'award' },
          { title: 'Other', value: 'other' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publication',
      title: 'Publication/Platform',
      type: 'string',
      description: 'Name of the newspaper, website, channel, or platform',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author/Creator',
      type: 'string',
      description: 'Name of the journalist, creator, or person who mentioned you',
    },
    {
      name: 'publishDate',
      title: 'Publish Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description of what the mention is about',
    },
    {
      name: 'excerpt',
      title: 'Excerpt/Quote',
      type: 'text',
      description: 'Key quote or excerpt from the mention (optional)',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      description: 'Link to the article, video, or mention',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Screenshot/Image',
      type: 'image',
      description: 'Screenshot of the article, video thumbnail, or related image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'featured',
      title: 'Featured on Homepage',
      type: 'boolean',
      description: 'Check this to feature this mention on the homepage',
      initialValue: false,
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Tags related to this mention (e.g., "AI", "Web Development", "Research")',
    },
  ],
  preview: {
    select: {
      title: 'title',
      publication: 'publication',
      type: 'type',
      date: 'publishDate',
      media: 'image',
    },
    prepare(selection) {
      const { title, publication, type, date, media } = selection
      const formattedDate = date ? new Date(date).getFullYear() : 'No date'
      return {
        title: title,
        subtitle: `${publication} • ${type} • ${formattedDate}`,
        media: media,
      }
    },
  },
} 