let first = ""
let second = ""
let operator = ""
const displayBottom = document.querySelector(".firstNumber");
const displayTop = document.querySelector(".secondNumber");

let numbtn = document.querySelectorAll(".number");
numbtn.forEach(btn => {
    btn.addEventListener("click", (e) => {populateFirst(e.target.textContent);})
})

function populateFirst(input) {
    first = first + input;
    displayBottom.textContent = first;
}

let operatorbtn = document.querySelectorAll(".operator");
operatorbtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {operatorChoice(e.target.textContent);})
})

function operatorChoice (input) {
    while (operator === "") {
        second = first;
        first = first + " " + input;
        displayBottom.textContent = "";
        displayTop.textContent = first
        first = "";
        operator = input
    }
}

let equatebtn = document.querySelector (".equate");
equatebtn.addEventListener("click", equate);
function equate () {
    let result
    switch(operator) {
        case "":
            displayBottom.textContent = "You need to press an operator";
            break;
        case "/":
            result = second / first; 
            break;
        
        case "x":
            result = second * first;
            break;
        
        case "-":
            result = second - first;
            break;
        
        case "+":
            result = Number(second) + Number(first);
            break;
    }

    if (operator) {
        displayBottom.textContent = result;
        displayTop.textContent = ""
        second = ""
        first = ""
        operator = ""
    }
}

let cancel = document.querySelector(".cancel");
cancel.addEventListener("click", cancelled);
function cancelled() {
    first = ""
    second = ""
    operator = ""
    displayTop.textContent = ""
    displayBottom.textContent = ""
}

let backspace = document.querySelector(".backspace") 
backspace.addEventListener("click", back)
function back () {
    if (first !== "") {
        let length = first.length;
        first = first.slice(0, length - 1);
        displayBottom.textContent = first
    }
}



