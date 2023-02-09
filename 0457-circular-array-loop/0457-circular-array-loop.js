/**
 * @param {number[]} nums
 * @return {boolean}
 */
function circularArrayLoop(arr) {
    let slow, fast, direction = null
    for (let i = 0; i < arr.length; i++) {
        if (Math.abs(arr[i]) == arr.length) continue;
        direction = arr[i] >= 0
        slow = i, fast = i
        while (slow != fast || slow !== -1 || fast !== -1) {
            slow = nextStep(arr, slow, direction)
            fast = nextStep(arr, fast, direction)
            if (slow === -1 || fast === -1) break
            fast = nextStep(arr, fast, direction)
            if (fast === -1 || fast === slow) break
        }
        if (slow === fast && slow !== -1) return true; 
    }
    return false
}

function nextStep (arr, idx, direction) {
    let newDirection = arr[idx] >= 0
    if (direction !== newDirection) return -1
    let len = arr.length
    let newIdx = (idx + arr[idx]) % len
    if (newIdx < 0) newIdx += len
    if (idx === newIdx) return -1
    return newIdx
}