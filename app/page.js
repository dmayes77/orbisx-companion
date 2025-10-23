import Link from 'next/link';
import styles from './page.module.css';
import Button from '@/components/common/button';

export default function HomePage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.tagline}>Welcome to OrbisX Companion</p>
          <h1 className={styles.heading}>Beautiful Booking Forms with Bootstrap Templates</h1>
          <p className={styles.subheading}>
            Create professional, customized booking forms in minutes using our pre-designed
            Bootstrap templates and simple copy-paste code blocks.
          </p>
          <div className={styles.cta}>
            <Button href="/sign-up">Get Started Free</Button>{' '}
            <Button href="#pricing" variant="primary" outline className={styles.secondaryButton}>
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className="container">
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
              </div>
              <h3 className={styles.featureTitle}>Pre-designed Templates</h3>
              <p className={styles.featureDescription}>
                Choose from our collection of professionally designed Bootstrap templates for
                headers, services, and packages.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className={styles.featureTitle}>Copy-Paste Code Blocks</h3>
              <p className={styles.featureDescription}>
                Generate clean, minified code blocks ready to paste into your website with just one
                click.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
              </div>
              <h3 className={styles.featureTitle}>Customization Options</h3>
              <p className={styles.featureDescription}>
                Easily customize colors, spacing, and content to match your brand and needs, all
                using Bootstrap classes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
