let currentInput = "";
let currentOperator = "";
let previousInput = "";
let resultDisplayed = false;

function appendToDisplay(value) {
    if (resultDisplayed) {
        clearDisplay();
        resultDisplayed = false;
    }
    currentInput += value;
    document.getElementById("display").value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    currentOperator = "";
    document.getElementById("display").value = "";
}

function calculateResult() {
    if (currentInput !== "") {
        previousInput = currentInput;
        currentInput = eval(currentInput);
        document.getElementById("display").value = currentInput;
        resultDisplayed = true;
    }
}