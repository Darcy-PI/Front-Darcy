'use client';
import Header2 from "@/components/Header2/Header2";

import getAllStudentdataById from "@/service/studentData/getAllStudentDataByVirtualAmbientId";

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function VirtualGraphicAmbient(){
    const { ambientId } = useParams();
    const [ studentDataList, setStudentdataList ] = useState([]);

    async function getFetch(){
        const response = await getAllStudentdataById(ambientId);

        if (!response || !Array.isArray(response.data))
            return 'O ambiente ainda não possui nenhuma resposta';

        setStudentdataList(response.data);
    }

    useEffect(() => {
        getFetch()
    }, []);

    return(
        <div>
            <Header2 url="virtualAmbientTeacher"/>

        </div>
    )
}