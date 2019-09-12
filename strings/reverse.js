// Reverse a string

// Javascript methods
function reverse(str) {
    return str.split('').reverse().join('');
}

// Javascript methods with spread operator instead of split

function reverse(str) {
    return [...str].reverse().join('');
}

// For loop
function reverse(str) {
    let reverse = '';
    for (let char of str) {
      reverse = char + reverse;
    }
    return reverse;
}

// recursion

function reverse(str) {
    // base case
    if (str === '') {
        return str
    } else {
        return reverse(str.slice(1)) + str[0];
    }
}