export default async function postRegisterType(userName, password, completeName, type) {
  try {
    const response = await fetch(`https://api-darcy-production.up.railway.app/api/v1/${type}`, {
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
    
    return data;

  } catch (error) {
    console.error(`Erro ao registrar ${type}:`, error);
  }
}