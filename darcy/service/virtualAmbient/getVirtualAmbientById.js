export default async function getVirtualAmbientById(idAmbient) {
    try {
        const response = await fetch(`https://api-darcy-production.up.railway.app/api/v1/virtualClassrooms/${idAmbient}`,{
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