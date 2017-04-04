import { combineReducers } from 'redux';
import TilesReducer from './tiles';
import WoWReducer from './wow';
//add more reducers here

const rootReducer = combineReducers({
  tiles: TilesReducer,
  wow: WoWReducer,
});

export default rootReducer;
