function quicksort(arr) {
    let left = [];
    let right = [];
    let pivot = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) { 
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    left = quicksort(left);
    right = quicksort(right);
    return left.concat(pivot, right);
}