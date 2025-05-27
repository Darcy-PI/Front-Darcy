import styles from "./page.module.css";

import Header from "@/components/Header/Header";

export default function HomePage(){

    return(
        <div className={styles.containDiv}>
            <Header />
            <main className={styles.main}>
                <section>

                </section>
            </main>
        </div>
    )
}