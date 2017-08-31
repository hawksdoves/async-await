import getPokemonWithAbility from '../getPokemon';

const pokemonList = async (ability) => {
    try {
        const resp = await getPokemonWithAbility(ability);
        return { list: resp.data.pokemon };
    } catch (err) {
        return { error: 'error' };
    }

}

export default pokemonList;
