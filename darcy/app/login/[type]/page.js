"use client"

import { useParams } from "next/navigation";
import styles from "./page.module.css";
import Image from "next/image";

import AuthenticationHeader from "@/components/AuthenticationHeader/AuthenticationHeader";

export default function Login(){
    const params = useParams();
    const type = params.type;

    const imageStyle = {
        width : "auto",
        height : "100%"
    }

    return(
        <div className={styles.divContain}>
            <section>
                <AuthenticationHeader />
            </section>
            <Image 
            src={`/assets/${type === "studant" ? "Login-Studant" : "Login-Teacher"}.png`}
            width={500}
            height={1800}
            alt={`${type === "studant" ? "Studant" : "Teacher"} image`}
            style={imageStyle}
            />
        </div>
    )
}