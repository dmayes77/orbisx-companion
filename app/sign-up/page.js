import styles from './signup.module.css';
import PageHeader from '@/components/common/PageHeader';
import PlanCard from '@/components/pricing/PlanCard';
import Form from '@/components/common/Form';
import Logo from '@/components/common/Logo';
import { plans } from '@/config/plans';

export default function SignUpPage() {
  return (
    <main className="container py-5">
      <div className={styles.signupContainer}>
        <Logo className={styles.logo} />

        <PageHeader
          title="Get Started with OrbisX Companion"
          subtitle="Choose a plan and create your account to start customizing your booking forms."
        />

        <div className={styles.planGrid}>
          <PlanCard {...plans.monthly} />
          <PlanCard {...plans.sixMonth} />
          <PlanCard {...plans.lifetime} />
        </div>

        <div className={styles.formSection}>
          <Form className={styles.signupForm}>
            <Form.Input
              label="Business Name"
              id="businessName"
              placeholder="Your Business Name"
              required
            />

            <Form.Input
              label="Choose Your Subdomain"
              id="subdomain"
              placeholder="your-business"
              required
              suffix=".orbisx-companion.app"
            />

            <Form.Input
              label="Email Address"
              id="email"
              type="email"
              placeholder="you@example.com"
              required
            />

            <Form.Submit>Create Account</Form.Submit>
          </Form>
        </div>
      </div>
    </main>
  );
}
