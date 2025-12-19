import "./Project.css";

const Projects = () => {
  const projectList = [
    {
      title: "Hab Taxi Service",
      description:
        "A Python script that processes data files. Stores and retrieves information for employees, car rentals, payments, revenue, expenses and finances.",
      tech: ["Python"],
      link: "https://github.com/JustinSeaward/HAB_TAXI_SERVICE",
    },
    {
      title: "Portfolio Site",
      description: "This website! Built to showcase my journey as a developer.",
      tech: ["React", "Vite", "CSS"],
      link: "",
    },
    // Add more projects here later!
  ];

  return (
    <section className="projects-section" id="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>
            <a href={project.link} className="project-link">
              View Code &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
