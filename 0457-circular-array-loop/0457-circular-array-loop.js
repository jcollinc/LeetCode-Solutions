/**
 * @param {number[]} nums
 * @return {boolean}
 */
function circularArrayLoop(arr) {
    let fast, slow, direction = null;
    
    for (let i = 0; i < arr.length; i++) {
        if (Math.abs(arr[i]) == arr.length) continue;
        if (arr[i] >= 0) direction = true;
        else direction = false;
        slow = i;
        fast = i;
        while (slow != fast || slow != -1 || fast != -1) {
            slow = nextStep(arr, slow, direction);
            if (slow == -1) break;
            fast = nextStep(arr, fast, direction);
            if (fast !== -1) fast = nextStep(arr, fast, direction);     
            if (fast == -1 || slow == fast) break;
        }
        if (slow == fast && slow != -1) return true;   
    }
    return false;
}

function nextStep(arr, currentIndex, direction) {
    let nextDirection = arr[currentIndex] >= 0 ? true : false;
    if (nextDirection !== direction) return -1;
    
    let nextIndex = (arr[currentIndex] + currentIndex) % arr.length;

    if (nextIndex < 0) nextIndex = nextIndex + arr.length;

    if (nextIndex == currentIndex) return -1;
    return nextIndex;
}