import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
//itemsReducer
export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SINGLE_POKEMON:
        return action.pokemon.items;
    default:
        return state;
    }
}