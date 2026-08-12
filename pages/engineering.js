import Layout from "../components/Layout";
import Meta from "../components/Meta";
import PageHeader from "../components/PageHeader";
import Icon, { LinkIcon } from "../components/Icon";
import CardThumb from "../components/CardThumb";
import { projects, projectGroups } from "../data/projects";
import { skills } from "../data/skills";
import styles from "../styles/Page.module.css";

function ProjectCard({ project }) {
  return (
    <article className={styles.card}>
      <CardThumb links={project.links} />
      <h3 className={styles.cardTitle}>{project.title}</h3>
      <span className={styles.statusBadge}>{project.status}</span>
      <p className={styles.cardSummary}>{project.summary}</p>

      <div className={styles.tagRow}>
        {project.tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>

      {project.links.length > 0 && (
        <div className={styles.linkRow}>
          {project.links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              <LinkIcon external={link.external} type={link.type} className={styles.inlineIcon} />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

export default function Engineering() {
  return (
    <Layout>
      <Meta
        title="Engineering"
        description="Selected engineering work by Emmanuel Idoko — agentic AI platforms, clinical decision support, computer vision products, and distributed systems."
        path="/engineering"
      />

      <div className={styles.container}>
        <PageHeader
          eyebrow="Engineering"
          title="Things I've"
          accent="built"
          lede="Agentic AI platforms, clinical systems, computer vision products, and the occasional distributed search engine — built to work outside the demo."
        />

        {projectGroups.map((group) => (
          <section key={group.key} className={styles.section}>
            <h2 className={styles.sectionTitle}>{group.title}</h2>
            <div className={styles.cardGrid}>
              {projects
                .filter((p) => p.group === group.key)
                .map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
            </div>
          </section>
        ))}

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Toolbox</h2>
          <div className={styles.skillGrid}>
            {skills.map((group) => (
              <div key={group.title} className={styles.skillCard}>
                <h3>
                  <Icon kind={group.icon} className={styles.skillIcon} />
                  {group.title}
                </h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
