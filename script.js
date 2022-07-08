

//global variable
let num1 = 0;
let num2 = 0;
let result = "";
let displayString = "";
let operator = "";


const displayBox = document.querySelector("#display");
const resultBox = document.querySelector("#result");
const numberButton = document.querySelectorAll(".calculatorKeyboard_button--number");
const operateButton = document.querySelectorAll(".calculatorKeyboard_button--operate");
const equalButton = document.querySelector("#equal");


const buttonClick = (event) => {
    //button clicked
    //connect inputs together
    displayString += event.target.innerHTML;
    displayBox.innerHTML = displayString;
}
//make it shown in display
//number and operator displayed
numberButton.forEach(button => { button.addEventListener("click", buttonClick) });
//operateButton.forEach(button => { button.addEventListener("click", buttonClick) });
//equalButton.addEventListener("click", buttonClick);

//when operator clicked, give the number to num1
const operatorClick = (event) => {
    num1 = parseFloat(displayBox.innerHTML);//make sure it is number!!!!
    console.log(`number1 is ${num1}`);
    operator = event.target.innerHTML;
    resultBox.innerHTML = `${num1} ${operator}`
    displayString = "";

}
operateButton.forEach(button => { button.addEventListener("click", operatorClick) });

//when equal clicked, give the number to num2
const equalClick = (event) => {
    // newArr = displayString.split(/[+\-\×\÷\=]/);
    // num2 = parseFloat(newArr[1]);//make sure it is number!!!!
    num2 = parseFloat(displayBox.innerHTML)
    console.log(`number2 is ${num2}`);

    //calculation
    result = calculation();
    console.log(result);
    resultBox.innerHTML = result;
    displayBox.innerHTML = result;
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

        case "^":
            return Math.pow(num1, num2);

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
    displayBox.innerHTML = "0";
    resultBox.innerHTML = "";
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
    const currentDisplay = displayBox.innerHTML;
    const newDisplay = 0 - currentDisplay;
    displayBox.innerHTML = newDisplay;
}
switchButton.addEventListener("click", switchSymbol);



const dotButton = document.querySelector("#dot");
const handleDot = (event) => {
    if (displayBox.innerHTML.includes(".")) {
        alert("Number is already a decimal.")
    } else {
        displayString += event.target.innerHTML;
        displayBox.innerHTML = displayString;
    }
}
dotButton.addEventListener("click", handleDot);




//eventlistener for keyboard...instead of clicking, type
document.addEventListener('keypress', (event) => {
    var name = event.key;
    var code = event.code;
    switch (name) {
        case "c": clearResult();
            break;                        //work!!!!!\(▔▽▔)/

        ///////////////from here is not working(╯▔皿▔)╯   //////////////////
        case "backspace":
        case "delete": backspace();
            break;
        case "enter": calculation();
            break;
        case "add":
        case "subtract":
        case "multiply":
        case "divide":
        case "shift+6":
            operatorClick();
            break;
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
        case "numpad 1":
        case "numpad 2":
        case "numpad 3":
        case "numpad 4":
        case "numpad 5":
        case "numpad 6":
        case "numpad 7":
        case "numpad 8":
        case "numpad 9":
        case "numpad 0":
        case "decimal point":
            buttonClick();
    }
})

















//factorial !
// const facButton = document.querySelector("#factorial");
// const facClick = (event) => {
//     result = factorial(displayString);
//     console.log(result);
//     displayString += "!=" + result;
//     console.log(displayString);
//     displayBox.innerHTML = displayString;

// }
// const factorial = (n) => {
//     if (n <= 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// facButton.addEventListener("click", facClick)