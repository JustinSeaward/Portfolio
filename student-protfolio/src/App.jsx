import { useState } from "react";
import Navbar from "./components/navbar/Narbar";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main-container">
        <Navbar />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Footer />
      </div>
    </>
  );
}

export default App;
