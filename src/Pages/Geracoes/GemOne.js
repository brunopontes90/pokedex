import { Image } from "antd";
import React, { useState } from "react";
import MenuComponent from "../../Components/MenuComponent";
import Pokedex from "../../Mocks/Pokedex";

function GemOne() {

    const [pokemon, setPokemon] = useState(Pokedex);

    return (
        <div>
            <MenuComponent />
            <h1>1º Geração</h1>
            {pokemon.map((data, index) => {
                if (index <= 150) {
                    return (
                        <div key={index++}>
                            <Image
                                width={150}
                                src={data.img}
                            />
                            <p>#{data.id}</p>
                            <p>{data.name.english}</p>
                            <p>{data.type}</p>
                        </div>
                    );
                }
            })}
        </div>
    );
}

export default GemOne;