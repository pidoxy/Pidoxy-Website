import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Icon from "./Icon";
import { profile } from "../data/profile";
import styles from "../styles/Layout.module.css";

const NAV = [
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Engineering", href: "/engineering" },
  { label: "Talks", href: "/talks" },
  { label: "Press", href: "/press" },
  { label: "Awards", href: "/awards" },
  { label: "Moments", href: "/moments" },
];

export default function Layout({ children }) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu on navigation and lock scroll while it's open.
  useEffect(() => {
    const close = () => setMenuOpen(false);
    router.events.on("routeChangeStart", close);
    return () => router.events.off("routeChangeStart", close);
  }, [router.events]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href) => router.pathname === href;

  return (
    <div className={styles.shell}>
      <a href="#main" className={styles.skipLink}>
        Skip to content
      </a>

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.wordmark}>
            Emmanuel Idoko
          </Link>

          <nav className={styles.nav} aria-label="Primary">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${isActive(item.href) ? styles.navLinkActive : ""}`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={styles.headerActions}>
            <a href={`mailto:${profile.email}`} className={styles.contactPill}>
              Contact
            </a>
            <button
              type="button"
              className={styles.burger}
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <Icon kind={menuOpen ? "close" : "menu"} className={styles.burgerIcon} />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav} aria-label="Mobile">
            {NAV.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.mobileLink} ${isActive(item.href) ? styles.mobileLinkActive : ""}`}
                style={{ transitionDelay: `${40 + i * 25}ms` }}
              >
                {item.label}
              </Link>
            ))}
            <a href={`mailto:${profile.email}`} className={styles.mobileContact}>
              Contact
            </a>
          </nav>
        </div>
      )}

      <main id="main" className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <p className={styles.footerLine}>
            Software engineer &amp; AI researcher — clinical AI, agentic systems, medical imaging.
          </p>
          <nav className={styles.footerNav} aria-label="Footer">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className={styles.footerLink}>
                {item.label}
              </Link>
            ))}
            <Link href="/speaking" className={styles.footerLink}>
              Speaker Kit
            </Link>
            <Link href="/cv" className={styles.footerLink}>
              CV
            </Link>
          </nav>
          <div className={styles.footerSocials}>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Icon kind="github" className={styles.socialIcon} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Icon kind="linkedin" className={styles.socialIcon} />
            </a>
            <a href={profile.scholar} target="_blank" rel="noreferrer" aria-label="Google Scholar">
              <Icon kind="document" className={styles.socialIcon} />
            </a>
            <a href={profile.twitter} target="_blank" rel="noreferrer" aria-label="X (Twitter)">
              <Icon kind="twitter" className={styles.socialIcon} />
            </a>
            <a href={profile.devpost} target="_blank" rel="noreferrer" aria-label="Devpost">
              <Icon kind="external" className={styles.socialIcon} />
            </a>
            <a href={profile.huggingface} target="_blank" rel="noreferrer" aria-label="Hugging Face">
              <Icon kind="brain" className={styles.socialIcon} />
            </a>
            <a href={profile.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
              <Icon kind="youtube" className={styles.socialIcon} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Icon kind="mail" className={styles.socialIcon} />
            </a>
          </div>
          <p className={styles.copyright}>© 2026 Emmanuel Idoko. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
