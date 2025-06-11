"use client"
import { useState } from "react";
import styles from "./header.module.css"
import NavBar from "./NavBar/NavBar"

import { MdOutlineMenu } from "react-icons/md";

export default function Header(){
    const [display, setDisplay] = useState(false);

    function displayNavBar(){
        display ? setDisplay(false) : setDisplay(true);
    }

    return(
        <header className={styles.header}>
            <div className={styles.titleMenu}>
                <h1 className={styles.userName}>User Name</h1>
                <MdOutlineMenu className={styles.hambguerMenu} size={35} onClick={displayNavBar} color="white"/>
            </div>
            <NavBar className={`${display ? styles.active : styles.nav}`}/>
        </header>
    )
}