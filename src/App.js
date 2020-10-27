import React from "react";
import Experiences from "./components/Experiences.jsx";
import Profile from "./components/Profile.jsx";
import School from "./components/School.jsx";
import Footer from "./components/Footer.jsx";
import Portfolio from "./components/Project.jsx";

function App() {
  return (
    <div className="App">
      <Profile />
      <School />
      <Portfolio />
      <Experiences />
      <Footer />
    </div>
  );
}

export default App;
