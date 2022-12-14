import React from "react";
import { navLinks } from "../lib/nav-data";
import Link from "next/link";
import styles from './navbar.module.css'
import Button from '@mui/material/Button'
import TopRight from "./topright";

export default function Header() {
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.left_side}>
        <div className={styles.brand}>
            <Link href="/">
              <h3>NULL</h3>
            </Link>
        </div>
        {navLinks.map((link, index) => {
          return (

            <Link href={link.path} key={index}>
            <ul className={styles.nav_item} key={index}>
                <li key={index}>{link.name}</li>
            
            </ul>
            </Link>
          );
        })}
        </div>
        <div className={styles.right_side}>
          <TopRight></TopRight>
        </div>
      </nav>
    </header>
  );
}