"use client";

import Input from "@/components/Input/Input";
import { ChangeEvent, useEffect, useState } from "react";
import styles from "./page.module.css";

import Button from "@/components/Button/Button";
import Header2 from "@/components/Header2/Header2";
import getProfile from "@/service/profile/getProfile";
import updateProfile from "@/service/profile/updateProfile";
import { useStorage } from "@/zustand/storage";

export default function EditProfile() {
  const userId = useStorage((state) => state.userId);
  const userType = useStorage((state) => state.userType);

  const [profileData, setProfileData] = useState({
    userName: "",
    completeName: "",
    id: null,
  });

  async function fetchProfile() {
    const response = await getProfile(userId, userType);

    const userData = {
      userName: response.data.usuario,
      completeName: response.data.nomeCompleto,
      id: response.data.id,
    };
    setProfileData(userData);
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  function getNewValues(e: ChangeEvent<HTMLInputElement>) {
    const { id, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [id]: value,
    }));
  }

  async function updateUserData(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    await updateProfile(
      profileData.id,
      userType,
      profileData.userName,
      profileData.completeName
    );
    console.log(profileData);
    alert("Usuário atualizado");
  }

  return (
    <div className={styles.divContain}>
      <Header2 url="profile" ambientName="Editar Perfil" />
      <main className={styles.main}>
        <form className={styles.form} onSubmit={updateUserData}>
          <section className={styles.sectionsInput}>
            <Input
              id="userName"
              label="Nome:"
              type="text"
              value={profileData.userName}
              onChange={getNewValues}
            />
            <Input
              id="completeName"
              label="Nome Completo:"
              type="text"
              value={profileData.completeName}
              onChange={getNewValues}
            />
          </section>

          <Button type="submit">Enviar</Button>
        </form>
      </main>
    </div>
  );
}
