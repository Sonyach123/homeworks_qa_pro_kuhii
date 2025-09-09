const text = "Happiness Wonderful Joyful Apple Time Task ";
const result = text.match(/[^Aa]{6,}/g);

console.log("Послідовність з шести або більше символів, які не містять літери «А» (великої або малої)", result);