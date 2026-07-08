"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock form API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset after a few seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);

      // Reset form fields
      (e.target as HTMLFormElement).reset();
    }, 1200);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have an exciting project or role? Let's connect and discuss how I can help.
        </p>

        <div className={styles.grid}>
          {/* Info Card */}
          <div className={`glass-panel ${styles.infoCard} scroll-reveal`}>
            <h3 className={styles.infoTitle}>Contact Details</h3>
            <p className={styles.infoText}>
              Feel free to reach out via email, phone, or connect with me on social platforms. I will get back to you as soon as possible.
            </p>

            <div className={styles.details}>
              <div className={styles.detailItem}>
                <div className={styles.iconWrapper}>
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className={styles.detailLabel}>Email</div>
                  <a href="mailto:enes.bek.93@gmail.com" className={styles.detailValue}>
                    enes.bek.93@gmail.com
                  </a>
                </div>
              </div>

              <div className={styles.detailItem}>
                <div className={styles.iconWrapper}>
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className={styles.detailLabel}>Phone</div>
                  <a href="tel:+905079371854" className={styles.detailValue}>
                    +90 507 937 1854
                  </a>
                </div>
              </div>

              <div className={styles.detailItem}>
                <div className={styles.iconWrapper}>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </div>
                <div>
                  <div className={styles.detailLabel}>LinkedIn</div>
                  <a href="https://linkedin.com/in/enes-bek" target="_blank" rel="noopener noreferrer" className={styles.detailValue}>
                    linkedin.com/in/enes-bek
                  </a>
                </div>
              </div>

              <div className={styles.detailItem}>
                <div className={styles.iconWrapper}>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </div>
                <div>
                  <div className={styles.detailLabel}>GitHub</div>
                  <a href="https://github.com/enesbek" target="_blank" rel="noopener noreferrer" className={styles.detailValue}>
                    github.com/enesbek
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className={`glass-panel ${styles.formCard} scroll-reveal`}>
            {submitted && (
              <div className={styles.successMsg}>
                Message sent successfully! Thank you.
              </div>
            )}

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.input}
                  placeholder="John Doe"
                  required
                />
                <span className={styles.errorText}>Please enter your name.</span>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.input}
                  placeholder="john@example.com"
                  required
                />
                <span className={styles.errorText}>Please enter a valid email address.</span>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={styles.textarea}
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
                <span className={styles.errorText}>Please write a message.</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn btn-primary ${styles.submitBtn}`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
