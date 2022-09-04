const keys = document.querySelectorAll(".key")
const screen = document.querySelector(".screen")
num = ""
num1 = 0
num2 = 0
let operatorOrder = []
screen.textContent = ""
equal = false

keys.forEach(key => {
    key.addEventListener("click", function(e){
        let input = e.target.innerText
        clear(e)
        if(!equal){
        textDisplay(e)
        if(Number.isInteger(parseInt(input))){
        num += input
        }else if(input == "+"){
            operatorOrder.push(add)
            mathTime(input)
        }else if(input == "-"){
            operatorOrder.push(sub)
            mathTime(input)
        }else if(input == "/"){
            operatorOrder.push(div)
            mathTime(input)
        }else if(input == "*"){
            operatorOrder.push(mul)
            mathTime(input)
        }else if(input == "="){
            equals()
        }}

    })});
function mathTime(input){
    if(num1){
        console.log(num1)
        num2 = parseInt(num)
        num1 = operatorOrder[operatorOrder.length -2](num1, num2)
        console.log(num1)
        screen.textContent = num1 + " " + input + " "
        num = ""
    }else{
        num1 = parseInt(num)
        num = ""
    }
}
function equals(){
    if(num1){
        num2 = parseInt(num)
        num1 = operatorOrder[operatorOrder.length -1](num1, num2)
        screen.textContent = num1
        num = ""
        equal = true
    }else{
        num1 = parseInt(num)
        num = ""
    }
}


function add(num1, num2){
    return num1 + num2
}
function sub(num1, num2){
    return num1 - num2
}
function mul(num1, num2){
    return num1 * num2
}
function div(num1, num2){
    return num1 / num2
}

function textDisplay(e){
    let input = e.target.innerText
    if(input == "+" || input == "/" || input == "-" || input == "*"){
        screen.textContent += " " + input + " "
    }else if(input != "Clear"){
        screen.textContent += input
    }
}

function clear(e){
    let input = e.target.innerText
    if(input == "Clear"){
        num1 = 0
        num2 = 0
        num = ""
        screen.textContent = ""
        globalThis.equal = false
        globalThis.num1 = ""
    }else return
}