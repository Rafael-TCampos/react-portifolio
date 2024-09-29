import React, {useState} from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Willian Meireles</a>
      <div className={styles.menu}>
        {/*Funcao para abrir o menu Amburguer*/} 
        <img className={styles.menuBtn} src={menuOpen ? getImageUrl("nav/closeIcon.png") 
          : getImageUrl("nav/menuIcon.png")
        } alt="menu-button" onClick={() => setMenuOpen(!menuOpen)}/>
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
