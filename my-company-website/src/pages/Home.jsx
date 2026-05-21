import { Link } from "react-router-dom";
import heroMockup from "../assets/hero_mockup.png";

function Home() {
  return (
    <section className="pt-36 pb-24 px-6 max-w-7xl mx-auto min-h-screen flex flex-col lg:flex-row items-center justify-between gap-12">
      <div className="flex-1 text-center lg:text-left space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          UIT Software Engineering Expertise
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Accelerating Innovation Through{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-violet-400 bg-clip-text text-transparent">
            Production-Ready
          </span>{" "}
          Solutions
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-xl font-light">
          We architect high-performance enterprise systems with Java Spring Boot
          and forge modern, interactive user interfaces. Turning complex logic
          into seamless digital reality.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <Link
            to="/portfolio"
            className="w-full sm:w-auto text-center px-8 py-3.5 bg-cyan-400 hover:bg-cyan-300 text-black font-bold rounded-lg transition-colors shadow-lg shadow-cyan-500/20"
          >
            View Projects
          </Link>
        </div>
      </div>

      <div className="flex-1 flex justify-center relative w-full max-w-[500px] mt-8 lg:mt-0">
        {/* Ambient glow backgrounds */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-tr from-cyan-500/20 to-violet-500/25 rounded-full blur-[80px] animate-pulse"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-teal-500/10 rounded-full blur-[50px]"></div>

        {/* Hero image card wrapper with interactive border glow */}
        <div className="relative group w-full aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-[#070b1e]/40 backdrop-blur-md p-2 hover:border-cyan-500/30 transition-all duration-500 shadow-2xl shadow-[#04081c]">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative w-full h-full bg-[#0b112c]/80 rounded-xl overflow-hidden flex items-center justify-center">
            <img
              src={heroMockup}
              alt="KAI STUDIO Software Architecture Mockup"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
