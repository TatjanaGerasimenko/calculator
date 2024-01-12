const keys = document.querySelectorAll('#calculator span');
const operators = ['+', '-', '*', '/'];
let pointAdded = false;

for (let i = 0; i < keys.length; i++) {
  keys[i].onclick = function() {
    const input = document.querySelector('.screen');
    let inputVal = input.innerHTML;
    let btnVal = this.innerHTML;
    console.log (inputVal, btnVal);

    if (btnVal === 'C') {
      input.innerHTML = '';
      pointAdded = false;
    }
    else if (btnVal === '=') {
      let equation = inputVal;
      let lastChar = equation[equation.length - 1];

      if(operators.indexOf(lastChar) > -1) equation = equation.replace(/.$/, '');
      if(equation) input.innerHTML = eval(equation);
      pointAdded=false;
    }
    else if (operators.indexOf(btnVal) > -1) {
      let lastChar = inputVal[inputVal.length - 1];

      if (inputVal !== '') input.innerHTML += btnVal;
      if (operators.indexOf(lastChar) > -1 && inputVal.leght > 1) input.innerHTML = inputVal.replace(/.$/, btnVal);
      pointAdded = false;
    }
    else if (btnVal === '.') {
      if (!pointAdded) {
        input.innerHTML += btnVal;
        pointAdded = true;
      }
    } else input.innerHTML += btnVal;
  } 
}