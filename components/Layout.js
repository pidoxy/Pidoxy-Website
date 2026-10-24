import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Icon from "./Icon";
import { Button } from "./ui";
import useCopy from "../lib/useCopy";
import { profile } from "../data/profile";
import styles from "../styles/Layout.module.css";

const NAV = [
  { label: "Research", href: "/research" },
  { label: "Engineering", href: "/engineering" },
  { label: "Talks", href: "/talks" },
  { label: "About", href: "/about" },
];

const MENU_EXTRA = [
  { label: "Speaker kit", href: "/speaking" },
  { label: "CV", href: "/cv" },
  { label: "Moments", href: "/moments" },
];

const ELSEWHERE = [
  { label: "Google Scholar", href: profile.scholar },
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "X", href: profile.twitter },
  { label: "YouTube", href: profile.youtube },
  { label: "Devpost", href: profile.devpost },
  { label: "Hugging Face", href: profile.huggingface },
];

const SITE = [
  { label: "Research", href: "/research" },
  { label: "Engineering", href: "/engineering" },
  { label: "Talks", href: "/talks" },
  { label: "About", href: "/about" },
  { label: "Speaker kit", href: "/speaking" },
  { label: "CV", href: "/cv" },
  { label: "Moments", href: "/moments" },
];

// Lagos local time, ticking each minute. Rendered client-side only so the
// server and client HTML never disagree; the slot keeps its width meanwhile.
const timeFmt = typeof Intl !== "undefined" ? new Intl.DateTimeFormat("en-GB", { timeZone: "Africa/Lagos", hour: "2-digit", minute: "2-digit" }) : null;

function LagosClock({ className }) {
  const [time, setTime] = useState(null);
  useEffect(() => {
    const update = () => setTime(timeFmt.format(new Date()));
    update();
    const id = setInterval(update, 20000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className={className}>
      Lagos <time suppressHydrationWarning>{time ?? "--:--"}</time>
    </span>
  );
}

function ThemeToggle() {
  const [theme, setTheme] = useState(null);
  useEffect(() => setTheme(document.documentElement.dataset.theme || "light"), []);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* private mode: the choice just won't persist */
    }
    setTheme(next);
  };
  const label = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";
  return (
    <button type="button" className={styles.iconButton} onClick={toggle} aria-label={label} title={label}>
      <Icon kind={theme === "dark" ? "sun" : "moon"} className={styles.icon} />
    </button>
  );
}

function CopyEmail() {
  const [state, copy] = useCopy(profile.email);
  return (
    <Button onClick={copy} variant="secondary" icon={state === "copied" ? "check" : "copy"} aria-live="polite">
      {state === "copied" ? "Copied" : state === "failed" ? "Select & copy" : "Copy email"}
    </Button>
  );
}

// Adds .is-in to [data-reveal] elements the first time they enter the
// viewport. One shared observer per page; re-scans after client navigation.
function useReveal(key) {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]:not(.is-in)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [key]);
}

export default function Layout({ children }) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  useReveal(router.asPath);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    router.events.on("routeChangeStart", close);
    return () => router.events.off("routeChangeStart", close);
  }, [router.events]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll, close on Escape, and move focus into the menu while open.
  useEffect(() => {
    if (!menuOpen) return undefined;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector("a")?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      burgerRef.current?.focus();
    };
  }, [menuOpen]);

  const isActive = useCallback(
    (href) => (href === "/" ? router.pathname === "/" : router.pathname === href || router.pathname.startsWith(`${href}/`)),
    [router.pathname]
  );

  return (
    <div className={styles.shell}>
      <a href="#main" className={styles.skipLink}>
        Skip to content
      </a>

      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
        <div className={`container ${styles.headerInner}`}>
          <Link href="/" className={styles.wordmark} aria-label="Emmanuel Idoko, home">
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

          <div className={styles.actions}>
            <LagosClock className={`mono ${styles.clock}`} />
            <ThemeToggle />
            <a href="#contact" className={styles.talk}>
              Let&rsquo;s talk
            </a>
            <button
              ref={burgerRef}
              type="button"
              className={`${styles.iconButton} ${styles.burger}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <Icon kind={menuOpen ? "close" : "menu"} className={styles.icon} />
            </button>
          </div>
        </div>
      </header>

      <div id="site-menu" ref={menuRef} className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`} hidden={!menuOpen}>
        <nav aria-label="Site menu" className={styles.menuNav}>
          <ol className={styles.menuList}>
            {[{ label: "Home", href: "/" }, ...NAV].map((item, i) => (
              <li key={item.href} style={{ "--i": i }}>
                <Link href={item.href} className={styles.menuLink} aria-current={isActive(item.href) ? "page" : undefined}>
                  <span className={`mono ${styles.menuNum}`}>{String(i + 1).padStart(2, "0")}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ol>
          <div className={styles.menuExtra}>
            {MENU_EXTRA.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
        <div className={styles.menuFoot}>
          <Button href={`mailto:${profile.email}`} icon={null} className={styles.menuEmail}>
            {profile.email}
          </Button>
          <LagosClock className="mono" />
        </div>
      </div>

      <main id="main" className={styles.main}>
        {children}
      </main>

      <footer id="contact" className={`theme-dark ${styles.footer}`}>
        <div className={styles.glow} aria-hidden="true" />
        <div className={`container ${styles.footerInner}`}>
          <div className={styles.cta}>
            <p className="eyebrow">Let&rsquo;s talk</p>
            <h2 className={styles.ctaTitle}>Have a question worth working on?</h2>
            <p className={styles.ctaBody}>
              Research collaborations, engineering roles, speaking invitations and ambitious projects. Email is the fastest way to reach me.
            </p>
            <div className={styles.ctaActions}>
              <Button href={`mailto:${profile.email}`} icon={null}>
                {profile.email}
              </Button>
              <CopyEmail />
            </div>
          </div>

          <div className={styles.columns}>
            <div>
              <p className={`mono ${styles.colTitle}`}>Contact</p>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <Link href="/speaking">Speaking enquiries</Link>
            </div>
            <div>
              <p className={`mono ${styles.colTitle}`}>Elsewhere</p>
              {ELSEWHERE.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label}
                </a>
              ))}
            </div>
            <div>
              <p className={`mono ${styles.colTitle}`}>Site</p>
              {SITE.map((l) => (
                <Link key={l.href} href={l.href}>
                  {l.label}
                </Link>
              ))}
            </div>
            <div className={styles.meta}>
              <LagosClock className="mono" />
              <span>© 2026 Emmanuel Idoko</span>
              <a href="#main">Back to top ↑</a>
            </div>
          </div>

          <p className={styles.wordmarkBig} aria-hidden="true" data-reveal>
            IDOKO
          </p>
        </div>
      </footer>
    </div>
  );
}
