import Link from "next/link";
import styles from "./ambientContainerTeacher.module.css";

import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { deleteVirtualAmbient } from "@/service/virtualAmbientTeacher/deleteVirtualAmbient";


export default function AmbientContainerTeacher({id,name, serie, matter ,keyT, onDelete}){
    async function deleteAmbient(){
        await deleteVirtualAmbient(id);
        if(onDelete) onDelete();
    }

    return(<div>
                <div className={styles.divContain}>
                    <div className={styles.informations}>
                        <h2>Nome: {name}</h2>
                        <p>Série: {serie}</p>
                        <p>Matéria: {matter}</p>
                        <p>Chave de acesso: {keyT}</p>
                    </div>

                    <div className={styles.buttonContainer}>
                        <button className={styles.button} onClick={deleteAmbient}>
                            <FaTrashAlt size={30} color="black"/>
                        </button>
                        <Link href={`updateVirtualAmbient/${id}`} className={`${styles.button} ${styles.link}`}> 
                            <FaRegEdit size={30} color="black" className={styles.icon}/> 
                        </Link>
                    </div>

                </div>
                <p className={styles.paragraph}>Para acessar mais infomações <Link href={`/virtualAmbientGraph/${id}`} className={styles.link}>Clique aqui!!</Link>
                </p>
        </div>)
}
