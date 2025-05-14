import styles from "./header.module.css"
import NavBar from "./NavBar/NavBar"


export default function Header(){
    return(
        <header className={styles.header}>
            <h1 className={styles.userName}>User Name</h1>
            <NavBar/>
        </header>
    )
}