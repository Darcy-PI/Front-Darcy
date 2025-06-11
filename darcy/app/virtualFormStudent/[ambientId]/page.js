"use client"

import styles from "./page.module.css";

import { useParams } from "next/navigation";

import Header2 from "@/components/Header2/Header2";
import { RadioInput, RangeInput } from "@/components/AmbientsInputs/page"; 
import Button from "@/components/Button/Button";
import { useEffect, useState } from "react";
import postStudentVirtualAmbientForm from "@/service/virtualAmbientStudent/postStudentVirtualAmbientForm";
import { useStorage } from "@/zustand/storage";
import getVirtualAmbientById from "@/service/virtualAmbient/getVirtualAmbientById";

const optionsDifficulty = ['ATENCAO', 'CONTEUDO', 'DIDATICA', 'HORARIO'];
const optionsReinforcementNeed = ['SIM','NAO','TALVEZ'];
const optionsTimeDedicatedStudy = [1, 2, 3, 4, 5];

export default function VirtualFormStudent(){
    const userId = useStorage((state) => state.userId);
    const {ambientId} = useParams();

    const [ambientData, setAmbientData] = useState("");
    const [userResponse, setUserResponse] = useState({
        degreeUnderstanding : 0,
        degreeInterest : 0,
        levelDifficulty : 0,
        degreeEmocional : 0,
        degreeSatisfaction : 0,
        topicDifficulty : 'ATENCAO',
        reinforcementNeed : 'SIM',
        timeDedicatedStudy : 1,
    });

    async function getAmbientData(){
        const response = await getVirtualAmbientById(ambientId);

        setAmbientData(response.data.nomeAmbiente);
    } 

    useEffect(() => {
        getAmbientData();
    }, []);

    function getStudentResponse(e){
      const {id, value} = e.target;
      setUserResponse((prev) => ({
          ...prev,
          [id]: value,
      }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await postStudentVirtualAmbientForm(userId, ambientId, userResponse);

    }

    return(<div className={styles.divContain}>
        <Header2 ambientName={ambientData.length == 0 ? "Carregando..." : ambientData} url="virtualAmbientStudent"/>
        <main className={styles.main}>
            <form className={styles.virtualFormStudent} onSubmit={handleSubmit}>
                <RangeInput id="degreeUnderstanding" label="Indique o seu grau de compreensão da disciplina:" onChange={getStudentResponse}/>
                <RangeInput id="degreeInterest" label="Indique o seu grau de interesse da disciplina:" onChange={getStudentResponse}/>
                <RangeInput id="levelDifficulty" label="Indique o seu grau de confiança sobre a disciplina:" onChange={getStudentResponse}/>
                <RangeInput id="degreeEmocional" label="Indique o seu estado emocional durante a aula:" onChange={getStudentResponse}/>
                <RangeInput id="degreeSatisfaction" label="Indique o sua satisfação sobre a aula:" onChange={getStudentResponse}/>
                <RadioInput id="topicDifficulty" label="Tópico de dificuldade" options={optionsDifficulty} name="topicDifficulty" onChange={getStudentResponse}/>
                <RadioInput id="reinforcementNeed" label="Necessidade de Reforço" options={optionsReinforcementNeed} name="reinforcementNeed" onChange={getStudentResponse}/>
                <RadioInput id="timeDedicatedStudy" label="Tempo dedicado para estudo(mínimo):" options={optionsTimeDedicatedStudy} name="timeDedicatedStudy" onChange={getStudentResponse}/>
                <Button type="submit" className={styles.button}>Enviar</Button>
            </form>
        </main>
    </div>)
}