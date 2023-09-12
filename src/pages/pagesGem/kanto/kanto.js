import Menu from "../../../layouts/menu";
import React, { useContext } from "react";
import { PokemonContext } from "../../../App";

function Kanto() {
    const listPokemon = useContext(PokemonContext);

    if (!listPokemon) {
        return <h1>Carregando...</h1>
    }
    return (
        <div>
            <Menu />
            <h1>Kanto</h1>
            {listPokemon.map((pokemon, index) => {
                return (
                    <div key={index}>
                        {index < 150 ? <p>{pokemon.name}</p> : null}
                    </div>
                );
            })}
        </div>
    );
}

export default Kanto;