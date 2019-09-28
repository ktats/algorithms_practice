// 2^n recursion
function nthFib(n) {
    if (n <= 2) {
        return 1;
    }
    return nthFib(n-1) + nthFib(n-2);
}


// O(n) thanks to memoize, but O(n) space when iterative is O(1) space
class Fibber {
    construcotr() {
      this.memo = {};
    }

    nthFib(n) {
        if (this.memo.hasOwnProperty(n)) {
            return this.memo[n];
        }
        
        let solution;

        if (n === 0 || n === 1) {
            solution = n;
        } else {
            solution = this.nthFib(n - 1) + this.nthFib(n - 2);
        }

        this.memo[n] = solution;
        return solution;
    }
}

// Iterative solution, starts from other side, O(1) space
function iterativeFib(n) {
    if (n === 0 || n === 1) {
        return n;
    }

    let prevPrev = 0;
    let prev = 1;
    let current;
    for (let i = 1; i < n; i++) {
        current = prevPrev + prev;
        prevPrev = prev;
        prev = current;
    }
    return current;
}