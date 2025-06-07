export async function deleteVirtualAmbient(ambientId) {
    try{
        const response = await fetch(`http://localhost:8080/api/v1/virtualClassrooms/${ambientId}`, {
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