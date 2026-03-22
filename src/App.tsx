import { lazy, Suspense } from 'react';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SocialBar from "./components/SocialBar";
import Lens from "./components/Lens";
import Navbar from "./components/Navbar";
import ScrollTop from './components/ScrollTop';

// Lazy load Hero — loads Three.js only after critical content renders
const Hero = lazy(() => import('./components/Hero'));

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <SocialBar />
      <Suspense fallback={
        <div className="h-[100svh] w-screen bg-gradient-to-br from-purple-900 via-black to-cyan-900" />
      }>
        <Hero />
      </Suspense>
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