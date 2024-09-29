import React from 'react';
import styles from "./Contact.module.css";
import { getImageUrl } from '../../utils';

const Contact = () => {
  return (
    <footer className={styles.container} id="contato">
      <div className={styles.text}>
        <h2>Contato</h2>
        <p>Sinta-se à vontade para entrar em contato!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}><img src={getImageUrl("footer/linkedin.png")} alt="linkedin icom" />
        <a href="https://www.linkedin.com/in/willian-meireles?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">/willian_meireles</a>
        </li>

        <li className={styles.link}><img src={getImageUrl("footer/github.png")} alt="github icom" />
        <a href="https://github.com/wmeireles">/willian_meireles</a>
        </li>
      </ul>
      <div className={styles.backToTop}>
        <a href="#" className={styles.backToTopLink}>
          <img src={getImageUrl("footer/botao.png")} alt="" />
        </a>
      </div>
    </footer>
  )
}

export default Contact
