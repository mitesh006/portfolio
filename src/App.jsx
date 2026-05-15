import Navbar from "./layouts/Navbar/navbar";
import Hero from "./layouts/Hero/hero";
import About from "./layouts/About/about";
import Skill from "./layouts/Skills/skills";
import Projects from "./layouts/Projects/projects";
import Contact from "./layouts/Contact/contact"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
