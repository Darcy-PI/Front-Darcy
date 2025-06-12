"use client"
import { useEffect, useState } from "react";
import styles from "./header.module.css"
import NavBar from "./NavBar/NavBar"

import { MdOutlineMenu } from "react-icons/md";
import { useStorage } from "@/zustand/storage";
import getProfile from "@/service/profile/getProfile";

export default function Header(){
    const [display, setDisplay] = useState(false);
    const hydrated = useStorage((state) => state.hydrated);
    const userId = useStorage((state) => state.userId);
    const userType = useStorage((state) => state.userType);

    function displayNavBar(){
        display ? setDisplay(false) : setDisplay(true);
    }

    const [userData, setUserData] = useState(null);
    
    const imgResolution ={
        width : 'auto',
        height : '100vh'
    }

    async function fetchUser() {
        try {
            const response = await getProfile(userId, userType);
            const data = response.data.usuario 
            setUserData(data);

        } catch (error) {
            
        }
    }

    useEffect(() => {
        if (hydrated && userId) {
            fetchUser();
        }
    }, [hydrated, userId]);

    return(
        <header className={styles.header}>
            <div className={styles.titleMenu}>
                <h1 className={styles.userName}>{userData}</h1>
                <MdOutlineMenu className={styles.hambguerMenu} size={35} onClick={displayNavBar} color="white"/>
            </div>
            <NavBar className={`${display ? styles.active : styles.nav}`}/>
        </header>
    )
}