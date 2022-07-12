/**
 * @module generateAntWinLikelihoodCalculator
 * @description provided by Stadium Goods.
 * For more information, please look at [Mobile App | Hiring Challenge](https://www.notion.so/Mobile-App-Hiring-Challenge-82bc55b799f84b19af6960eb96b51309)
 */

export function generateAntWinLikelihoodCalculator() {
  const delay = 7000 + Math.random() * 7000;
  const likelihoodOfAntWinning = Math.random();

  return callback => {
    setTimeout(() => {
      callback(likelihoodOfAntWinning);
    }, delay);
  };
}
