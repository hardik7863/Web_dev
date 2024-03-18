let inp1 = document.querySelector('#inpt1');
let inp2 = document.querySelector('#inpt2');
let ans = document.querySelector('.ans');

function addition() {
    let num1 = parseInt(inp1.value);
    let num2 = parseInt(inp2.value);
    ans.innerText = `sum of ${num1} and ${num2} is: ${num1 + num2}`;
}

function subtractor() {
    let num1 = parseInt(inp1.value);
    let num2 = parseInt(inp2.value);
    ans.innerText = `difference of ${num1} and ${num2} is: ${num1 - num2}`;
}

function multiply() {
    let num1 = parseInt(inp1.value);
    let num2 = parseInt(inp2.value);
    ans.innerText = `product of ${num1} and ${num2} is: ${num1 * num2}`;
}

function division() {
    let num1 = parseFloat(inp1.value);
    let num2 = parseFloat(inp2.value);
    if (num2 !== 0) {
        ans.innerText = `division of ${num1} by ${num2} is: ${num1 / num2}`;
    } else {
        ans.innerText = "Cannot divide by zero";
    }
}

let add = document.querySelector('.add');
add.addEventListener("click", addition);

let sub = document.querySelector('.sub');
sub.addEventListener("click", subtractor);

let mul = document.querySelector('.mul');
mul.addEventListener("click", multiply);

let div = document.querySelector('.div');
div.addEventListener("click", division);

let reset = document.querySelector('.reset');
reset.addEventListener("click", () => {
    inp1.value = "";
    inp2.value = "";
    ans.innerText = "";
});
