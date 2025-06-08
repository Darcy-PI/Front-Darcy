export default async function getProfile(id, type) {
  try {
    const response = await fetch(`http://localhost:8080/api/v1/${type}/${id}`,{
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json'
        }
    })

    if(!response.ok) throw new Error(`Erro no servido! ${response.status}`);

    const data = await response.json();

    return data;

    
  } catch (error) {
    console.log(`Erro no servidor${error}`);
  }
}