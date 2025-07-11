function checkProbabilityTheory(count) {

    let evenNumbers = 0;
    let oddNumbers = 0;

 
    for (let i = 0; i < count; i++) {
        let randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        if (randomNumber % 2 === 0) {
            evenNumbers = evenNumbers + 1;
        } else {
            oddNumbers = oddNumbers + 1; 
        }
    }

    let evenPercent = (evenNumbers / count) * 100;
    let oddPercent = (oddNumbers / count) * 100;

    console.log("Кількість чисел згенерованих:" + count);
    console.log("Парні числа: " + evenNumbers);
    console.log("Непарні числа: " + oddNumbers);
    console.log("Відсоток скільки парних: " + evenPercent + "%");
    console.log("Відсоток скільки непарних: " + oddPercent + "%");
}
checkProbabilityTheory(100)