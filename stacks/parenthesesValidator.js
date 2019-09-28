function validator(string) {
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    for (char in string) {
        if (char === '(') {
            count1 += 1;
        } else if (char === ')') {
            count1 -= 1;
            if (count1 < 0) {
                throw err
            }
        }
    }
}