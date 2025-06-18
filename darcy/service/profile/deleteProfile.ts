export default async function deleteProfile(type: string, userId: string) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/${type}/${userId}`,{
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