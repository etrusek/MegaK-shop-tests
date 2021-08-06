class Counting {
    constructor() {
        this.equation = {
            firstNumber: null,
            secondNumber: null,
            sign: null,
        }
    };

    addToFirstNumber(num) {
        this.equation.firstNumber = this.equation.firstNumber === null ? Number(num) : String(this.equation.firstNumber) + String(num);
    };

    addSign(sign) {
        this.equation.sign = sign;
    };

    doMath() {
        switch (this.equation.sign) {
            case "+":
                return this.equation.secondNumber + this.equation.firstNumber;
                break;
            case "-":
                return this.equation.secondNumber - this.equation.firstNumber;
                break;
            case "*":
                return this.equation.secondNumber * this.equation.firstNumber;
                break;
            case "/":
                return this.equation.secondNumber / this.equation.firstNumber;
                break;

        }
    }
}