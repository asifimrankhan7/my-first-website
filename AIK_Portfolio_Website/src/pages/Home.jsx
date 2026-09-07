import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';

export const Home = () => {
  return (
    <main id="main-content" className="bg-white dark:bg-[#050505] min-h-screen">
      <Hero />
      <Services />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
};
