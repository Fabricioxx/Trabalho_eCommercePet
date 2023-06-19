import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesConfig from './RoutersConfig';

function App() {
  return (
    <div className="App">
     <Router>
       <Header />
        <RoutesConfig />
       <Footer />
    </Router>
      
    </div>
  );
}

export default App;
