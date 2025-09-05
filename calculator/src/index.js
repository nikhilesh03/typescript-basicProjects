var Calculator = /** @class */ (function () {
    function Calculator() {
        this.currentInput = '';
        this.previousInput = '';
        this.operator = null;
    }
    Calculator.prototype.appendNumber = function (number) {
        if (this.currentInput === '0' && number !== '.') {
            this.currentInput = number;
        }
        else if (number === '.' && !this.currentInput.includes('.')) {
            this.currentInput += number;
        }
        else {
            this.currentInput += number;
        }
        this.updateDisplay();
    };
    Calculator.prototype.chooseOperator = function (operator) {
        if (this.currentInput === '')
            return;
        if (this.previousInput !== '') {
            this.compute();
        }
        this.operator = operator;
        this.previousInput = this.currentInput;
        this.currentInput = '';
    };
    Calculator.prototype.compute = function () {
        var computation;
        var prev = parseFloat(this.previousInput);
        var curr = parseFloat(this.currentInput);
        switch (this.operator) {
            case '+':
                computation = prev + curr;
                break;
            case '-':
                computation = prev - curr;
                break;
            case '*':
                computation = prev * curr;
                break;
            case '/':
                computation = prev / curr;
                break;
            default:
                return;
        }
        this.currentInput = computation.toString();
        this.operator = null;
        this.previousInput = '';
        this.updateDisplay();
    };
    Calculator.prototype.clear = function () {
        this.currentInput = '';
        this.previousInput = '';
        this.operator = null;
        this.updateDisplay();
    };
    Calculator.prototype.updateDisplay = function () {
        var display = document.getElementById('display');
        display.value = this.currentInput;
    };
    return Calculator;
}());
var calculator = new Calculator();
document.getElementById('buttons').addEventListener('click', function (event) {
    var target = event.target;
    if (target.classList.contains('number')) {
        calculator.appendNumber(target.innerText);
    }
    else if (target.classList.contains('operator')) {
        calculator.chooseOperator(target.innerText);
    }
    else if (target.classList.contains('equals')) {
        calculator.compute();
    }
    else if (target.classList.contains('clear')) {
        calculator.clear();
    }
});
