

function Portfolio() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      {/* ==================== HEADLINE & SOCIAL LINKS ==================== */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
          Production-Ready Architectures
        </h2>
        <p className="text-gray-400">
          Enterprise and Social Impact systems engineered with rigorous logic
          and modern stacks.
        </p>

        {/* GitHub & LinkedIn Links with Custom Glowing Logos */}
        <div className="flex items-center justify-center gap-6 pt-2">
          {/* GitHub Button */}
          <a
            href="https://github.com/KaungMyatHtet-Coding"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all group"
          >
            <svg
              className="w-5 h-5 fill-current transition-transform group-hover:scale-110"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="text-sm font-mono tracking-wide">GitHub</span>
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/kaung-myat-htet-1776b1391"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-violet-400 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all group"
          >
            <svg
              className="w-5 h-5 fill-current transition-transform group-hover:scale-110"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span className="text-sm font-mono tracking-wide">LinkedIn</span>
          </a>
        </div>
      </div>

      {/* ==================== PROJECTS GRID ==================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Project 1: Hnaung Hnine */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-white/[0.03] to-[#070b1e]/10 border border-white/10 hover:border-violet-500/30 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono px-3 py-1 bg-violet-500/10 border border-violet-500/20 text-violet-400 rounded-md">
              Featured Project
            </span>
            <h3 className="text-2xl font-bold mt-4 mb-2">
              နှောင်ကြိုး (Hnaung Hnine)
            </h3>
            <h4 className="text-sm text-gray-400 mb-4 font-light">
              Decentralized Community Mutual-Aid & Disaster Relief Coordination
            </h4>

            {/* Mock Browser Window for Project Mockup */}
            <div className="w-full rounded-xl bg-black/40 border border-white/10 my-6 overflow-hidden flex flex-col shadow-inner">
              {/* Browser Bar */}
              <div className="w-full h-7 bg-white/[0.03] border-b border-white/5 flex items-center px-4 gap-1.5 shrink-0 select-none">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60"></span>
                <span className="ml-4 text-[10px] font-mono text-gray-500 bg-[#070b1e] px-4 py-0.5 rounded border border-white/5 truncate max-w-[200px] sm:max-w-xs">
                  hnaung-hnine.org/dashboard
                </span>
              </div>
              {/* Image Frame */}
              <div className="w-full h-44 sm:h-52 overflow-hidden relative bg-[#0b112c]">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800"
                  alt="Hnaung Hnine Dashboard Mockup"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b112c]/40 to-transparent pointer-events-none"></div>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A high-availability coordination system built to manage real-time
              disaster relief mapping. Integrates intelligent asset distribution
              logics and secure peer communication infrastructure.
            </p>
          </div>

          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Spring Boot", "React", "PostgreSQL", "Tailwind"].map((t) => (
                <span
                  key={t}
                  className="text-xs bg-white/5 px-2 py-1 rounded text-gray-400 font-mono"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Action Links (Live Demo နှင့် Architecture အပိုင်း) */}
            <div className="flex items-center gap-6 pt-2 border-t border-white/5">
              <span className="text-sm text-cyan-400 font-semibold hover:underline cursor-pointer group-hover:translate-x-1 transition-transform">
                Explore Architecture &rarr;
              </span>
              <span className="text-sm text-emerald-400 font-mono opacity-60 hover:opacity-100 cursor-pointer">
                🌐 Live Demo (Coming Soon)
              </span>
            </div>
          </div>
        </div>

        {/* Project 2: Agri-Direct */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-white/[0.03] to-[#070b1e]/10 border border-white/10 hover:border-cyan-500/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-md">
              Capstone Candidate
            </span>
            <h3 className="text-2xl font-bold mt-4 mb-2">
              Community Agri-Direct
            </h3>
            <h4 className="text-sm text-gray-400 mb-4 font-light">
              Local Food Supply Chain Route Optimizer
            </h4>

            {/* Mock Browser Window for Project Mockup */}
            <div className="w-full rounded-xl bg-black/40 border border-white/10 my-6 overflow-hidden flex flex-col shadow-inner">
              {/* Browser Bar */}
              <div className="w-full h-7 bg-white/[0.03] border-b border-white/5 flex items-center px-4 gap-1.5 shrink-0 select-none">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60"></span>
                <span className="ml-4 text-[10px] font-mono text-gray-500 bg-[#070b1e] px-4 py-0.5 rounded border border-white/5 truncate max-w-[200px] sm:max-w-xs">
                  agri-direct.net/route-optimizer
                </span>
              </div>
              {/* Image Frame */}
              <div className="w-full h-44 sm:h-52 overflow-hidden relative bg-[#0b112c]">
                <img
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800"
                  alt="Agri-Direct Route Optimizer Mockup"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b112c]/40 to-transparent pointer-events-none"></div>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              An enterprise optimization engine matching farmers directly to
              businesses. Implements network routing routing algorithms
              (Dijkstra's/Graph logic) to minimize supply chain transport costs.
            </p>
          </div>

          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Java Spring Boot",
                "React",
                "Algorithm Optimization",
                "GIS Mapping",
              ].map((t) => (
                <span
                  key={t}
                  className="text-xs bg-white/5 px-2 py-1 rounded text-gray-400 font-mono"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Action Links */}
            <div className="flex items-center gap-6 pt-2 border-t border-white/5">
              <span className="text-sm text-cyan-400 font-semibold hover:underline cursor-pointer group-hover:translate-x-1 transition-transform">
                View Supply-Chain Logic &rarr;
              </span>
              <span className="text-sm text-emerald-400 font-mono opacity-60 hover:opacity-100 cursor-pointer">
                🌐 Live Demo (Coming Soon)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
