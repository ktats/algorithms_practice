function RPSPermutation (roundCount) {
    if (roundCount === 0) {
        return [];
    }
    const permutations = [];
    function round(plays) {
        if (plays.length === roundCount) {
            permutations.push(plays);
            return;
        }
        ['R','P','S'].forEach((play) => {
            round(plays + play);
        });
    }
    round('');
    return permutations;
}