import React from 'react';
import Experiences from './components/Experiences.jsx'
import Profile from './components/Profile.jsx'
import Ecole from './components/Ecole.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="App">
      < Profile/>
      < Ecole/>
      < Experiences/>
      < Footer/>
    </div>
  );
}

export default App;
