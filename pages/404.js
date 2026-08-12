import Link from "next/link";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import styles from "../styles/Page.module.css";

export default function NotFound() {
  return (
    <Layout>
      <Meta title="Page not found" description="This page doesn't exist." path="/404" />
      <div className={`${styles.container} ${styles.notFound}`}>
        <p className={styles.notFoundCode}>404</p>
        <p className={styles.notFoundText}>This page doesn&apos;t exist — but the work does.</p>
        <Link href="/" className={styles.primaryButton}>
          Back home
        </Link>
      </div>
    </Layout>
  );
}
