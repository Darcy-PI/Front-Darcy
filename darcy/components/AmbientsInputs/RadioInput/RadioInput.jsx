import styles from "./radioInput.module.css";

export default function RadioInput({id, label, options, name, onChange }) {
  return (
    <div className={styles.divContain}>
      <label>{label}</label>
      <div className={styles.radioDiv}>
        {options.map((option, i) => {
          const divKey = `${name}-${i}`;
          return (
            <div key={divKey} className={styles.inputDiv}>
              <div className={styles.divResponses}>
                <input type="radio" id={id} name={name} value={option} className={styles.radioInput} onChange={onChange}/>
                <label htmlFor={id} className={styles.checkmark}>{option}</label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}