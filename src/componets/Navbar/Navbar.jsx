import React from "react";

import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portifolio
      </a>
      <div className={styles.menu}>
        <ul className={styles.menuItems}>
          <li>
            <a href="#home">Home</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
