import styles from "./button.module.css";

export default function Button({ children, onClick, type="button"}) {
  return (
    <button onClick={onClick} type={type} className={styles.button}>
      {children}
    </button>
  );
}