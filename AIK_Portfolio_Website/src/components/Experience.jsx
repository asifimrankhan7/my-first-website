import { useReveal } from '../hooks/useReveal';
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceItem = ({ exp }) => {
  const expRef = useReveal();
  
  return (
    <div ref={expRef} className="reveal relative pl-12 md:pl-0">
      
      {/* Timeline Line for Mobile */}
      <div className="md:hidden absolute left-0 top-2 bottom-0 w-px bg-slate-200 dark:bg-slate-800"></div>
      <div className="md:hidden absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700"></div>

      <div className="md:grid md:grid-cols-4 md:gap-8 items-baseline">
        {/* Date & Location */}
        <div className="mb-2 md:mb-0 md:col-span-1 text-sm font-mono text-slate-500 dark:text-slate-400 md:text-right flex flex-row md:flex-col gap-2 md:gap-1">
          <span className="flex items-center md:justify-end gap-1.5">
            <Calendar className="w-3.5 h-3.5 hidden md:block" /> {exp.date}
          </span>
          <span className="opacity-70">{exp.location}</span>
        </div>

        {/* Content */}
        <div className="md:col-span-3 pb-8 md:pb-12 md:border-l md:border-slate-200 md:dark:border-slate-800 md:pl-8 relative">
          {/* Timeline Node for Desktop */}
          <div className="hidden md:block absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700 ring-4 ring-white dark:ring-[#050505]"></div>
          
          <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            {exp.role}
          </h3>
          <div className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-4 flex items-center gap-1.5 mt-1 uppercase tracking-wide">
            <Briefcase className="w-4 h-4" /> {exp.company}
          </div>
          
          <ul className="space-y-3">
            {exp.achievements.map((achievement, i) => (
              <li key={i} className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed relative pl-4">
                <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export const Experience = () => {
  const revealRef = useReveal();

  const experiences = [
    {
      role: "Freelancer",
      company: "AIK Studio",
      date: "2024 - PRESENT",
      location: "Worldwide",
      achievements: [
        "Specializing in building responsive and accessible front-end experiences.",
        "Delivering high-quality digital products for clients worldwide."
      ]
    },
    {
      role: "Senior Executive Clinical",
      company: "SAGILITY INDIA PRIVATE LIMITED",
      date: "01/2023 - PRESENT",
      location: "Bangalore, IN",
      achievements: [
        "Assign standardized codes for diagnoses and procedures.",
        "Ensure compliance with healthcare regulations.",
        "Communicate with insurers to resolve claims."
      ]
    },
    {
      role: "ER Nurse",
      company: "NEW JANAPRIYA SUPER SPECIALITY HOSPITAL",
      date: "10/2022 - 01/2023",
      location: "India",
      achievements: [
        "Rapid assessment and prioritization of patient conditions.",
        "Administered medications and performed critical procedures.",
        "Collaborated with teams for effective treatment plans."
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-slate-50 dark:bg-[#080808]" id="experience">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-16 reveal" ref={revealRef}>
          <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Work Experience</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Professional Background.
          </h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};
