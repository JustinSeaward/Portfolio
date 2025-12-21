import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>About Me</h2>

        <div className="about-info">
          <p>
            My journey into tech is unique. I wrote my first line of code at age
            15 while I was still in highschool. Being taugh Visual Basic at the
            time. But instead of persuing a career in tech I took a detour into
            another passtime. I spent <strong>15+ years as a Millwright</strong>{" "}
            learning how to repair and maintain industrial equimpment and
            working on mechanical projects in my free time. That experience has
            given me a deep foundation in troubleshooting complex systems,
            precision equimpment, and ensuring machinery runs at peak
            performance.
          </p>
          <p>
            Now, after a back injury and having to change course from my career
            I'm apply that same problem-solving mindset to software. Instead of
            replacing gears, chasing hydraulic lines and performing perventivent
            maintance, I'm debugging code, optimizing component structures and
            chasing .CSS alignment.
          </p>
          <p>
            When I'm not coding, im honing my skills on the{" "}
            <strong>Chess</strong> ♟️ board, playing everyday for over a 1000
            days! Developing a different strategy with every move. Two things I
            have learned playing chess: "A good plan is better then no plan" and
            "Never quit and never surrender".
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
