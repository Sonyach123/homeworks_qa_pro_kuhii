var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн"
};

services["Розбити скло"] = "200 грн";
function parsePrice(priceStr) {
  return parseFloat(priceStr.replace("грн", "").trim());
}
function price() {
  let total = 0;
  for (let key in services) {
    total += parsePrice(services[key]);
  }
  return total + " грн";
}
function minPrice() {
  let prices = Object.values(services).map(parsePrice);
  let min = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
  }

  return min + " грн";
}

function maxPrice() {
  let prices = Object.values(services).map(parsePrice);
  let max = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > max) {
      max = prices[i];
    }
  }

  return max + " грн";
}

console.log("Загальна ціна:", price());
console.log("Мінімальна ціна:", minPrice());
console.log("Максимальна ціна:", maxPrice());