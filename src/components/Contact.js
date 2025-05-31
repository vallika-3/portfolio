import React, { useState } from 'react';
import './Contact.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const [copySuccess, setCopySuccess] = useState('');

  const email = 'vallika.sai.sree@gmail.com';

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopySuccess('Email copied!');
      setTimeout(() => setCopySuccess(''), 2000);
    });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Let's Connect</h2>
        <p className="contact-subtitle">
          Whether it’s collaboration, questions, or just a hello — I’d love to hear from you!
        </p>

        <div className="contact-icons">
          <a
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            onClick={(e) => {
              e.preventDefault();
              copyEmailToClipboard();
            }}
            title="Click to copy email"
          >
            <FaEnvelope className="contact-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn Profile"
          >
            <FaLinkedin className="contact-icon" />
          </a>
          <a
            href="https://leetcode.com/your-leetcode"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            title="LeetCode Profile"
          >
            <SiLeetcode className="contact-icon" />
          </a>
          <a
            href="https://github.com/vallika-3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub Profile"
          >
            <FaGithub className="contact-icon" />
          </a>
        </div>

        {copySuccess && <p className="copy-success">{copySuccess}</p>}

        {/* Simple contact form */}
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Thanks for reaching out! I will get back to you soon.');
            e.target.reset();
          }}
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="4" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
