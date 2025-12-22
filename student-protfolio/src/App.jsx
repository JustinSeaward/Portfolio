import { useState } from "react";
import Navbar from "./components/navbar/Narbar";
import Landing from "./pages/landing-page/Landing";
import Projects from "./components/project/Project";
import Skills from "./components/skills/Skills";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
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
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
