import React, { useEffect, useState } from "react";

function GetIdPokemon() {
    const [pokemonId, setPokemonId] = useState([]);
    const [urlPokemon, setUrlPokemon] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
          .then(res => res.json())
          .then(data => setUrlPokemon(data.results.url));
      }, []);

      const getIdPokemon = window.location.pathname;
    
      console.log("Url id: ", pokemonId)
}


export default GetIdPokemon;