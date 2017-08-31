import getPokemonWithAbility from '../getPokemon';

function pokemonList(ability) {

    return getPokemonWithAbility(ability)
        .then(resp => ({ list: resp.data.pokemon }))
        .catch(err => ({ error: err } ));
}

export default pokemonList;
