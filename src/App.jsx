import React from 'react';

export default function App() {
  const developer = {
    name: "Mustafa",
    designation: "Full-Stack Software Engineer",
    bio: "Building robust mobile applications, backend microservices, and clean web experiences with a passion for software craftsmanship.",
    skills: ["Android", "iOS", "Java Spring Boot", "React", "TypeScript", "PostgreSQL", "Docker"],
    projects: [
      {
        title: "WhatsApp Media Cleaner",
        description: "An independent utility application published on the Google Play Store for managing device storage.",
        tech: ["Android", "Kotlin", "Clean Architecture"],
        link: "#"
      },
      {
        title: "Digital Loan Origination System",
        description: "Enterprise backend system designed with Spring Boot and PostgreSQL featuring document upload pipelines.",
        tech: ["Java Spring Boot", "PostgreSQL", "REST APIs"],
        link: "#"
      },
      {
        title: "Check-in Pax iPad App",
        description: "SwiftUI kiosk application featuring QR code scanning, table management, and autonomous single app mode.",
        tech: ["SwiftUI", "iOS", "Core Data"],
        link: "#"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-indigo-500">
      
      {/* Header / Navbar */}
      <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-indigo-400 font-bold text-lg">
            <svg width="20" height="20" className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <polyline points="4 17 10 11 4 5"></polyline>
              <line x1="12" y1="19" x2="20" y2="19"></line>
            </svg>
            <span>portfolio.dev</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="GitHub">
              <svg width="20" height="20" className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="LinkedIn">
              <svg width="20" height="20" className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="mailto:contact@example.com" className="hover:text-white transition-colors" title="Email">
              <svg width="20" height="20" className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16 flex-grow space-y-16">
        
        {/* Hero Section */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
            <svg width="14" height="14" className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
              <rect x="9" y="9" width="6" height="6"></rect>
              <line x1="9" y1="1" x2="9" y2="4"></line>
              <line x1="15" y1="1" x2="15" y2="4"></line>
              <line x1="9" y1="20" x2="9" y2="23"></line>
              <line x1="15" y1="20" x2="15" y2="23"></line>
              <line x1="20" y1="9" x2="23" y2="9"></line>
              <line x1="20" y1="15" x2="23" y2="15"></line>
              <line x1="1" y1="9" x2="4" y2="9"></line>
              <line x1="1" y1="15" x2="4" y2="15"></line>
            </svg>
            <span>Available for innovative projects</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">{developer.name}</span>
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-slate-300">
            {developer.designation}
          </p>
          <p className="text-slate-400 max-w-2xl text-base leading-relaxed">
            {developer.bio}
          </p>
        </section>

        {/* Skills Section */}
        <section className="space-y-4">
          <h2 className="text-sm font-mono uppercase tracking-wider text-slate-500">Core Expertise</h2>
          <div className="flex flex-wrap gap-2">
            {developer.skills.map((skill, index) => (
              <span key={index} className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-sm font-mono">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-6">
          <h2 className="text-sm font-mono uppercase tracking-wider text-slate-500">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {developer.projects.map((project, index) => (
              <div key={index} className="group p-6 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-indigo-500/50 transition-all flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-white group-hover:text-indigo-400 transition-colors flex items-center gap-2">
                      <svg width="16" height="16" className="w-4 h-4 flex-shrink-0 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                      {project.title}
                    </h3>
                    <svg width="16" height="16" className="w-4 h-4 flex-shrink-0 text-slate-600 group-hover:text-slate-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-6 text-center text-xs text-slate-500 font-mono">
        <p>© {new Date().getFullYear()} {developer.name}. Built with React & Tailwind CSS.</p>
      </footer>

    </div>
  );
}