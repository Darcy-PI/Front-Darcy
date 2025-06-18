"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

import AmbientContainerTeacher from "@/components/AmbientContainerTeacher/AmbientContainerTeacher";
import Header from "@/components/Header/Header";
import getVirtualAmbient from "@/service/virtualAmbientTeacher/getVirtualAmbient";
import { useStorage } from "@/zustand/storage";

type AmbientsType = {
  id: string;
  name: string;
  serie: string;
  matter: string;
  keyT: string;
};

type AmbientsTypeResponse = {
  id: string;
  nomeAmbiente: string;
  serie: string;
  materia: string;
  chaveAcesso: string;
};

export default function VirtualAmbientTeacher() {
  const hydrated = useStorage((state) => state.hydrated);
  const userId = useStorage((state) => state.userId);
  const [ambients, setAmbients] = useState<AmbientsType[]>([]);

  async function fetchAmbient() {
    const response = await getVirtualAmbient(userId);

    const mappedAmbients = response.data.map(
      (ambientData: AmbientsTypeResponse) => ({
        id: ambientData.id,
        name: ambientData.nomeAmbiente,
        serie: ambientData.serie,
        matter: ambientData.materia,
        keyT: ambientData.chaveAcesso,
      })
    );

    setAmbients(mappedAmbients);
  }

  useEffect(() => {
    fetchAmbient();
  }, [hydrated, userId]);

  return (
    <div className={styles.containDiv}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Ambiente Virtual</h1>

        <section className={styles.sectionVirtualAmbient}>
          <h1 className={styles.titleAmbient}>Seus ambientes</h1>
          {ambients.length != 0 ? (
            ambients.map((ambientsMapValue, i) => (
              <div key={`ambients${i}`}>
                <AmbientContainerTeacher
                  id={ambientsMapValue.id}
                  name={ambientsMapValue.name}
                  serie={ambientsMapValue.serie}
                  matter={ambientsMapValue.matter}
                  keyT={ambientsMapValue.keyT}
                  onDelete={fetchAmbient}
                />
              </div>
            ))
          ) : (
            <h1 className={styles.notExist}>Não existe nenhum ambiente</h1>
          )}
        </section>
        <Link href="/createAmbientVirtual" className={styles.linkCreateAmbient}>
          Criar Ambiente
        </Link>
        <br />
      </main>
    </div>
  );
}
