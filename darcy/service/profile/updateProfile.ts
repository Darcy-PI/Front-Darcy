export default async function updateProfile(userId: string, type: string, userName: string, completeName: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/${type}/${userId}`, {
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