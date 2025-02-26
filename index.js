

let currentNumber = '';
let previousNumber = '';
let operation = null;

function appendNumber(num) {
    currentNumber += num;
    updateDisplay();
}

function setOperation(op) {
    if (currentNumber !== '') {
        if (previousNumber !== '') {
            calculate();
        }
        operation = op;
        previousNumber = currentNumber;
        currentNumber = '';
    }
}

function calculate() {
    if (previousNumber !== '' && currentNumber !== '' && operation) {
        let result;
        const prev = parseFloat(previousNumber);
        const current = parseFloat(currentNumber);
        
        switch(operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
        }
        
        currentNumber = result.toString();
        operation = null;
        previousNumber = '';
        updateDisplay();
    }
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = null;
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.value = currentNumber || '0';
}
