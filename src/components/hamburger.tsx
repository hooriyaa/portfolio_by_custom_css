"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styles from "./HamburgerMenu.module.css"; // Optional: for custom styling

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.hamburgerMenu}>
      <button onClick={toggleMenu} className={styles.menuButton}>
        {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>

      {isOpen && (
        <div className={styles.menuLinks}>
          <div className={styles.sheetHeader}>
            <h1 className={styles.sheetTitle}>Hooriya</h1>
          </div>
          <div className={styles.navLinks}>
            <Link href="/" className={styles.navItem} onClick={toggleMenu}>
              Home
            </Link>
            <Link href="#About" className={styles.navItem} onClick={toggleMenu}>
              About
            </Link>
            <Link href="#Skills" className={styles.navItem} onClick={toggleMenu}>
              Skills
            </Link>
            <Link href="#Project" className={styles.navItem} onClick={toggleMenu}>
              Projects
            </Link>
            <Link href="#Contact" className={styles.navItem} onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
