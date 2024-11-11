"use client";
import Image from "next/image";
import image1 from "../../public/assests/projects/facebook_login_page_clone.png";
import image2 from "../../public/assests/projects/calculator.png";
import image3 from "../../public/assests/projects/amazon_clone.png";
import image4 from "../../public/assests/projects/e-commerce_website.png";
import image5 from "../../public/assests/projects/blog-site.png";
import image6 from "../../public/assests/projects/resume_builder.jpeg";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <div id="Project">
      <section className="body-font">
        <div
          className="container"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <div className="header">
            <h1 className="title">
              My
              <span className="title-highlight">Projects</span>
            </h1>
          </div>
          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card">
              <div className="project-container">
                <Image
                  alt="Facebook Login Page Clone"
                  className="project-image"
                  src={image1}
                />
                <div className="project-overlay">
                  <h2 className="project-category">
                    Facebook Login Page Clone Project
                  </h2>
                  <h1 className="project-title">Facebook login page clone</h1>
                  <p className="project-description line-clamp-3">
                    This project was all about honing my front-end skills and
                    focusing on the design aspects of web development:
                  </p>
                  <Link
                    target="_blank"
                    href="https://facebook-login-page-clone-by-hooriya.netlify.app/"
                  >
                    <p className="project-link">View Project..</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <div className="project-container">
                <Image
                  alt="Calculator Web App"
                  className="project-image"
                  src={image2}
                />
                <div className="project-overlay">
                  <h2 className="project-category">
                    Calculator Web App Project
                  </h2>
                  <h1 className="project-title">Calculator</h1>
                  <p className="project-description line-clamp-3">
                    This project pushed my web dev skills and was a blast to
                    build! If you love coding or need a cool project idea,
                    building a calculator is a fantastic way to hone your skills
                    and create something awesome! 💪
                  </p>
                  <Link
                    target="_blank"
                    href="https://calculator-by-hooriya-muhammad-fareed.netlify.app/"
                  >
                    <p className="project-link">View Project..</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card">
              <div className="project-container">
                <Image
                  alt="Amazon Clone"
                  className="project-image"
                  src={image3}
                />
                <div className="project-overlay">
                  <h2 className="project-category">Amazon Clone Project</h2>
                  <h1 className="project-title">Amazon Clone</h1>
                  <p className="project-description line-clamp-3">
                    I recreated the Amazon homepage using only HTML and CSS,
                    highlighting sleek design and responsive layouts. It is a
                    powerful example of what can be achieved with pure front-end
                    skills.
                  </p>
                  <Link
                    target="_blank"
                    href="https://amazon-clone-project-by-hooriya.netlify.app/"
                  >
                    <p className="project-link">View Project..</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="project-card">
              <div className="project-container">
                <Image
                  alt="E-commerce Website"
                  className="project-image"
                  src={image4}
                />
                <div className="project-overlay">
                  <h2 className="project-category">
                    E-commerce Website Project
                  </h2>
                  <h1 className="project-title">E-commerce Website</h1>
                  <p className="project-description line-clamp-3">
                    I developed an e-commerce platform that integrates product
                    data for seamless display and management. This includes
                    &apos;Add to Cart&apos; functionality and detailed product
                    pages, alongside API routes for efficient server-side
                    operations. The project leverages both static and dynamic
                    pages to ensure optimal performance.
                  </p>
                  <Link
                    target="_blank"
                    href="https://ecommerce-site-by-hooriya.netlify.app/"
                  >
                    <p className="project-link">View Project..</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="project-card">
              <div className="project-container">
                <Image alt="Blog Site" className="project-image" src={image5} />
                <div className="project-overlay">
                  <h2 className="project-category">
                    Dynamic Multi-Page Blog Project
                  </h2>
                  <h1 className="project-title">
                    Dynamic Multi-Page Blog site
                  </h1>
                  <p className="project-description line-clamp-3">
                    I developed a Multi-Page Blog using Next.js and Tailwind
                    CSS, featuring dynamic routing for seamless navigation and
                    an interactive comments section to boost user engagement.
                    This project highlights my skills in creating scalable,
                    responsive web applications with clean design.
                  </p>
                  <Link
                    target="_blank"
                    href="https://dynamic-blog-site-by-hooriya.netlify.app/"
                  >
                    <p className="project-link">View Project..</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="project-card">
              <div className="project-container">
                <Image alt="To-do App" className="project-image" src={image6} />
                <div className="project-overlay">
                  <h2 className="project-category">
                    Shareable-resume-builder Project
                  </h2>
                  <h1 className="project-title">Shareable-resume-builder</h1>
                  <p className="project-description line-clamp-3">
                    Created a Resume Builder using HTML, CSS, and JavaScript,
                    featuring customizable templates that allow users to add,
                    edit, and arrange sections for a professional resume. With a
                    responsive design and PDF export functionality, this project
                    showcases my skills in crafting intuitive, front-end
                    applications.
                  </p>
                  <Link
                    target="_blank"
                    href={
                      "https://shareable-resume-builder-by-hooriya.netlify.app"
                    }
                  >
                    <p className="project-link">View Project..</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
