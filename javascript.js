const keys = document.querySelectorAll(".key")
const screen = document.querySelector(".screen")
num = ""
num1 = 0
num2 = 0
let operatorOrder = []

screen.textContent = ""


keys.forEach(key => {
    key.addEventListener("click", function(e){
        let input = e.target.innerText
        textDisplay(e)
        if(Number.isInteger(parseInt(input))){
        num += input
        }else if(input == "+"){
            operatorOrder.push(add)
            mathTime()
        }else if(input == "-"){
            operatorOrder.push(sub)
            mathTime()
        }else if(input == "/"){
            operatorOrder.push(div)
            mathTime()
        }else if(input == "*"){
            operatorOrder.push(mul)
            mathTime()
        }

    })});
function mathTime(){
    if(num1){
        num2 = parseInt(num)
        num1 = operatorOrder[operatorOrder.length -2](num1, num2)
        console.log(num1)
        num = ""
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
    if(input == "Clear"){
        screen.textContent = ""
        globalThis.num1 = ""
    }else if(input == "+" || input == "/" || input == "-" || input == "*"){
        screen.textContent += " " + input + " "
    }
    else{
        screen.textContent += input
    }
}
