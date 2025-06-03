import styles from "./page.module.css";

import Button from "@/components/Button/Button";
import Header2 from "@/components/Header2/Header2";
import Input from "@/components/Input/Input";

export default function CreateAmbientVirtual(){
    const optionsSeries = [
        '6°A', '6°B', '6°C',
        '7°A', '7°B', '7°C',
        '8°A', '8°B', '8°C',
        '9°A', '9°B', '9°C'
    ];

    return(<div>
        <Header2 url="virtualAmbientTeacher" ambientName="Criar um ambiente"/>
        <main className={styles.main}>
            <form className={styles.form}>
                <h1>Criar Ambiente Virtual</h1>
                <Input id="name" label="Nome:" type="text"/>
                <Input id="subject" label="Matéria:" type="text"/>
                <label className={styles.labelOptions}>
                    Série:
                    <select className={styles.select}>
                        {optionsSeries.map((options, i) => (
                            <option value={options} key={`options${i}`}>{options}</option>
                        ))}
                    </select>
                </label>
                <Button>Criar</Button>
            </form>
        </main>
    </div>)
}