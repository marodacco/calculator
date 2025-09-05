// create basic math functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// create valuables for two numbers and an operator
const numberA = 0;
const numberB = 0;
const mathOperator = "";

// create main funcion to take numbers/operator and call one of the math functions
function operate(num1, num2, math) {
  let result = 0;

  switch(math) {
    case "add":
      result = add(num1, num2);
      break;
    case "subtract":
      result = subtract(num1, num2);
      break;
    case "multiply":
      result = multiply(num1, num2);
      break;
    case "divide":
      result = divide(num1, num2);
  }

  return result;
}
