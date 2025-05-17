import Image from "next/image";
import styles from "./authenticationHeader.module.css";

export default function AuthenticationHeader(){
    return(
        <div className={styles.divHeader}>
            <Image src="/assets/AuthenticationHeader.png" width={80} height={80} alt="Darcy Logo"/>
            <div className={styles.divText}>
                <h1>Darcy</h1>
                <h2>Educação Digitalizada</h2>
            </div>
        </div>
    )
}