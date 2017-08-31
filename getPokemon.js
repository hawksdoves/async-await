import request from 'axios';

function getPokemonWithAbility(ability) {
    const baseUrl = 'http://pokeapi.co/api/v2/ability';
    return request.get(`${baseUrl}/${ability}/`);
};

export default getPokemonWithAbility;
