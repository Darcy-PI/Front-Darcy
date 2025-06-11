export default async function getAllStudentdataById(ambientId){
    try{
        const baseUrl = 'http://localhost:8081'
        const response = await fetch(`${baseUrl}/api/v1/studentData/virtualClassroom/${ambientId}`);

        if (!response.ok) throw new Error('Erro, ambiente não encontrado!!');

        const data = await response.json();

        return data;
    } catch(error){
        console.log(`Erro no servidor!! ${error}`);
    }
}