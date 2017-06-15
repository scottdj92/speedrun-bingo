export const COMPLETE_MILESTONE = 'COMPLETE_MILESTONE';
export const UNDO_MILESTONE = 'UNDO_MILESTONE';
export const GENERATE_RANDOM_SEED = 'GENERATE_RANDOM_SEED';
export const APPLY_SEED = 'APPLY_SEED';
export const GENERATE_WOW_COMBO = 'GENERATE_WOW_COMBO';

export function completeMilestone(id) {
  // console.log('COMPLETE_MILESTONE', id);
  return {
    type: 'COMPLETE_MILESTONE',
    id,
    complete: true
  };
}

export function undoMilestone(id) {
  // console.log('UNDO_MILESTONE', id);
  return {
    type: 'UNDO_MILESTONE',
    id: id,
    complete: false
  };
}

export function generateRandomSeed() {
  // console.log('GENERATE_RANDOM_SEED');
  return {
    type: 'GENERATE_RANDOM_SEED'
  };
}

export function applySeed(seed) {
  // console.log('APPLY_SEED', seed);
  return {
    type: 'APPLY_SEED',
    seed: seed
  };
}

export function generateWoWCombo() {
  // console.log('GENERATE_WOW_COMBO');
  return {
    type: 'GENERATE_WOW_COMBO'
  };
}
