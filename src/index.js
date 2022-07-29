import React from 'react';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import ApiConponent from './ApiConponent';
import {BrowserRouter, Routes, Route} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/pokedex" element={<ApiConponent />} />
    {/* <Route path="contato" element={<Contato />} />
    <Route path="sobre-nos" element={<SobreNos />} />
    <Route path="mensagem" element={<Mensagem /> } /> */}
  </Routes>
</BrowserRouter>,
document.getElementById('root')
);