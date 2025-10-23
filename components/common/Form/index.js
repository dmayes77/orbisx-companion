import styles from './form.module.css';
import Button from '@/components/common/button';

const FormInput = ({
  label,
  id,
  type = 'text',
  placeholder,
  required = false,
  suffix,
  className = '',
}) => (
  <div className={`${styles.formGroup} ${className}`}>
    <label htmlFor={id} className={styles.label}>
      {label}
    </label>
    <div className={suffix ? styles.inputGroup : ''}>
      <input
        type={type}
        className={styles.input}
        id={id}
        placeholder={placeholder}
        required={required}
      />
      {suffix && <span className={styles.suffix}>{suffix}</span>}
    </div>
  </div>
);

const Form = ({ onSubmit, children, className = '' }) => (
  <form onSubmit={onSubmit} className={`${styles.form} ${className}`}>
    {children}
  </form>
);

const SubmitButton = ({ children, className = '', ...props }) => (
  <Button type="submit" className={`${styles.submitButton} ${className}`} {...props}>
    {children}
  </Button>
);

Form.Input = FormInput;
Form.Submit = SubmitButton;

export default Form;
