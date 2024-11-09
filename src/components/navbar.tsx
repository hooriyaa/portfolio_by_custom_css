"use client";
import Link from "next/link";
import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import HamburgerMenu from "./hamburger";

const Navbar = () => {
  return (
    <div className="navbar">
      <header className="header">
        <div className="container">
          {/* Flex container for heading and menu on small screens */}
          <div className="logo-container">
            <a className="title-link">
              <span className="brand-name">
                Hooriya
                <span className="brand-surname">Fareed</span>
              </span>
            </a>

            {/* Hamburger Menu for Small Screens */}
            <div className="mobile-menu">
              <HamburgerMenu />
            </div>
          </div>

          {/* Navbar Links for Large Screens */}
          <nav className="nav-links">
            <Link href="/" className="nav-item">
              Home
            </Link>
            <Link href="#About" className="nav-item">
              About
            </Link>
            <Link href="#Skills" className="nav-item">
              Skills
            </Link>
            <Link href="#Project" className="nav-item">
              Projects
            </Link>
            <Link href="#Contact" className="nav-item">
              Contact
            </Link>
          </nav>

          {/* Download CV Button */}
          <a target="_blank" href="/assests/cv/Profile (4).pdf">
            <button className="download-btn">
              Download CV
              <AiOutlineCloudDownload className="download-icon" />
            </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
