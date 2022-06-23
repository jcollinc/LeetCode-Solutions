
var Leaderboard = function() {
    this.scores = {}
};

/** 
 * @param {number} playerId 
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function(playerId, score) {
    this.scores[playerId] ? this.scores[playerId] = this.scores[playerId] + score : this.scores[playerId] = score
};

/** 
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function(K) {
    let scoresArr = Object.values(this.scores)
    scoresArr.sort((a, b) => b - a)
    scoresArr.length = K
    return scoresArr.reduce((a, b) => a + b)
};

/** 
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function(playerId) {
    delete this.scores[playerId]
};

/** 
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */