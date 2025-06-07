export default async function postStudentVirtualAmbient(classRoomId, studentId_, keyT) {
    try {
        const response = fetch(`/api/v1/virtualClassrooms/${classRoomId}/students/${studentId}`,{
            method : 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                id : classRoomId,
                studentId : studentId_,
                accessKey : keyT
            })
        })        

        if(!response.ok) throw new Error(`Erro, ambiente virtual não encontrado!!`);

        alert("Sala de aula adicionada");
    } catch (error) {
        console.log(`Erro!! ${error}`);
    }

}