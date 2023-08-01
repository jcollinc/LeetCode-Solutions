String.prototype.replicate = function(times) {
    let string = this
    for (let i = 1; i < times; i++) {
        string += this
    }
    return string
}