import allMilestones from '../base-data/base-table';
import seedRandom from 'seedrandom';

import { COMPLETE_MILESTONE,
  UNDO_MILESTONE,
  GENERATE_RANDOM_SEED,
  APPLY_SEED
} from '../actions';

const initialSeed = seedRandom(Math.ceil(9999999 * Math.random()));
const initialMilestones = scramble(allMilestones);


const initialState = {
  tiles: initialMilestones,
  seed: initialSeed()
};

export default function tiles(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case COMPLETE_MILESTONE:
      state.tiles[action.id].complete = true;
      return {
        ...state,
        id: action.id
      }
    case UNDO_MILESTONE:
      state.tiles[action.id].complete = false;
      return {
        ...state,
        id: action.id
      }
    case GENERATE_RANDOM_SEED:
      return {
        ...state,
        seed: (99999999 * Math.random())
      }
    case APPLY_SEED:
      return {
        ...state,
        seed: action.seed
      }
    default:
      return state;
  }
}

function scramble(milestones) {
  return populate(initialSeed);
}

function populate(seed) {
  let rng = seed(seed);
  let template = allMilestones;
  let selectedMilestone, scrambledBoard = [];

  template.map((elem, index) => {
    selectedMilestone = template[Math.floor(template.length * rng)];
    selectedMilestone.id = index;
    scrambledBoard.push(selectedMilestone);
    template = template.filter((elem) => {
      if (template.length > 1) {
        return elem !== selectedMilestone;
      } else {
        return elem;
      }
    });
  });

  return scrambledBoard;
}
