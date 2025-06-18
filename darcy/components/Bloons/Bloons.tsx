import styles from "./bloons.module.css";

export default function Bloons({
  text,
  author,
}: {
  text: string;
  author: string;
}) {
  return (
    <section className={styles.bloonsSection}>
      <p>{text}</p>
      <cite>{author}</cite>
    </section>
  );
}
