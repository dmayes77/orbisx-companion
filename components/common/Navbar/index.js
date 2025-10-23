'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/common/button';
import styles from './navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link href="/" className={styles.brand}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={styles.brandText}>OrbisX Companion</span>
          </Link>

          <button
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className={`${styles.nav} ${isMenuOpen ? styles.isOpen : ''}`}>
            <ul className={styles.links}>
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
            <Button href="/sign-up" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
