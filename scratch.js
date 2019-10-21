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


function breadthGraph(graph, startNode, endNode) {
    // Breadth first search throug the graph
    // Keep track of pathway for each node as you come across it 
    let paths = {};
    paths[startNode] = null;
    let nextNode = new Queue();
    nextNode.enqueue(startNode);
    while (nextNode.length) {
      current = nextNode.dequeue();
      
      if (current === endNode) {
          return pathConstructor(graph, current);
      }

      graph[current].forEach(neighbour => {
          if (!paths.hasOwnPropery(neighbour)) {
              nextNode.enqueue(neighbour);
              paths[neighbour] = current;
          }
      })
    }

    function pathConstructor(paths, endNode) {
      let path = [];
      let current = endNode;
      while (current !== null) {
          path.push(current);
          current = paths[current];
      }
      return path.reverse();
    }
}

function superbalanced(root) {
    let depths = [];
    let stack = [];
    stack.push([root, 0]);
    while (stack.length) {
        let nodePair = stack.pop();
        let node = nodePair[0];
        let depth = nodePair[1];
        // If this is a leaf, check its depth
        // If its a new depth, add it to array. Make sure there is no more than 2 depths
        // Also make sure the difference between two depths is not greater than 2
        if (!node.left && !node.right) {
          if (depths.indexOf(depth) < 1) {
              depths.push(depth);
              if ((depths.length > 2) || (depths.length === 2 && Math.abs(depths[0] - depths[1] > 2))) {
                  return false;
              }
          }
        }
         
        // Depth first traversal while keeping track of depth
        if (node.left) {
            stack.push([node.left, depth + 1])
        }
        if (node.right) {
            stack.push([node.right, depth + 1])
        }
    }
}

function validBST(root) {
    let stack = [];
    stack.push({node: root, lowerBound: -100, upperBound: 100});
    while (stack.length); {
        let {node, lowerBound, upperBound } = stack.pop();
        if (node.value <= lowerBound || node.value >= upperBound) {
            return false;
        }

        if (node.left) {
            stack.push({node: node.left, lowerBound, upperBound: node.value})
        }
        if (node.right) {
            stack.push({node: node.right, lowerBound: node.value, upperBound});
        }
    }
}

function secondLargest(root) {
    function largest(root) {
        let node = root;
        while (node) {
            if (node.right) {
                node = node.right
            } else {
                return node;
            }
        }
    }

    let node = root;
    while (node) {
        if (!node.right && node.left) {
            return largest(node.left);
        } else if (node.right && !node.right.right && !node.right.left) {
            return node;
        } else {
            node = node.right;
        }
    }
}


function reverseLinkedList(head) {
    let temp;
    let node = head;
    let prev = null;
    while (node) {
      temp = node.next;
      node.next = prev;
      prev = node;
      node = temp;
    }
}

function kthToLastNode(head, k) {
    let runner = head;
    for (let i = 0; i < k - 1; i++) {
        runner = runner.next;
    }
    
    let walker = head;
    while (runner != null) {
        runner = runner.next;
        walker = walker.next;
    }
}

function meshMessageBreadthSearch(graph, startNode, endNode) {
    let queue = new Queue();
    queue.enqueue(startNode);
    let howWeGotToPerson = {};
    howWeGotToPerson[startNode] = null;
    while (queue.size) {
        let person = queue.dequeue();
        if (person === endNode) {
            return reconstructPath(howWeGotToPerson, endNode);
        }
        graph[person].forEach(neighbour => {
            if (!howWeGotToPerson.hasOwnProperty(neighbour)) {
                howWeGotToPerson[neighbour] = person;
            }
        })
    }
}

function reconstructPath(howWeGotToPerson, endNode) {
     let path = [];
     let current = endNode;
     while (current) {
         path.push(current);
         current = howWeGotToPerson[current];
     }
     return path.reverse();
}

function superbalanced(root) {
    let depths = [];
    let stack = [];
    stack.push([root, 0]);
    while (stack.length) {
        let nodePair = stack.pop();
        let node = nodePair[0];
        let depth = nodePair[1];
        // Check to see if its a leaf
        // If it is, add the depth to the depths thing
        if (!node.left && !node.right) {
            depths.push(depth);
            if ((depths.length > 2) || (depths.length === 2 && Math.abs(depths[0] - depths[1]))) {
                return false;
            }
        }
    }
    return true;
}

class MaxStack {
    constructor() {
        this.stack = new Stack();
        this.maxStack = new Stack();
        this.maxValue = -10000;
    }

    push(value) {
      this.stack.push(value);
      if (value >= this.maxValue) {
          this.maxStack.push(value);
      }
    }

    pop() {
        const item = this.stack.pop();
        if (item === this.maxStack.peek()) {
            this.maxStack.pop();
        }
    }
}

