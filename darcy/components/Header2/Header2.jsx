"use client"

import Link from "next/link";
import { useState } from "react";

import { GoChevronLeft } from "react-icons/go";

import styles from "./header2.module.css";

export default function Header2({url, name}){
    const [ambientName, setAmbientName] = useState();

    return(
        <header className={styles.header}>
            <Link href={`/${url}`} className={styles.link}> <GoChevronLeft color="white" size={30}/> </Link>
            <h1 className={styles.title}>{name}  {ambientName}</h1>
        </header>
    )
}