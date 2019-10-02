import { combineReducers } from 'redux';
import pokemonReducer from './pokemon_reducer';
import itemReducer from './items_reducer';

//entitiesReducer
export default combineReducers({
    pokemon: pokemonReducer,
    items: itemReducer
});