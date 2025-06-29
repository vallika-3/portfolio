import React from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slidesData = [
  { id: 1, src: '/images/sih.jpeg', alt: 'SIH Event 1' },
  { id: 2, src: '/images/sihmodi.jpeg', alt: 'SIH Event 2' },
  { id: 3, src: '/images/sihcer.jpeg', alt: 'Certificate 1' },
  { id: 4, src: '/images/sihmine.jpeg', alt: 'SIH Event 3' },
  
  

];

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>
            Hi, I'm <span className="highlight-name">Vallika</span>
          </h1>
          <h2>MERN Stack Developer | Problem Solver | SIH Finalist</h2>
          <p>
            I build fast, scalable, and beautiful web applications that solve
            real-world problems with a strong focus on clean code and creative UI/UX.
          </p>

          <div className="hero-buttons">
            <a
              href="https://drive.google.com/file/d/1KyI69TaFGIt1uDVKnzTRCOoAsTFIXY9i/view?usp=share_link"
              download
              className="btn btn-primary"
            >
              Download Resume
            </a>
            <a
              href="https://github.com/vallika-3"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              View Projects
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="mailto:vallika.sai.sree@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/vallika-sree-180716259/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://leetcode.com/u/vallika_sree/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
            >
              <SiLeetcode />
            </a>
            <a
              href="https://github.com/vallika-3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src="/images/mine.jpeg" alt="Vallika" />
        </div>
      </div>

      <section className="showcase-slider">
        <h3>My Achievements & Events</h3>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {slidesData.map(({ id, src, alt }) => (
            <SwiperSlide key={id}>
              <img src={src} alt={alt} className="slide-image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
}

export default Hero;
