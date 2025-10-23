import Link from 'next/link';
import styles from './logo.module.css';

const Logo = ({ className = '', href = '/' }) => {
  return (
    <Link href={href} className={`${styles.logo} ${className}`}>
      OrbisX Companion
    </Link>
  );
};

export default Logo;
