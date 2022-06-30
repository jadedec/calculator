// backspace button
//if display.length >0, delete it one by one

const backspace = () => {
    displayStr = document.querySelector("calculatorDisplay_output");
    for (let i = 0; i < displayStr.length; i++) {
        document.querySelector("calculatorDisplay_output") = displayStr.substring(0, displayStr.length - 1);
        if (displayStr == "") {
            document.querySelector("calculatorDisplay_output") = "";
        }
    }
}

