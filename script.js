
//number button
//button pressed,log in the console,
//shown in the display
//querySelectorAll .class
//store the first number before click on operate button
//store the operator
//start the second number
//click =  store  second number
//calculate get result shown in display

//global variable
let num1 = "";
let num2 = "";
let result = "";
let displayString = "";
let operator;


const displayBox = document.querySelector("#display");

const numberButton = document.querySelectorAll(".calculatorKeyboard_button--number");
const operateButton = document.querySelectorAll(".calculatorKeyboard_button--operate");
const equalButton = document.querySelector("#equal");


const buttonClick = (event) => {
    //button clicked
    //console.log("Button Clicked");
    // console.log(event.target.innerHTML);

    //connect inputs together
    displayString += event.target.innerHTML;
    //console.log(displayString);

    displayBox.innerHTML = displayString;
}
//make it shown in display
//number and operator displayed
numberButton.forEach(button => { button.addEventListener("click", buttonClick) });
operateButton.forEach(button => { button.addEventListener("click", buttonClick) });
equalButton.addEventListener("click", buttonClick);

//when operator clicked, give the number to num1
const operatorClick = (event) => {
    //console.log("Operator clicked");
    num1 = parseFloat(displayBox.innerHTML);
    console.log(`number1 is ${num1}`);
    operator = event.target.innerHTML;
    //console.log(operator);

}
operateButton.forEach(button => { button.addEventListener("click", operatorClick) });

//when equal clicked, give the number to num2
const equalClick = (event) => {
    //console.log("Equal clicked");
    newArr = displayString.split(/[+\-\×\÷\=]/);
    //console.log(newArr);
    num2 = parseFloat(newArr[1]);
    console.log(`number2 is ${num2}`);

    //calculation
    result = calculation();
    console.log(result);

    displayString += result;
    console.log(displayString);
    displayBox.innerHTML = displayString;

}
equalButton.addEventListener("click", equalClick)




//+-×÷ switch cases
const calculation = () => {
    switch (operator) {
        case "+":
            return num1 + num2;

        case "-":
            return num1 - num2;

        case "×":
            return num1 * num2;

        case "÷":
            return num1 / num2;

    }
}


//AC button clear function
const ACButton = document.querySelector("#AC");
const clearResult = (event) => {
    num1 = "";
    num2 = "";
    result = "";
    operator = "";
    displayString = "";
    displayBox.innerHTML = "";
}
ACButton.addEventListener("click", clearResult);


// backspace function for  button
const backspaceButton = document.querySelector("#delete");
const backspace = (event) => {
    const newDisplay = displayString.substring(0, displayString.length - 1);
    displayString = newDisplay;
    displayBox.innerHTML = displayString;
}
backspaceButton.addEventListener("click", backspace);

//+/-
const switchButton = document.querySelector("#symbol");
const switchSymbol = (event) => {
    displayString = 0 - displayString;
    displayBox.innerHTML = displayString;
}
switchButton.addEventListener("click", switchSymbol);






//!
const facButton = document.querySelector("#factorial");
const facClick = (event) => {
    result = factorial(displayString);
    console.log(result);
    displayString += "!=" + result;
    console.log(displayString);
    displayBox.innerHTML = displayString;

}
const factorial = (n) => {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
facButton.addEventListener("click", facClick);