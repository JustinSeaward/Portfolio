import { useState } from "react";
import Navbar from "./components/navbar/Narbar";
import Landing from "./components/pages/landing-page/Landing";
import Project from "./components/pages/project-page/Project";
import Skills from "./components/pages/skills-page/Skills";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main-container">
        <Navbar />
        <Landing />
        <Skills />
        <Project />
        <Footer />
      </div>
    </>
  );
}

export default App;
