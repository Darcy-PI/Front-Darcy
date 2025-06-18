import { ParamValue } from "next/dist/server/request/params";

export default async function updateVirtualAmbient(ambientId: ParamValue, name: string, serie: string, matter: string){
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/virtualClassrooms/${ambientId}`,{
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