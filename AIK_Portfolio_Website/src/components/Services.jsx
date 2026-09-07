import { useReveal } from '../hooks/useReveal';
import { Code2, Activity, Lightbulb } from 'lucide-react';

const ServiceCard = ({ service, index }) => {
  const cardRef = useReveal();
  
  return (
    <div 
      ref={cardRef}
      className="reveal p-8 rounded-2xl bg-slate-50 dark:bg-[#101010] border border-slate-200 dark:border-slate-800 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-500/10 mb-6">
        {service.icon}
      </div>
      <div className="text-4xl font-black text-slate-200 dark:text-slate-800 mb-4 opacity-50 font-mono">
        {String(index + 1).padStart(2, '0')}
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
        {service.title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
        {service.description}
      </p>
    </div>
  );
};

export const Services = () => {
  const revealRef = useReveal();

  const services = [
    {
      title: "Front-End Development",
      description: "I build responsive and accessible front-end experiences with a focus on clean implementation, usability, and polished digital presentation.",
      icon: <Code2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
    },
    {
      title: "Healthcare Operations",
      description: "My background in nursing and medical coding brings precision, compliance awareness, and structured problem-solving to every digital workflow I help build.",
      icon: <Activity className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
    },
    {
      title: "User-Centered Solutions",
      description: "I solve problems with empathy and attention to detail, creating robust interfaces that feel intuitive, accessible, and reliable for real users.",
      icon: <Lightbulb className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-slate-50 dark:bg-[#080808]" id="services">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16 md:mb-24 reveal" ref={revealRef}>
          <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Services</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            What I <span className="text-emerald-600 dark:text-emerald-400">do.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
