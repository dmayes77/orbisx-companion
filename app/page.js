'use client';

import styles from './page.module.css';
import HeroSection from '@/components/marketing/HeroSection';
import FeatureCard from '@/components/common/FeatureCard';
import PlanCard from '@/components/pricing/PlanCard';
import Footer from '@/components/layout/Footer';
import Button from '@/components/common/button';
import CompanionSection from '@/components/marketing/CompanionSection';
import EmpowerSection from '@/components/marketing/EmpowerSection';
import OnboardingSection from '@/components/marketing/OnboardingSection';
import { TemplatesIcon, CopyPasteIcon, CustomizeIcon } from '@/components/common/icons';
import { plans } from '@/config/plans';
import { useInView } from '@/hooks/useInView';

export default function HomePage() {
  const [featuresRef, featuresInView] = useInView();
  const [pricingRef, pricingInView] = useInView();

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
      {/* Hero Section */}
      <HeroSection
        tagline="OrbisX Companion"
        heading="Beautiful Booking Forms. Effortless Customization."
        subheading="Empower your business with stunning, Bootstrap-powered booking forms and instant code generation."
        backgroundImage="/previews/header-1.jpg"
        primaryCTA={{ text: 'Get Started Free', href: '/sign-up' }}
        secondaryCTA={{ text: 'View Pricing', href: '#pricing' }}
      />

      {/* Features Section */}
      <section className={`${styles.features} bg-white`} ref={featuresRef}>
        <div className="container">
          <h2
            className={`${styles.featuresTitle} animate-fade-in-up ${
              featuresInView ? 'in-view' : ''
            }`}
          >
            Why OrbisX Companion?
          </h2>
          <p
            className={`${styles.featuresSubtitle} animate-fade-in-up delay-100 ${
              featuresInView ? 'in-view' : ''
            }`}
          >
            Everything you need to launch beautiful, branded booking forms in minutes.
          </p>
          <div className="row g-4 justify-content-center">
            {features.map(({ Icon, title, description }, index) => (
              <div
                className={`col-12 col-md-4 animate-fade-in-up delay-${200 + index * 100} ${
                  featuresInView ? 'in-view' : ''
                }`}
                key={title}
              >
                <FeatureCard icon={<Icon />} title={title} description={description} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companion Explainer Section */}
      <CompanionSection />
      {/* Empower Your Business Section */}
      <EmpowerSection />

      {/* Pricing Section */}
      <section id="pricing" className={styles.pricing} ref={pricingRef}>
        <div className="container">
          <h2
            className={`${styles.pricingTitle} animate-fade-in-up ${
              pricingInView ? 'in-view' : ''
            }`}
          >
            Simple, Transparent Pricing
          </h2>
          <p
            className={`${styles.pricingSubtitle} animate-fade-in-up delay-100 ${
              pricingInView ? 'in-view' : ''
            }`}
          >
            Choose the plan that fits your business. No hidden fees.
          </p>

          {/* Use Bootstrap grid for the pricing cards */}
          <div className="row g-4 justify-content-center">
            <div
              className={`col-12 col-lg-4 d-flex animate-scale-in delay-200 ${
                pricingInView ? 'in-view' : ''
              }`}
            >
              <PlanCard className="flex-fill" {...plans.monthly} />
            </div>

            <div
              className={`col-12 col-lg-4 d-flex animate-scale-in delay-100 ${
                pricingInView ? 'in-view' : ''
              }`}
            >
              <PlanCard className="flex-fill" {...plans.sixMonth} isFeatured />
            </div>

            <div
              className={`col-12 col-lg-4 d-flex animate-scale-in delay-300 ${
                pricingInView ? 'in-view' : ''
              }`}
            >
              <PlanCard className="flex-fill" {...plans.lifetime} />
            </div>
          </div>

          <div
            className={`${styles.pricingCta} animate-fade-in delay-400 ${
              pricingInView ? 'in-view' : ''
            }`}
          >
            <Button href="/sign-up" size="lg" variant="light">
              Start Your Free Trial
            </Button>
          </div>
        </div>
      </section>

      {/* Onboarding / Live Tour Section */}
      <OnboardingSection />

      <Footer />
    </main>
  );
}
