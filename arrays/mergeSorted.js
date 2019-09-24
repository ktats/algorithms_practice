function merge(leftArray, rightArray) {
    let leftIndex = 0;
    let rightIndex = 0;
    let result = [];

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex] <= rightArray[rightIndex]) {
          result.push(leftArray[leftIndex])
          leftIndex++;
        } else {
            result.push(rightArray[rightIndex]);
            rightIndex;
        }
    }

    return result.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));
}