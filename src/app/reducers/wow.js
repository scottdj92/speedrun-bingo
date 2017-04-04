import wowCombos from '../base-data/wow-combos.json';

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
      let selectedCombo = wowCombos[Math.floor(wowCombos.length * Math.random())];
      state.race = selectedCombo.race;
      state.class = selectedCombo.classes[Math.floor(selectedCombo.classes.length * Math.random())];
      return {
        ...state
      }
    default:
      return state;
  }
}
