import React, { useEffect } from "react";
import Aos from "aos";
import Experiences from "./components/experiences.jsx";
import Profile from "./components/profile.jsx";
import School from "./components/School.jsx";
import Footer from "./components/footer.jsx";
import Portfolio from "./components/Project.jsx";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      <Profile />
      <School />
      <Portfolio />
      <h2 data-aos="fade-right" className="SectionPart">Expériences</h2>
      <Experiences />
      <Footer />
    </div>
  );
}

export default App;
