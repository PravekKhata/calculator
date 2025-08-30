const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input + " ";
}

function clearDisplay(){
    display.value = "";
}

function operate(num1, operator, num2) {
    switch(operator){
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case 'x':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        case '%':
            return remainder(num1, num2);
        default:
            return "Invalid operator";
    }
}

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    console.log(num1-num2)
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function remainder(num1, num2){
    return num1 % num2;
}

function calculate(){
    const arrOfInputs = display.value.trim().split(" ");
    console.log(arrOfInputs);
    const num1 = parseInt(arrOfInputs[0]);
    const operator = arrOfInputs[1];
    const num2 = parseInt(arrOfInputs[2]);

    console.log(typeof num1, typeof num2, typeof operator);
    const result = operate(num1, operator, num2);
    console.log(result);
    display.value = result + " ";
}

function clearLastCharacter(){
    display.value = display.value.slice(0,-1);
}