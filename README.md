# Pidoxy Portfolio Website

A modern portfolio website built with Next.js and Sanity CMS to showcase projects, experience, and research.

## 🏠 Homepage Featured Content

Your homepage now dynamically showcases your best work. Here's how to control what gets featured:

### How to Feature Content

1. **Go to your Sanity Studio** at `http://localhost:3000/studio` (or your deployed URL + `/studio`)

2. **For Projects:**
   - Edit any project
   - Check the **"Featured on Homepage"** checkbox
   - Save the project
   - Up to 3 featured projects will appear on the homepage

3. **For Experiences:**
   - Edit any experience
   - Check the **"Featured on Homepage"** checkbox
   - Save the experience
   - Up to 2 featured experiences will appear on the homepage

4. **For Research:**
   - Edit any research item
   - Check the **"Featured on Homepage"** checkbox
   - Save the research
   - Up to 2 featured research items will appear on the homepage

### Automatic Fallbacks

If you haven't marked anything as featured, the homepage will automatically show:
- **Latest 3 projects** (by creation date)
- **Latest 2 experiences** (by start date)
- **Latest 2 research items** (by creation date)

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start Sanity Studio
npm run dev
# Then go to http://localhost:3000/studio
```

## 📁 Project Structure

```
├── pages/               # Next.js pages
├── components/          # Reusable components
├── lib/                # Sanity client configuration
├── src/sanity/         # Sanity schemas and config
├── styles/             # Global styles
└── public/             # Static assets
```

## 🎨 Features

- **Dynamic Homepage** with featured content
- **Project Showcases** with live previews, GitHub links, and YouTube demos
- **Experience Timeline** with company logos and descriptions
- **Research Portfolio** with papers and presentations
- **Responsive Design** that works on all devices
- **SEO Optimized** with proper meta tags
- **Fast Performance** with static generation and ISR

## 🛠 Tech Stack

- **Framework:** Next.js 14
- **CMS:** Sanity.io
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Languages:** JavaScript, React

## 📝 Content Management

All content is managed through Sanity Studio:
- **Projects:** Add your applications, websites, and software projects
- **Experience:** Document your work history, internships, and roles
- **Research:** Showcase your academic work, papers, and studies

---

Built with ❤️ by Pidoxy
