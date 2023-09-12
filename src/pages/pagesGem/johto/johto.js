import React, { useContext } from "react";
import { PokemonContext } from "../../../App";
import Menu from "../../../layouts/menu";


function Johto() {
    const listPokemon = useContext(PokemonContext);
    if (!listPokemon) {
        return <h1>Carregando...</h1>
    }

    return (
        <div>
            <Menu />
            <h1>Johto</h1>
            {listPokemon.map((pokemon, index) => {
                return (
                    <div key={index++}>
                        {index > 150 && index <= 250 ? <p>{pokemon.name}</p> : null}
                    </div>
                );
            })}
        </div>
    );
}

export default Johto;