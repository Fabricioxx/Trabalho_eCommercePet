import { Routes, Route } from 'react-router-dom';
import React from 'react';

import Loja from './pages/Loja';
import ErrorPage from './pages/erroPage';
import Detalhes from './pages/Detalhes';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';


export default function RoutesConfig() {
    return (
    <Routes>
        <Route path='/' element={<Loja />} /> {/* rota page home */}
        <Route path='/detalhes/:codigo' element={<Detalhes/>} />
        <Route path='/cadastrar' element={<Cadastro/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    );
  }