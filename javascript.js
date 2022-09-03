const keys = document.querySelectorAll(".key")
const screen = document.querySelector(".screen")
screen.textContent = ""
keys.forEach(key => {
    key.addEventListener("click", function(e){
        if(e.target.innerText == "Clear"){
            screen.textContent = ""
        }else if(e.target.innerText == "+" || e.target.innerText == "/" || e.target.innerText == "-" || e.target.innerText == "*"){
            screen.textContent += " " + e.target.innerText + " "
        }
        else{
            screen.textContent += e.target.innerText
        }
    })
});





