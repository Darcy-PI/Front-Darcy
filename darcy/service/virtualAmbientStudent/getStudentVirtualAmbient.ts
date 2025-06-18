export default async function getStudentVirtualAmbient(studentId: string){
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/virtualClassrooms/students/${studentId}`,{
            method : 'GET',
            headers : {
                'Content-Type': 'application/json'
            }
        });

        if(!response.ok) throw new Error(`Erro no servidor!! ${response.status}`);

        const data = await response.json();
        return data; 
    } catch (error) {
        console.log(`Erro!! ${error}`);
    }
}