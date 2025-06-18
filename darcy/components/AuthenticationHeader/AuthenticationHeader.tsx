import Link from "next/link";
import styles from "./authenticationHeader.module.css";

import { FaChevronLeft } from "react-icons/fa6";


export default function AuthenticationHeader(){
    return(
        <div className={styles.divHeader}>
            <Link href="/" className={styles.backLinkButton}>< FaChevronLeft size={25} color="#1F2225"/></Link>
            <img src="/assets/AuthenticationHeader.png" width={80} height={80} alt="Darcy Logo" className={styles.image}/>
            <div className={styles.divText}>
                <h1>Darcy</h1>
                <h2>Educação Digitalizada</h2>
            </div>
        </div>
    )
}