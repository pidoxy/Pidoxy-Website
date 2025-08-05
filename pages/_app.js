import '../styles/globals.css'
import Layout from '../components/Layout'
import { client } from '../lib/sanity'

function MyApp({ Component, pageProps, socialLinks }) {
  return (
    <Layout socialLinks={socialLinks}>
      <Component {...pageProps} />
    </Layout>
  )
}

MyApp.getInitialProps = async () => {
  // Fetch social links once for the entire app
  const socialLinksQuery = `*[_type == "socialLinks"][0] {
    email,
    linkedin,
    twitter,
    github,
    medium,
    devto,
    hashnode,
    website,
    youtube,
    instagram,
    portfolio
  }`

  const socialLinks = await client.fetch(socialLinksQuery)

  return {
    socialLinks: socialLinks || null,
  }
}

export default MyApp
