"use client"

import { useParams, usePathname } from "next/navigation";
import styles from "./page.module.css";
import Image from "next/image";

import AuthenticationHeader from "@/components/AuthenticationHeader/AuthenticationHeader";
import Form from "@/components/Form/Form";

export default function Register(){
    const pathname = usePathname();
    const firstSegment = pathname.split("/")[1];
    const params = useParams();
    const type = params.type;

    const imageStyle = {
        width : "auto",
        height : "100%"
    }

    return(
        <div className={styles.divContain}>
            <section className={styles.sectionForm}>
                <AuthenticationHeader />
                <h1>{firstSegment.charAt(0).toUpperCase() + firstSegment.slice(1)}</h1>
                <Form />
            </section>
            <Image 
            src={`/assets/${type === "studant" ? "Register-Studant" : "Register-Teacher"}.png`}
            width={500}
            height={1800}
            alt={`${type === "studant" ? "Studant" : "Teacher"} image.`}
            style={imageStyle}
            />
        </div>
    )
}