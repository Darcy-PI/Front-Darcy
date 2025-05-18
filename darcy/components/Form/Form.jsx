"use client"
import { usePathname, useParams } from "next/navigation"
import styles from "./form.module.css";
import Link from "next/link";

import Input from "../Input/Input"
import Button from "../Button/Button"

export default function Form(){
    const params = useParams();
    const {type} = params;
    const pathname = usePathname();
    const url = pathname.split("/")[1];

    return(
        <form className={styles.form}>
            <Input label="Nome do usuário:" type="text" id="username"/>
            {url === "login" ? null : <Input label="Email:" type="email" id="email"/>}
            <div>
                <Input label="Senha:" type="password" id="password"/>
                <p className={styles.paragraph}>Esqueceu a senha? <Link href="/forgotPassword" className={styles.link}>Clique Aqui!!</Link></p>
            </div>

            <Button type="button">Confimar</Button>
            <p className={styles.paragraph}>{url === "login" ? "Não tem uma conta? " : "Tem uma conta? "}
            <Link href={`${url === "login" ? "/register" : "/login"}${type === "studant" ? "/studant" : "/teacher"}`} className={styles.link}>Clique aqui!!</Link></p>
        </form>
    )
}