import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pidoxy</title>
        <meta name="description" content="Pidoxy, software developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>
          <span className={styles.name}>I </span> am <span className={styles.name}> Pidoxy</span>
        </p>
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/pidoxy">Code</a>
        <a href="https://www.linkedin.com/in/emmanuelidoko/">LinkedIn</a>
        <a href="https://twitter.com/pidoxy_">Thoughts</a>
        <a href="https://devpost.com/pidoxy?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav">Projects</a>
        <a href="mailto:eemmanuel.idoko@gmail.com">Contact</a>
      </footer>
    </div>
  );
}
