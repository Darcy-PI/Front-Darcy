"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";

import Header from "@/components/Header/Header"
import { FaRegEdit } from "react-icons/fa";
import Button from "@/components/Button/Button";

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
                <h1 className={styles.title}>Perfil</h1>
                <div className={styles.Profile}>
                  <div></div>
                
                <div className={styles.profileBox}>
                  <img
                  src="/assets/Profile-Image.png"
                  alt="User Avatar"
                  className={styles.avatarImage}
                  />
                  
                  <div className={styles.divData}>
                    <p>Nome: <span>{profileData[0].name}</span></p>
                    <p>Nome Completo: <span>{profileData[0].completeName}</span></p>
                    <p>ID:<span> {profileData[0].id}</span></p>
                    <p>Série: <span>{profileData[0].serie}</span></p>
                  </div>
                  
                   <Button>Desconectar</Button>
                   </div>

                   <div className={styles.editIcon}>
                        <Link href="/editProfile" className={styles.link}> <FaRegEdit size={25} className={styles.image}/> Edit</Link>
                  </div>
                </div>
            </main>
            </div>
    )
}