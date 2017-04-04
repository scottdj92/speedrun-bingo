import {
  GENERATE_WOW_COMBO
} from '../actions';

const initalState = {
  wowRace: 'Human',
  wowClass: 'Warrior'
};

export default function wow(state = initalState, action) {
  switch (action.type) {
    case GENERATE_WOW_COMBO:
      // state.wowRace = 'Undead';
      // state.wowClass = 'Hunter';
      console.log('wow(GENERATE_WOW_COMBO)');
      return {
        ...state,
        wowRace: 'Undead',
        wowClass: 'Hunter'
      }
    
    default:
      return state;
  }
}
