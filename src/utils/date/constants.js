export const DAYS_IN_WEEK = 7;
export const MS_IN_DAY = 1000 * 60 * 60 * 24;

export const TODAY = (() => {
  let today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
})();
export const START_OF_TODAY = +TODAY;
