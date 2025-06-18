import { ChangeEvent } from "react";
import styles from "./input.module.css";

export default function Input({
  label,
  type,
  id,
  onChange,
  value,
}: {
  label: string;
  type: string;
  id: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}) {
  return (
    <div className={styles.inputArea}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={styles.input}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}
