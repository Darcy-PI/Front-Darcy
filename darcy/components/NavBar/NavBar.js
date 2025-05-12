import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";

export default function NavBar(){
    return(
        <div className={styles.containDiv}>
            <div>
                <h1 className={styles.usernameHeader}>Name User</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href="/"
                        className={styles.link}>
                        <Image 
                        src="/icon/HomeIcon.svg"
                        width={25}
                        height={25}
                        alt="Home Icon"/>
                        Home</Link>
                    </li>
                    <li>
                        <Link href="/"
                        className={styles.link}> 
                        <Image 
                        src="/icon/ProfileIcon.svg"
                        width={25}
                        height={25}
                        alt="Profile Icon"/>
                        Perfil</Link>
                    </li>
                    <li>
                     <Link href="/"
                     className={styles.link}>
                     <Image 
                     src="/icon/VirtualAmbient.svg"
                     width={25}
                     height={25}
                     alt="VirtualAmbient Icon"/>
                     Ambiente Virtual</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}