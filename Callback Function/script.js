function calculate(callback){
let num1 = parseFloat(document.getElementById("num1").value);
let num2 = parseFloat(document.getElementById("num2").value);
let result = callback(num1 , num2);
document.getElementById("result").innerHTML = "Result :" + result;
}

function add(a,b){
    return a+ b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
     if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}