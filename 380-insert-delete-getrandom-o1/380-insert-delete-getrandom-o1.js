
var RandomizedSet = function() {
    this.set = []
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.set.indexOf(val) === -1) {
        this.set.push(val)
        return true
    }
    return false  
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.set.indexOf(val) !== -1) {
        this.set.splice(this.set.indexOf(val), 1)
        return true
    } 
    return false   
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.set[Math.floor(Math.random() * (this.set.length))]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */