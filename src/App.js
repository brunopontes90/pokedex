import Axios from "axios";
import Home from "./pages/home/home";
import { Route, Routes } from "react-router-dom";
import Kanto from "./pages/pagesGem/kanto/kanto";
import Johto from "./pages/pagesGem/johto/johto";
import React, { createContext, useEffect, useState } from "react";

export const PokemonContext = createContext();

function App() {
  const [listPokemon, setListPokemon] = useState([]);

  useEffect(() => {
    Axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then((response) => {
        setListPokemon(response.data.results);
      });
  }, []);

  return (
    <PokemonContext.Provider value={listPokemon}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kanto" element={<Kanto />} />
        <Route path="/johto" element={<Johto />} />
      </Routes>
    </PokemonContext.Provider>
  );
}

export default App;
