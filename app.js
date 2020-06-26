init()
generateRandomNumber()
activePlayer = 0
scores = [0,0]
function init(){
    document.querySelector(".dice").style.display = "none"
    document.querySelector("#score-0").innerHTML = '0'
    document.querySelector("#score-1").innerHTML = '0'
    document.querySelector("#current-0").innerHTML = '0'
    document.querySelector("#current-1").innerHTML = '0'
}
function generateRandomNumber(){
    return Math.floor(Math.random() * 6) + 1
}
document.querySelector(".btn-new").addEventListener("click",function(){
    init()
})

document.querySelector(".btn-roll").addEventListener("click",function(){
    var number = generateRandomNumber()
    document.querySelector(".dice").src = "dice-"+number+".png"
    document.querySelector(".dice").style.display = "initial"
    updateScore(activePlayer,number)
})






