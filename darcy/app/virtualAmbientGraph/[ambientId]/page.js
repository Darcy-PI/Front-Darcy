"use client";

import Header2 from "@/components/Header2/Header2";

import getAllStudentdataById from "@/service/studentData/getAllStudentDataByVirtualAmbientId";
import getAllStudentsOnVirtualClassroom from "@/service/studentData/getAllStudentsOnVirtualClassroom";

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

import { BarChart,  } from "recharts";
import { CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";

import styles from './page.module.css';

export default function VirtualGraphicAmbient(){
    const { ambientId } = useParams();
    const [ studentDataList, setStudentdataList ] = useState([]);
    const [ studentsOnVirtualClassroomCount, setStudentsOnVirtualClassroomCount ] = useState(0);

    const [ studentDataAvgChart, setStudentDataAvgChart ] = useState({});

    function calcAvg(studentDataList) {
        const countData = {
            totalGrauCompreensao: 0,
            totalGrauInteresse: 0,
            totalGrauAutoconfianca: 0,
            totalEstadoEmocional: 0,
            totalSatisfacaoGeral: 0,
            totalTempoDedicadoEstudo: 0
        };

        studentDataList.map((studentData) => {
            countData.totalGrauCompreensao += studentData.grauCompreensao || 0;
            countData.totalGrauInteresse += studentData.grauInteresse || 0;
            countData.totalGrauAutoconfianca += studentData.grauAutoconfianca || 0;
            countData.totalEstadoEmocional += studentData.estadoEmocional || 0;
            countData.totalSatisfacaoGeral += studentData.satisfacaoGeral || 0;
            countData.totalTempoDedicadoEstudo += studentData.tempoDedicadoEstudo || 0;
        });

        const totalStudents = studentDataList.length || 1;

        const avg = {
            mediaGrauCompreensao: (countData.totalGrauCompreensao / totalStudents).toFixed(1),
            mediaGrauInteresse: (countData.totalGrauInteresse / totalStudents).toFixed(1),
            mediaGrauAutoconfianca: (countData.totalGrauAutoconfianca / totalStudents).toFixed(1),
            mediaEstadoEmocional: (countData.totalEstadoEmocional / totalStudents).toFixed(1),
            mediaSatisfacaoGeral: (countData.totalSatisfacaoGeral / totalStudents).toFixed(1),
            mediaTempoDedicadoEstudo: (countData.totalTempoDedicadoEstudo / totalStudents).toFixed(1)
        };
        
        const dataChart = [
            {
                name: 'Compreensão',
                'media': avg.mediaGrauCompreensao
            },
            {
                name: 'Interesse',
                'media': avg.mediaGrauInteresse
            },
            {
                name: 'Autoconfiança',
                'media': avg.mediaGrauAutoconfianca
            },
            {
                name: 'Emocional',
                'media': avg.mediaEstadoEmocional
            },
            {
                name: 'Satisfação',
                'media': avg.mediaSatisfacaoGeral
            },
            {
                name: 'Tempo de Estudo',
                'media': avg.mediaTempoDedicadoEstudo
            }
        ]

        setStudentDataAvgChart([...dataChart]);
    }

    async function getStudentDataFetch(){
        const response = await getAllStudentdataById(ambientId);

        if (!response || !Array.isArray(response.data))
            return 'O ambiente ainda não possui nenhuma resposta';

        const resultStudentDataList = response.data.map((studentData) => ({     
            studentId: studentData.studentId,
            virtualClassroomId: studentData.virtualClassroomId,
            grauCompreensao: studentData.grauCompreensao,
            grauInteresse: studentData.grauInteresse,
            topicoDificuldade: studentData.topicoDificuldade,
            grauAutoconfianca: studentData.grauAutoconfianca,
            estadoEmocional: studentData.estadoEmocional,
            satisfacaoGeral: studentData.satisfacaoGeral,
            necessidadeReforco: studentData.necessidadeReforco,
            tempoDedicadoEstudo: studentData.tempoDedicadoEstudo
        }));
        console.log(resultStudentDataList);

        setStudentdataList(resultStudentDataList);
    }

    async function getAllStudentsOnVirtualClassroomFetch(){
        const response = await getAllStudentsOnVirtualClassroom(ambientId);
        
        if (!response || !Array.isArray(response.data))
            return 'O ambiente ainda não possui nenhuma resposta';

        setStudentsOnVirtualClassroomCount(response.data.length);
        calcAvg(response.data);
    }

    useEffect(() => {
        getStudentDataFetch()
        getAllStudentsOnVirtualClassroomFetch();
    }, []);

    return(
        <div className={styles.content__container}>
            <Header2 url="virtualAmbientTeacher"/>
            <main className={styles.main__container}>
                <h1>Análise do Ambiente Virtual</h1>
                <div className={styles.dashboard__container}>
                    <div className={styles.board_count__container}>
                        <div className={styles.square__container}>
                            <h2>Respostas Totais</h2>
                            <h3 className={styles.text_data}>{studentDataList.length}</h3>
                        </div>
                        <div className={styles.square__container}>
                            <h2>Estudantes Totais</h2>
                            <h3 className={styles.text_data}>{studentsOnVirtualClassroomCount}</h3>
                        </div>
                    </div>
                    <div className={styles.charts__container}>
                        <div className={styles.chart__container}>
                            <h2 className={styles.chart__container_text}>Dados gerais em média</h2>
                            <div className={styles.chart__content}>

                            </div>
                            <BarChart width={800} height={300} data={studentDataAvgChart}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" fontSize={12}/>
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="media" fill="#8884d8" />
                            </BarChart>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}