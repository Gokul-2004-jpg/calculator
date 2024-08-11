let displayElement = document.getElementById('display');

function clearDisplay() {
    displayElement.innerText = '0';
}

function appendNumber(number) {
    if (displayElement.innerText === '0' && number !== '.') {
        displayElement.innerText = number;
    } else {
        displayElement.innerText += number;
    }
}

function appendOperator(operator) {
    const lastChar = displayElement.innerText.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar)) {
        displayElement.innerText = displayElement.innerText.slice(0, -1) + operator;
    } else {
        displayElement.innerText += operator;
    }
}

function deleteLast() {
    displayElement.innerText = displayElement.innerText.slice(0, -1);
    if (displayElement.innerText === '') {
        displayElement.innerText = '0';
    }
}

function calculateResult() {
    try {
        displayElement.innerText = eval(displayElement.innerText);
    } catch {
        displayElement.innerText = 'Error';
    }
}