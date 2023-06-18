import { Routes, Route } from 'react-router-dom';
import React from 'react';

import Loja from './pages/Loja';
import ErrorPage from './pages/erroPage';

export default function RoutesConfig() {
    return (
    <Routes>
        <Route path='/' element={<Loja />} /> {/* rota page home */}
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    );
  }