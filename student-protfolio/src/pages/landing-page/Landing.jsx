import "./Landing.css";

const Landing = () => {
  2;
  return (
    <section className="me-section" id="home">
      <h1>
        Hi, I'm <span className="highlight">Justin Seaward</span>
      </h1>
      <h3>Full Stack Developer in Training</h3>
      <p>
        I am a student building web applications and analyzing data. I bridge
        the gap between Python scripts and dynamic React interfaces.
      </p>
      <a
        href="https://github.com/JustinSeaward"
        target="_blank"
        className="btn"
      >
        View My Work
      </a>
    </section>
  );
};

export default Landing;
