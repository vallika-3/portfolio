import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

function About() {
  return (
    <section className="about" id="about">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="about-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="about-description">
          <p>
            I'm a passionate MERN Stack Developer currently pursuing my B.Tech in Information Technology.
            From student projects to internship experiences and hackathon victories, I've built a strong
            foundation in full-stack development and problem-solving.
          </p>

          <div className="about-info">
            <p><FaMapMarkerAlt /> <strong>Location:</strong> Hyderabad, India</p>
            <p><FaBriefcase /> <strong>Status:</strong> Available for opportunities</p>
          </div>
        </div>

        <div className="education">
          <h3><FaGraduationCap /> Education</h3>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h4>B.Tech in Information Technology</h4>
                <p>Gokaraju Lailavathi Women's Engineering College</p>
                <span>2022 - 2026 | CGPA: 8.0</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h4>Intermediate PCM</h4>
                <p>Narayana Junior College</p>
                <span>Score: 921 / 1000</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
