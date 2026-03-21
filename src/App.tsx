import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SocialBar from "./components/SocialBar";
import Lens from "./components/Lens"; 
import Navbar from "./components/Navbar";
import ScrollTop from './components/ScrollTop';

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <SocialBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Lens />
      <Contact />
      <ScrollTop />
    </div>
  );
}

export default App;
