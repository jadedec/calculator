
//global variable
let num1 = 0;
let num2 = 0;
let result = "";
let operator = "";


const inputBox = document.querySelector("#input");
const resultBox = document.querySelector("#output");
const numberButton = document.querySelectorAll(".calculatorKeyboard_button--number");
const operateButton = document.querySelectorAll(".calculatorKeyboard_button--operate");
const equalButton = document.querySelector("#equal");


const buttonClick = (event) => {
    inputBox.innerHTML += event.target.innerHTML;
    if (operator !== "") {
        num2 = inputBox.innerHTML;
        console.log(`number2 is ${num2}`);
    }
}
//make it shown in display
//number and operator displayed
numberButton.forEach(button => { button.addEventListener("click", buttonClick) });




//when operator clicked, give the number to num1
const operatorClick = (event) => {
    if (num1 == "") {
        num1 = inputBox.innerHTML;
        console.log(`number1 is ${num1}`);
        operator = event.target.innerHTML;
        resultBox.innerHTML = `${num1} ${operator}`
        inputBox.innerHTML = "";
    } else if (num1 !== "" && num2 == "") {
        operator = event.target.innerHTML;
        resultBox.innerHTML = `${num1} ${operator}`
        inputBox.innerHTML = "";
    }
    else {
        num1 = calculation(num1, operator, num2);
        operator = event.target.innerHTML;
        resultBox.innerHTML = `${num1} ${operator}`;
        inputBox.innerHTML = "";
        num2 = "";
        console.log(`num1 :${num1}`);
        console.log(`num2 :${num2}`);
    }
}
operateButton.forEach(button => { button.addEventListener("click", operatorClick) });



//when equal clicked, give the number to num2
const equalClick = (event) => {
    //calculation
    num1 = calculation(num1, operator, num2);
    resultBox.innerHTML = "";
    inputBox.innerHTML = num1;
    num2 = "";
    operator = "";
}
equalButton.addEventListener("click", equalClick);




//+-×÷ switch cases
const calculation = (num1, operator, num2) => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (operator) {
        case "+":
            return num1 + num2;

        case "-":
            return num1 - num2;
            break;
        case "×":
            return num1 * num2;
            break;
        case "÷":
            return num1 / num2;
            break;
        case "^":
            return Math.pow(num1, num2);
            break;
        //undefined operator///////console.error will be red in browser
        default:
            console.error(`unhandled operator: ${operator}`);
    }
}


//AC button clear function
const ACButton = document.querySelector("#AC");
const clearResult = (event) => {
    num1 = "";
    num2 = "";
    operator = "";
    inputBox.innerHTML = "";
    resultBox.innerHTML = "";
}
ACButton.addEventListener("click", clearResult);


// backspace function for  button
const backspaceButton = document.querySelector("#delete");
const backspace = (event) => {
    inputBox.innerHTML = inputBox.innerHTML.substring(0, inputBox.innerHTML.length - 1);
}
backspaceButton.addEventListener("click", backspace);

//+/-
const switchButton = document.querySelector("#symbol");
const switchSymbol = (event) => {
    const currentDisplay = inputBox.innerHTML;
    const newDisplay = 0 - currentDisplay;
    inputBox.innerHTML = newDisplay;
}
switchButton.addEventListener("click", switchSymbol);



const dotButton = document.querySelector("#dot");
const handleDot = (event) => {
    if (inputBox.innerHTML.includes(".")) {
        alert("Number is already a decimal.")
    } else {
        inputBox.innerHTML += event.target.innerHTML;
    }
}
dotButton.addEventListener("click", handleDot);




