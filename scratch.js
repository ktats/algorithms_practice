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


function balanced(root) {
    const depths = [];
    let node = root;
    let stack = [];
    stack.push([root, 0])
    while (stack.length) {
        // If it is a leaf, add the depth to the depth array
        let nodePair = stack.pop();
        let node = nodePair[0];
        let depth = nodePair[1];
        // Check if leaf
        if (!node.right && !node.left) {
            if (depths.indexOf(depth) < 0) {
                depths.push(depth);
                if (depths.length > 2) {
                    return false;
                } else if ((depths.length === 2) && Math.abs(depths[1] - depths[0]) > 1) {
                    return false;
                }
            }
        }

        if (node.right) {
            stack.push([node.right, depth + 1])
        }
        if (node.left) {
            stack.push([node.left, depth + 1])
        }
    }
    return true;
}

function reverse(arr) {
    let leftIndex = 0;
    let rightIndex = str.length - 1;
    let temp;
    while (leftIndex < rightIndex) {
      temp = arr[leftIndex];
      arr[leftIndex] = arr[rightIndex];
      arr[rightIndex] = temp;
      leftIndex++;
      rightIndex--;

    }
}

function reverseWords(message) {
    function reverseCharacters(leftIndex, rightIndex, message) {
        let temp;
        while (leftIndex < rightIndex) {
            temp = message[leftIndex];
            message[leftIndex] = message[rightIndex];
            message[rightIndex] = temp;
            leftIndex++;
            rightIndex--;
        }
    }

    let messageReversed = reverseCharacters(0, message.length - 1, message)
    let startIndex = 0;
    for (let i = 0; i < messageReversed.length; i++) {
      if (messageReversed[i] === ' ' || i === messageReversed.length - 1) {
          reverseCharacters(startIndex, i - 1, messageReversed);
          startIndex = i + 1;
      }
    }
}

function mergeSorted(arr1, arr2) {
    var arr1Index = 0;
    var arr2Index = 0;
    var final = [];
    while (arr1Index < arr1.length && arr2Index < arr2.length) {
        if (arr1[arr1Index] <= arr2[arr2Index]) {
          final.push(arr1[arr1Index]);
          arr1Index++;
        } else {
            final.push(arr2[arr2Index])
            arr2Index++;
        }
    }

    return result.concat(arr1.slice(arr1Index)).concat(arr2.slice(arr2Index));
}

function cafeCheck(takeOut, dineIn, served) {
    let takeOutIndex = 0;
    let dineInIndex = 0;
    let takeOutMaxIndex = takeOut.length - 1;
    let dineInMaxIndex = dineIn.length - 1;
    for (let i = 0; i < served.length; i++) {
      if (takeOutIndex <= takeOutMaxIndex && takeOut[takeOutIndex] === served[i]) {
          takeOutIndex++;
      } else if (dineInIndex <= dineInMaxIndex && dineIn[dineInIndex === served[i]]) {
          dineInIndex++;
      } else {
          return false;
      }
    }
    return true;
}

function twoSum(arr, sum) {
    let set = new Set();
    for (let i = 0; i < arr.length; i++) {
      if (set.has(sum - arr[i])) {
          return true;
      } else if (!set.has(arr[i])) {
          set.add(arr[i]);
      }
    }
    return false;
}

function permPalin(word) {
    let set = new Set();
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (set.has(char)) {
            set.delete(char);
        } else {
            set.add(char);
        }
    }
    return set.size <= 1;
}

function countSort(scores, max) {
    var sortedScores = new Array(max + 1).fill(0);
    for (var i = 0; i < scores.length; i++) {
      sortedScores[scores[i]]++;
    }
    var final = [];
    for (var i = sortedScores.length - 1; i >= 0; i--) {
        var times = sortedScores[i];
        for (var j = 0; j < times; j++) {
            final.push(i);
        }
    }
}

function profit(prices) {
    let maxProfit = prices[1] - prices[0];
    let min = prices[0];
    for (let i = 1; i < prices.length; i++) {
        maxProfit = Math.max(prices[i] - min, maxProfit);
        if (prices[i] < min) {
            min = prices[i];
        }
    }
    return maxProfit;
}

function highestProduct(nums) {
    let highestProductOf3 = nums[0] * nums[1] * nums[2];
    let highestProductOf2Positive = nums[0] * nums[1];
    let lowestProductOf2Negative = nums[0] * nums[1];
    let lowest = Math.min(nums[0], nums[1]);
    let highest = Math.max(nums[0], nums[1]);
    let highest = 0;
    for (let i = 2; i < nums.length; i++) {
       let current = nums[i];
       highestProductOf3 = Math.max(highestProductOf3, highestProductOf2Positive * current, lowestProductOf2Negative * current);
       highestProductOf2Positive = Math.max(highestProductOf2Positive, current * highest, current * lowest);
       lowestProductOf2Negative = Math.min(lowestProductOf2Negative, curent * highest, current * lowest);
       highest = Math.max(current, highest);
       lowest = Math.min(current, lowest);
    }
    return highestProductOf3;
}

function superbalanced(root) {
    let depths = [];
    let stack = [];
    stack.push([root, 0]);
    while (stack.length) {
        let nodePair = stack.pop();
        let node = stack[0];
        let depth = stack[1];
        // A leaf if no children
        if (!node.left && !node.right) {
            // Push in depth if not already in
            if (depths.indexOf(depth) < 0) {
                depths.push(depth)
            }

            if ((depths.length > 2) || (depths.length === 2 && Math.abs(depths[1] - depths[0]) > 1)) {
                return false;
            }
        }

        if (node.right) {
            stack.push([node.right, depth + 1]);
        }
        if (node.left) {
            stack.push([node.left, depth + 1]);
        }
    }
    return true;
}

function binaryChecker(root) {
    let stack = [];
    let lowerBound = -100;
    let upperBound = 100;
    stack.push({node: root, lowerBound, upperBound}) 
    while (stack.length) {
        let { node, lowerBound, upperBound } = stack.pop();
        if (node.value <= lowerBound || node.value >= upperBound) {
            return false;
        }

        if (node.left) {
            stack.push({node: node.left, lowerBound, upperBound: node.value})
        }
        if (node.right) {
            stack.push({node: node.right, lowerBound: node.value, upperBound})
        }
    }
    return true;
}

function highestLowest(root) {
  function highest(root) {
    let node = root;
    while (node) {
        if (node.right) {
            node = node.right;
        } else {
            return node.value;
        }
    }
  }

  // If node.right has no children, current node is the second highest
  // If node.right has only a left child, then the highest value starting at the left child is second highest
  let node = root;
  while (node) {
      if (node.right && !node.right.right && !node) {
          return node.value;
      } else if (!node.right && node.left) {
          return highest(node.left);
      } else {
          node = node.right;
      }
  }
}