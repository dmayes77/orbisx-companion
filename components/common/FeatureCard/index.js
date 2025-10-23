import styles from './feature-card.module.css';

const FeatureCard = ({ icon, title, description, className = '' }) => {
  return (
    <div className={`${styles.featureCard} ${className}`}>
      <div className={styles.featureIcon}>{icon}</div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
};

export default FeatureCard;
