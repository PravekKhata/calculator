const display = document.getElementById("display");

function appendToDisplay(input){
    const operators = ['+', '-', 'x', '/', '%'];
    if(operators.includes(input)){
        display.value += " " + input + " ";
        return;
    }
    display.value += input;
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
    if(arrOfInputs.length < 3){
        display.value = "Error";
        return;
    }

    let result = parseFloat(arrOfInputs[0]);

    // iterate through arrOfInputs to find operator and num2
    for(let i = 1; i < arrOfInputs.length; i += 2){
        const operator = arrOfInputs[i];
        const num2 = parseFloat(arrOfInputs[i+1]);

        if(isNaN(num2)){
            display.value = "Error";
            return;
        }
        result = operate(result, operator, num2);
    }
    display.value = result;
}

function clearLastCharacter(){
    display.value = display.value.slice(0,-1);
}