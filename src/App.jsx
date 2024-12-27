import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import AdvisoryCommittee from "./components/AdvisoryCommittee";
import CallForPapers from "./components/CallForPapers";
import Day1 from "./components/Day1";
import Day2 from "./components/Day2";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/home";
import InternalProgramCommittee from "./components/InternalProgramCommittee";
import Register from "./components/Register";
import TechnicalAdvisoryCommittee from "./components/TechnicalAdvisoryCommittee";
import TechnicalCommittee from "./components/TechnicalCommittee";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="pages_render_here pt-24 bg-[#f2f5fd] pb-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/internal-program-committee"
            element={<InternalProgramCommittee />}
          />
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/advisory-committee" element={<AdvisoryCommittee />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/technical-advisory-committee"
            element={<TechnicalAdvisoryCommittee />}
          />
          <Route path="/technical-committee" element={<TechnicalCommittee />} />
          <Route path="/schedule/Day1" element={<Day1 />} />
          <Route path="/schedule/Day2" element={<Day2 />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
