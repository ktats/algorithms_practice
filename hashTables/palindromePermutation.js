// Write a function to check whether any permutation of a string is a palindrome
// civic should return true
// ivicc should return true

function check(str) {
    let set = new Set([]);
    for (let i = 0; i < str.length; i++) {
        if (set.has(str[i])) {
            set.delete(str[i]);
        } else {
            set.add(str[i])
        }
    }
    return set.size > 1 ? true : false;
}