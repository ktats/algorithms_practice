function reverse(array) {
    let leftIndex = 0;
    let rightIndex = array.length - 1;
    let temp;

    while (leftIndex < rightIndex) {
      temp = array[leftIndex];
      array[leftIndex] = array[rightIndex];
      array[rightIndex] = temp;

      leftIndex++;
      rightIndex--;
    }
}