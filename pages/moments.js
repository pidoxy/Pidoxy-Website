import Layout from "../components/Layout";
import Meta from "../components/Meta";
import PageHeader from "../components/PageHeader";
import MomentsGallery from "../components/MomentsGallery";
import { getGallery } from "../lib/gallery";
import styles from "../styles/Page.module.css";

export default function Moments({ gallery = [] }) {
  return (
    <Layout>
      <Meta
        title="Moments"
        description="Talks, conferences, hackathons, and community — what happened, in words and pictures."
        path="/moments"
      />

      <div className={styles.container}>
        <PageHeader
          eyebrow="In Pictures"
          title="Moments"
          lede="Talks, conferences, and community — what happened, in words and pictures."
        />

        <MomentsGallery gallery={gallery} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const gallery = await getGallery();
  // Revalidate every 60s so new Cloudinary uploads appear without a redeploy.
  return { props: { gallery }, revalidate: 60 };
}
