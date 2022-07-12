/**
 * @module isRaceFinished
 * @description method that calculates if the race is finished depending on the ants likelihood calculation
 */
export function isRaceFinished(ants) {
  return ants.every(ant => ant.likelihood);
}