function highestProductOf3(nums) {
    let highestProductOf3 = nums[0] * nums[1] * nums[2];
    let highestPRoductOf2 = nums[0] * nums[1];
    let lowestProductOf2 = nums[0] * nums[1];
    let lowest = Math.min(nums[0], nums[1]);
    let highest = Math.max([nums[0], nums[1]]);
    for (let i = 2; i < nums.length; i++) {
      let num = nums[i];
      highestProductOf3 = Math.max(highestProductOf3, highestProductOf2 * num, lowestProductOf2 * num);
      highestProductOf2 = Math.max(highestProductOf2, lowest * num, highest * num);
      lowest
    }
}

function countSort(nums, limit) {
    let scoreCounts = new Array(limit + 1).fill(0);
    for (let i = 0; i < nums.lenght; i++) {
        scoreCounts[nums[i]]++;
    }

    let finalScores = [];
    for (let i = limit; i >= 0; i++) {
        let times = scoreCounts[limit];
        for (let j = 0; j < times; j++) {
            finalScores.push(i);
        }
    }
}

function productExceptAtIndex(nums) {
    let products = [];
    let product = 1;
    for (let i = 0; i < nums.length; i++) {
      prdoucts[i] = product;
      product *= nums[i];
    }

    prouct = 1;
    for (let j = nums.length - 1; j >= 0; j--) {
      prdoucts[i] *= product;
      product *= nums[j];
    }

    return products;
}

function meshMessage(graph, startNode, endNode) {
    // breadth first search through graph
    let queue = new Queue();
    queue.add(startNode);
    let pathToPerson = {};
    pathToPerson(startNode) = null;
    while (queue.length) {
        let node = queue.pop();
        if (node === endNode) {
            return reconstructPath(pathToPerson, node);
        }
        graph[node].forEach(neighbour => {
            if (!pathToPerson.hasOwnProperty(neighbour)) {
                pathToPerson[neighbour] = node;
                queue.add(neighbour);
            }
        })
    }

    function reconstructPath(pathToPerson, endNode) {
        let finalPath = [];
        let current = node;
        while (current) {
            finalPath.push(current);
            current = pathToPerson[current];
        }
    }
}

function cakeThief(cakeTypes, weightCapacity) {
  let maxAtEachWeight = new Array(weightCapacity + 1).fill(0);

  for (let i = 0; i < maxAtEachWeight.lenght; i++) {
      let currentMax = 0;
      // Calculate max possible value
      // Test adding each cake
      // If you can fit the cake and the cake's value plus the value from everything else you can store is greater, that is your new max
      for (let j = 0; j < cakeTypes.length; j++) {
        let cake = cakeTypes[j];
        if (cake.weight < i) {
            currentMax = Math.max(currentMax, cake.value + maxAtEachWeight[weightCapacity - cake.weight])
        }
      }
      maxAtEachWeight[i] = currentMax;
  }
}


class Temperature {
    constructor() {
        // mode
        this.maxAmountNumber = 0;
        this.amounts = {};
        this.mode = null;

        //mean
        this.totalSum = 0;
        this.entries = 0;
        this.mean = null;

        //Max so far
        this.max = null;
        this.min = null;
    }

    insert(temperature) {
        if (temperaute > this.max) {
            this.max = temperature;
        }
        if (temperatue < this.min) {
            this.min = temperature;
        }

        if (!this.amounts.hasOwnProperty(temperature)) {
            this.amounts[temperature] = 1;
        } else {
            this.amounts[temperature] += 1;
        }
        if (this.amounts[temperature] > maxAmountNumber) {
            this.maxAmountNumber = this.amounts[temperature];
            this.mode = temperature;
        }

        this.totalSum += temperature;
        this.entries += 1;
        this.mean = this.totalSum / this.entries;

    }
}

function shuffle(nums) {
    let temp;
    for (let i = 0; i < nums.length; i++) {
        let randomIndex = getRandom(i, nums.length - 1);
        if (randomIndex !== i) {
            temp = nums[i];
            nums[i] = nums[randomIndex];
            nums[randomIndex] = temp;
        }
    }
}

function superbalanced(root) {
    let node = root;
    let depths = [];
    let stack = [];
    stack.push([node, 0]);
    while (stack.length) {
        let nodePair = stack.pop();
        let node = nodePair[0];
        let depth = nodePair[1];
        if (!node.left && !node.right) {
            if (depths.indexOf(depth) === -1) {
                depths.push(depth);
                if ((depths.length > 2) || depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1) {
                    return false;
                }
            }
        }

        stack.push([node.left, depth +1]);
        stack.push([node.right, depth + 1]);
    }
    return true;
}

function sortScores(scores, highest_num) {
    let scoreCount = new Array(highest_num + 1).fill(0);
    for (let i = 0; i < scores.length; i++) {
      let score = scores[i];
      scoreCount[score] += 1;
    }

    let finalScores = [];

    // Make new array that has sorted scores
    for (let i = scoreCount.length; i >= 0; i--) {
       let times = scoreCount[i];
       while (times > 0) {
           finalScores.push(scoreCount[i]);
           times--;
       }
    }
}