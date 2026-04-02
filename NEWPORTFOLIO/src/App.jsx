import { Route, Routes } from "react-router-dom";
import NavBar from "./layout/NavBar";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import About from "./sections/About";
import Hero from "./sections/Hero";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Experience />
    </div>
  );
}

export default App;
