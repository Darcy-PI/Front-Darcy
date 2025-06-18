import { ParamValue } from "next/dist/server/request/params";

type StudentData = {
    degreeUnderstanding: number;
    degreeInterest: number;
    topicDifficulty: string;
    levelDifficulty: number;
    degreeEmocional: number;
    degreeSatisfaction: number;
    reinforcementNeed: string;
    timeDedicatedStudy: number;
}

export default async function postStudentData(studentId: string, ambientId: ParamValue, data: StudentData) {
    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/studentData`,{
            method : 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                studentId : studentId,
                virtualClassroomId : ambientId,
                grauCompreensao: data.degreeUnderstanding,
                grauInteresse: data.degreeInterest,
                topicoDificuldade: data.topicDifficulty,
                grauAutoconfianca: data.levelDifficulty,
                estadoEmocional: data.degreeEmocional,
                satisfacaoGeral: data.degreeSatisfaction,
                necessidadeReforco: data.reinforcementNeed, 
                tempoDedicadoEstudo: data.timeDedicatedStudy
            })
        })

        if(!response.ok) throw new Error(`Erro ao enviar a resposta: ${response.status}`);

        alert("Resposta enviada!!");

    }catch(error){
        alert("Formulario já respondido, volte amanhã!!"); 
        console.log(`Erro no servidor: ${error}`);
    }
}