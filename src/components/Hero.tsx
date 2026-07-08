import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className="container">
        <div className={styles.heroContent}>
          <div>
            <div className={styles.badge}>
              <span className={styles.badgeDot}></span>
              <span>Available for Selective Roles</span>
            </div>

            <h1 className={styles.title}>
              Building Scalable UI &amp; <br />
              <span className="text-gradient">
                Modern Frontend Applications
              </span>
            </h1>

            <p className={styles.subtitle}>
              I am a <strong>Frontend &amp; Full Stack Engineer</strong> with 4
              years of experience. I specialize in React, TypeScript, and
              high-performance system-level architectures. Currently building UI
              features at <strong>Huawei (HarmonyOS)</strong>, and formerly
              built PONS backend and Doğuş Teknoloji dashboards.
            </p>

            <div className={styles.ctaGroup}>
              <a href="#projects" className="btn btn-primary">
                View My Projects
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>

          <div className={styles.illustrationContainer}>
            <div className={styles.visualBg}></div>
            <div className={styles.mainShape}>
              <div className={styles.innerCard}>
                <div className={styles.innerTitle}>SYSTEMS &amp; UI</div>
                <div className={styles.innerText}>
                  ArkTS • Next.js • TS
                  <br />
                  AWS CDK • Node.js
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
