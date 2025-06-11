export default async function postLoginType(userName,password,type) {
  try {
    const response = await fetch(`http://localhost:8080/api/v1/auth/${type}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        usuario: userName,
        senha: password,
      })
    });

    if (!response.ok) throw new Error('Erro no login!');
   

    const data = await response.json();
    console.log(`Login do ${type} bem-sucedido:"`, data);
    return data; 

  } catch (error) {
    console.error(`Erro ao fazer login do ${type}:`, error);
  }
}

      