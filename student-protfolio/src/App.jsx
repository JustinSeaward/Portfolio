import { useState } from "react";
import Navbar from "./components/navbar/Narbar";
import Landing from "./pages/landing-page/Landing";
import Projects from "./components/project/Project";
import Skills from "./components/skills/Skills";
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
        <Footer />
      </div>
    </>
  );
}

export default App;
