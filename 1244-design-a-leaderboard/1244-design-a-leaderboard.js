
var Leaderboard = function() {
    this.scores = {}
};

/** 
 * @param {number} playerId 
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function(playerId, score) {
    this.scores[playerId] = this.scores[playerId] ? this.scores[playerId] + score : score
};

/** 
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function(K) {
    let topScores = Object.values(this.scores).sort((a, b) => b - a)
    topScores.length = K
    return topScores.reduce((a, b) => a + b)
    
};

/** 
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function(playerId) {
    this.scores[playerId] = 0
};

/** 
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */