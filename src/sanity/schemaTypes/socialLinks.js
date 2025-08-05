// schemas/socialLinks.js
export default {
  name: 'socialLinks',
  title: 'Social Links',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'This is just for organization in Sanity - use "My Social Links"',
      initialValue: 'My Social Links',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email',
      description: 'Your primary contact email',
    },
    {
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'url',
      description: 'Your LinkedIn profile URL',
    },
    {
      name: 'twitter',
      title: 'Twitter/X',
      type: 'url',
      description: 'Your Twitter/X profile URL',
    },
    {
      name: 'github',
      title: 'GitHub',
      type: 'url',
      description: 'Your GitHub profile URL',
    },
    {
      name: 'medium',
      title: 'Medium',
      type: 'url',
      description: 'Your Medium profile URL',
    },
    {
      name: 'devto',
      title: 'Dev.to',
      type: 'url',
      description: 'Your Dev.to profile URL',
    },
    {
      name: 'hashnode',
      title: 'Hashnode',
      type: 'url',
      description: 'Your Hashnode profile URL',
    },
    {
      name: 'website',
      title: 'Personal Website',
      type: 'url',
      description: 'Your personal website URL (if different from this one)',
    },
    {
      name: 'youtube',
      title: 'YouTube',
      type: 'url',
      description: 'Your YouTube channel URL',
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
      description: 'Your Instagram profile URL',
    },
    {
      name: 'portfolio',
      title: 'Portfolio Link',
      type: 'url',
      description: 'Alternative portfolio link (if any)',
    },
  ],
  preview: {
    select: {
      title: 'title',
      email: 'email',
    },
    prepare(selection) {
      const { title, email } = selection
      return {
        title: title,
        subtitle: email || 'Social links configuration',
      }
    },
  },
} 