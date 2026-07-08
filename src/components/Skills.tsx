"use client";

import { useState } from "react";
import styles from "./Skills.module.css";

interface SkillItem {
  name: string;
  level?: string;
}

interface SkillCategory {
  id: string;
  title: string;
  skills: SkillItem[];
}

const SKILLS_DATA: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    skills: [
      { name: "React", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "Next.js", level: "Expert" },
      { name: "JavaScript (ES6+)", level: "Expert" },
      { name: "Redux", level: "Advanced" },
      { name: "Vue.js", level: "Advanced" }
    ]
  },
  {
    id: "backend",
    title: "Backend & Cloud",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "AWS CDK", level: "Advanced" },
      { name: "AWS Lambda & Cognito", level: "Advanced" },
      { name: "API Gateway & DynamoDB", level: "Advanced" },
      { name: "RESTful APIs", level: "Advanced" },
      { name: "CI/CD & DevOps", level: "Advanced" },
      { name: "Docker", level: "Intermediate" }
    ]
  },
  {
    id: "styling",
    title: "Styling & UI Tools",
    skills: [
      { name: "Tailwind CSS", level: "Expert" },
      { name: "SCSS", level: "Expert" },
      { name: "Styled Components", level: "Expert" },
      { name: "Figma", level: "Advanced" },
      { name: "Webpack", level: "Advanced" },
      { name: "Git", level: "Expert" }
    ]
  },
  {
    id: "architecture",
    title: "Architecture & Performance",
    skills: [
      { name: "Component Architecture", level: "Expert" },
      { name: "Memoization & Optimization", level: "Expert" },
      { name: "Large-Scale Data Handling", level: "Expert" },
      { name: "Jest & React Testing Library", level: "Advanced" },
      { name: "Selenium Testing", level: "Intermediate" },
      { name: "ArkTS (HarmonyOS UI)", level: "Advanced" }
    ]
  }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("frontend");

  const activeCategory = SKILLS_DATA.find((cat) => cat.id === activeTab);

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className="container">
        <h2 className="section-title">My Skills Matrix</h2>
        <p className="section-subtitle">
          My primary technologies and engineering competencies, classified by area of expertise.
        </p>

        <div className={styles.tabsContainer}>
          {SKILLS_DATA.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.tabBtn} ${activeTab === cat.id ? styles.tabActive : ""}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <div className={styles.skillsGrid}>
          {activeCategory?.skills.map((skill, index) => (
            <div key={index} className={`glass-panel ${styles.skillCard}`}>
              <div className={styles.iconWrapper}>
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className={styles.skillName}>{skill.name}</div>
              {skill.level && <div className={styles.skillLevel}>{skill.level}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
