import Link from "next/link";
import styles from "./ambientContainerTeacher.module.css";

import { FaTrashAlt } from "react-icons/fa";

export default function AmbientContainerTeacher({id,name, serie, matter ,keyT}){
    return(<div className={styles.divContain}>
                <div className={styles.informations}>
                    <h2>Nome: {name}</h2>
                    <p>Série: {serie}</p>
                    <p>Matéria: {matter}</p>
                    <p>Chave de acesso: {keyT}</p>
                </div>

                <button className={styles.button}>
                    <FaTrashAlt size={30} color="black"/>
                </button>
        </div>)
}
