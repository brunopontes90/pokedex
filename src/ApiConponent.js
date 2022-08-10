import React, { useEffect, useState } from "react";
import Home from "./Pages/Home";

function ApiConponent() {

  const [apiPokemon, setApiPokemon] = useState([]);
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      .then(res => res.json())
      .then(data => setApiPokemon(data.results));
  }, []);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/1/')
      .then(res => res.json())
      .then(data => setAbilities(data.abilities));
  }, []);

  return (
    <Home
      apiPokemon={apiPokemon}
      abilities={abilities}
    />
  );

}

export default ApiConponent;
