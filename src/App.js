import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/shared/Navbar';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/shared/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />     
          <Route exact path="/" component={Home} />
          <About />
          <Project />
          <Contact />
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
