/**
 * @param {number} n
 * @param {number} goal
 * @param {number} k
 * @return {number}
 */
var numMusicPlaylists = function(n, goal, k) {
    let mod = 10**9 + 7;
    let dp = new Array(goal + 1).fill(null).map(() => new Array(n + 1).fill(0));
    dp[0][0] = 1;
    for (let i = 1; i <= goal; i++) {
        for (let j = 1; j <= n; j++) {
          dp[i][j] = (dp[i - 1][j - 1] * (n - j + 1)) % mod;

          if (j > k) {
            dp[i][j] = (dp[i][j] + (dp[i - 1][j] * (j - k)) % mod) % mod;
          }
        }
    }
  return dp[goal][n];
};