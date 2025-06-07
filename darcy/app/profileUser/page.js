"use client";
import Link from "next/link";
import styles from "./page.module.css";

import Header from "@/components/Header/Header"
import { useState, useEffect } from "react";

export default function Profile(){
  const [profileData, setProfileData] = useState([{
    name: "",
    completeName: "",
    id: null,
    serie: ""
  }]);
  const testProfile = [{name: "Bastardinho", completeName: "Bastardinho da Silva Junior", id: "000000000000", serie: "6°A"}];

  useEffect(() => {
  const data = testProfile.map((profile) => ({
    name: profile.name,
    completeName: profile.completeName,
    id: profile.id,
    serie: profile.serie,
  }));

  // Exemplo: setar no estado
  setProfileData(data);

}, []);



    return(<div className={styles.containDiv}>
            <Header />
            <main className={styles.main}>
              <h1>Perfil</h1>

                  
                <div className={styles.Profile}>
                  <div></div>
                
                <div className={styles.profileBox}>
                  <img
                  src="/assets/Profile-Image.png"
                  alt="User Avatar"
                  className={styles.avatarImage}
                  />
                  
                  <p>Nome: <span>{profileData[0].name}</span></p>
                  <p>Nome Completo: <span>{profileData[0].completeName}</span></p>
                  <p>ID:<span> {profileData[0].id}</span></p>
                  <p>Série:<span>{profileData[0].serie}</span></p>

                   <button className={styles.logoutButton}>Desconectar</button>
                   </div>

                   <div className={styles.editIcon}>
                  <Link href="#">✎ Editar Perfil</Link>
                  </div>
                </div>
            </main>
            </div>

)
}