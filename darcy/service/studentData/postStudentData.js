export default async function postStudentData(studentId, ambientId, data) {
    console.log(studentId + "," + ambientId)

    try{
        const response = await fetch("http://localhost:8080/api/v1/studentData",{
            method : 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                studentId : studentId,
                virtualClassroomId : ambientId,
                grauCompreensao: Number(data.degreeUnderstanding),
                grauInteresse: Number(data.degreeInterest),
                topicoDificuldade: data.topicDifficulty,
                grauAutoconfianca: Number(data.levelDifficulty),
                estadoEmocional: Number(data.degreeEmocional),
                satisfacaoGeral: Number(data.degreeSatisfaction),
                necessidadeReforco: data.reinforcementNeed, 
                tempoDedicadoEstudo: Number(data.timeDedicatedStudy)
            })
        })

        if(!response.ok) throw new Error(`Erro ao enviar a resposta: ${response.status}`);

        alert("Resposta enviada!!");

    }catch(error){
        alert("Formulario já respondido, volte amanhã!!"); 
        console.log(`Erro no servidor: ${error}`);
    }
}