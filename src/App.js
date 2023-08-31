import Axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [listPokemon, setListPokemon] = useState([]);

  useEffect(()=>{
    Axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then((response)=>{console.log(response.data.results)})
  });
  return (
    <div>
      <h1>Teste</h1>
    </div>
  );
}

export default App;
