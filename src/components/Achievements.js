import React from 'react';
import './Achievements.css'; // Your enhanced CSS file

const achievementsData = [
  {
    logo: '', 
    title: 'SIH Finalist',
    description:
      'National Finalist in Smart India Hackathon for developing an innovative Anti-Doping Case Management Tool — recognized for its real-world applicability and impact.',
    year: '2024',
    tag: 'Hackathon',
  },
  {
    title: 'LeetCode 250+',
    description:
      'Solved over 250 coding problems on LeetCode, demonstrating strong problem-solving skills and consistency in data structures and algorithms.',
    year: '2024',
    tag: 'DSA Practice',
  },
  {
    title: 'Runner-Up – Ideathon',
    description:
      'Secured Runner-Up at Pragnya Ideathon (GRIET) for proposing a tech-driven solution, judged for creativity, feasibility, and innovation.',
    year: '2023',
    tag: 'Innovation',
  },
  {
    title: 'NPTEL Elite Certificate',
    description:
      'Awarded Elite grade for “The Joy of Computing using Python” by NPTEL – showcasing a strong grasp of foundational programming concepts.',
    year: '2022',
    tag: 'Certification',
  },
];

const Achievements = () => {
  return (
    <section className="achievements-section">
      <h2 className="section-title">Achievements</h2>
      <div className="achievements-grid">
        {achievementsData.map((achievement, index) => (
          <div className="achievement-card" key={index}>
            {achievement.logo && (
              <div className="achievement-logo">
                <img src={achievement.logo} alt={achievement.title + ' logo'} />
              </div>
            )}
            <div className="achievement-header">
              <span className="achievement-tag">{achievement.tag}</span>
              <span className="achievement-year">{achievement.year}</span>
            </div>
            <h3 className="achievement-title">{achievement.title}</h3>
            <p className="achievement-description">{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
