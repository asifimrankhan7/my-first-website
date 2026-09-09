import { useReveal } from '../hooks/useReveal';

export const Hero = () => {
  const textRef = useReveal();
  const imageRef = useReveal();

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-[#fdfdfc]" id="home">
      <div className="container mx-auto px-6 max-w-7xl relative z-20 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left: Text Content */}
        <div className="w-full lg:w-3/5 reveal" ref={textRef}>
          
          <div className="mb-10">
            <p className="text-xs font-bold tracking-widest uppercase text-[#111111]/50 mb-4">
              Front-End Developer
            </p>
            <div className="w-12 h-px bg-[#111111]/20"></div>
          </div>
          
          <h1 className="font-serif text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] leading-[1.05] tracking-tight text-[#111111] mb-10">
            Crafting <br className="hidden sm:block" />
            <span className="italic opacity-90">digital</span> <br className="hidden sm:block" />
            experiences.
          </h1>
          
          <p className="max-w-md text-[#111111]/70 font-light leading-relaxed text-lg md:text-xl mb-12">
            Hi, I’m Asif Imran Khan. A Frontend Engineer specializing in accessible, pixel-perfect user interfaces and high-performance design systems.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <a 
              href="#contact" 
              className="group flex items-center gap-4 text-[#111111] hover:opacity-70 transition-opacity"
            >
              <span className="text-xs font-bold uppercase tracking-widest">Get in touch</span>
              <div className="w-8 h-px bg-[#111111] group-hover:w-12 transition-all duration-300"></div>
            </a>
            
            <a 
              href="#projects" 
              className="group flex items-center gap-4 text-[#111111]/60 hover:text-[#111111] transition-colors"
            >
              <span className="text-xs font-bold uppercase tracking-widest">View work</span>
              <div className="w-8 h-px bg-[#111111]/40 group-hover:w-12 group-hover:bg-[#111111] transition-all duration-300"></div>
            </a>
          </div>

        </div>
        
        {/* Right: Elegant Image */}
        <div className="w-full lg:w-2/5 reveal relative" ref={imageRef}>
          <div className="relative w-full aspect-[3/4] max-w-[450px] mx-auto lg:ml-auto overflow-hidden bg-[#f0f0f0]">
            <img 
              src="/assets/images/profile-optimized.webp" 
              alt="Asif Imran Khan" 
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
          
          {/* Decorative minimalist element */}
          <div className="absolute -bottom-8 -left-8 w-24 h-24 border border-[#111111]/10 rounded-full hidden lg:block"></div>
          <div className="absolute top-1/4 -right-12 w-32 h-px bg-[#111111]/10 hidden lg:block"></div>
        </div>

      </div>
    </section>
  );
};
