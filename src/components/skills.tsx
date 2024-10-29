"use client";
import { IoMdCheckboxOutline } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <div id="Skills">
      <section className="skills-section">
        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="skills-container"
        >
          <div className="skills-header">
            <h2 className="skills-subtitle">SKILLS</h2>
            <h1 className="skills-title">
              My
              <span className="skills-title-highlight">Skills</span>
            </h1>
          </div>

          <div className="skills-grid">
            {/* Skill */}
            <div className="skill-card">
              <div className="skill-content">
                <div className="skill-icon-wrapper">
                  <div className="skill-icon">
                    <IoMdCheckboxOutline className="icon" />
                  </div>
                  <h2 className="skill-name">HTML</h2>
                </div>
                <div className="skill-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                  <p className="progress-text">100%</p>
                </div>
              </div>
            </div>

            {/* CSS Skill */}
            <div className="skill-card">
              <div className="skill-content">
                <div className="skill-icon-wrapper">
                  <div className="skill-icon">
                    <IoMdCheckboxOutline className="icon" />
                  </div>
                  <h2 className="skill-name">CSS</h2>
                </div>
                <div className="skill-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                  <p className="progress-text">90%</p>
                </div>
              </div>
            </div>

            {/*  Javascript/Typescript */}
            <div className="skill-card">
              <div className="skill-content">
                <div className="skill-icon-wrapper">
                  <div className="skill-icon">
                    <IoMdCheckboxOutline className="icon" />
                  </div>
                  <h2 className="skill-name"> Javascript/Typescript</h2>
                </div>
                <div className="skill-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                  <p className="progress-text">85%</p>
                </div>
              </div>
            </div>
            {/*  NEXT.JS 13 */}
            <div className="skill-card">
              <div className="skill-content">
                <div className="skill-icon-wrapper">
                  <div className="skill-icon">
                    <IoMdCheckboxOutline className="icon" />
                  </div>
                  <h2 className="skill-name">NEXT.JS</h2>
                </div>
                <div className="skill-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                  <p className="progress-text">70%</p>
                </div>
              </div>
            </div>
            {/* TAILWIND CSS */}
            <div className="skill-card">
              <div className="skill-content">
                <div className="skill-icon-wrapper">
                  <div className="skill-icon">
                    <IoMdCheckboxOutline className="icon" />
                  </div>
                  <h2 className="skill-name">TAILWIND CSS</h2>
                </div>
                <div className="skill-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                  <p className="progress-text">90%</p>
                </div>
              </div>
            </div>
            {/*  CANVA */}
            <div className="skill-card">
              <div className="skill-content">
                <div className="skill-icon-wrapper">
                  <div className="skill-icon">
                    <IoMdCheckboxOutline className="icon" />
                  </div>
                  <h2 className="skill-name">CANVA</h2>
                </div>
                <div className="skill-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                  <p className="progress-text">85%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
