import React from "react";
import { navLinks } from "../lib/nav-data";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="brand">
        <h3>Example</h3>
      </div>
      <nav>
        {navLinks.map((link, index) => {
          return (
            <ul key={index}>
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