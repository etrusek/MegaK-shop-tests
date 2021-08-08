const form = document.querySelector('form');
const output = document.querySelector('article');

const doMath = (e) => {
    e.preventDefault();
    const firstNumber = e.target[0].value;
    const secondNumber = e.target[1].value;
    try {
        const calc = new Calculator(firstNumber, secondNumber);
        output.innerText = `Wynik dodawania \n
    ${firstNumber} + ${secondNumber} = ${calc.add(firstNumber, secondNumber)} \n
    Wynik odejmowania \n
    ${firstNumber} + ${secondNumber} = ${calc.subtract(firstNumber, secondNumber)} \n
    Wynik mnożenia \n
    ${firstNumber} * ${secondNumber} = ${calc.multiply(firstNumber, secondNumber)} \n
    Wynik dzielenia \n
    ${firstNumber} / ${secondNumber} = ${calc.divide(firstNumber, secondNumber)} \n
    `
    } catch (e) {
        console.log("nie działa", e)
    }

}


form.addEventListener('submit', doMath)
