"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Projects.module.css";

interface Project {
  id: string;
  title: string;
  company: string;
  description: string;
  metric: string;
  tags: string[];
  link?: string;
  longDescription: string;
  bullets: string[];
}

const PROJECTS_DATA: Project[] = [
  {
    id: "huawei",
    title: "HarmonyOS UI Features",
    company: "Huawei",
    description:
      "Built system-level UI modules for the HarmonyOS cross-platform OS (Phones, Tablets, PCs, TVs, Watches) and optimized internal debugging tools.",
    metric: "15m ➔ 2m Debugging",
    tags: ["ArkTS", "TypeScript", "Node.js", "Animations"],
    longDescription:
      "Worked as a Frontend Engineer on core system-level components of HarmonyOS, focusing on responsive cross-platform user interactions.",
    bullets: [
      "Developed and maintained UI features using <strong>ArkTS</strong> and <strong>TypeScript</strong> for multiple device form factors.",
      "Implemented and optimized <strong>folder animations</strong> and edit-mode behaviors, significantly boosting UX responsiveness.",
      "Built a <strong>Node.js-based internal tool</strong> to parse and analyze memory leak logs, reducing debugging time from 15 minutes to under 2 minutes.",
      "Identified and resolved complex UI bugs and rendering bottlenecks within core system interfaces.",
    ],
  },
  {
    id: "done",
    title: "D-One Vehicle Management",
    company: "Doğuş Teknoloji",
    description:
      "Developed real-time vehicle tracking dashboards displaying hundreds of live map movements, and optimized high-volume data tables.",
    metric: "~80% Table Speedup",
    tags: ["React.js", "TypeScript", "Redux", "Material UI", "Maps"],
    link: "https://d-one.com.tr/",
    longDescription:
      "Worked on the core dashboard products for D-One vehicle management, integrating real-time telemetry datasets and visualizing high-volume grids.",
    bullets: [
      "Built and maintained complex administrator panels using <strong>React.js</strong>, <strong>TypeScript</strong>, and <strong>Redux</strong>.",
      "Led the visual integration of a <strong>real-time vehicle tracking dashboard</strong> mapping 500+ live movements simultaneously.",
      "Optimized large-scale datasets rendering to reduce table load times by <strong>~80%</strong> via pagination, memoization, and virtual list rendering.",
      "Facilitated Scrum agile processes as Scrum Master to increase team shipping velocity.",
    ],
  },
  {
    id: "rentcarla",
    title: "Rentcarla Marketplace",
    company: "Freelance / Contractor",
    description:
      "Optimized filters and search engines (SEO) for a major car rental marketplace, and redesigned the core checkout page layout.",
    metric: "Redesign & SEO",
    tags: ["React", "SEO Optimization", "Checkout Redesign", "Performance"],
    link: "https://rentcarla.com/",
    longDescription:
      "Contributed to Rentcarla, a global car rental marketplace aggregator, focusing on user conversion pathways and organic search engine discovery.",
    bullets: [
      "Re-engineered the core <strong>checkout wizard page</strong> into a modern, responsive layout that boosted user trust and conversion rates.",
      "Optimized product listing page <strong>filters</strong> to return instantaneous search queries and decrease funnel drop-off.",
      "Implemented comprehensive <strong>SEO optimizations</strong>, restructuring semantic tags and layout payloads for better search indexing.",
      "Identified and resolved blocking checkout bugs to reduce transactional errors.",
    ],
  },
  {
    id: "ponstech",
    title: "PONS Backend Rewriting",
    company: "PONS",
    description:
      "Architected and rewrote the complete backend stack from scratch using AWS cloud-native services, enhancing scalability and reliability.",
    metric: "From Scratch",
    tags: ["AWS CDK", "TypeScript", "AWS Lambda", "DynamoDB", "Cognito"],
    link: "https://www.ponstech.co/home",
    longDescription:
      "Led the backend modernization of PONS Tech from the ground up, replacing legacy architectures with serverless REST APIs.",
    bullets: [
      "Designed and coded the entire serverless backend service using <strong>AWS CDK</strong> and <strong>TypeScript</strong>.",
      "Implemented secure, multi-tenant user authentication and authorization flows with <strong>AWS Cognito</strong> and Lambda custom authorizers.",
      "Designed high-performance RESTful APIs via <strong>API Gateway</strong> and <strong>DynamoDB</strong>, maximizing scaling capacity.",
      "Configured robust CI/CD deployment pipelines using <strong>AWS CodePipeline</strong> to automate deployments.",
    ],
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (activeProject) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [activeProject]);

  const handleClose = () => {
    setActiveProject(null);
  };

  // Close modal when clicking outside (on the backdrop)
  const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const rect = dialogRef.current?.getBoundingClientRect();
    if (!rect) return;

    const clickedInDialog =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom;

    if (!clickedInDialog) {
      handleClose();
    }
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A selection of official projects I've worked on, ranging from
          high-performance frontend dashboard applications to serverless cloud
          backends.
        </p>

        <div className={styles.grid}>
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className={`glass-panel ${styles.card} scroll-reveal`}
              onClick={() => setActiveProject(project)}
            >
              <div className={styles.projectHeader}>
                <div className={styles.icon}>{project.company[0]}</div>
                <span className={styles.metricBadge}>{project.metric}</span>
              </div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDesc}>{project.description}</p>

              <div className={styles.tags}>
                {project.tags.slice(0, 3).map((tag, i) => (
                  <span key={i} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <span className={styles.learnMore}>
                Learn More
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Modern native dialog details overlay */}
      <dialog
        ref={dialogRef}
        className={styles.dialog}
        onClose={handleClose}
        onClick={handleDialogClick}
      >
        {activeProject && (
          <div className={styles.dialogContent}>
            <button
              className={styles.closeBtn}
              onClick={handleClose}
              aria-label="Close details dialog"
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h3 className={styles.modalTitle}>{activeProject.title}</h3>
            <div className={styles.modalSubtitle}>
              {activeProject.company} • Featured Contribution
            </div>

            <div className={styles.modalGrid}>
              <p
                className={styles.projectDesc}
                style={{ fontSize: "var(--font-size-base)" }}
              >
                {activeProject.longDescription}
              </p>

              <div>
                <h4
                  style={{
                    marginBlockEnd: "0.75rem",
                    fontSize: "var(--font-size-sm)",
                    fontWeight: 700,
                  }}
                >
                  Key Contributions &amp; Achievements:
                </h4>
                <ul className={styles.bulletList}>
                  {activeProject.bullets.map((bullet, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: bullet }} />
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.modalFooter}>
              <button className="btn btn-secondary" onClick={handleClose}>
                Close
              </button>
              {activeProject.link && (
                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Visit Project Website
                </a>
              )}
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
