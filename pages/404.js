import Layout from "../components/Layout";
import Meta from "../components/Meta";
import { Button, uiStyles as ui } from "../components/ui";
import styles from "../styles/NotFound.module.css";

export default function NotFound() {
  return (
    <Layout>
      <Meta title="Page not found" description="This page doesn't exist, or it moved." path="/404" noindex />
      <section className={`container ${styles.wrap}`}>
        <div className={styles.static} aria-hidden="true">
          <span>404</span>
        </div>
        <div className={styles.text}>
          <p className="eyebrow">Error 404 · No signal</p>
          <h1 className={ui.displayXL}>Nothing resolved here.</h1>
          <p className={ui.bodyL}>This page doesn&rsquo;t exist, or it moved. Everything else is still sharp.</p>
          <div className={styles.actions}>
            <Button href="/">Back home</Button>
            <Button href="/research" variant="secondary" icon={null}>
              Research
            </Button>
            <Button href="/engineering" variant="ghost">
              Engineering
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
