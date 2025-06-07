import styles from "./button.module.css";

export default function Button({ children, type="button", onClick}) {
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}