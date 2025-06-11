import styles from "./page.module.css";

import Header from "@/components/Header/Header";
import Bloons from "@/components/Bloons/Bloons";

export default function HomePage(){
    
    const imgResolution ={
        width : 'auto',
        height : '100vh'
    }

    return(
        <div className={styles.containDiv}>
            <Header />
            <main className={styles.main}>
                <section className={styles.wellcomeSection}>
                    <h1 className={styles.userName}>Bem vinda(o) Maria!!</h1>

                    <section>
                        <Bloons />
                        <Bloons />
                    </section>

                </section>
                    <img 
                    // src={`${localStorage.getItem('tipo') === "student" ? "/assets/Home-Student.svg" : "/assets/Home-Teacher.svg"}`}  
                    src="/assets/Home-Student.png"
                    width={500} 
                    height={1800} 
                    style={imgResolution}
                    alt="Profile img"
                    className={styles.image}/>
            </main>
        </div>
    )
}