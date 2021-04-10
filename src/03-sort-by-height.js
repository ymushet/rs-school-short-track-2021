/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const ids = [];
  arr.forEach((e, i) => {
    if (e === -1) {
      ids.push(i);
    }
  });
  let res = arr.filter((e) => e !== -1);
  res = res.sort((a, b) => (a > b ? 1 : -1));
  ids.forEach((e) => {
    res.splice(e, 0, -1);
  });
  return res;
}

module.exports = sortByHeight;
