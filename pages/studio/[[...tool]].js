import Head from 'next/head'
import { NextStudio } from 'next-sanity/studio'

import config from '../../sanity.config'

export default function StudioPage() {
  return (
    <>
      <Head>
        <title>Sanity Studio</title>
        <meta name="description" content="Content management studio" />
        <meta name="robots" content="noindex" />
      </Head>
      <NextStudio config={config} />
    </>
  )
}

export const getStaticProps = async () => {
  return { props: {} }
}

export const getStaticPaths = async () => {
  return { paths: [], fallback: 'blocking' }
} 