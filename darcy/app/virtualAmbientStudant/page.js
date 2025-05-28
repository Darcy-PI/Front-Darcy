"use client"

import styles from "./page.module.css";
import { useEffect, useState } from "react";

import Header from "@/components/Header/Header";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import AmbientContainer from "@/components/AmbientContainer/AmbientContainer";

const testsVirtualAmbiet = [
  {
  id : 1,
  name : "teste1"},
  {
  id : 2,
  name : "teste2"
}];

export default function HomePage() {
  const [ambients, setAmbients] = useState([]);

  useEffect(() =>{
    const mappedAmbients = testsVirtualAmbiet.map(ambient => ({
    id: ambient.id,
    name: ambient.name
    }));

    setAmbients(mappedAmbients)
  }, [])

  return (
    <div className={styles.containDiv}>
      <Header />

      <main className={styles.main}>
        <h1>Ambiente Virtual</h1>
        <section>
          <h2>Entrar em um ambiente</h2>
          <form>
              <Input label="Chave  de acesso" type="text" id="key"/>
              <Button>Entrar</Button>
          </form>
      </section>

      <section>
          {ambients.map((ambientsMapValue, i) => (
            <div key={`ambients${i}`}>
              <AmbientContainer ambientName={ambientsMapValue.name} id={ambientsMapValue.id}/>
            </div>

          ))}
      </section>
      </main>
    </div>
  )
}