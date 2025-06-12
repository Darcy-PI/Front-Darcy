export default async function deleteProfile(type, id) {
    try {
        const response = await fetch(`http://localhost:8080/api/v1/${type}/${id}`,{
            method : 'DELETE',
            headers : {
                'Content-Type': 'application/json'
            }
        })

        if (!response.ok) throw new Error(`Erro no servidor! ${response.status}`);

        

    } catch (error) {
        
    }
}