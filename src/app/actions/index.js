export const COMPLETE_MILESTONE = 'COMPLETE_MILESTONE';
export const UNDO_MILESTONE = 'UNDO_MILESTONE';
export const GENERATE_RANDOM_SEED = 'GENERATE_RANDOM_SEED';
export const APPLY_SEED = 'APPLY_SEED';

export function completeMilestone(id) {
  console.log('COMPLETE_MILESTONE', id);
  return {
    type: 'COMPLETE_MILESTONE',
    id
  };
}

export function undoMilestone(id) {
  console.log('UNDO_MILESTONE', id);
  return {
    type: 'UNDO_MILESTONE',
    id: id
  };
}

export function generateRandomSeed() {
  console.log('GENERATE_RANDOM_SEED');
  return {
    type: 'GENERATE_RANDOM_SEED'
  };
}

export function applySeed(seed) {
  console.log('APPLY_SEED', seed);
  return {
    type: 'APPLY_SEED',
    seed: seed
  };
}
