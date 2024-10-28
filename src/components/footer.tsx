"use client";
import Image from "next/image";
import Link from "next/link";
import { ImGithub } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container footer-container">
          <a className="footer-brand">
            <Image
              src={require("../../public/assests/pictures/portfolio.png")}
              width={180}
              height={180}
              alt="My Portfolio"
              className="footer-logo"
            />
            <p className="footer-brand-text">
              MY
              <span className="brand-name-blue ml-1">PORTFOLIO</span>
            </p>
          </a>

          <p className="footer-copyright">© 2024 MY PORTFOLIO</p>

          <div className="social-links">
            <Link
              target="_blank"
              href={"https://github.com/hooriyaa"}
              className="text-gray-500 text-3xl hover:text-[#0a0a0a]"
            >
              <ImGithub />
            </Link>

            <Link
              target="_blank"
              href={
                "https://www.linkedin.com/in/hooriya-muhammad-fareed-57a320302/"
              }
              className="text-gray-500 text-3xl hover:text-[#0077B5] ml-2"
            >
              <ImLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
