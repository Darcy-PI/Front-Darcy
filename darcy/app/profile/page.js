import Link from "next/link";
import styles from "./page.module.css";

import Header from "@/components/Header/Header"

export default function Profile(){
    return(<div className={styles.containDiv}>
            <Header />
            <main className={styles.main}>
                <Link href="/editProfile">Edit</Link>
            </main>
            </div>
)
}