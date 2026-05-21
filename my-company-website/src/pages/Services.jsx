import { Link } from "react-router-dom";

function Services() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
          Our Premium Services
        </h2>
        <p className="text-gray-400">
          High-impact engineering and digital production tailored to elevate
          your business infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Enterprise Backend */}
        <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-violet-500/40 transition-all group">
          <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-6 text-xl group-hover:bg-violet-500 group-hover:text-black transition-colors">
            ☕
          </div>
          <h3 className="text-2xl font-bold mb-3">
            Java Spring Boot & Laravel
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Architecting robust enterprise backends, secure RESTful APIs, and
            optimized SQL/NoSQL database systems. We ensure maximum system
            availability and seamless upgrades for legacy setups.
          </p>
          <Link
            to="/contact"
            className="text-sm text-cyan-400 font-semibold group-hover:underline"
          >
            Hire Us &rarr;
          </Link>
        </div>

        {/* Interactive Frontend */}
        <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/40 transition-all group">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 text-xl group-hover:bg-cyan-500 group-hover:text-black transition-colors">
            ⚛️
          </div>
          <h3 className="text-2xl font-bold mb-3">React.js & Tailwind CSS</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Crafting premium, fast-loading, and fully responsive user
            interfaces. Focused on delivering fluid user experiences, modular
            architectures, and modern aesthetics across all device screens.
          </p>
          <Link
            to="/contact"
            className="text-sm text-cyan-400 font-semibold group-hover:underline"
          >
            Hire Us &rarr;
          </Link>
        </div>

        {/* Video Production */}
        <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-teal-500/40 transition-all group">
          <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-6 text-xl group-hover:bg-teal-500 group-hover:text-black transition-colors">
            🎬
          </div>
          <h3 className="text-2xl font-bold mb-3">
            Digital Ads & Video Editing
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Producing high-retention video advertisements for digital social
            platforms. Delivering professional cuts, seamless transitions, audio
            mixing, and high-converting commercial media layouts.
          </p>
          <Link
            to="/contact"
            className="text-sm text-cyan-400 font-semibold group-hover:underline"
          >
            Hire Us &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;
