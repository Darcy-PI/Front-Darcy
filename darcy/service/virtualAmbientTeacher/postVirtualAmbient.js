export default async function postVirtualAmbient(name, serie, matter, teacherId){
    try {
        const response = await fetch('https://api-darcy-production.up.railway.app/api/v1/virtualClassrooms',{
            method : 'POST',
            headers : {
                 'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                    professorId : teacherId,
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