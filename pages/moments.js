import Layout from "../components/Layout";
import Meta from "../components/Meta";
import MomentsGallery from "../components/MomentsGallery";
import { uiStyles as ui } from "../components/ui";
import { innerStyles as s } from "../components/inner";
import { getGallery } from "../lib/gallery";

export default function Moments({ gallery = [] }) {
  return (
    <Layout>
      <Meta title="Moments" description="Talks, conferences, hackathons, and community: what happened, in words and pictures." path="/moments" />

      <header className={`container ${s.intro}`}>
        <p className="eyebrow">Moments</p>
        <h1 className={ui.displayXL}>Events in photos.</h1>
        <p className={ui.bodyL}>Talks, conferences, hackathons and community: what happened, in words and pictures.</p>
      </header>

      <div className="container">
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
