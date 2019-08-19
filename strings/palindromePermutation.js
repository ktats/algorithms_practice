function characterFrequency(string) {
    const frequency = {};
    for (let i = 0; i < string.length; i++) {
      if (frequency[string[i]]) {
          frequency[string[i]]++;
      } else {
          frequency[string[i]] = 1;
      }
    }
    return frequency;
}

function checkMaxOneOdd(frequency) {
    let foundOdd = false;
    for (let key in frequency) {
      if (frequency[key] % 2 === 1) {
          if (foundOdd) {
              return false;
          }
          foundOdd = true;
      }
    }
    return true;
}

function isPermutationOfPalindrome(string) {
    const frequency = characterFrequency(string);
    return checkMaxOneOdd(frequency);
}