function binarySearch(nums, target) {
  let floorIndex = -1;
  let cielingIndex = nums.length;
  while (floorIndex + 1 < cielingIndex) {
      let distance = cielingIndex - floorIndex;
      let halfDistance = Math.floor(distance / 2);
      const guessIndex = floorIndex + halfDistance;
      const guessValue = nums[guessIndex];
      if (guessValue === target) {
          return true;
      }
      if (guessValue > target) {
          cielingIndex = guessIndex;
      } else if (guessValue < target) {
          floorIndex = guessIndex;
      }
  }

  return false;
}