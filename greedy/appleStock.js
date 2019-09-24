// Write a function that returns the max amount of profit you could've gotten from a day of trading apple stock 

function profit(prices) {
  let maxProfit = prices[1] - prices[0];
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
      const potentialProfit = prices[i] - minPrice;
      maxProfit = Math.max(maxProfit, potentialProfit);
      minPrice = Math.min(minPrice, prices[i]);
  }
  return maxProfit;
}