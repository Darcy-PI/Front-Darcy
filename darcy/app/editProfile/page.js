"use client"

import Input from "@/components/Input/Input";
import styles from "./page.module.css";
import { useState, useEffect } from "react";


import Header2 from "@/components/Header2/Header2";
import Button from "@/components/Button/Button";
import getProfile from "@/service/profile/getProfile";
import { useStorage } from "@/zustand/storage";
import updateProfile from "@/service/profile/updateProfile";

export default function EditProfile(){
    const userId = useStorage((state) => state.userId);
    const userType = useStorage((state) => state.userType);

    const [profileData, setProfileData] = useState({
        userName : "",
        completeName : "",
        id : null,
    });

    async function fetchProfile() {
        const response = await getProfile(userId, userType);
        
        const userData = {
        userName: response.data.usuario,
        completeName: response.data.nomeCompleto,
        id: response.data.id,
        }
        setProfileData(userData)
    }
    
    useEffect(() => {
        fetchProfile()
    }, []);

    function getNewValues(e){
      const { id, value } = e.target;
      setProfileData((prev) => ({
          ...prev,
          [id]: value,
      }));
    }

    async function updateUserData(e) {
        e.preventDefault();
        await updateProfile(profileData.id, userType, profileData.userName, profileData.completeName);
        console.log(profileData)
    }

    return(
        <div className={styles.divContain}>
            <Header2 url="profile" name="Editar Perfil"/>
            <main className={styles.main}>
                <form className={styles.form} onSubmit={updateUserData}>
                    <section className={styles.sectionsInput}>
                        <Input id="userName" label="Nome:" type="text" value={profileData.userName} onChange={getNewValues}/>
                        <Input id="completeName" label="Nome Completo:" type="text" value={profileData.completeName
                        } onChange={getNewValues}/>
                    </section>

                    <Button type="submit">Enviar</Button>
                </form>
            </main>
        </div>
    )
}