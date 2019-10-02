import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';

//rootReducer
export default combineReducers({
    entities: entitiesReducer
});