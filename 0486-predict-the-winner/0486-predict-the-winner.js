/**
 * @param {number[]} nums
 * @return {boolean}
 */
const PredictTheWinner = (nums) => {
    let n = nums.length
    let memo = []
    for (let i = n; i >= 0; i--) {
        memo.push(new Array(n).fill(-1))
    }
    let scoreFirst = PredictTheWinnerInSituation(nums, 0, n - 1, memo)
    let scoreTotal = nums.reduce((a,b)=>a+b)
    return scoreFirst >= scoreTotal - scoreFirst
}

const PredictTheWinnerInSituation = (nums, i, j, memo) => {
    if (i > j) return 0
    if (i === j) return nums[i]
    if (memo[i][j] != -1) return memo[i][j]
    
    let curScore = Math.max(
        nums[i] + Math.min(
            PredictTheWinnerInSituation(nums, i+2, j, memo), 
            PredictTheWinnerInSituation(nums, i+1, j-1, memo)
        ), nums[j] + Math.min(
            PredictTheWinnerInSituation(nums, i, j-2, memo), 
            PredictTheWinnerInSituation(nums, i+1, j-1, memo))
    )
    memo[i][j] = curScore        
    return curScore 
}
