import Button from '@/components/common/button';
import styles from './hero-section.module.css';

export default function HeroSection({
  tagline = 'Welcome to OrbisX Companion',
  heading = 'Beautiful Booking Forms with Bootstrap Templates',
  subheading = 'Create professional, customized booking forms in minutes using our pre-designed Bootstrap templates and simple copy-paste code blocks.',
  primaryCTA = { text: 'Get Started', href: '/sign-up' },
  secondaryCTA = { text: 'View Pricing', href: '#pricing' },
  backgroundImage = null,
}) {
  return (
    <section className={styles.hero}>
      {backgroundImage && (
        <div className={styles.bg} style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className={styles.overlay} />
        </div>
      )}

      <div className={styles.content}>
        <div className="container">
          <p className={styles.tagline}>{tagline}</p>
          <h1 className={styles.heading}>{heading}</h1>
          <p className={styles.subheading}>{subheading}</p>
          <div className={styles.cta}>
            <Button href={primaryCTA.href}>{primaryCTA.text}</Button>
            <Button href={secondaryCTA.href} variant="primary" outline>
              {secondaryCTA.text}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
