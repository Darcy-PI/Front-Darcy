import styles from "./page.module.css"

import NavBar from "@/components/NavBar/NavBar"

export default function HomePage(){
    return(
        <div className={styles.containDiv}>
            <header className={styles.header}>
                <NavBar />
            </header>
            <main className={styles.main}>
                
            </main>
        </div>
    )
}