import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { Copy, Check, Mail, ArrowUpRight, Send, Loader2 } from 'lucide-react';

export const Contact = () => {
  const revealRef = useReveal();
  const formRevealRef = useReveal();
  const [copied, setCopied] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  
  const email = "imran@idexa.app";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    // Note: We deliberately do NOT use e.preventDefault() here.
    // We want the browser to natively POST the form to formsubmit.co
    // but the target="hidden_iframe" ensures the page doesn't refresh or redirect.
    setStatus('loading');
    
    // Simulate a completion delay since we can't track iframe load events reliably cross-origin
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-slate-50 dark:bg-[#080808]" id="contact">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        
        <div className="reveal mb-12 md:mb-16" ref={revealRef}>
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white dark:bg-[#151515] border border-slate-200 dark:border-slate-800 mb-8 shadow-sm">
            <Mail className="w-8 h-8 text-slate-900 dark:text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
            Let's build something.
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            I am currently open to new opportunities. Fill out the form below or send me a direct email to get in touch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-16 text-left items-start reveal" ref={formRevealRef}>
          
          {/* Contact Form */}
          <div className="md:col-span-3 bg-white dark:bg-[#101010] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden">
            
            {status === 'success' ? (
              <div className="absolute inset-0 bg-white/95 dark:bg-[#101010]/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-500/10 rounded-full flex items-center justify-center mb-6">
                  <Check className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  Send another message
                </button>
              </div>
            ) : null}

            {/* Hidden iframe to prevent page redirect on submit */}
            <iframe name="hidden_iframe" id="hidden_iframe" style={{display: 'none'}}></iframe>

            <form 
              action={`https://formsubmit.co/${email}`} 
              method="POST" 
              target="hidden_iframe" 
              onSubmit={handleSubmit} 
              className="space-y-5"
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_template" value="box" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value={`New Contact from ${formData.name}`} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-[#050505] border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500 transition-colors"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-[#050505] border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-[#050505] border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-[#050505] border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500 transition-colors resize-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4 ml-1" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Direct Contact Info */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <div className="bg-white dark:bg-[#101010] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">Direct Email</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Prefer to send an email directly instead of using the form? No problem.
              </p>
              
              <div className="flex flex-col gap-3">
                <a 
                  href={`mailto:${email}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-bold rounded-xl hover:bg-emerald-100 dark:hover:bg-emerald-500/20 transition-colors"
                >
                  <Mail className="w-4 h-4" /> imran@idexa.app
                </a>
                
                <button 
                  onClick={handleCopy}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-50 dark:bg-[#050505] text-slate-700 dark:text-slate-300 font-medium rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors" /> Copy Address
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
