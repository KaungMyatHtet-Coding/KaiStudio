import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [projectType, setProjectType] = useState("Full-Stack");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    "Full-Stack App",
    "Java Spring Boot",
    "React Frontend",
    "Video Production"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate real network submission with loading delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      console.log("Submitted Data:", { ...formData, projectType });
    }, 1200);
  };

  return (
    <section className="pt-36 pb-24 px-6 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
      <div className="text-center lg:text-left mb-12 space-y-4 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
          Let's Build Something Great
        </h2>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          Whether you want to build a secure enterprise API with Spring Boot or launch a fluid interactive UI with React, we are ready to assist.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        {/* Left Column: Direct Info & Availability */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8 p-8 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent border border-white/10 relative overflow-hidden">
          {/* Neon Orb background */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-[60px] pointer-events-none"></div>

          <div className="space-y-6 relative z-10">
            {/* Availability Indicator */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              Open for Internships & Projects
            </div>

            <h3 className="text-2xl font-bold">Kaung Myat Htet</h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Based in Yangon, Myanmar. Specializing in secure backend architectures and interactive full-stack integrations.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                  ✉
                </div>
                <div>
                  <h4 className="text-xs text-gray-500 font-mono">EMAIL ME DIRECTLY</h4>
                  <a href="mailto:kaungmyathtet.coding@gmail.com" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">
                    rkkaung@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                  📍
                </div>
                <div>
                  <h4 className="text-xs text-gray-500 font-mono">LOCATION</h4>
                  <p className="text-sm text-gray-300">Yangon, Myanmar (GMT+6:30)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 space-y-2">
            <h4 className="text-xs font-mono text-gray-500">CURRENT STATUS</h4>
            <p className="text-xs text-cyan-300/80 leading-relaxed font-light">
              Deep in backend engineering research. Available for remote contract work or full-stack software internships.
            </p>
          </div>
        </div>

        {/* Right Column: Dynamic Form / Success Window */}
        <div className="lg:col-span-7">
          {isSubmitted ? (
            <div className="h-full p-8 md:p-12 bg-white/[0.02] border border-cyan-500/20 rounded-2xl backdrop-blur-md flex flex-col justify-center items-center text-center space-y-6 shadow-xl shadow-cyan-500/5 min-h-[400px]">
              <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-400 rounded-full flex items-center justify-center text-cyan-400 text-3xl shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-white">Message Transmitted!</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto">
                Thank you, <strong className="text-cyan-300">{formData.name}</strong>. Your project details under the <strong className="text-violet-400">{projectType}</strong> category have been securely routed. We will contact you at <strong className="text-cyan-300">{formData.email}</strong> shortly.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: "", email: "", message: "" });
                }}
                className="px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm font-mono text-gray-300 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white/[0.02] border border-white/10 p-8 rounded-2xl backdrop-blur-md hover:border-cyan-500/20 transition-all duration-300"
            >
              {/* Project Type Toggles */}
              <div className="space-y-2">
                <label className="block text-sm font-mono text-cyan-400">
                  Select Project Category
                </label>
                <div className="flex flex-wrap gap-2 pt-1">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setProjectType(type)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-mono border transition-all duration-300 ${
                        projectType === type
                          ? "bg-cyan-500/15 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.15)]"
                          : "bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-mono text-cyan-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  disabled={isSubmitting}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 disabled:opacity-50 transition-colors placeholder:text-gray-600 text-sm"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-cyan-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  disabled={isSubmitting}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 disabled:opacity-50 transition-colors placeholder:text-gray-600 text-sm"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-cyan-400 mb-2">
                  Project Details
                </label>
                <textarea
                  rows="4"
                  required
                  disabled={isSubmitting}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 disabled:opacity-50 transition-colors resize-none placeholder:text-gray-600 text-sm"
                  placeholder="Describe your goals, tech stack preferences, or database requirements..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 disabled:from-gray-700 disabled:to-gray-800 disabled:text-gray-500 text-black font-bold rounded-lg shadow-lg shadow-cyan-500/10 transition-all transform hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                    Transmitting payload to Spring Boot database...
                  </>
                ) : (
                  "Transmit Message"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
