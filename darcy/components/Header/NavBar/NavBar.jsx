"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import styles from "./navbar.module.css";

export default function NavBar(){
    const pathname = usePathname();

    return(
            <nav className={styles.navBar}>
                <ul>
                    <li>
                        <Link href="/home"
                        className={`${styles.link} ${pathname === "/home" ? styles.checkedLink : null}`}>
                        <Image 
                        src="/icon/HomeIcon.svg"
                        width={25}
                        height={25}
                        alt="Home Icon"/>
                        Home</Link>
                    </li>
                    <li>
                        <Link href="/"
                        className={`${styles.link} ${pathname === "/profile" ? styles.checkedLink : null}`}> 
                        <Image 
                        src="/icon/ProfileIcon.svg"
                        width={25}
                        height={25}
                        alt="Profile Icon"/>
                        Perfil</Link>
                    </li>
                    <li>
                     <Link href="/virtualAmbient"
                     className={`${styles.link} ${pathname === "/virtualAmbient" ? styles.checkedLink : null}`}>
                     <Image 
                     src="/icon/VirtualAmbient.svg"
                     width={25}
                     height={25}
                     alt="VirtualAmbient Icon"/>
                     Ambiente Virtual</Link>
                    </li>
                </ul>
            </nav>
    )
}