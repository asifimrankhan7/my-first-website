import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { Command, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Header = () => {
  const { themePreference, setThemePreference } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  const activeSection = useScrollSpy(isHome ? ['home', 'projects', 'about', 'contact'] : []);
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [modifierKey, setModifierKey] = useState('Ctrl');
  
  useEffect(() => {
    if (navigator.platform.toLowerCase().includes('mac')) {
      setModifierKey('⌘');
    }
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const getNavLinkClass = (sectionId, mobile = false) => {
    const isActive = activeSection === sectionId;
    const baseClass = mobile ? 'text-2xl font-bold transition-colors' : 'text-sm font-medium transition-colors';
    return `${baseClass} ${
      isActive 
        ? 'text-slate-900 dark:text-white' 
        : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
    }`;
  };

  const handleLinkClick = (e, sectionId) => {
    setIsMobileMenuOpen(false);
    if (isHome) {
      e.preventDefault();
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = (e) => {
    setIsMobileMenuOpen(false);
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const triggerCmdK = () => {
    setIsMobileMenuOpen(false);
    const event = new KeyboardEvent('keydown', { key: 'k', metaKey: true });
    document.dispatchEvent(event);
  };

  return (
    <>
      <a 
        href="#main-content"
        className="absolute -top-12 left-4 z-[1200] px-4 py-3 rounded bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold focus:top-4 transition-all"
      >
        Skip to content
      </a>
      
      <header className="sticky top-0 z-[1000] h-20 flex items-center bg-white/80 dark:bg-[#050505]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/50">
        <div className="w-full max-w-7xl mx-auto px-6">
          <nav className="flex items-center justify-between" aria-label="Primary navigation">
            <div className="flex items-center gap-8">
              <Link 
                className="font-mono font-bold tracking-tighter text-xl text-slate-900 dark:text-white transition-opacity hover:opacity-70 relative z-[1001]" 
                to="/" 
                aria-label="Home"
                onClick={handleLogoClick}
              >
                aik.dev
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-6">
                <a className={getNavLinkClass('about')} href={isHome ? "#about" : "/#about"} onClick={(e) => handleLinkClick(e, 'about')}>
                  About
                </a>
                <a className={getNavLinkClass('projects')} href={isHome ? "#projects" : "/#projects"} onClick={(e) => handleLinkClick(e, 'projects')}>
                  Work
                </a>
                <a className={getNavLinkClass('contact')} href={isHome ? "#contact" : "/#contact"} onClick={(e) => handleLinkClick(e, 'contact')}>
                  Contact
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 relative z-[1001]">
              <button 
                onClick={triggerCmdK}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-sm text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                aria-label="Open command palette"
              >
                <Command className="w-4 h-4" />
                <span className="hidden sm:inline font-mono text-xs">{modifierKey} K</span>
              </button>

              <button 
                className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                onClick={() => setThemePreference(themePreference === 'dark' ? 'light' : 'dark')}
                aria-label="Toggle theme"
              >
                {themePreference === 'dark' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                )}
              </button>

              <Link 
                to="/resume"
                className="hidden md:inline-block text-sm font-medium text-slate-900 dark:text-white hover:opacity-70 transition-opacity"
              >
                Resume
              </Link>

              {/* Mobile Menu Toggle Button */}
              <button 
                className="md:hidden flex items-center justify-center w-8 h-8 rounded-lg text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Full-screen Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[999] bg-white dark:bg-[#050505] pt-28 px-6 pb-6 flex flex-col md:hidden overflow-y-auto">
          <nav className="flex flex-col gap-8 items-start animate-in fade-in slide-in-from-bottom-4 duration-300">
            <a className={getNavLinkClass('about', true)} href={isHome ? "#about" : "/#about"} onClick={(e) => handleLinkClick(e, 'about')}>
              About
            </a>
            <a className={getNavLinkClass('projects', true)} href={isHome ? "#projects" : "/#projects"} onClick={(e) => handleLinkClick(e, 'projects')}>
              Work
            </a>
            <a className={getNavLinkClass('contact', true)} href={isHome ? "#contact" : "/#contact"} onClick={(e) => handleLinkClick(e, 'contact')}>
              Contact
            </a>
            <div className="w-full h-px bg-slate-200 dark:bg-slate-800 my-4"></div>
            <Link 
              to="/resume"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 hover:opacity-70 transition-opacity"
            >
              Resume
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};
