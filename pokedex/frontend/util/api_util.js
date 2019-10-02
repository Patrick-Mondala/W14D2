export const fetchAllPokemon = () => ($.ajax({
    url: '/api/pokemon',
    type: "GET"
}));

export const fetchAPokemon = pokemonId => ($.ajax({
    url: `/api/pokemon/${pokemonId}`,
    type: 'GET'
}));

export const postPokemon = pokemon => ($.ajax({
    url: '/api/pokemon',
    method: 'post',
    data: pokemon
}));
