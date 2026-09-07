import { useReveal } from '../hooks/useReveal';

export const About = () => {
  const containerRef = useReveal();
  const leftColRef = useReveal();
  const rightColRef = useReveal();

  return (
    <section className="py-24 md:py-32 bg-white dark:bg-[#050505]" id="about">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="mb-16 md:mb-24 reveal" ref={containerRef}>
          <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">About</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Identity & Expertise.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Image & Profile */}
          <div className="lg:col-span-4 reveal" ref={leftColRef}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-200 dark:bg-slate-800 mb-6 border border-slate-200 dark:border-slate-800 shadow-sm">
              <img 
                src="/assets/images/profile-optimized.webp" 
                alt="Asif Imran Khan" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                loading="lazy"
              />
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Asif Imran Khan</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                Front-End Developer at AIK Studio focused on accessible digital experiences.
              </p>
              
              <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider rounded border border-emerald-100 dark:border-emerald-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for freelance
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-8 reveal" ref={rightColRef}>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
              Building digital experiences with precision and empathy.
            </h3>
            
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-12 lg:mb-16">
              My journey did not start behind a screen, but at the bedside. As a Registered Nurse, I learned to navigate high-pressure environments where precision and empathy are everything. In 2025, I decided to channel that same dedication into building digital solutions. Today, I build user-centric applications and accessible front-end experiences with the same care and attention to detail I once used in healthcare.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
              
              {/* Competencies */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-800 pb-3">
                  Core Competencies
                </h4>
                <ul className="space-y-6">
                  {[
                    { label: 'Front-End Development', value: '95' },
                    { label: 'Healthcare Administration', value: '92' },
                    { label: 'User-Centered Problem Solving', value: '90' }
                  ].map(comp => (
                    <li key={comp.label}>
                      <div className="flex justify-between items-center mb-2.5">
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{comp.label}</span>
                        <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">{comp.value}%</span>
                      </div>
                      {/* Architectural minimalist progress bar */}
                      <div className="w-full h-[2px] bg-slate-200 dark:bg-slate-800 relative rounded-full overflow-hidden">
                        <div 
                          className="absolute top-0 left-0 h-full bg-slate-900 dark:bg-white rounded-full transition-all duration-1000 ease-out" 
                          style={{ width: `${comp.value}%` }}
                        ></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-800 pb-3">
                  Technical Stack
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {['React', 'JavaScript', 'PHP', 'HTML', 'CSS', 'Tailwind', 'HTTPS', 'Accessibility', 'Medical Coding', 'Critical Care'].map(tech => (
                    <span 
                      key={tech} 
                      className="px-3 py-1.5 bg-white dark:bg-[#101010] border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 rounded text-xs font-mono font-medium hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
