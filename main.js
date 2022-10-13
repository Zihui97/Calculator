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
    if (first === "") {displayBottom.textContent = 696969} else {
    switch(operator) {
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
            result = second + first;
            break;
    }}
    displayBottom.textContent = result;
    displayTop.textContent = ""
    second = ""
    first = ""
    operator = ""
}



