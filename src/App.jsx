import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Phone, Code, Download, Briefcase, Code2, User, ChevronRight, Menu, X } from "lucide-react";

const GithubIcon = ({ className, size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = ({ className, size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const Highlight = ({ children }) => (
  <strong className="text-cyan-400 font-semibold bg-cyan-400/10 px-1 py-0.5 rounded-md break-words">
    {children}
  </strong>
);

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scroll handler
  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'skills'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Ambient Glowing Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-cyan-600/10 blur-[120px] rounded-full mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-10%] right-[-5%] w-[35vw] h-[35vw] bg-blue-600/10 blur-[100px] rounded-full mix-blend-screen animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute top-[40%] left-[60%] w-[25vw] h-[25vw] bg-cyan-400/5 blur-[90px] rounded-full mix-blend-screen" />
      </div>

      {/* Sticky Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div 
            className="text-2xl font-black tracking-tighter text-white cursor-pointer group flex items-center gap-1"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span>RP</span>
            <span className="text-cyan-500 group-hover:animate-ping">.</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {['About', 'Experience', 'Skills'].map((item) => {
              const id = item.toLowerCase();
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(id)}
                  className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                    activeSection === id ? 'text-cyan-400' : 'text-slate-400 hover:text-slate-100'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </nav>

          {/* Action / Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a href="/Ravi Resume.pdf" download="Ravi Resume.pdf" className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/30 rounded-full text-sm font-medium text-white transition-all duration-300 backdrop-blur-sm group">
              <Download className="w-4 h-4 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
              <span>Download CV</span>
            </a>
            <button 
              className="md:hidden p-2 text-slate-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (Fixed Overlay) */}
        <div className={`md:hidden absolute top-20 left-0 w-full bg-[#020617]/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 origin-top ${isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
          <nav className="flex flex-col px-6 pt-4 pb-8 space-y-3 shadow-2xl shadow-black">
            {['About', 'Experience', 'Skills'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left px-4 py-3 rounded-xl hover:bg-white/5 text-base font-medium text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {item}
              </button>
            ))}
            <a href="/Ravi Resume.pdf" download="Ravi Resume.pdf" className="flex items-center justify-center gap-2 w-full mt-4 px-5 py-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-base font-medium text-cyan-300 active:bg-cyan-500/20">
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Main Layout - Added pt-40 for mobile to give the floating avatar room */}
      <main className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-4 sm:px-6 lg:px-8 pt-40 lg:pt-32 pb-24 min-h-screen">
        
        {/* Left Sidebar (Developer Trading Card) */}
        <aside className="w-full lg:w-[380px] lg:shrink-0 lg:sticky lg:top-32 h-fit order-1">
          <div className="bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md shadow-2xl shadow-black/50 group hover:border-white/20 transition-all duration-500">
            
            {/* Banner Pattern */}
            <div className="h-32 bg-gradient-to-br from-cyan-900/30 via-[#020617] to-slate-900/80 relative border-b border-white/5 overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNykiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
            </div>

            {/* Profile Content */}
            <div className="px-6 sm:px-8 pb-8 relative">
              {/* Avatar */}
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-cyan-600 to-blue-900 border-4 border-[#020617] absolute -top-12 left-6 sm:left-8 flex items-center justify-center text-3xl font-black text-white shadow-xl shadow-cyan-900/20 group-hover:scale-105 group-hover:-rotate-3 transition-transform duration-500">
                RP
              </div>

              <div className="pt-16">
                <h1 className="text-3xl font-bold text-white tracking-tight">Ravi Panchal</h1>
                <p className="mt-2 text-sm leading-relaxed text-slate-400 font-medium">
                  Software Developer | <span className="text-cyan-400">5+ Years Experience</span> | Telecom & Gaming
                </p>

                {/* Contact List (Added shrink-0 and truncate for mobile safety) */}
                <div className="mt-8 space-y-4 overflow-hidden">
                  <div className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span className="truncate">Pune, India & Reading, UK</span>
                  </div>
                  <a href="tel:+916351202462" className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors group/link">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover/link:border-cyan-500/30 group-hover/link:bg-cyan-500/10 transition-all shrink-0">
                      <Phone className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span className="truncate">+91-6351202462</span>
                  </a>
                  <a href="mailto:pravi7031@gmail.com" className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors group/link">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover/link:border-cyan-500/30 group-hover/link:bg-cyan-500/10 transition-all shrink-0">
                      <Mail className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span className="truncate">pravi7031@gmail.com</span>
                  </a>
                  <a href="https://linkedin.com/in/ravi2205" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors group/link">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover/link:border-cyan-500/30 group-hover/link:bg-cyan-500/10 transition-all shrink-0">
                      <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span className="truncate">linkedin.com/in/ravi2205</span>
                  </a>
                  <a href="https://github.com/ravi02205" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors group/link">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover/link:border-cyan-500/30 group-hover/link:bg-cyan-500/10 transition-all shrink-0">
                      <GithubIcon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span className="truncate">github.com/Ravi02205</span>
                  </a>
                  <a href="https://leetcode.com/ravi05" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors group/link">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover/link:border-cyan-500/30 group-hover/link:bg-cyan-500/10 transition-all shrink-0">
                      <Code className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span className="truncate">leetcode.com/ravi05</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Content Area */}
        <div className="flex-1 space-y-16 sm:space-y-24 order-2 pb-12 sm:pb-24 overflow-hidden">
          
          {/* About Section */}
          <section id="about" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <User className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">About Me</h2>
            </div>
            
            <div className="space-y-6 text-slate-400 leading-loose text-[15px]">
              <p>
                Software Developer with 5+ years of experience building large-scale mobile and web applications in telecom and gaming. Led on-site production deployments in the UK for the Three UK flagship app, cut <Highlight>CI/CD</Highlight> build times by 30%, and lifted app store ratings from 3.0 to 4.2. 
              </p>
              <p>
                Skilled in <Highlight>Flutter</Highlight>, <Highlight>React</Highlight>, <Highlight>TypeScript</Highlight>, <Highlight>CI/CD</Highlight>, and <Highlight>observability</Highlight>, with a record of building internal tooling that saves engineering days per release.
              </p>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-8 sm:mb-10">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Experience</h2>
            </div>

            <div className="space-y-8 border-l-2 border-white/5 ml-2 sm:ml-4">
              
              {/* Job 1 */}
              <div className="relative pl-6 sm:pl-8 group">
                <div className="absolute w-4 h-4 bg-[#020617] border-2 border-cyan-500 rounded-full -left-[9px] top-1.5 group-hover:bg-cyan-500 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.6)] transition-all duration-300" />
                <div className="bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] p-5 sm:p-6 rounded-2xl transition-all duration-300">
                  <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-2 xl:gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-200">Software Developer (Experienced)</h3>
                      <div className="text-cyan-400 font-medium text-sm mt-1">Amdocs | Pune, India & Reading, UK</div>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 bg-white/5 border border-white/10 rounded-full text-slate-400 w-fit">
                      May 2024 - Present
                    </span>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-400 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-cyan-500/70 mt-1 shrink-0" />
                      <span>Led on-site deployment and production support in Reading, UK for the Three UK flagship application, managing high-stakes App Store/Play Store release cycles for millions of users.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-cyan-500/70 mt-1 shrink-0" />
                      <span>Optimized application performance and UX, resolving critical cross-platform compatibility issues that contributed to a sustained rating increase from 3.0 to 4.2 stars.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-cyan-500/70 mt-1 shrink-0" />
                      <span>Re-engineered <Highlight>CI/CD</Highlight> infrastructure by migrating build processes to a dedicated Mac mini-based <Highlight>Jenkins</Highlight> cluster, reducing build times by 30% (from 35 to 22 minutes).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-cyan-500/70 mt-1 shrink-0" />
                      <span>Integrated secure payment gateways (Apple Pay, Google Pay) and advanced engagement modules (Swrve, Adobe Data Layer), while enhancing system observability through <Highlight>Dynatrace</Highlight> and Medallia.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-cyan-500/70 mt-1 shrink-0" />
                      <span>Drove adoption of Unit Testing (<Highlight>TDD</Highlight>), resulting in a 25% reduction in E2E production issues and establishing a data-driven quality culture within Agile workflows.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Job 2 */}
              <div className="relative pl-6 sm:pl-8 group">
                <div className="absolute w-4 h-4 bg-[#020617] border-2 border-slate-700 rounded-full -left-[9px] top-1.5 group-hover:border-cyan-500 group-hover:bg-cyan-500/20 transition-all duration-300" />
                <div className="bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] p-5 sm:p-6 rounded-2xl transition-all duration-300">
                  <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-2 xl:gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-200">Software Engineer - Front-end</h3>
                      <div className="text-slate-400 font-medium text-sm mt-1">IVY Comptech - Entain | Hyderabad, India</div>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 bg-white/5 border border-white/10 rounded-full text-slate-500 w-fit">
                      Sep 2021 - May 2024
                    </span>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-400 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-cyan-500/70 mt-1 shrink-0" />
                      <span>Architected a "Pixel-Perfect" Internal Game Engine using <Highlight>ReactJs</Highlight>, enabling developers to automate game structure creation through a Drag-and-Drop GUI.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-cyan-500/70 mt-1 shrink-0" />
                      <span>Developed an automated asset-alignment system that transformed UI/UX layouts into production-ready <Highlight>XML/JSON</Highlight> configurations.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-cyan-500/70 mt-1 shrink-0" />
                      <span>Led the end-to-end frontend development of high-traffic casino titles such as Legacy of Horus and Excalibur, utilizing Object-Oriented JavaScript (<Highlight>OOJS</Highlight>).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-cyan-500/70 mt-1 shrink-0" />
                      <span>Awarded Employee of the Year (2022-2023) for leading NFR (Non-Functional Requirement) infrastructure tools.</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-8 sm:mb-10">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <Code2 className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Technical Skills</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              
              {/* Core Skills */}
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 sm:p-6 hover:bg-white/[0.04] transition-all duration-300">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" /> Languages & Core
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript (ES6+)', 'TypeScript', 'Dart', 'Java', 'Cross-Platform Mobile', 'System Design'].map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs sm:text-sm text-slate-300 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 sm:p-6 hover:bg-white/[0.04] transition-all duration-300">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" /> Frameworks & Libraries
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Flutter', 'React', 'BLOC', 'Redux-Toolkit', 'Node.js', 'Fastify'].map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs sm:text-sm text-blue-200 hover:border-blue-400/50 hover:bg-blue-500/20 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools & Patterns */}
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 sm:p-6 hover:bg-white/[0.04] transition-all duration-300 md:col-span-2">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" /> DB, Cloud & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['PostgreSQL', 'Redis', 'Git', 'Jenkins', 'Docker', 'Firebase', 'Dynatrace'].map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-lg text-xs sm:text-sm text-purple-200 hover:border-purple-400/50 hover:bg-purple-500/20 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </section>

        </div>
      </main>
    </div>
  );
}