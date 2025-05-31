import React, { useState } from 'react';
import './Skills.css';
import { motion } from 'framer-motion';

// Animation variants for fade in + slide up
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// Extended skills data
const skillsData = [
  { name: 'React.js', percentage: 90, category: 'Frontend' },
  { name: 'JavaScript', percentage: 85, category: 'Frontend' },
  { name: 'Node.js', percentage: 60, category: 'Backend' },
<<<<<<< HEAD
  { name: 'Express.js', percentage: 60, category: 'Backend' },
=======
  { name: 'Express.js', percentage: 55, category: 'Backend' },
>>>>>>> 5bd5e79 (Updated portfolio with latest changes)
  { name: 'MongoDB', percentage: 75, category: 'Database' },
  { name: 'Oracle SQL', percentage: 55, category: 'Database' },
  { name: 'Python', percentage: 50, category: 'Backend' },
  { name: 'C++', percentage: 90, category: 'Backend' },
  { name: 'Java', percentage: 50, category: 'Backend' },
  { name: 'Git', percentage: 75, category: 'Tools' },
  { name: 'GitHub', percentage: 75, category: 'Tools' },
  { name: 'VS Code', percentage: 85, category: 'Tools' },
  { name: 'Visual Studio', percentage: 85, category: 'Tools' },
  { name: 'OOP', percentage: 85, category: 'Software Engineering' },
  { name: 'Data Structures', percentage: 80, category: 'Software Engineering' },
  { name: 'Algorithms', percentage: 80, category: 'Software Engineering' },
  { name: 'Problem Solving', percentage: 85, category: 'Software Engineering' },
  { name: 'Automation', percentage: 70, category: 'Software Engineering' },
  { name: 'Linux/Unix', percentage: 75, category: 'OS' },
  { name: 'UI/UX Design', percentage: 65, category: 'Others' },
  { name: 'Responsive Design', percentage: 80, category: 'Others' },
  { name: 'API Integration', percentage: 75, category: 'Others' },
  { name: 'Performance Optimization', percentage: 70, category: 'Others' },
];

// Categories including new ones
const categories = [
  'All',
  'Frontend',
  'Backend',
  'Database',
  'Tools',
  'Software Engineering',
  'OS',
  'Others',
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills =
    selectedCategory === 'All'
      ? skillsData
      : skillsData.filter(skill => skill.category === selectedCategory);

  return (
    <section className="technical-skills">
      <h2>Technical Skills</h2>

      <div className="category-filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
            aria-pressed={selectedCategory === cat}
          >
            {cat}
          </button>
        ))}
      </div>

    

<div
  className={selectedCategory === 'All' ? 'skills-slider-wrapper' : 'skills-grid'}
>
  {filteredSkills.map((skill, index) => (
    <motion.div
      className="skill-card glass"
      key={skill.name}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      variants={fadeInUp}
    >
      <div className="skill-header">
        <h3>{skill.name}</h3>
      </div>
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${skill.percentage}%` }}
          aria-label={`${skill.name} skill level`}
        ></div>
      </div>
      <p className="percentage">{skill.percentage}%</p>
    </motion.div>
  ))}
</div>

    </section>
  );
};

export default Skills;
