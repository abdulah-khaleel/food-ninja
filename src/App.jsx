import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Nav from './Components/Nav';
import Recipes from './Components/Recipes';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" text-gray-600 font-body grid md:grid-cols-3">
      <div className="md:col-span-1 md:flex md:justify-end">
        <Nav />
      </div>
      <Recipes />
    </div>
  );
}

export default App;
