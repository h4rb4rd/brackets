module.exports = function check(str, bracketsConfig) {
  const bracketPairs = bracketsConfig.map((bracket) => {
    return bracket[0] + "" + bracket[1];
  });

  let prevLength = str.length;

  while (str.length) {
    for (const pair of bracketPairs) {
      str = str.replace(pair, "");
    }
    if (prevLength === str.length) {
      return false;
    }
    prevLength = str.length;
  }

  return true;
}
