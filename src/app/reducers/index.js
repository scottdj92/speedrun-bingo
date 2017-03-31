import { combineReducers } from 'redux';
import TilesReducer from './tiles';
//add more reducers here

const rootReducer = combineReducers({
  tiles: TilesReducer
});

export default rootReducer;
