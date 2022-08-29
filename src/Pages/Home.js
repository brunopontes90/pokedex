import React from "react";

function Home(props) {
    const { apiPokemon, abilities } = props;

    //console.log(apiPokemon)

    return (
        <div>
            {apiPokemon.map((pokemon, index) => (
                <p key={index} >{index + 1} - {pokemon.name} - {pokemon.url}</p>
            ))}
        </div>
    );
}

export default Home;