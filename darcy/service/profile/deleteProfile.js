export default async function deleteProfile(type, id) {
    try {
        const response = await fetch(`https://api-darcy-production.up.railway.app/api/v1/${type}/${id}`,{
            method : 'DELETE',
            headers : {
                'Content-Type': 'application/json'
            }
        })

        if (!response.ok) throw new Error(`Erro no servidor! ${response.status}`);

        alert("Usuário deletado!!")        

    } catch (error) {
        
    }
}