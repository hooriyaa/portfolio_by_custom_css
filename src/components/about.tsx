"use client";
import Image from "next/image";
import React from "react";
import AboutImage from "../../public/assests/pictures/digital_girl_pic.jpg";

const About = () => {
  return (
    <div id="About">
      <section className="about-section">
        <div
          data-aos="zoom-in-right"
         data-aos-duration="2000"
          className="about-container"
        >
          <div className="about-image-wrapper">
            <Image
              className="about-image"
              alt="hero"
              width={510}
              height={490}
              src={AboutImage}
            />
          </div>
          <div className="about-content">
            <h1 className="about-title">
              About
              <span className="about-title-highlight">Me</span>
            </h1>
            <div className="about-description">
              <p className="greeting">
                👋 Hello! I am
                <span className="name">Hooriya Muhammad Fareed</span>
              </p>
              <p className="mb-4">
                I am a passionate Full Stack Developer with a backend focus and
                a passion for Generative AI 🚀.I excel in creating scalable,
                efficient web solutions by integrating state-of-the-art
                technologies and AI into enterprise-level applications.
              </p>
              <p className="mb-4">
                🌟 Innovative Developer & Tech Enthusiast
                <br />
                📚 Lifelong Learner Committed to Excellence
                <br />
                🔧 Expert in Solving Complex Tech Challenges
              </p>
              <p className="mb-4">
                💼 <span className="text-black">Professional Overview:</span>
                <br />
                With a solid foundation in full-stack development, I excel at
                crafting innovative applications that seamlessly integrate
                Artificial Intelligence. My mission is to deliver robust,
                scalable, and efficient software solutions tailored to meet your
                business needs.
              </p>

              <p className="mb-4">
                🛠 <span className="text-black">Technical Expertise:</span>
                <br />
                <span className="text-black">Languages:</span> TypeScript,
                JavaScript
                <br />
                <span className="text-black">Frameworks:</span> Next.js,
                Tailwind CSS
              </p>
              <p className="mb-4 font-serif ">
                📬 Lets Collaborate: I am always excited to take on new
                projects, collaborations, and discussions. Lets connect and
                explore how we can work together to create something
                exceptional!
              </p>
              <p className="mb-4 font-serif ">
                Ready to elevate your web presence? Lets make it happen
                together!
              </p>
              <span className="text-black">Email:👇</span>
              <p className="mb-5 leading-relaxed font-serif  text-blue-500 hover:underline cursor-pointer">
                guujarmahnoor0312@gmail.com
              </p>
              <div className="cv-button-wrapper">
                <a target="_blank" href={"/assests/cv/Profile (4).pdf"}>
                  <button className="cv-button">View CV</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
