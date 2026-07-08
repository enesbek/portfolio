import styles from "./Experience.module.css";

interface TimelineItem {
  id: string;
  role: string;
  company: string;
  date: string;
  location: string;
  description: string;
  bullets?: string[];
  type: "job" | "education" | "organization";
}

const TIMELINE_DATA: TimelineItem[] = [
  {
    id: "huawei",
    role: "Frontend Engineer",
    company: "Huawei",
    date: "2025/04 – Present",
    location: "Ankara, Turkey",
    description: "Developing system-level UI features on HarmonyOS using ArkTS and TypeScript.",
    bullets: [
      "Designed and optimized smooth folder transitions and UI elements for cross-platform screens.",
      "Resolved complex UI bugs and performance issues to maintain high rendering framerates.",
      "Engineered Node.js CLI log parsing tool to dramatically improve debug efficiency."
    ],
    type: "job"
  },
  {
    id: "pons",
    role: "Full Stack Engineer",
    company: "PONS",
    date: "2024/05 – 2025/04",
    location: "Istanbul, Turkey",
    description: "Developed and maintained serverless backend services using AWS CDK, Cognito, Lambda, and DynamoDB.",
    bullets: [
      "Wrote and maintained the entire backend system for PONS Tech from scratch.",
      "Configured secure authentication flows and managed AWS API Gateways.",
      "Designed database architecture and established CI/CD deployment logic."
    ],
    type: "job"
  },
  {
    id: "dogus",
    role: "Frontend Engineer",
    company: "Doğuş Teknoloji",
    date: "2022/05 – 2024/03",
    location: "Istanbul, Turkey",
    description: "Built scalable admin panels and dashboards using React.js, TypeScript, and Redux.",
    bullets: [
      "Developed a real-time tracking interface displaying live GPS mappings of 500+ vehicles.",
      "Sped up heavy telemetry table renders by ~80% utilizing memoization and virtualization.",
      "Acted as Scrum Master, enhancing agile communication and coordination."
    ],
    type: "job"
  },
  {
    id: "modanisa",
    role: "Full Stack Engineer Intern",
    company: "Modanisa",
    date: "2021/10 – 2022/03",
    location: "Istanbul, Turkey",
    description: "Conducted technical research and built sample projects using Vue.js, Go, HTML, and CSS.",
    bullets: [
      "Explored TDD fundamentals, writing unit and end-to-end integration test runs.",
      "Acquired hands-on experience with automated pipelines using GCP and CircleCI."
    ],
    type: "job"
  },
  {
    id: "education",
    role: "Bachelor's Degree in Computer Engineering",
    company: "Fatih Sultan Mehmet Vakif University",
    date: "2017/09 – 2022/06",
    location: "Istanbul, Turkey",
    description: "Graduated with a focus on software engineering, data structures, and algorithms. Spent a semester studying abroad (Erasmus) in Computer Science at University of Bielsko-Biala, Poland (2019/09 – 2020/02).",
    type: "education"
  },
  {
    id: "iaeste",
    role: "Founder & President",
    company: "FSMVU IAESTE",
    date: "2021/01 – 2022/02",
    location: "Istanbul, Turkey",
    description: "Founded and led the university club of IAESTE (International Association for the Exchange of Students for Technical Experience) for 2 years, facilitating international student internship placements.",
    type: "organization"
  }
];

export default function Experience() {
  return (
    <section id="experience" className={styles.experienceSection}>
      <div className="container">
        <h2 className="section-title">Experience &amp; Education</h2>
        <p className="section-subtitle">
          My professional career path, academic background, and leadership initiatives.
        </p>

        <div className={styles.timeline}>
          {TIMELINE_DATA.map((item) => (
            <div
              key={item.id}
              className={`${styles.timelineItem} scroll-reveal`}
            >
              <div className={styles.timelineNode}></div>
              <div className={`glass-panel ${styles.timelineContent}`}>
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.role}>{item.role}</h3>
                    <span className={styles.company}>
                      {item.company}
                      {item.type !== "job" && ` (${item.type.toUpperCase()})`}
                    </span>
                  </div>
                  <div className={styles.meta}>
                    <div className={styles.date}>{item.date}</div>
                    <div className={styles.location}>{item.location}</div>
                  </div>
                </div>

                <p className={styles.desc}>{item.description}</p>

                {item.bullets && (
                  <ul className={styles.bullets}>
                    {item.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
