"use client"

import styles from "./page.module.css";

import Header from "@/components/Header/Header";
import Bloons from "@/components/Bloons/Bloons";
import { useStorage } from "@/zustand/storage";
import getProfile from "@/service/profile/getProfile";
import { useEffect, useState } from "react";

export default function HomePage(){
    const userId = useStorage((state) => state.userId);
    const userType = useStorage((state) => state.userType);

    const [userData, setUserData] = useState("");
    
    const imgResolution ={
        width : 'auto',
        height : '100vh'
    }

    async function fetchUser() {
        try {
            const response = await getProfile(userType, userId);  
            
            setUserData(response.data.usuario);

        } catch (error) {
            
        }
    }

    useEffect(() => {
        fetchUser();
    }, [])

    return(
        <div className={styles.containDiv}>
            <Header />
            <main className={styles.main}>
                <section className={styles.wellcomeSection}>
                    {userType === "students" ? <h1 className={styles.userName}>Bem vinda(o) {userData}!!</h1> : <h1 className={styles.userName}>Olá professor(o), {userData}!!</h1>}

                    <section>
                        <Bloons text="“A educação é a arma mais poderosa que você pode usar para mudar o mundo”." author="Nelson Mandela"/>
                        <Bloons text="“A educação é a arma mais poderosa que você pode usar para mudar o mundo”" author="Claire Fagin"/>
                    </section>

                </section>
                    <img 
                    src={`${userType === "students" ? "/assets/Home-Student.png" : "/assets/Home-Teacher.png"}`}  
                    width={500} 
                    height={1800} 
                    style={imgResolution}
                    alt="Profile img"
                    className={styles.image}/>
            </main>
        </div>
    )
}