export default async function postVirtualAmbient(name, serie, matter){
    try {
        const response = await fetch('http://localhost:8080/api/v1/virtualClassrooms',{
            method : 'POST',
            headers : {
                 'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                    nomeAmbiente: name,
                    serie : serie,
                    materia : matter
                })
        })

        if(!response.ok){
            throw new Error(`Erro no servidor!! ${response.status}`);
        }

        alert("Sala de aula criada!!");
    } catch (error) {
        console.log(`Erro no servidor ${error}`)
    }
}