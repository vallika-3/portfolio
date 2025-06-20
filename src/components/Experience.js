import React from 'react';
import './Experience.css'; // Import the CSS file for styling

const experienceData = [
  {
    initial: 'C', 
    jobTitle: 'Frontend Developer Intern',
    company: 'Ceeras IT Services',
    companyLink: 'https://www.example.com/ceeras',
    duration: 'June 2024 - August 2024',
    responsibilities: [
      'Designed production-level UI components with React.js',
      'Integrated REST APIs and improved UX responsiveness',
      'Collaborated in Agile development sprints',
      'Implemented responsive design patterns and modern CSS techniques',
    ],
  },
  
];

const Experience = () => {
  return (
    <section className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="experience-cards-container">
        {experienceData.map((exp, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-header">
              <div className="company-initial-circle">
                <span>{exp.initial}</span>
              </div>
              <div className="job-details">
                <h3 className="job-title">{exp.jobTitle}</h3>
                <a 
                  href={exp.companyLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="company-name"
                >
                  {exp.company}
                </a>
                <p className="duration">{exp.duration}</p>
              </div>
            </div>
            <ul className="responsibilities-list">
              {exp.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
