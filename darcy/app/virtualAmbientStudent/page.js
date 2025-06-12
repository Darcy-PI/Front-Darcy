"use client"

import styles from "./page.module.css";
import { useEffect, useState } from "react";

import Header from "@/components/Header/Header";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import AmbientContainerStudent from "@/components/AmbientConteinerStudent/AmbientContainerStudent";
import getStudentVirtualAmbient from "@/service/virtualAmbientStudent/getStudentVirtualAmbient";
import postStudentVirtualAmbient from "@/service/virtualAmbientStudent/postStudentVirtualAmbient";
import { useStorage } from "@/zustand/storage";

export default function VirtualAmbientStudant() {
  const hydrated = useStorage((state) => state.hydrated);
  const userIdStorage = useStorage((state) => state.userId)
  
  const [ambientKey, setAmbientKey] = useState("");
  const [ambients, setAmbients] = useState([]);

  async function getFetch() {
    const response = await getStudentVirtualAmbient(userIdStorage);
    
    if (!response || !Array.isArray(response.data)) {
      console.error("Dados inválidos:", response);
      return;
    }

    const mappedAmbients = response.data.map((ambientsData) => ({
      id : ambientsData.id,
      name : ambientsData.nomeAmbiente
    }))

    setAmbients(mappedAmbients)
  }

useEffect(() => {
  if (hydrated && userIdStorage) {
    console.log(hydrated)
    console.log(userIdStorage)
    getFetch();
  }
}, [hydrated, userIdStorage]);

  function handleResults(e) {
    setAmbientKey(e.target.value);
  }

  async function submitAmbients(e){
    e.preventDefault();
    await postStudentVirtualAmbient(ambientKey, userIdStorage);
    setAmbientKey("");
  }

  return (
    <div className={styles.containDiv}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Ambiente Virtual</h1>
        <section className={styles.formSection}>
          <h2 className={styles.formTitle}>Entrar em um ambiente</h2>
          <form className={styles.form} onSubmit={submitAmbients}>
              <Input label="Chave  de acesso" type="text" id="key" value={ambientKey} onChange={handleResults}/>
              <Button type="submit">Entrar</Button>
          </form>
      </section>

      <section className={styles.sectionVirtualAmbient}>
          <h1 className={styles.titleAmbient}>Seus ambientes</h1>

          {ambients.map((ambientsMapValue, i) => (
            <div key={`ambients${i}`}>
              <AmbientContainerStudent ambientName={ambientsMapValue.name} id={ambientsMapValue.id}/>
            </div>

          ))}
      </section>
      </main>
    </div>
  )
}