import { ParamValue } from "next/dist/server/request/params";

export default async function getVirtualAmbientById(idAmbient: ParamValue) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/virtualClassrooms/${idAmbient}`,{
            headers: {
            'Content-Type' : 'application/json'
            }
        })

        if(!response.ok) throw new Error(`Erro, ambiente não encontrado!! ${response.status}`);

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(`Erro no servidor!! ${error}`);
    }    
}