'use client';

import Button from '@/components/common/button';
import styles from './onboarding.module.css';
import { useInView } from '@/hooks/useInView';

export default function OnboardingSection() {
  const [ref, isInView] = useInView();

  return (
    <section className={styles.sectionWrapper} ref={ref}>
      <div className="container">
        <div
          className={`bg-primary text-light rounded-4 p-4 p-lg-5 shadow-sm animate-scale-in ${
            isInView ? 'in-view' : ''
          }`}
        >
          <img
            src="/previews/header-1.jpg"
            alt="OrbisX Companion live walkthrough preview"
            className={styles.heroImage}
          />

          <h2 className={`display-6 fw-bold ${styles.heading}`}>
            Getting Familiar with OrbisX Companion is Super Easy
          </h2>

          <p className="mb-3">
            The Companion helps you design beautiful, Bootstrap‑powered booking forms and generate
            copy‑paste code in minutes. We’ll guide you through it live so you can be styling forms
            fast—no CSS heavy lifting required.
          </p>

          <p className="mb-4">
            Book a call with one of our tour guides and we’ll show you how to pick a template, tweak
            colors and content, and copy the optimized code blocks straight into your OrbisX booking
            flow or website. In one short Zoom session you’ll learn how to style headers, services,
            and packages using the OrbisX Companion.
          </p>

          <div>
            <Button href="/sign-up" variant="light">
              Book a Live Tour
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
