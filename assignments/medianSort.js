function medianSort(array) {
   return array.slice().sort((a, b) => getMedian(a) - getMedian(b))
}

function getMedian(nums) {
    // If it's not an array, just return the original number
    if (!Array.isArray(nums)) {
        return nums;
    }

    const mid = Math.floor(nums.length / 2);
    let sorted = nums.slice().sort((a, b) => a-b);
    if (nums % 2 === 0) {
        return sorted[mid];
    } else {
        return (sorted[mid - 1] + sorted[mid]) / 2;
    }
}