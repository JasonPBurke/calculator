let a;
let b;
let op = '';


const buttons = document.querySelectorAll('.keypad button, .operators button');
const display = document.querySelector('.display');
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');


buttons.forEach(button => {
  button.addEventListener('mouseover', button => {
    button.target.style.backgroundColor = '#8FBCBB';
    button.target.style.color = '#292d39';
  })
});

buttons.forEach(button => {
  button.addEventListener('mouseout', button => {
    button.target.style.backgroundColor = '#3d4455';
    button.target.style.color = '#adb7c9';
  })
});

buttons.forEach(button => {
  button.addEventListener('mousedown', button => {
    button.target.style.backgroundColor = '#7dc2c1';
    button.target.style.color = '#292d39';
  })
});

buttons.forEach(button => {
  button.addEventListener('mouseup', button => {
    button.target.style.backgroundColor = '#8FBCBB';
    button.target.style.color = '#292d39';
    populateDisplay(button);
  })
});
/** 
  *! let user enter digits, one decimal and or one percent sign
  *! when user enters an operator, store the digits entered and the sign entered
  *! let user enter a second set of digits with same constraints at the first digit
  *! if user enters a second operator, display the results of the first operation and
  *! store that result as the 'first' number with the second number being entered by user with new operator
*/
function populateDisplay(button) {
  const operators = '+-*/';
  let btnTxt = button.target.textContent;
  if(display.textContent.includes('%')) {
    return;
  }
  if(display.textContent === '0') {
    display.textContent = '';
  }
  if(Number(btnTxt) || btnTxt === '0') {
    display.textContent += btnTxt;
  } else if(btnTxt === '.' || btnTxt === '%') {
      display.textContent += btnTxt;
      button.target.disabled = true;
      button.target.style.backgroundColor = '#3d4455';
      button.target.style.color = '#adb7c9';
  } else if(operators.includes(btnTxt)) {
    op = btnTxt;
    if(a && b) {
      a = display.textContent;
      display.textContent = operate(op, +a, +b);
    } else {
      b = a;
      a = display.textContent;
      // display.textContent = btnTxt;
    }
    
    document.querySelector('.percent').disabled = false;
    document.querySelector('.decimal').disabled = false;
  }


  // TODO when operator, equals, or clear pressed, re-enable buttons for . and %
}

function operate(operator, a, b) {
  let answer;
  operator == '+' ? answer = add(a, b)
  : operator == '-' ? answer = subtract(a, b)
  : operator == '*' ? answer = multiply(a, b)
  : operator == '/' ? answer = divide(a, b)
  :  answer = 'You a big dummy, Fry';
  return answer;
}

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
