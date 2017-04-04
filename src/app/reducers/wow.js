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
      return {
        ...state,
        wowRace: 'Undead',
        wowClass: 'Hunter'
      }
    default:
      return state;
  }
}
