"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";

import Header from "@/components/Header/Header"
import { FaRegEdit } from "react-icons/fa";
import Button from "@/components/Button/Button";
import getProfile from "@/service/profile/getProfile";
import { useStorage } from "@/zustand/storage";

export default function Profile(){
  const userId = useStorage((state) => state.userId);
  const userType = useStorage((state) => state.userType);

    const [profileData, setProfileData] = useState([]);

    async function fetchProfile() {
      const response = await getProfile(userId, userType);

      const userData = response.data.map((data) => ({
        userName: data.usuario,
        completeName: data.nomeCompleto,
        id: data.id,
      }))

      setProfileData(userData)
    }

  useEffect(() => {
    fetchProfile()
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
                    <p>Nome: <span>{profileData.name}</span></p>
                    <p>Nome Completo: <span>{profileData.completeName}</span></p>
                    <p>ID:<span> {profileData.id}</span></p>
                    <p>Série: <span>{profileData.serie}</span></p>
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