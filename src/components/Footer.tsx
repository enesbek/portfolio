import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.copyright}>
          &copy; {currentYear} Enes Bek. All rights reserved. Built with Next.js (SSR) &amp; Vanilla CSS.
        </div>

        <div className={styles.links}>
          <a href="#hero" className={styles.link}>
            Back to Top
          </a>
          <a
            href="https://linkedin.com/in/enes-bek"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/enesbek"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
