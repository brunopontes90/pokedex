import React, { useEffect, useState } from "react";
import Header from "./Compenents/Header/Header";

function ApiConponent() {

  const [apiPokemon, setApiPokemon] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      .then(res => res.json())
      .then(data => setApiPokemon(data.results));
  }, []);


  return (
    <Header
      apiPokemon={apiPokemon}
    />
  )

}

export default ApiConponent;
