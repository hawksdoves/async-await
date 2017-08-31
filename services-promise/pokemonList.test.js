import pokemonList from './pokemonList';
import getPokemonWithAbility from '../getPokemon';

const mockResponse = {
    data: {
        pokemon: [ 'my', 'array','of', 'pokemon']
    }
};

jest.mock('../getPokemon');

getPokemonWithAbility
    .mockReturnValueOnce(Promise.resolve(mockResponse));
    .mockReturnValueOnce(Promise.reject('error'));

describe('pokemonList', () => {
    it('returns an array', () => {
        return pokemonList('telepathy')
            .then(resp => {
                expect(resp).toEqual({ list: mockResponse.data.pokemon });
                expect(getPokemonWithAbility).toHaveBeenCalledWith('telepathy');
            })
        
    })
    
    it('returns an error message', () => {
        return pokemonList('telepathy')
            .then(err => {
                expect(err).toEqual({ error: 'error' });
                expect(getPokemonWithAbility).toHaveBeenCalledWith('telepathy');
            })
        
    })
})
