import { combineReducers } from 'redux';
import simpleReducer from './sampleReducer';
import literalReducer from './literalReducer';

export default combineReducers({
 simpleReducer,
 literal:literalReducer
});