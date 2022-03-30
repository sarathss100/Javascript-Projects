let num1 = 10;
let num2 = 22;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let result = document.getElementById("sum-el")

function addition() {
    result.textContent += num1 + num2;
}

function substraction() {
    result.textContent += num1 - num2;
}

function multiplication() {
    result.textContent += num1 * num2;
}

function division() {
    result.textContent += num1 / num2;
}

function clearArea() {
    result.textContent += "0";
}
