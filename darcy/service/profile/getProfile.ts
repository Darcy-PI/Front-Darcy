import { ParamValue } from "next/dist/server/request/params";

export default async function getProfile(userId : ParamValue, type :ParamValue){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/${type}/${userId}`,{
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json'
        }
    })

    if(!response.ok) throw new Error(`Erro no servido! ${response.status}`);

    const data = await response.json();

    return data;
    
  } catch (error) {
    console.log(`Erro no servidor${error}`);
  }
}