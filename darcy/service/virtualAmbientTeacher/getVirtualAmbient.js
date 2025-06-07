export default async function getVirtualAmbient(teacherId) {
    try {
        const response = await fetch(`http://localhost:8080/api/v1/virtualClassrooms/professors/${teacherId}`, {
            method : 'GET',
            headers : {
                'Content-Type': 'application/json'
            }
        })

        if(!response.ok){
            throw new Error(`Erro no servidor!! ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(`Erro ao acessar o servidor: ${error}`);
        return [];
    }
}