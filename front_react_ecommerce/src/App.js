import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesConfig from './RoutersConfig';

function App() {

  // stado para verificar se o usuario esta logado
  const [logado, setLogado] = React.useState(false);

  // funcao para verificar se o usuario esta logado
  function verificarLogado() {
    if (localStorage.getItem('token') !== null) {
      setLogado(true);
    }
  }



  return (
    <div className="App">
     <Router>
       <Header logado={logado}/>
        <RoutesConfig />
       <Footer />
    </Router>
      
    </div>
  );
}

export default App;
