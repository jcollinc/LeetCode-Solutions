
var RandomizedSet = function() {
    this.numSet = new Set()
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.numSet.has(val)) return false
    return !!(this.numSet.add(val))
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    return this.numSet.delete(val)
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let numArr = Array.from(this.numSet)
    return numArr[Math.floor(Math.random() * numArr.length)]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */