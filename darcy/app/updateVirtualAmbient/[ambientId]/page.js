"use client"

import styles from "./page.module.css";

import Button from "@/components/Button/Button";
import Header2 from "@/components/Header2/Header2";
import Input from "@/components/Input/Input";
import getByIdVirtualAmbient from "@/service/virtualAmbientTeacher/getByIdVirtualAmbient";
import updateVirtualAmbient from "@/service/virtualAmbientTeacher/updateVirtualAmbient";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function UpdateVirtualAmbient(){
  const {ambientId} = useParams();
  const [results, setResults] = useState({
      name : "",
      subject : "",
      serie : "",
  })

  const optionsSeries = [
      '6°A', '6°B', '6°C',
      '7°A', '7°B', '7°C',
      '8°A', '8°B', '8°C',
      '9°A', '9°B', '9°C'
  ];

  async function fetchAmbient() {
    const response = await getByIdVirtualAmbient(ambientId);
    
    console.log(response)
        if (!response || !response.data) {
      console.error("Erro: resposta inválida", response);
      return;
    }
    setResults({
      name: response.data.nomeAmbiente,
      serie: response.data.serie,
      subject: response.data.materia,
    });
  }

  function handleResults(e) {
      const { id, value } = e.target;
      setResults((prev) => ({
          ...prev,
          [id]: value,
      }));
  }
    
  async function handleSubmit(e) {
    e.preventDefault();
    try {
        await updateVirtualAmbient(ambientId, results.name, results.serie, results.subject);

        setResults({
            name : "",
            subject : "",
            serie : "",
        })

    } catch (error) {
        console.log(`Erro!! ${error}`)
    }   

  }

  useEffect(() => {
    fetchAmbient();
  }, [ambientId]);

    return(<div>
        <Header2 url="virtualAmbientTeacher" ambientName="Atualizar ambient"/>
        <main className={styles.main}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1>Criar Ambiente Virtual</h1>
                <Input id="name" label="Nome:" type="text" value={results.name} onChange={handleResults}/>
                <Input id="subject" label="Matéria:" type="text" value={results.subject} onChange={handleResults}/>
                <label className={styles.labelOptions}>
                  Série:
                  <select
                    className={styles.select}
                    id="serie"
                    value={results.serie}
                    onChange={handleResults}
                    required
                  >
                  <option value="">Selecione uma série</option>
                  {optionsSeries.map((option, i) => (
                    <option value={option} key={`options${i}`}>
                      {option}
                    </option>
                  ))}
            </select>
          </label>
                <Button type="submit">Atualizar</Button>
            </form>
        </main>
    </div>)
}