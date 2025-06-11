"use client"
import Link from "next/link";
import styles from "./page.module.css";

import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";

export default function Home() {
  const [display, setDisplay] = useState(false)

  function displayNavBar(){
    display ? setDisplay(false) : setDisplay(true);
  }

  return (
      <div>
        <header className={styles.header}>
          <div className={styles.logo}>
            <img 
              src="/icon/DarcyLogo.svg"
              width={50}
              height={50}
              alt="Darcy Logo"
              />
              <h1>Darcy</h1>
          </div>
          
          <MdOutlineMenu className={styles.hambguerMenu} size={35} onClick={displayNavBar}/>
          
          <nav className={display ? styles.active: null}>
              <Link href={"/login/student"} className={styles.links}>Aluno</Link>

              <Link href={"/login/professor"} className={styles.links}>Professor</Link>
          </nav>
        </header>

        <main className={styles.main}>
          <section className={styles.logoDarcy}>
            <img 
              src="/assets/DarcyLogo.png"
              width={300}
              height={300}
              alt="Darcy Logo"
              className={styles.darcyImage}
            />
            <h1>Darcy</h1>
            <h2>Educação Digitalizada</h2>
          </section>

          <section>
            <div className={styles.sectionMain}>
              <h1>Por que Darcy?</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae auctor magna, in eleifend dolor. In blandit urna sed ipsum mattis feugiat. Integer a pretium tortor. Proin luctus ultricies augue, vel sollicitudin est lacinia quis. Mauris varius nisl eget risus placerat consectetur. Vestibulum sodales velit eget magna luctus rhoncus. Cras massa quam, eleifend at porta vitae, pulvinar sit amet urna. Nam venenatis a purus quis sagittis. Mauris nibh augue, semper nec volutpat sed, auctor sit amet sem.</p>
            </div>

            <div className={`${styles.whatChooseDarcyDiv} ${styles.sectionMain}`}>
              <h1>Por que escolher Darcy?</h1>

              <section className={styles.whatChooseDarcySection}>
                <div className={styles.icons}>
                  <img 
                    src="/icon/Easy-Use.svg"
                    width={50}
                    height={50}
                    alt="Easy Use Icon"
                  />

                  <h1>Fácil Navegação</h1>
                </div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae auctor magna, in eleifend dolor. In blandit urna sed ipsum mattis feugiat. Integer a pretium tortor. Proin luctus ultricies augue, vel sollicitudin est lacinia quis. Mauris</p>
              </section>

              <section className={styles.whatChooseDarcySection}>
                <div className={styles.icons}>
                  <img 
                    src="/icon/Graphic.svg"
                    width={50}
                    height={50}
                    alt="Graphic Icon"
                  />

                  <h1>Melhor comprenção</h1>
                </div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae auctor magna, in eleifend dolor. In blandit urna sed ipsum mattis feugiat. Integer a pretium tortor. Proin luctus ultricies augue, vel sollicitudin est lacinia quis. Mauris</p>
              </section>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <p>© Todos os direitos reservados para a gurizada do PI3</p>
        </footer>
      </div>

  );
}
