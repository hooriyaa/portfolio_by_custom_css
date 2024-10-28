"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="hero-section ">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              I am
              <br className="title-break" />
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "Web Developer",
                    "Programmer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="title-underline"></div>
            <p className="hero-description">
              Hello!
              <span className="name-highlight">
                I am Hooriya Muhammad Fareed
              </span>
              <br />I am a Full Stack Developer with a backend focus and a
              passion for Generative AI. I excel in creating scalable, efficient
              web solutions by integrating state-of-the-art technologies and AI
              into enterprise-level applications.
            </p>
            <div className="contact-button-wrapper">
              <Link href={"#Contact"}>
                <button className="contact-button">Contact</button>
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="hero-image-container"
          >
            <Image
              className="hero-image"
              alt="hero"
              width={500}
              height={500}
              src={require("../../public/assests/pictures/pic.png")}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
