import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";



export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <span>Olá, sou Willian.</span>
        <h1 className={styles.title}>Product Designer</h1>
        <p className={styles.description}>
          Como Especialista Júnior em Product Design, crio experiências
          significativas para os usuários, focando em interfaces intuitivas e
          atraentes.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>Contato</a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="minha foto" className={styles.heroImg}/>
      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>
    </section>
  );
};
