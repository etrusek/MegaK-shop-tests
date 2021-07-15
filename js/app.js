const btnCounter = document.querySelector('.btn-counter');
const counterDisplay = document.querySelector('.counter-display');

let counter = 0;
const counterFunction = () => {
    counterDisplay.innerText = ++counter;
}

btnCounter.addEventListener('click', counterFunction)