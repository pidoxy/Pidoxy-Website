# Data Directory

This directory contains all the content for your portfolio website in JSON format. Edit these files directly to update your site content.

## Files

### `socialLinks.json`
Your social media and professional profile links.

**Fields:**
- `email` - Your email address
- `linkedin` - LinkedIn profile URL
- `twitter` - Twitter/X profile URL
- `github` - GitHub profile URL
- `googleScholar` - Google Scholar profile URL
- `researchgate` - ResearchGate profile URL
- `medium`, `devto`, `hashnode`, `website`, `youtube`, `instagram`, `portfolio` - Other social links

### `projects.json`
Array of project objects.

**Example:**
```json
{
  "id": "project-1",
  "title": "My Awesome Project",
  "slug": "my-awesome-project",
  "description": "A brief description",
  "image": "project-image.jpg",  // Place in /public/images/
  "tags": ["React", "Next.js"],
  "featured": true,
  "liveUrl": "https://example.com",
  "codeUrl": "https://github.com/user/repo",
  "youtubeUrl": "https://youtube.com/watch?v=...",
  "body": [
    {
      "_type": "block",
      "style": "normal",
      "children": [
        {
          "_type": "span",
          "text": "Full project description..."
        }
      ]
    }
  ]
}
```

### `experiences.json`
Array of work experience objects.

**Example:**
```json
{
  "id": "exp-1",
  "company": "Tech Company",
  "role": "Software Engineer",
  "startDate": "2023-01-01",
  "endDate": "2024-01-01",  // null for current position
  "description": "Work description or array of PortableText blocks",
  "skills": ["JavaScript", "React"],
  "image": "company-logo.jpg"  // Place in /public/images/
}
```

### `research.json`
Array of research/publication objects.

**Example:**
```json
{
  "id": "research-1",
  "title": "My Research Paper",
  "slug": "my-research-paper",
  "summary": "Brief summary",
  "image": "research-image.jpg",
  "isPublication": true,
  "authors": ["Author 1", "Author 2"],
  "venue": "Conference Name 2025",
  "publicationDate": "2025-01-15",
  "arxivUrl": "https://arxiv.org/abs/...",
  "paperUrl": "https://...",
  "presentationUrl": "https://...",
  "featured": true,
  "body": [
    {
      "_type": "block",
      "style": "normal",
      "children": [
        {
          "_type": "span",
          "text": "Full research description..."
        }
      ]
    }
  ]
}
```

### `media.json`
Array of media coverage objects.

**Example:**
```json
{
  "id": "media-1",
  "title": "Article Title",
  "slug": "article-title",
  "type": "article",
  "publication": "Publication Name",
  "author": "Author Name",
  "publishDate": "2024-01-01",
  "description": "Description",
  "excerpt": "Quote from article",
  "url": "https://...",
  "image": "article-image.jpg",
  "tags": ["tag1", "tag2"]
}
```

## Images

Place all images in the `/public/images/` directory and reference them by filename in the JSON files.

Example: If you have `/public/images/project.jpg`, use `"image": "project.jpg"` in your JSON.

## PortableText Format

For rich text content (body fields), use PortableText format:

```json
[
  {
    "_type": "block",
    "style": "normal",
    "children": [
      {
        "_type": "span",
        "text": "Your text here"
      }
    ]
  }
]
```

For simple text, you can also use a plain string.

