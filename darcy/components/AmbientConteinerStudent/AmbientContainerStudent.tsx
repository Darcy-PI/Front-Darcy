import Link from "next/link";
import styles from "./ambientConteinerStudent.module.css";

import { GoChevronRight } from "react-icons/go";

export default function AmbientContainerStudent({
  ambientName,
  id,
}: {
  ambientName: string;
  id: string;
}) {
  return (
    <div className={styles.div}>
      <h1 className={styles.title}>{ambientName}</h1>
      <Link href={`/virtualFormStudent/${id}`} className={styles.link}>
        {" "}
        <GoChevronRight color="black" size={30} />
      </Link>
    </div>
  );
}
