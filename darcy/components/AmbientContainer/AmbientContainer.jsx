import Link from "next/link";
import { GoChevronRight } from "react-icons/go";

export default function AmbientContainer({id, ambientName}){
    return (
        <div>
            <h1>{ambientName}</h1>
            <Link href={`/virtualAmbientStudant/virtualAmbientResponse/${id}`}> <GoChevronRight /> </Link>
        </div>
    )
}