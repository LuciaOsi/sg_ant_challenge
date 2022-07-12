/**
 * @module raceIsFinished
 * @return {boolean} return 'true' if the race is over, 'false' if there is an undefined likelihood
 */
export function raceIsFinished(ants) {
  return ants.every(ant => ant.likelihood);
}
