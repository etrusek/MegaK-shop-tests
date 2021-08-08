class Calculator {
    constructor(firstNumber, secondNumber) {
        const a = Number(firstNumber);
        const b = Number(secondNumber);
        console.log(firstNumber, a)
        if (Number.isNaN(a) || firstNumber === '') {
            throw new Error('nieprawidłowo podana liczba pierwsza')
        }
        if (Number.isNaN(b) || secondNumber === '') {
            throw new Error('nieprawidłowo podana liczba druga')
        }
        this.a = a;
        this.b = b;

    }

    add() {
        return this.a + this.b;
    };

    subtract() {
        return this.a - this.b;
    };

    multiply() {
        return this.a * this.b;
    };

    divide() {
        if (this.b === 0){throw new Error("nie wolno dzielić przez 0")}
        return this.a / this.b;
    };
}