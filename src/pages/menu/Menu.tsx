import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../../App.module.css";

export default function Menu() {
  return (
    <nav className={styles.nav}>
      <NavLink
        exact
        to="/"
        className={styles.link}
        activeClassName={styles.linkActive}
      >
        <div> Home </div>
      </NavLink>
      <NavLink
        to="/list"
        className={styles.link}
        activeClassName={styles.linkActive}
      >
        <div> List </div>
      </NavLink>
    </nav>
  );
}
