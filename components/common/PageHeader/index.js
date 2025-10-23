import styles from './page-header.module.css';

const PageHeader = ({ title, subtitle, tagline, align = 'center', className = '', children }) => {
  return (
    <div className={`${styles.header} ${styles[align]} ${className}`}>
      {tagline && <p className={styles.tagline}>{tagline}</p>}
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      {children && <div className={styles.content}>{children}</div>}
    </div>
  );
};

export default PageHeader;
