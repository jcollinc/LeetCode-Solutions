/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let [newStart, newEnd] = newInterval;
  let left = [];
  let right = [];
  
  for (const interval of intervals) {
    const [currStart, currEnd] = interval;
	
    if (currEnd < newStart) left.push(interval);
      
    else if (currStart > newEnd) right.push(interval);
      
    else {
      newStart = Math.min(newStart, currStart);
      newEnd = Math.max(newEnd, currEnd);
    }
  }
  
  return [...left, [newStart, newEnd], ...right]; 
};