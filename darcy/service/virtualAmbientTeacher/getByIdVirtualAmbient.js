export default async function getByIdVirtualAmbient(ambientId){
    try{
        const response = await fetch(`https://api-darcy-production.up.railway.app/api/v1/virtualClassrooms/${ambientId}`,{
            method : 'GET',
            headers : {
                'Content-Type': 'application/json'
            }
        });

        if(!response.ok) throw new Error(`Erro ao tentar pegar os dados!! ${response.status}`);

        const data = await response.json();
        return data;

    }catch(error){
        console.log(`Erro no servidor: ${error}`)
    }
}