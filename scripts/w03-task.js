/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers () {
    let addNumber1 = Number(document.querySelector('#add1').value)
    let addNumber2 = Number(document.querySelector('#add2').value)
    document.querySelector('#sum').value = add(addNumber1, addNumber2)
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (number1, number2) {
    return number1 - number2;
}

function subtractNumbers () {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value)
    let subtractNumber2 = Number(document.querySelector('#subtract2').value)
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2)
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
multiply = (number1, number2) => number1 * number2;

function multiplyNumbers () {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value)
    let multiplyNumber2 = Number(document.querySelector('#factor2').value)
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2)
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
divide = (number1, number2) => number1 / number2;

function divideNumbers () {
    let divideNumber1 = Number(document.querySelector('#dividend').value)
    let divideNumber2 = Number(document.querySelector('#divisor').value)
    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2)
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
const currentDate = new Date();
let currentYear = currentDate.getFullYear();

document.getElementById('year').value = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById('array').textContent = JSON.stringify(numbers);

/* Output Odds Only Array */
const oddNumbers = numbers.filter(number => number % 2 !== 0);
document.getElementById('odds').textContent = JSON.stringify(oddNumbers);

/* Output Evens Only Array */
const evenNumbers = numbers.filter(number => number % 2 === 0);
document.getElementById('evens').textContent = JSON.stringify(evenNumbers);

/* Output Sum of Org. Array */
const sumOfArray = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.getElementById('sumOfArray').textContent = sumOfArray;

/* Output Multiplied by 2 Array */
const multipliedBy2 = numbers.map(number => number * 2);
document.getElementById('multiplied').textContent = JSON.stringify(multipliedBy2);

/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplied = multipliedBy2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;
