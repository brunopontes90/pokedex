import { Image } from "antd";
import React, { useState } from "react";
import MenuComponent from "./Components/MenuComponent";
import Pokedex from "./Mocks/Pokedex";


function PokemonComponent() {

  const [pokemon, setPokemon] = useState(Pokedex);

  return (
    <div>
      <MenuComponent />
      {pokemon.map((data, index) => (
        <div key={index++}>
          <Image
            width={150}
            src={data.img}
          />
          <p>#{data.id}</p>
          <p>{data.name.english}</p>
          <p>{data.type}</p>
        </div>
      ))}
    </div>
  );

}

export default PokemonComponent;
