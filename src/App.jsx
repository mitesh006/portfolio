import Navbar from "./layouts/Navbar/navbar";
import Hero from "./layouts/Hero/hero";
import About from "./layouts/About/about";
import Skill from "./layouts/Skills/skills";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>
    </div>
  );
}

export default App;
