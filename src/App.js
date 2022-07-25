import "./App.scss";
import React, { useEffect, useState } from "react";

function App() {

  const [apiPokemon, setApiPokemon] = useState([]);
  const [idPokemon, setIdPokemon] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      .then(res => res.json())
      .then(data => setApiPokemon(data.results));
  }, []);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(res => res.json())
      .then(data => setIdPokemon(data))
  });

  return (
    <ul>
      {apiPokemon.map((dataPokemon, index) => (
        <li key={index++}>#{index + 1} - {dataPokemon.name}</li>
      ))}
    </ul>
  )

}

export default App;
