
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services"; // လိုင်းအသစ်
import Contact from "./pages/Contact"; // လိုင်းအသစ်

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0b112c] via-[#091040] to-[#020514] text-white font-sans antialiased selection:bg-cyan-500 selection:text-black">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />{" "}
            {/* နေရာမှန်ပြင်လိုက်ပါပြီ */}
            <Route path="/contact" element={<Contact />} />{" "}
            {/* နေရာမှန်ပြင်လိုက်ပါပြီ */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
