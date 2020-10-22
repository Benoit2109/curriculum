import React from 'react';
import Curriculum from './components/experiences.jsx'
import Profile from './components/profile.jsx'
import Ecole from './components/ecole.jsx'

function App() {
  return (
    <div className="App">
      < Profile/>
      < Ecole/>
      < Curriculum/>
    </div>
  );
}

export default App;
