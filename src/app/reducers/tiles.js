import allMilestones from '../base-data/base-table';
import seedRandom from 'seedrandom';

import { COMPLETE_MILESTONE,
  UNDO_MILESTONE,
  GENERATE_RANDOM_SEED,
  APPLY_SEED
} from '../actions';

const initialSeed = generateRandomSeed();
// initialSeed = initialSeed();
const initialMilestones = populate(allMilestones, initialSeed);

const initialState = {
  tiles: initialMilestones,
  seed: initialSeed
};

export default function tiles(state = initialState, action) {
  switch (action.type) {
    case COMPLETE_MILESTONE:
      state.tiles[action.id].complete = true;
      return {
        ...state
      }
    case UNDO_MILESTONE:
      state.tiles[action.id].complete = false;
      return {
        ...state
      }
    case GENERATE_RANDOM_SEED:
    let randomSeed = generateRandomSeed();
    state.tiles = populate(allMilestones, randomSeed);
      return {
        ...state,
        seed: randomSeed
      }
    case APPLY_SEED:
    state.tiles = populate(allMilestones, action.seed);
      return {
        ...state,
        seed: action.seed
      }
    default:
      return state;
  }
}

function populate(milestones, seed) {
  let template = milestones;
  let selectedMilestone, scrambledBoard = [];
  let index = 0;
  console.log('ogusrhgisr: ', seed);
  let rng = seedRandom(seed);

  while (scrambledBoard.length < 25) {
    selectedMilestone = template[Math.floor(template.length * rng())];
    selectedMilestone.id = index;
    scrambledBoard.push(selectedMilestone);
    template = template.filter((elem) => {
      if (template.length > 1) {
        return elem !== selectedMilestone;
      } else {
        return elem;
      }
    });
    index++;
  };

  return scrambledBoard;
}

function generateRandomSeed() {
  let newSeed = Math.ceil(Math.random() * 999999);
  console.log(newSeed);
  return newSeed;
}
