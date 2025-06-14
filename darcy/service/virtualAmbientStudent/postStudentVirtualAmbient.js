export default async function postStudentVirtualAmbient(classRoomId, studentId_) {
    const params = new URLSearchParams({
        accessKey : classRoomId,
    });

    try {
        const response = await fetch(`https://api-darcy-production.up.railway.app/api/v1/virtualClassrooms/students/${studentId_}?${params.toString()}`,{
            method : 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                id : studentId_,
            })
        })        

        if(!response.ok) throw new Error(`Erro, ambiente virtual não encontrado!!`);

        alert("Sala de aula adicionada");
    } catch (error) {
        console.log(`Erro!! ${error}`);
    }

}