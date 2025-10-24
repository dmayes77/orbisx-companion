'use client';

import styles from './empower-section.module.css';
import Image from 'next/image';
import { useInView } from '@/hooks/useInView';

export default function EmpowerSection() {
  const [ref, isInView] = useInView();

  return (
    <section className={`${styles.section} bg-white`} ref={ref}>
      <div className="container">
        <div className="row align-items-center g-4">
          <div className={`col-12 col-lg-6 animate-slide-in-left ${isInView ? 'in-view' : ''}`}>
            <div className={styles.imageWrapper}>
              <Image
                src="/previews/header-1.jpg"
                alt="OrbisX Companion template editor and preview"
                width={800}
                height={500}
                className={styles.image}
                priority={false}
              />
            </div>
          </div>

          <div className={`col-12 col-lg-6 animate-slide-in-right ${isInView ? 'in-view' : ''}`}>
            <div className={styles.text}>
              <h2 className={styles.title}>Style Your Forms with Ease</h2>
              <p className={styles.description}>
                OrbisX Companion brings professional design to your booking forms without the
                complexity. Choose from our curated collection of Bootstrap templates, customize
                them to match your brand, and generate production-ready code in seconds. No coding
                required, no messy builders, no learning curve—just beautiful forms that work.
                Whether you need headers, service lists, or package displays, Companion gives you
                clean, responsive HTML you can paste anywhere in your OrbisX site. Keep your load
                times fast, your brand consistent, and your workflow simple.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
