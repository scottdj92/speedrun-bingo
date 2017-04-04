import {
  GENERATE_WOW_COMBO
} from '../actions';

const initalState = {
  wowRace: 'Human',
  wowClass: 'Warrior'
};

export default function generateRaceAndClass(state = initalState, action) {
  switch (action.type) {
    case GENERATE_WOW_COMBO:
      state.wowRace = 'Undead';
      state.wowClass = 'Hunter';
      return {
        ...state
      }
    default:
      return state;
  }
}
