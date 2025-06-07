import Link from "next/link";
import styles from "./page.module.css";

import Header from "@/components/Header/Header"

export default function Profile(){
    return(<div className={styles.containDiv}>
            <Header />
            <main className={styles.main}>
              <div className={styles.Perfil}>
                <Link href="/editProfile">Perfil</Link>
              </div>
                <div className={styles.editIcon}>
                  <Link href="#">✎ Editar Perfil</Link>
                </div>
                  
                <div className={styles.profileBox}>
                  <img
                  src="/user-avatar.png"
                  alt="User Avatar"
                  className="styles.avatarImage"
                  />

                  <p>Nome: <span>John Doe da Silva Junior</span></p>
                  <p>Email: <span>JohnDoe@gmail.com</span></p>
                  <p className={styles.forgotPassword}>
                     Esqueceu a senha? <Link href="#">Clique aqui!!</Link>
                   </p>
                   <button className={styles.logoutButton}>Desconectar</button>
                </div>
            </main>
            </div>
    )
}