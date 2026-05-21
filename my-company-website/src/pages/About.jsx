import founderImg from "../assets/founder.png";

function About() {
  const timelineData = [
    {
      year: "2022",
      title: "First Year - Foundational Engineering",
      description: "Started Computer Science journey at UIT, Myanmar. Developed a C++ Console Quiz System and a Sports Club Management web app using HTML, CSS, and vanilla JS.",
      badge: "C++ & Web Basics"
    },
    {
      year: "2023",
      title: "Second Year - Desktop GUI & OOP",
      description: "Explored advanced Object-Oriented Programming and database integration. Engineered a desktop Online Banking Application using Java SE Swing GUI.",
      badge: "Java SE Swing"
    },
    {
      year: "2024",
      title: "Third Year - Full-Stack Databases & Architectures",
      description: "Built an Online Voting System using PHP, and designed a high-concurrency Online Movie Ticket booking system utilizing Java EE and Spring Boot backend API architectures.",
      badge: "Spring Boot & PHP"
    },
    {
      year: "2025 - 2026",
      title: "Fourth Year - Capstone Candidate & Industry Transition",
      description: "Architecting a large-scale University Registration System with a modular React frontend and decoupled Java Spring Boot REST API. 3 semesters left including internship.",
      badge: "React + Spring Boot"
    }
  ];

  return (
    <section className="pt-36 pb-24 px-6 max-w-7xl mx-auto min-h-screen space-y-24">
      {/* Intro Section */}
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Glowing Image */}
        <div className="flex-1 flex justify-center w-full">
          <div className="relative group w-full max-w-[320px] aspect-[3/4]">
            {/* Background glowing gradients */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500 to-violet-600 rounded-2xl blur-xl opacity-35 group-hover:opacity-60 transition duration-1000"></div>
            
            {/* Image card */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-[#070b1e]/60 p-2 shadow-2xl group-hover:border-cyan-400/50 transition-colors duration-500">
              <img
                src={founderImg}
                alt="Kaung Myat Htet - Founder"
                className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-[1.02]"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=500";
                }}
              />
            </div>
          </div>
        </div>

        {/* Right: Biography */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-semibold uppercase tracking-wider">
            Lead Developer
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Kaung Myat Htet <span className="text-cyan-400">(Kai)</span>
          </h2>
          <h3 className="text-lg font-mono text-gray-400">
            Computer Science Major &bull; UIT, Myanmar
          </h3>
          
          <div className="space-y-4 text-gray-300 font-light text-base md:text-lg leading-relaxed max-w-2xl">
            <p>
              I am a Computer Science student at UIT, Myanmar, focused on becoming a skilled full-stack developer. Right now, I'm deep in backend fundamentals: building APIs, working with databases, and making systems that actually run well.
            </p>
            <p>
              My path is intentional — master the backend first, then layer in frontend, then connect it all. I believe understanding what happens behind the scenes makes you a much better developer on every layer.
            </p>
            <p className="text-cyan-300/90 font-medium">
              With 3 semesters left — including a capstone project and an internship — I'm building real things, joining events, and preparing for the industry. This site grows with me.
            </p>
          </div>

          {/* Skill badging */}
          <div className="pt-4 space-y-3">
            <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-widest text-center lg:text-left">Technical Arsenal</h4>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {[
                "Java Spring Boot",
                "Laravel (PHP)",
                "React.js",
                "Tailwind CSS",
                "PostgreSQL / MySQL",
                "Vite & Node.js",
                "API Architecture",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1.5 bg-white/[0.03] border border-white/10 rounded-full text-xs font-mono text-gray-300 hover:border-cyan-400/40 hover:text-white transition-all cursor-default shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            My Coding Journey
          </h3>
          <p className="text-gray-400 text-sm">
            A chronological timeline of academic achievements, technical milestones, and built systems at UIT.
          </p>
        </div>

        {/* Timeline Line Tree */}
        <div className="relative max-w-4xl mx-auto border-l-2 border-dashed border-white/10 pl-6 md:pl-10 space-y-12 ml-4 md:ml-auto">
          {timelineData.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-cyan-400 border-4 border-[#0b112c] group-hover:bg-violet-400 group-hover:scale-125 transition-all shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
              
              {/* Timeline Card */}
              <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 hover:bg-white/[0.04] transition-all duration-300 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <span className="text-lg font-mono font-bold text-cyan-400 tracking-wider">
                    {item.year}
                  </span>
                  <span className="self-start px-2.5 py-0.5 rounded text-[11px] font-mono bg-violet-500/10 border border-violet-500/30 text-violet-400">
                    {item.badge}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
