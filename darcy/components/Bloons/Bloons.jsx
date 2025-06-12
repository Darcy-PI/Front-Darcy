import styles from "./bloons.module.css";

export default function Bloons({text, author}){
    
    return(
        <section className={styles.bloonsSection}>
            <p>{text}</p>
            <cite>{author}</cite>
        </section>
    )
}