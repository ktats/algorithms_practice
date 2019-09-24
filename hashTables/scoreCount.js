// Write an algorith that sorts an array of numbers in O(n) time if you are given the max number
// Make an array scoreCounts that stores the amount of occurences of each score at that score's index

function thing(array, max) {
    let scoreCounts = new Array(max + 1).fill(0);
    for (let i = 0; i < array.length; i++) {
        scoreCounts[array[i]]++;
    }
    let sortedArray = [];
    for (let i = scoreCounts.length - 1; i >= 0; i--) {
        const count = scoreCounts[i];
        for (let time = 0; time < count; time++) {
            sortedArray.push(i);
        }
    }
    return sortedArray;
}