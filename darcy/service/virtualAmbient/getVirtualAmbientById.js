export default async function getVirtualAmbientById(idAmbient) {
    try {
        const response = await fetch(`http://localhost:8080/api/v1/virtualClassrooms/${idAmbient}`,{
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