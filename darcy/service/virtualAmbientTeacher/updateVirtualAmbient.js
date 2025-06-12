export default async function updateVirtualAmbient(ambientId, name, serie, matter){
    try {
        const response = await fetch(`http://localhost:8080/api/v1/virtualClassrooms/${ambientId}`,{
            method : 'PUT',
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                materia : matter,
                serie : serie,
                nomeAmbiente : name,
            })
        })
        console.log(await response.json())
        if(!response.ok){
            throw new Error(`Erro no servidor!! ${response.status}`);
        }

        alert("Sala de aula atualizada!!");
    } catch (error) {
        console.log(`Erro no servidor ${error}`)
    }
}