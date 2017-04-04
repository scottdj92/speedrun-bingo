import {
  GENERATE_WOW_COMBO
} from '../actions';

const initalState = {
  race: 'Human',
  class: 'Warrior'
};

export default function generateRaceAndClass(state = initalState, action) {
  switch (action.type) {
    case GENERATE_WOW_COMBO:
      state.race = 'Undead';
      state.class = 'Hunter';
      return {
        ...state
      }
    default:
      return state;
  }
}
