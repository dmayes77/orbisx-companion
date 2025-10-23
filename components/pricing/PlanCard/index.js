import Button from '@/components/common/button';
import styles from './plan-card.module.css';

const PlanCard = ({ name, price, period, features, isFeatured, onChoose, className = '' }) => {
  return (
    <div className={`${styles.planCard} ${isFeatured ? styles.featured : ''} ${className}`}>
      <div className={styles.planHeader}>
        {isFeatured && <div className={styles.badge}>Most Popular</div>}
        <h3 className={styles.planName}>{name}</h3>
        <div className={styles.planPrice}>
          ${price}
          <span className={styles.period}>{period}</span>
        </div>
      </div>
      <ul className={styles.planFeatures}>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <Button className={styles.planButton} onClick={onChoose}>
        Choose {name}
      </Button>
    </div>
  );
};

export default PlanCard;
