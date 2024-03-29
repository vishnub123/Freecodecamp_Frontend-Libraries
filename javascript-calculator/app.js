const clear = document.getElementById('clear')
const display = document.getElementById('display')
const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const zero = document.getElementById('zero')
const decimal = document.getElementById('decimal')

const add = document.getElementById('add')

const equal = document.getElementById('equals')


clear.addEventListener('click', function(){
  display.innerHTML = '0'
  one.disabled = false
  two.disabled = false
  three.disabled = false
  four.disabled = false
  five.disabled = false
  six.disabled = false
  seven.disabled = false
  eight.disabled = false
  nine.disabled = false
  zero.disabled = false
  decimal.disabled = false
})

one.addEventListener('click', function(){
  if(display.innerHTML.length >=9){
    one.disabled = true
  }
  if(display.innerHTML === '0'){
    display.innerHTML = '1'
  }
  else{
    display.innerHTML += '1'
  }
})

two.addEventListener('click', function(){
  if(display.innerHTML.length >=9){
    two.disabled = true
  }
  if(display.innerHTML === '0'){
    display.innerHTML = '2'
  }
  else{
    display.innerHTML += '2'
  }
})

three.addEventListener('click', function(){
  if(display.innerHTML.length >=9){
    three.disabled = true
  }
  if(display.innerHTML === '0'){
    display.innerHTML = '3'
  }
  else{
    display.innerHTML += '3'
  }
})

four.addEventListener('click', function(){
  if(display.innerHTML.length >=9){
    four.disabled = true
  }
  if(display.innerHTML === '0'){
    display.innerHTML = '4'
  }
  else{
    display.innerHTML += '4'
  }
})

five.addEventListener('click', function(){
  if(display.innerHTML.length >=9){
    five.disabled = true
  }
  if(display.innerHTML === '0'){
    display.innerHTML = '5'
  }
  else{
    display.innerHTML += '5'
  }
})


six.addEventListener('click', function(){
  if(display.innerHTML.length >=9){
    six.disabled = true
  }
  if(display.innerHTML === '0'){
    display.innerHTML = '6'
  }
  else{
    display.innerHTML += '6'
  }
})

seven.addEventListener('click', function(){
  if(display.innerHTML.length >=9){
    seven.disabled = true
  }
  if(display.innerHTML === '0'){
    display.innerHTML = '7'
  }
  else{
    display.innerHTML += '7'
  }
})


eight.addEventListener('click', function(){
  if(display.innerHTML.length >=9){
    eight.disabled = true
  }
  if(display.innerHTML === '0'){
    display.innerHTML = '8'
  }
  else{
    display.innerHTML += '8'
  }
})

nine.addEventListener('click', function(){
  if(display.innerHTML.length >=9){
    nine.disabled = true
  }
  if(display.innerHTML === '0'){
    display.innerHTML = '9'
  }
  else{
    display.innerHTML += '9'
  }
})

zero.addEventListener('click', function(){
  if(display.innerHTML.length >=9){
    zero.disabled = true
  }
  if(display.innerHTML === '0'){
    display.innerHTML = '0'
  }
  else{
    display.innerHTML += '0'
  }
})

let decimalCount = 0

decimal.addEventListener('click', function(){
  display.innerHTML += '.'
  decimalCount = 1
  if(decimalCount === 1){
    decimal.disabled = true
  }
})

let calculatedResult = 0
const operators = []

add.addEventListener('click', function(){
  display.innerHTML += '+'
  decimal.disabled = false
  operators.push('+')
})
subtract.addEventListener('click', function(){
  display.innerHTML += '-'
  decimal.disabled = false
  operators.push('-')
})
multiply.addEventListener('click', function(){
  display.innerHTML += '*'
  decimal.disabled = false
})
divide.addEventListener('click', function(){
  display.innerHTML += '/'
  decimal.disabled = false
})

equal.addEventListener('click', function(){
const mathString = display.innerHTML;

// Split the string into an array of numbers and operators
const parts = mathString.split(/([\+\-\*\/])/);

let result = 0;
let currentOperator = '+';

// Loop through the parts of the string
for (let i = 0; i < parts.length; i++) {
  const part = parts[i].trim();
  if (part === '+' || part === '-' || part === '*' || part === '/') {
    currentOperator = part;
  } else {
    const number = parseFloat(part);

    switch (currentOperator) {
      case '+':
        result += number;
        break;
      case '-':
        result -= number;
        break;
      case '*':
        result *= number;
        break;
      case '/':
        result /= number;
        break;
    }
  }
}
display.innerHTML = result
})