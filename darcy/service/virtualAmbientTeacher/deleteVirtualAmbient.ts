import { ParamValue } from "next/dist/server/request/params";

export async function deleteVirtualAmbient(ambientId: ParamValue) {
    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/virtualClassrooms/${ambientId}`, {
            method : 'DELETE',
        })

        if(!response.ok){
            throw new Error(`Erro no servidor ${response.status}`);
        }

        console.log(`Ambiente deletado`)
    }catch(error){
        alert(`Erro!! Ambiente não deletado ${error}`);
    }
}