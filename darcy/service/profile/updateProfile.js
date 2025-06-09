import { userAgent } from "next/server";

export default async function updateProfile(id, type, userName, completeName) {
  try {
    const response = await fetch(`http://localhost:8080/api/v1/${type}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nomeCompleto: completeName,
        usuario: userName,
      })
    });

    if (!response.ok) throw new Error(`Erro no servidor! ${response.status}`);

    const data = await response.json();

    return data;

  } catch (error) {
    console.log(`Erro no servidor: ${error}`);
  }
}