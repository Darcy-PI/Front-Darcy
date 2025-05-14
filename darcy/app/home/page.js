
import Image from "next/image";
import styles from "./page.module.css";

import Header from "@/components/Header/Header";
import Bloons from "@/components/Bloons/Bloons";

export default function HomePage(){
    const imageResolution ={
        height : '100vh'
    }

    return(
        <div className={styles.containDiv}>
            <Header />
            <main className={styles.main}>
                <section className={styles.wellcomeSection}>
                    {/*  
                    <h1 className={styles.userName}>   Bem vindo(a) {localStorage.getItem("tipo") === "Teacher" ? "Professor" : ""} {localStorage.getItem("Nome")}</h1>
                    */}
                    <h1 className={styles.userName}>Bem vinda(o) Maria!!</h1>

                    <section>
                        <Bloons />
                        <Bloons />
                    </section>
                </section>

                    <Image 
                    // src={`${localStorage.getItem('tipo') === "studant" ? "/assets/Home-Studant.svg" : "/assets/Home-Teacher.svg"}`}  
                    src="/assets/Home-Teacher.png"
                    width={500} 
                    height={1800} 
                    style={imageResolution}
                    alt="Profile Image"/>

            </main>
        </div>
    )
}