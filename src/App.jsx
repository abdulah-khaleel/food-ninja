import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import Nav from './Components/Nav';
import Recipes from './Components/Recipes';
import About from './Components/About';
import './App.css';

function App() {
  const [showAbout, setShowAbout] = useState(false);

  const redirectAbout = () => {
    setShowAbout(true);
  };

  const redirectHome = () => {
    setShowAbout(false);
  };

  return (
    <div className=" text-gray-600 font-body grid md:grid-cols-3">
      <div className="md:col-span-1 md:flex md:justify-end">
        <Nav
          redirectAbout={redirectAbout}
          redirectHome={redirectHome}
          showAbout={showAbout}
        />
      </div>
      {showAbout ? <About /> : <Recipes />}
    </div>
  );
}

export default App;
