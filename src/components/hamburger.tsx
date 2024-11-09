"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburgerMenu">
      <button onClick={toggleMenu} className="menuButton">
        {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>

     
      {isOpen && (
        <div className="menuLinks">
          {/* Header section with title */}
          <div className="sheetHeader">
            <h1 className="sheetTitle">Hooriya</h1>
          </div>
          
          {/* Navigation links */}
          <div className="navLinks">
            <Link href="/" className="navItem" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="#About" className="navItem" onClick={toggleMenu}>
              About
            </Link>
            <Link href="#Skills" className="navItem" onClick={toggleMenu}>
              Skills
            </Link>
            <Link href="#Projects" className="navItem" onClick={toggleMenu}>
              Projects
            </Link>
            <Link href="#Contact" className="navItem" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
