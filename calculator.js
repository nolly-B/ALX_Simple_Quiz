function add(number1, number2) {
  let number1 = parseFloat(document.querySelector("# number1").value) || 0;
  let number2 = parseFloat(document.querySelector("#number2").value) || 0;
  let result = document.querySelector("#calculation-result");

  return (result.textContent = number1 + number2);
}

let addition = document.getElementById("add");
addition.addEventListener("click", add);

function sub() {
  let number1 = parseFloat(document.querySelector("# number1").value) || 0;
  let number2 = parseFloat(document.querySelector("#number2").value) || 0;
  let result = document.querySelector("#calculation-result");
  return (result.textContent = number1 - number2);
}

let subtraction = document.getElementById("subtract");
subtraction.addEventListener("click", sub);
