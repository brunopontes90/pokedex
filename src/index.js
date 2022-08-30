import React from 'react';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import PokemonComponent from './PokemonComponent';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import GemOne from "./Pages/Geracoes/GemOne";
import GemTwo from "./Pages/Geracoes/GemTwo";

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/pokedex" element={<PokemonComponent />} />
    <Route path="/gemone" element={<GemOne />} />
    <Route path="/gemtwo" element={<GemTwo />} />
  </Routes>
</BrowserRouter>,
document.getElementById('root')
);