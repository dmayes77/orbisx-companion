import styles from './signup.module.css';
import PageHeader from '@/components/common/PageHeader';
import Form from '@/components/common/Form';
import Logo from '@/components/common/Logo';

export default function SignUpPage() {
  return (
    <main className="container py-5">
      <div className={styles.signupContainer}>
        <Logo className={styles.logo} />

        <PageHeader
          title="Create Your Account"
          subtitle="Set up your OrbisX Companion workspace and start customizing your booking forms."
        />

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
