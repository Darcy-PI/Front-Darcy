export default async function postVirtualAmbient(name: string, serie: string, matter: string, teacherId: string){
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/virtualClassrooms`,{
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