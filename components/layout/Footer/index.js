import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <h3 className={styles.brandName}>OrbisX Companion</h3>
            <p className={styles.brandTagline}>Beautiful booking forms with Bootstrap templates</p>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkGroupTitle}>Product</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/templates" className={styles.link}>
                    Templates
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className={styles.link}>
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className={styles.link}>
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkGroupTitle}>Company</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/about" className={styles.link}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={styles.link}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className={styles.link}>
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkGroupTitle}>Support</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/help" className={styles.link}>
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/sign-up" className={styles.link}>
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} OrbisX Companion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
