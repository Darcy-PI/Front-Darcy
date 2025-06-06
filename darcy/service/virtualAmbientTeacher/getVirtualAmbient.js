export default async function getVirtualAmbient() {
    try {
        const response = await fetch(`/api/v1/professors/virtualClasses`, {
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
    }
}