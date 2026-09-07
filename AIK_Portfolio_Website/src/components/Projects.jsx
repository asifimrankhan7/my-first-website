import { useReveal } from '../hooks/useReveal';
import { ExternalLink } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: "The Aspire Hotel",
    description: "The official website for The Aspire Hotel in Guwahati, showcasing luxurious modern rooms, amenities, and a smooth booking-focused hospitality experience.",
    tech: ["Hospitality", "Hotel Website", "Booking UX"],
    link: "https://theaspirehotel.com/",
    image: "/assets/images/project-aspire-hotel-slider2.jpeg"
  },
  {
    id: 2,
    title: "Aaron Holmes Residential",
    description: "A luxury real estate platform for London and UK property experts with dynamic listings, advanced search filters, and market intelligence reports.",
    tech: ["PHP", "UI/UX", "Real Estate Tech"],
    link: "https://aaron-holmes.com/design/index.php?page=home",
    image: "/assets/images/project-aaron-holmes.jpeg"
  },
  {
    id: 3,
    title: "Yumly - Recipes & Meal Planner",
    description: "A recipe and meal-planning app that helps users discover, save, and cook delicious meals with ingredient search, step-by-step instructions, and personalized meal plans.",
    tech: ["Android", "Recipes", "Meal Planning"],
    link: "https://play.google.com/store/apps/details?id=com.aik.yumly",
    image: "/assets/images/project-yumly-card.webp"
  },
  {
    id: 4,
    title: "MAPS Architects",
    description: "An official portfolio website for MAPS Architects, highlighting their high-end residential and commercial architectural projects with a highly visual, masonry-style gallery.",
    tech: ["Architecture", "Portfolio", "Web Design"],
    link: "https://mapsarchitects.in/",
    image: "/assets/images/project-maps-architects.png"
  }
];

const ProjectCard = ({ project }) => {
  const projectRef = useReveal();
  
  return (
    <article 
      ref={projectRef}
      className="reveal group bg-white dark:bg-[#101010] border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden flex flex-col hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-emerald-900/10 transition-all duration-300"
    >
      <div className="relative aspect-[4/3] sm:aspect-video md:aspect-[4/3] lg:aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-[#151515]">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 dark:group-hover:bg-black/20 transition-colors duration-300"></div>
      </div>
      
      <div className="p-6 sm:p-8 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
          {project.title}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map(tech => (
            <span key={tech} className="px-2.5 py-1 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 rounded text-xs font-mono font-medium">
              {tech}
            </span>
          ))}
        </div>

        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors w-max"
        >
          View Project <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </article>
  );
};

export const Projects = () => {
  const revealRef = useReveal();

  return (
    <section className="py-24 md:py-32 bg-white dark:bg-[#050505]" id="projects">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="mb-16 md:mb-24 reveal" ref={revealRef}>
          <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Portfolio</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Featured Projects.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
