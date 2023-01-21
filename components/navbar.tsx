import React from "react";
import { navLinks } from "../lib/nav-data";
import Link from "next/link";
import styles from './navbar.module.css'
import Button from '@mui/material/Button'
import TopRight from "./topright";
import YoutubeLink from "./navbar-elements/youtube";

export default function Header() {
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <div className={styles.left_items}>
            <YoutubeLink></YoutubeLink>
          </div>
          <div className={styles.right_items}>
            <Link href="/">
              <a className={styles.logo}>
                <img src="/images/logo.png" alt="logo" />
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}