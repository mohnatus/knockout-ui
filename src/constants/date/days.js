export const TODAY = (() => {
  let today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
})();
export const START_OF_TODAY = +TODAY;