import "./Skills.css";

const Skills = () => {
  // We store skills in an array for easy updates
  const skills = [
    { name: "Python", icon: "🐍", level: "Intermediate" },
    { name: "React", icon: "⚛️", level: "Intermediate" },
    { name: "JavaScript", icon: "🟨", level: "Intermediate" },
    { name: "HTML/CSS", icon: "🎨", level: "Advanced" },
  ];

  return (
    <section className="skills-section" id="skills">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
