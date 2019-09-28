// reverse the "words" in an array of letters that are separated by spaces
// https://www.interviewcake.com/question/javascript/reverse-words?course=fc1&section=array-and-string-manipulation

// First reverse the whole array
// Then, since each "word" is the right length, reverse individual words 

function reverse(array) {
    reverseCharacters(array, 0, array.length -1);

    let currentWordStartIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (i === array.length || array[i] === ' ') {
            reverseCharacters(array, currentWordStartIndex, i-1);
            currentWordStartIndex = i + 1;
        }
    }

    function reverseCharacters(array, leftIndex, rightIndex) {
        let temp;
        while (leftIndex < rightIndex) {
            temp = array[leftIndex];
            array[leftIndex] = array[rightIndex];
            array[rightIndex] = temp;
            leftIndex++;
            rightIndex--;
        }
    }
}