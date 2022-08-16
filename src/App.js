import React from 'react';
import './App.css';
import Home from './components/navbar/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
