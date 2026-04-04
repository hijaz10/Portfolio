import { Route, Routes } from "react-router-dom";
import NavBar from "./layout/NavBar";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Contact from "./sections/Contact";
import Testimonials from "./sections/Testimonials";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
