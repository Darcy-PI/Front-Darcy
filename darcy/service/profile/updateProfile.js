export default async function updateProfile(id, type, userName, completeName) {
  try {
    const response = await fetch(`https://api-darcy-production.up.railway.app/api/v1/${type}/${id}`, {
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