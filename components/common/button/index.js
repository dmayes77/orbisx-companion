'use client';

import { useRouter } from 'next/navigation';
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
  onClick,
  ...props
}) => {
  const router = useRouter();

  const buttonClasses = [
    styles.button,
    styles[size],
    styles[variant],
    outline ? styles.outline : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }

    // If there's an href, delay navigation to show press animation
    if (href && !e.defaultPrevented) {
      e.preventDefault();

      // Wait for press animation to complete (400ms)
      setTimeout(() => {
        router.push(href);
      }, 400);
    }
  };

  if (href) {
    return (
      <Link
        href={href}
        className={`${buttonClasses} ${styles.rippleParent}`}
        onClick={handleClick}
        {...props}
      >
        {children}
        <span className={styles.rippleOverlay} aria-hidden="true" />
      </Link>
    );
  }

  return (
    <button
      className={`${buttonClasses} ${styles.rippleParent}`}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      {children}
      <span className={styles.rippleOverlay} aria-hidden="true" />
    </button>
  );
};

export default Button;
