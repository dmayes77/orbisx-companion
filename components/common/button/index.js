import Link from 'next/link';
import styles from './button.module.css';

const Button = ({
  children,
  className = '',
  href,
  size = 'md',
  variant = 'primary',
  outline = false,
  disabled = false,
  ...props
}) => {
  const buttonClasses = [
    styles.button,
    styles[size],
    styles[variant],
    outline ? styles.outline : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <Link href={href} className={`${buttonClasses} ${styles.rippleParent}`} {...props}>
        {children}
        <span className={styles.rippleOverlay} aria-hidden="true" />
      </Link>
    );
  }

  return (
    <button className={`${buttonClasses} ${styles.rippleParent}`} disabled={disabled} {...props}>
      {children}
      <span className={styles.rippleOverlay} aria-hidden="true" />
    </button>
  );
};

export default Button;
