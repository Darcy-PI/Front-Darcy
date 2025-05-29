import styles from "./button.module.css";

export default function Button({ children, onClick, type="button"}) {
  return (
    <button type={type} className={styles.button}>
      {children}
    </button>
  );
}