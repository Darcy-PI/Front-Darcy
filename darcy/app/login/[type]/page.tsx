"use client"

import { useParams, usePathname } from "next/navigation";
import styles from "./page.module.css";

import AuthenticationHeader from "@/components/AuthenticationHeader/AuthenticationHeader";
import Form from "@/components/Form/Form";

export default function Login(){
    const pathname = usePathname();
    const firstSegment = pathname.split("/")[1];
    const params = useParams();
    const type = params.type;

    
    const imgStyle = {
        width : "auto",
        height : "100%"
    }

    return(
        <div className={styles.divContain}>
            <section className={styles.sectionForm}>
                <AuthenticationHeader/>
                <h1 className={styles.header}>{firstSegment.charAt(0).toUpperCase() + firstSegment.slice(1)}</h1>
                <Form />
            </section>
            <img 
            src={`/assets/${type === "student" ? "Login-Student" : "Login-Teacher"}.png`}
            width={500}
            height={1800}
            alt={`${type === "student" ? "Student" : "Teacher"}`}
            style={imgStyle}
            className={styles.image}
            />
        </div>
    )
}