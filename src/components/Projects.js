import React from 'react';
import './Projects.css';

const projectsData = [
  // Add more projects here...
  {
    type: 'Hackathon',
    isFeatured: true,
    title: 'Anti-Doping Dashboard',
    description: 'SIH Finalist Project - Secure dashboard built with React, Node.js, MongoDB featuring real-time workflows and data visualization.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    codeLink: 'https://github.com/vallika-3/anti-dopping-final-project',
    demoLink: 'https://github.com/vallika-3/anti-dopping-final-project',
  },
  {
    type: 'Full Stack',
    isFeatured: true,
    title: 'TravelX - Smart Itinerary Builder',
    description: 'Full-stack MERN web app for planning travel routes with intelligent recommendations and real-time updates.',
    technologies: ['React', 'Express', 'MongoDB', 'REST APIs'],
    codeLink: 'https://github.com/vallika-3/Travel',
    demoLink: 'https://github.com/vallika-3/Travel',
  },
  {
    type: 'Frontend',
    isFeatured: false,
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio built with React and Tailwind CSS featuring animations and dark mode.',
    technologies: ['React', 'Tailwind CSS', 'TypeScript'],
    codeLink: '#',
    demoLink: '#',
  },
  {
  type: 'Frontend',
  isFeatured: false,
  title: 'Spotify Frontend Clone',
  description: 'A static clone of Spotify’s web UI built using HTML, CSS, and JavaScript. Focused on layout replication and responsive design.',
  technologies: ['HTML', 'CSS', 'JavaScript'],
  codeLink: 'https://github.com/vallika-3/spotify-clone',
  demoLink: 'https://your-live-spotify-clone.vercel.app', 
},
{
  type: 'Frontend',
  isFeatured: false,
  title: 'Amazon Clone',
  description: 'Frontend clone of Amazon’s homepage created using HTML and CSS, showcasing pixel-perfect layout and styling.',
  technologies: ['HTML', 'CSS'],
  codeLink: 'https://github.com/vallika-3/amazon-clone', 
  demoLink: 'https://your-live-amazon-clone.vercel.app', 
},
  // ...add more projects
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-carousel">
        <div className="projects-track">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-tags">
                <span className="tag project-type">{project.type}</span>
                {project.isFeatured && <span className="tag project-featured">Featured</span>}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <span className="technology-tag" key={i}>{tech}</span>
                ))}
              </div>
              <div className="project-buttons">
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn btn-code">
                  <i className="fas fa-code"></i> Code
                </a>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-demo">
                  <i className="fas fa-external-link-alt"></i> Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
