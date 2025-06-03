import Link from "next/link";


import { GoChevronLeft } from "react-icons/go";

import styles from "./header2.module.css";

export default function Header2({url, userName, ambientName}){
    return(
        <header className={styles.header}>
            <Link href={`/${url}`} className={styles.link}> <GoChevronLeft color="white" size={30}/> </Link>
            <h1 className={styles.title}>{userName} {ambientName}</h1>
        </header>
    )
}