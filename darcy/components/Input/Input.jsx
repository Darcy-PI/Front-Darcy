import styles from "./input.module.css";

export default function Input({label,type, id}){
    return(
        <div className={styles.inputArea}>

            <label htmlFor={id} className={styles.label}>{label}</label>
            <input type={type} id={id} className={styles.input} required/>
        </div>
    )
}