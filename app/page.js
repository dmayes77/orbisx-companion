import styles from './page.module.css';
import HeroSection from '@/components/marketing/HeroSection';
import FeatureCard from '@/components/common/FeatureCard';
import PlanCard from '@/components/pricing/PlanCard';
import { TemplatesIcon, CopyPasteIcon, CustomizeIcon } from '@/components/common/icons';
import { plans } from '@/config/plans';

export default function HomePage() {
  const features = [
    {
      Icon: TemplatesIcon,
      title: 'Pre-designed Templates',
      description:
        'Choose from our collection of professionally designed Bootstrap templates for headers, services, and packages.',
    },
    {
      Icon: CopyPasteIcon,
      title: 'Copy-Paste Code Blocks',
      description:
        'Generate clean, minified code blocks ready to paste into your website with just one click.',
    },
    {
      Icon: CustomizeIcon,
      title: 'Customization Options',
      description:
        'Easily customize colors, spacing, and content to match your brand and needs, all using Bootstrap classes.',
    },
  ];

  return (
    <main>
      <HeroSection backgroundImage="/previews/header-1.jpg" />

      <section className={styles.features}>
        <div className="container">
          <h2 className={styles.featuresTitle}>Why Choose OrbisX Companion?</h2>
          <p className={styles.featuresSubtitle}>
            Everything you need to create professional booking forms quickly and easily.
          </p>
          <div className={styles.featureGrid}>
            {features.map(({ Icon, title, description }) => (
              <FeatureCard key={title} icon={<Icon />} title={title} description={description} />
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className={styles.pricing}>
        <div className="container">
          <h2 className={styles.pricingTitle}>Simple, Transparent Pricing</h2>
          <p className={styles.pricingSubtitle}>
            Choose the plan that works best for your business.
          </p>

          {/* Use Bootstrap grid for the pricing cards */}
          <div className="row g-4 justify-content-center">
            <div className="col-12 col-lg-4">
              <PlanCard {...plans.monthly} />
            </div>

            <div className="col-12 col-lg-4">
              <PlanCard {...plans.sixMonth} featured />
            </div>

            <div className="col-12 col-lg-4">
              <PlanCard {...plans.lifetime} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
