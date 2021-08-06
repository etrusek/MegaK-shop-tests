const ulCalc = document.querySelector('.ulCalc');
const ulActions = document.querySelector('.ulActions');
const calcOutput = document.querySelector('.output');

const arrOfNumb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const actions = ['+', "-", "*", '/', '='];

const calc = new Counting;

//obsługa

function numberEvent(e) {
    const number = e.target.dataset.num;
    if (calc.equation.secondNumber === null) {
        calc.addToFirstNumber(number);
        console.log(calc.equation.firstNumber, calc.equation.secondNumber);
        calcOutput.style.color = 'black';
        calcOutput.textContent = calc.equation.firstNumber;
    } else {
        // mamy drugą liczbę teraz usupełniamy pierwszą i obliczamy.
        calc.addToFirstNumber(number);
        console.log(calc.equation.secondNumber, calc.equation.sign, calc.equation.firstNumber);
        calcOutput.textContent = `${calc.equation.secondNumber} ${calc.equation.sign} ${calc.equation.firstNumber} = ${calc.doMath()}`;
    }
}

function actionEvent(e) {
    const action = e.target.dataset.action;
    if (calc.equation.firstNumber === null) {
        // We're clicking sign, but first we have to give a number.
        calcOutput.textContent = `Podaj liczbę...`;
        calcOutput.style.color = 'red';
    } else if (calc.equation.secondNumber !== null){
        console.log('a')
        calc.equation.secondNumber = calc.doMath();
        calc.addSign(action);
        calc.equation.firstNumber = null;
    }    else {
        // Mamy jedną liczbę i znak (teraz). Zapisujemy pierwszą liczbę jako drugą i zapisujemy znak.
        calc.equation.secondNumber = calc.equation.firstNumber;
        calc.equation.firstNumber = null;
        calc.addSign(action);
    }
}

// wydrukowanie przycisków

arrOfNumb.forEach(btnArr => {
    const btn = document.createElement('button');
    btn.classList.add(`btn${btnArr}`, 'calcBtn');
    btn.setAttribute('data-num', btnArr);
    btn.textContent = btnArr;
    btn.addEventListener('click', numberEvent)
    ulCalc.appendChild(btn);
})

//wydrukowanie znaków = - * / =

actions.forEach(btnAct => {
    const btn = document.createElement('button');
    btn.classList.add(`btn${btnAct}`, 'calcBtn', 'calcBtnAct');
    btn.setAttribute('data-action', btnAct);
    btn.textContent = btnAct;
    btn.addEventListener('click', actionEvent)
    ulActions.appendChild(btn);
})