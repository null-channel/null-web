import React from "react";
import { navLinks } from "../lib/nav-data";
import Link from "next/link";
import styles from './navbar.module.css'

export default function Header() {
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.brand}>
            <Link href="/">
              <h3>NULL</h3>
            </Link>
        </div>
        {navLinks.map((link, index) => {
          return (
            <ul className={styles.nav_item}>
              <Link href={link.path}>
                <li key={index}>{link.name}</li>
              </Link>
            </ul>
          );
        })}
      </nav>
    </header>
  );
}