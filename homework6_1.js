function checkProbabilityTheory(count) {
    let evenCount = 0;    
    let oddCount = 0;   

    for (let i = 0; i < count; i++) {
        let randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    let evenPercentage = (evenCount / count * 100).toFixed(2);
    let oddPercentage = (oddCount / count * 100).toFixed(2);

    console.log("Кількість чисел згенерованих:", count);
    console.log("Парні числа:", evenCount);
    console.log("Непарні числа:", oddCount);
    console.log("Відсоток скільки парних:", evenPercentage + "%");
    console.log("Відсоток скільки непарних:", oddPercentage + "%");
}
checkProbabilityTheory(1000);