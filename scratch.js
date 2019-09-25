// count sort 

function sort(nums, max) {
    let numCounts = Array(max + 1).fill(0);
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let score = nums[i];
        numCounts[score]++;
    }
    for (let score = numCounts.length - 1; score >= 0; score--) {
      for (let i = 0; i < numCounts[score]; i++) {
          result.push(score);
      }
    }
}