import { useStorage } from "@/zustand/storage";

export default async function postRegisterType(userName, password, completeName, type) {
  try {
    const response = await fetch(`http://localhost:8080/api/v1/register/${type === "students" ? "student" : "professors"}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        usuario: userName,
        senha: password,
        nomeCompleto: completeName,
      })
    });

    if (!response.ok) throw new Error('Erro no registro!');

    const data = await response.json();
    console.log(`Registro de ${type} bem-sucedido:`, data);
    
    const setUserId = useStorage((state) => state.setUserId);
    const setUserType = useStorage((state) => state.setUserType);

    setUserId(data.data.id);
    setUserType(type);

    return data;

  } catch (error) {
    console.error(`Erro ao registrar ${type}:`, error);
  }
}