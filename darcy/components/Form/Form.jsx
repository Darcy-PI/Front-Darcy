"use client"

import { useState } from "react";
import { usePathname, useParams } from "next/navigation"
import styles from "./form.module.css";
import Link from "next/link";

import Input from "../Input/Input"
import Button from "../Button/Button"


import postLoginType from "@/service/loginType/postLoginType";
import postRegisterType from "@/service/register/postRegisterType";


export default function Form() {
    const params = useParams();
    const {type} = params;
    const pathname = usePathname();
    const url = pathname.split("/")[1];

    
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
 
   
     async function handleLogin(e) {
        e.preventDefault(); 
        try{
            let response;
            
            if (url === "login") {
                if (type === "student") {
                    response = await postLoginType(userName, password);
                } else {
                    response = await postLoginType(userName, password);
                }
            } else {
                const registerType = type === "student" ? "students" : "professors";
                response = await postRegisterType(userName, password, fullName, registerType);
            }
        } catch (error) {  
            console.error("Erro ao tentar fazer login:", error);
            alert("Falha no login. Tente novamente.");
            
        }
    }

    
    return(                          
        <form className={styles.form} onSubmit={handleLogin}>
            <Input label="Nome do usuário:" type="text" id="username" value={userName} onChange={e => setUserName(e.target.value)} />
            {url === "login" ? null : <Input label="Nome Completo" type="text" id="completeName"  value={fullName} onChange={e => setFullName(e.target.value)} />}
            <div>
                <Input label="password:" type="password" id="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </div>

            <Button type="submit" >Confirmar</Button>
            <p className={styles.paragraph}>{url === "login" ? "Não tem uma conta? " : "Tem uma conta? "}
            <Link href={`${url === "login" ? "/register" : "/login"}${type === "student" ? "/student" : "/teacher"}`} className={styles.link}>Clique aqui!!</Link></p>
        </form>
    )
}