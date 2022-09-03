

const array = ["11", "+", "10"]



var functions = [
    {add: function addition(num1, num2){return parseInt(num1) + parseInt(num2)}},
    {sub: function subtraction(num1, num2){return parseInt(num1) - parseInt(num2)}},
    {mul: function multiply(num1, num2){return parseInt(num1) * parseInt(num2)}},
    {div: function division(num1, num2){return parseInt(num1) / parseInt(num2)}}
]
const string = "10 + 11"
const newstring = parseInt(string)
console.log(newstring)