"use client"

import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

import Header from "@/components/Header/Header";
import AmbientContainerTeacher from "@/components/AmbientContainerTeacher/AmbientContainerTeacher";
import getVirtualAmbient from "@/service/virtualAmbientTeacher/getVirtualAmbient";
import { useStorage } from "@/zustand/storage";

export default function VirtualAmbientTeacher() {
  
  const userId = useStorage((state) => state.userId);
  const [ambients, setAmbients] = useState([]);
    
  async function fetchAmbient() {
    const response = await getVirtualAmbient(userId);

    if (!response || !Array.isArray(response.data)) {
      console.error("Dados inválidos:", response);
      return;
    }

    const mappedAmbients = response.data.map((ambientData) => ({
      id: ambientData.id,
      name: ambientData.nomeAmbiente,
      serie: ambientData.serie,
      matter: ambientData.materia,
      keyT: ambientData.chaveAcesso,
    }));

    setAmbients(mappedAmbients);
  }

  useEffect(() => {
    fetchAmbient();
  }, []);

  return (
    <div className={styles.containDiv}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Ambiente Virtual</h1>

        <section className={styles.sectionVirtualAmbient}>
            <h1 className={styles.titleAmbient}>Seus ambientes</h1>
            {ambients.length != 0 ? ambients.map((ambientsMapValue, i) => (
                <div key={`ambients${i}`}>
                    <AmbientContainerTeacher 
                    id={ambientsMapValue.id} 
                    name={ambientsMapValue.name} 
                    serie={ambientsMapValue.serie} 
                    matter={ambientsMapValue.matter} 
                    keyT={ambientsMapValue.keyT}
                    onDelete={fetchAmbient} />
                </div>
            )) : <h1>Não existe nenhum ambiente</h1>}
        </section>
        <Link href="/createAmbientVirtual" className={styles.linkCreateAmbient}>Criar Ambiente</Link>
        <br />
      </main>
    </div>
  )
}