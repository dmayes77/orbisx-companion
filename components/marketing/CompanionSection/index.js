'use client';

import styles from './companion-section.module.css';
import Button from '@/components/common/button';
import { useInView } from '@/hooks/useInView';

export default function CompanionSection() {
  const [ref, isInView] = useInView();

  return (
    <section className={`${styles.section} bg-primary`} id="about-companion" ref={ref}>
      <div className="container">
        <h2 className={`${styles.title} animate-fade-in-up ${isInView ? 'in-view' : ''}`}>
          Upgrade Your Form Styling with OrbisX Companion
        </h2>
        <p className={`${styles.lead} animate-fade-in-up delay-100 ${isInView ? 'in-view' : ''}`}>
          OrbisX Companion is the easiest way to design beautiful, high‑converting booking forms for
          your OrbisX website. Pick a template, tweak a few options, then copy‑paste clean Bootstrap
          code. No heavy builders, no vendor lock‑in—just fast, on‑brand results.
        </p>

        <div
          className={`${styles.callout} animate-scale-in delay-200 ${isInView ? 'in-view' : ''}`}
        >
          <h3 className={styles.calloutTitle}>Built by OrbisX users for OrbisX users</h3>
          <div className={styles.calloutBody}>
            <p>
              We run shops and work with shop owners every day. We know the pain of messy embeds,
              inconsistent styles, and forms that don't match your brand. Companion solves that by
              giving you clean, Bootstrap‑only patterns for headers, services, and packages.
            </p>
            <p>
              Your team gets production‑ready HTML you can paste anywhere in seconds. Keep your
              stack simple, load times fast, and your brand consistent across every page.
            </p>
            <p className={styles.strong}>
              It's not another page builder—it's your styling shortcut for OrbisX.
            </p>
            <div className={styles.actions}>
              <Button href="#pricing" size="sm" variant="primary">
                See Pricing
              </Button>
              <Button href="/sign-up" size="sm" variant="primary" outline>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
