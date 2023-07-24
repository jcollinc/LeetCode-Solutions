/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */

// Bellman Ford

const findCheapestPrice = (n, flights, src, dst, k) => {
  let dp = Array.from({ length: n + 1 }, () => Infinity);
  dp[src] = 0;

  // starting from source: visiting k + 1 verticies
  // if possible: visit all possible path to destination
  for (i = 0; i < k + 1; i++) {
    const temp = [...dp]; // array for comparison

    // find cheapeast price for each path
    for (const [x, y, price] of flights) {
      if (dp[x] === Infinity) continue;
      temp[y] = Math.min(temp[y], dp[x] + price); // get cost from src -> dst and update
    }

    dp = temp;
  }

  return dp[dst] !== Infinity ? dp[dst] : -1;
};