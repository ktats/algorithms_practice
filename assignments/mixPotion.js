// Input: array of objects
function mixPotions(potions) {
    let totalVolume = 0;
    let ingredientRatios = {};
    for (let i = 0; i < potions.length; i++) {
        let { volume, ingredients } = potions[i];
        totalVolume += volume;
        for (let ingredient in ingredients) {
            ingredientRatios[ingredient] ? ingredientRatios[ingredient] += volume * ingredients[ingredient] : ingredientRatios[ingredient] = ingredients[ingredient];
        }
    }
    for (let ingredient in ingredientRatios) {
        ingredientRatios[ingredient] = ingredientRatios[ingredient] / totalVolume;
    }
    return {volume: totalVolume, ingredients: ingredientRatios}
}