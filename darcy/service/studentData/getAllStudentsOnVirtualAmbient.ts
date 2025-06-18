import { ParamValue } from "next/dist/server/request/params";

export default async function getAllStudentsOnVirtualClassroom(ambientId: ParamValue){
    try{
        const baseUrl = process.env.NEXT_PUBLIC_API_URL
        const response = await fetch(`${baseUrl}/api/v1/virtualClassrooms/${ambientId}/students`);

        if (!response.ok) throw new Error('Ambiente não encontrado');

        const data = await response.json();
        return data;
    }catch(error){
        console.log(`Erro no servidor !! ${error}`);
    }
}