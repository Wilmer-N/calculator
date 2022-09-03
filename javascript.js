const keys = document.querySelectorAll(".key")
const screen = document.querySelector(".screen")
num = ""
num1 = 0
ans = 0
let array = []
screen.textContent = ""

keys.forEach(key => {
    key.addEventListener("click", function(e){
        let input = e.target.innerText
        textDisplay(e)
       if(Number.isInteger(parseInt(input))){
        num = num + parseInt(input)
       }else{
        if(num1){
            num2 = parseInt(num)
            console.log(addition(num1, num2))
            num1 = addition(num1, num2)
        }else{
        num1 = parseInt(num)
        console.log(num1)
        }
        num = ""
       }
    })
});



function addition(num1, num2){
    return num1 + num2
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




