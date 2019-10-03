function cakeThief(cakeTypes, weightCapacity) {
    let maxValuesAtCapacities = new Array(weightCapacity + 1).fill(0);

    for (let i = 1; i < maxValuesAtCapacities.length; i++) {
        // Loop through all cakes, see if adding this cake is within weight limit and can increase total at current weight
        let possibleMaxValueAtThisWeight = maxValuesAtCapacities[i - 1];
        for (let j = 0; j < cakeTypes.length; j++) {
            let currentCake = cakeTypes[j];
            // Fill in total value of best you can do at this weight 
            // Can you add this cake? If so, add this cake and the best weight below it 
            if (currentCake.weight < i) {
                possibleMaxValueAtThisWeight = Math.max(possibleMaxValueAtThisWeight, currentCake.value + maxValuesAtCapacities[i - currentCake.weight])
            }
        }
    }
}

