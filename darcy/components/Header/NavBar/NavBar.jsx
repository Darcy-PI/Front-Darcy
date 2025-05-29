"use client"

import { usePathname } from "next/navigation";
import { useStorage } from "@/zustand/storage";
import Link from "next/link";

import styles from "./navbar.module.css";
import { MdOutlineDesktopMac } from "react-icons/md";
import { IoPersonSharp, IoHome } from "react-icons/io5";

export default function NavBar(){
    const pathname = usePathname();
    const userTypeStorage = useStorage((state) => state.userType)


    return(
            <nav className={styles.navBar}>
                <ul>
                    <li>
                        <Link href="/home"
                        className={`${styles.link} ${pathname === "/home" ? styles.checkedLink : null}`}>
                        <IoHome size={30}/>
                        Home</Link>
                    </li>
                    <li>
                        <Link href="/"
                        className={`${styles.link} ${pathname === "/profile" ? styles.checkedLink : null}`}> 
                       <IoPersonSharp size={30}/>
                        Perfil</Link>
                    </li>
                    <li>
                     <Link href={userTypeStorage === "teacher" ? "/virtualAmbientStudant" : "/virtualAmbientTeacher"}
                     className={`${styles.link} ${pathname === "/virtualAmbientStudant" || "/virtualAmbientTeacher" ? styles.checkedLink : null}`}>
                     <MdOutlineDesktopMac size={30}/>
                     Ambiente Virtual</Link>
                    </li>
                </ul>
            </nav>
    )
}