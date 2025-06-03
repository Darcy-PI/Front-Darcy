"use client"

import styles from "./page.module.css";

import { useParams } from "next/navigation";

import Header2 from "@/components/Header2/Header2";
import { RadioInput, RangeInput } from "@/components/AmbientsInputs/page"; 
import Button from "@/components/Button/Button";

const optionsDifficulty = ['ATENCAO', 'CONTEUDO', 'DIDATICA', 'HORARIO'];
const optionsReinforcementNeed = ['SIM','NAO','TALVEZ'];

export default function VirtualFormStudant(){
    const {id} = useParams();

    return(<div className={styles.divContain}>
        <Header2 ambientName={id} url="virtualAmbientStudant"/>
        <main className={styles.main}>
            <form className={styles.form}>
                <RangeInput id="degreeUnderstanding" label="Indique o seu grau de compreensão da disciplina:" />
                <RangeInput id="degreeInterest" label="Indique o seu grau de interesse da disciplina:" />
                <RangeInput id="levelDifficulty" label="Indique o seu grau de confiança sobre a disciplina:" />
                <RangeInput id="degreeEmocional" label="Indique o seu estado emocional durante a aula:" />
                <RangeInput id="degreeSatisfaction" label="Indique o sua satisfação sobre a aula:" />
                <RadioInput label="Tópico de dificuldade" options={optionsDifficulty} name="topicDifficulty"/>
                <RadioInput label="Necessidade de Reforço" options={optionsReinforcementNeed} name="reinforcementNeed"/>
                <Button className={styles.button}>Enviar</Button>
            </form>
        </main>
    </div>)
}