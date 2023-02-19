
var Logger = function() {
    this.logs = new Map()
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if (!this.logs.has(message) || timestamp >= this.logs.get(message)) {
        this.logs.set(message, timestamp + 10)
        return true
    }
    return false
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */