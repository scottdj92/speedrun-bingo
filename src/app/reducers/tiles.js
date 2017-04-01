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
      return Object.assign({}, state, {
        id: action.id,
        //TODO: figure out how to flip toggle selected mileston
      });
    case UNDO_MILESTONE:
      return Object.assign({}, state, {
        id: action.id,
        complete: action.complete
      });
    case GENERATE_RANDOM_SEED:
      return Object.assign({}, state, {
        seed: (99999999 * Math.random())
      });
    case APPLY_SEED:
      return Object.assign({}, state, {
        seed: action.seed
      });
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
