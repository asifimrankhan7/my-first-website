import { useReveal } from '../hooks/useReveal';
import { useTheme } from '../context/ThemeContext';

export const Hero = () => {
  const revealRef = useReveal();
  const { themePreference } = useTheme();

  return (
    <section className="relative flex flex-col justify-center min-h-[calc(100svh-80px)] overflow-hidden bg-white dark:bg-[#050505]" id="home">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-3xl reveal" ref={revealRef}>
          <div className="flex items-center gap-3 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-bold tracking-widest uppercase text-slate-500">
              Available for freelance
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[1.05] tracking-tight mb-8 text-slate-900 dark:text-white">
            Frontend Engineer specializing in <span className="text-slate-400 dark:text-slate-500">design systems</span> & <span className="text-slate-400 dark:text-slate-500">performance.</span>
          </h1>
          
          <p className="max-w-2xl text-lg md:text-xl text-pretty text-slate-600 dark:text-slate-400 leading-relaxed font-light mb-12">
            I am Asif Imran Khan. I build highly accessible, pixel-perfect digital experiences for the web. 
            My approach bridges the gap between meticulous design and rigorous engineering standards.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold transition-all hover:-translate-y-0.5 hover:shadow-lg dark:hover:shadow-white/20 border border-slate-800 dark:border-white/10 shadow-sm"
            >
              View Selected Work
            </a>
            <a 
              href="https://github.com/techyaik" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white font-semibold transition-colors"
            >
              GitHub <span className="font-mono opacity-50 text-xs">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
