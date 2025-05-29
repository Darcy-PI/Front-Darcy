"use client"

import styles from "./page.module.css";
import { useEffect, useState } from "react";

import Header from "@/components/Header/Header";
import AmbientContainerTeacher from "@/components/AmbientContainerTeacher/AmbientContainerTeacher";


export default function VirtualAmbientTeacher() {
    const testsVirtualAmbient = [
        {
        id : 1,
        name : "6° ano Portugues",
        serie : "6 Ano",
        materia : "Português",
        chave : 12343
        }
        ];

  const [ambients, setAmbients] = useState([]);

    useEffect(() =>{
        const mappedAmbients = testsVirtualAmbient.map(ambient => ({
        id: ambient.id,
        name: ambient.name,
        serie : ambient.serie,
        matter : ambient.materia,
        keyT : ambient.chave
        }));

        setAmbients(mappedAmbients)
    }, [])

  return (
    <div className={styles.containDiv}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Ambiente Virtual</h1>

        <section className={styles.sectionVirtualAmbient}>
            <h1 className={styles.titleAmbient}>Seus ambientes</h1>

            {ambients.map((ambientsMapValue, i) => (
                <div key={`ambients${i}`}>
                    <AmbientContainerTeacher 
                    id={ambientsMapValue.id} 
                    name={ambientsMapValue.name} 
                    serie={ambientsMapValue.serie} 
                    matter={ambientsMapValue.matter} 
                    keyT={ambientsMapValue.keyT} />

                </div>

            ))}
        </section>
      </main>
    </div>
  )
}