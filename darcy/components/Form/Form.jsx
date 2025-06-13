"use client";

import { useState } from "react";
import { usePathname, useParams, useRouter } from "next/navigation";
import styles from "./form.module.css";
import Link from "next/link";

import Input from "../Input/Input";
import Button from "../Button/Button";

import postLoginType from "@/service/loginType/postLoginType";
import postRegisterType from "@/service/registerType/postRegisterType";
import { useStorage } from "@/zustand/storage";

export default function Form() {
    const params = useParams();
    const { type } = params;
    const pathname = usePathname();
    const url = pathname.split("/")[1];
    const router = useRouter();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");

    const setUserId = useStorage((state) => state.setUserId);
    const setUserType = useStorage((state) => state.setUserType);

    async function handleLogin(e) {
        e.preventDefault();
        try {
            let response;

            if (url === "login") {
                const typeEndPoint = type === "student" ? "students" : "professors";
                response = await postLoginType(userName, password, type);

                if (response.id) {
                    setUserId(response.id);
                    setUserType(typeEndPoint);
                    router.push(`/home`);
                } else {
                    alert("Erro no login. Verifique seus dados.");
                }
            } else {
                const registerType = type === "student" ? "students" : "professors";
                response = await postRegisterType(userName, password, fullName, registerType);
                if (response.data.id) {
                    setUserId(response.data.id);
                    setUserType(registerType);
                    router.push(`/login/${type}`);
                } else {
                    alert("Erro no registro. Verifique os dados.");
                }
            }
        } catch (error) {
            console.error("Erro ao tentar fazer login ou registro:", error);
            alert("Falha na operação. Tente novamente.");
        }
    }

    return (
        <form className={styles.form} onSubmit={handleLogin}>
            <Input
                label="Nome do usuário:"
                type="text"
                id="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            {url === "login" ? null : (
                <Input
                    label="Nome Completo"
                    type="text"
                    id="completeName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
            )}
            <div>
                <Input
                    label="Senha:"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <Button type="submit">Confirmar</Button>

            <p className={styles.paragraph}>
                {url === "login" ? "Não tem uma conta? " : "Tem uma conta? "}
                <Link
                    href={`${url === "login" ? "/register" : "/login"}${type === "student" ? "/student" : "/professor"}`}
                    className={styles.link}
                >
                    Clique aqui!!
                </Link>
            </p>
        </form>
    );
}
