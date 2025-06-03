import styles from "./radioInput.module.css";

export default function RadioInput({ label, options, name }) {
  return (
    <div className={styles.divContain}>
      <label>{label}</label>
      <div className={styles.radioDiv}>
        {options.map((option, i) => {
          const id = `${name}-${i}`;
          return (
            <div key={id} className={styles.inputDiv}>
              <div className={styles.divResponses}>
                <input type="radio" id={id} name={name} value={option.value} className={styles.radioInput}/>
                <label htmlFor={id} className={styles.checkmark}>{option}</label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}