"use client"

import styles from "./page.module.css";
import { useEffect, useState } from "react";

import Header from "@/components/Header/Header";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import AmbientContainerStudent from "@/components/AmbientConteinerStudent/AmbientContainerStudent";
import getStudentVirtualAmbient from "@/service/virtualAmbientStudent/getStudentVirtualAmbient";

const testsVirtualAmbiet = [
  {
  id : 1,
  name : "teste1"},
  {
  id : 2,
  name : "teste2"
}];

export default function VirtualAmbientStudant() {
  const studentId = "ebb581c1-f36d-46a1-8d28-bf118df35ea9";

  const [ambients, setAmbients] = useState([]);

  async function getFetch(studentId) {
    const response = await getStudentVirtualAmbient(studentId);

      if (!response || !Array.isArray(response.data)) {
      console.error("Dados inválidos:", response);
      return;
    }

    const mappedAmbients = response.data.map((ambientsData) => ({
      id : ambientsData.id,
      name : ambientsData.nomeAmbient
    }))

    setAmbients(mappedAmbients)
  }

  useEffect(() =>{
    getFetch()
  }, [])

  return (
    <div className={styles.containDiv}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Ambiente Virtual</h1>
        <section className={styles.formSection}>
          <h2 className={styles.formTitle}>Entrar em um ambiente</h2>
          <form className={styles.form}>
              <Input label="Chave  de acesso" type="text" id="key"/>
              <Button>Entrar</Button>
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