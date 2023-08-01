String.prototype.replicate = function (times) {
  return new Array(times).fill(this).join('');
};