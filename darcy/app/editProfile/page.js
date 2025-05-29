import Input from "@/components/Input/Input";
import styles from "./page.module.css";

import Header2 from "@/components/Header2/Header2";
import Button from "@/components/Button/Button";

export default function EditProfile(){
    return(
        <div className={styles.divContain}>
            <Header2 url="profile" name="Editar Perfil"/>
            <main className={styles.main}>
                <form className={styles.form}>
                    <section className={styles.sectionInput}>
                        <Input id="userName" label="Nome:" type="text" />
                        <Input id="userEmail" label="Email:" type="email" />
                    </section>

                    <Button type="submit">Enviar</Button>
                </form>
            </main>
        </div>
    )
}