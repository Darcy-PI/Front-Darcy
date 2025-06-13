export default async function getAllStudentsOnVirtualClassroom(ambientId){
    try{
        const baseUrl = 'https://api-darcy-production.up.railway.app/'
        const response = await fetch(`${baseUrl}/api/v1/studentData/virtualClassroom/${ambientId}`);

        if (!response.ok) throw new Error('Erro, ambiente não encontrado!!');

        const data = await response.json();
        return data;
    } catch(error){
        console.log(`Erro no servidor!! ${error}`);
    }
}