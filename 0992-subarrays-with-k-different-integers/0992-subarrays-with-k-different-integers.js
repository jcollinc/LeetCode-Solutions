function subarraysWithKDistinct(nums, k) {
    function atMostKDistinct(k) {
        let count = 0;
        let left = 0;
        const map = new Map();
        for (let right = 0; right < nums.length; right++) {
            if (!map.has(nums[right]) || map.get(nums[right]) === 0) k--
            map.set(nums[right], (map.get(nums[right]) || 0) + 1);
            while (k < 0) {
                map.set(nums[left], map.get(nums[left]) - 1);
                if (map.get(nums[left]) === 0) k++;
                left++;
            }
            count += right - left + 1;
        }
        return count;
    }
    return atMostKDistinct(k) - atMostKDistinct(k - 1);
}

