import { combineReducers } from 'redux';
import TilesReducer from './tiles';
import WoWReducer from './wow';
//add more reducers here

const rootReducer = combineReducers({
  tiles: TilesReducer,
  raceAndClass: WoWReducer
});

export default rootReducer;
