import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="sobre">
      <h2 className={styles.title}>Sobre</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("sec/Image.png")}
          alt="foto perfil"
          className={styles.aboutImage}
        />
        <div className={styles.Text}>
          <p>
            Olá, sou Willian Meireles, apaixonado por Product Design e
            desenvolvimento de software. Resido em Praia Grande, São Paulo,
            Brasil. Sou graduado em Análise e Desenvolvimento de Sistemas pela
            Universidade Nove de Julho (2023) e estou cursando uma pós-graduação
            em Engenharia de Software na Anhanguera, com conclusão prevista para
            2025. Tenho uma sólida experiência em diversas áreas do
            desenvolvimento e design. Trabalhei como Analista Júnior de Service
            Desk, gerenciando acessos, otimizando processos e oferecendo suporte
            técnico. Anteriormente, fui Jovem Aprendiz na Sitel do Brasil, onde
            contribuí para a integridade dos dados e desenvolvi artigos focados
            em UX/UI.
          </p>
        </div>
      </div>
    </section>
  );
};
