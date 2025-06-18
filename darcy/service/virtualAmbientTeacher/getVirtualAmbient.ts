export default async function getVirtualAmbient(teacherId : string) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/virtualClassrooms/professors/${teacherId}`, {
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