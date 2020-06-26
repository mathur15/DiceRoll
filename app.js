init()
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
function updateCurrentScore(activePlayer,number){
    var current_score = document.querySelector("#current-"+activePlayer).textContent
    current_score = Number(current_score)
    current_score = current_score + number
    document.querySelector("#current-"+activePlayer).innerHTML = current_score
}
document.querySelector(".btn-new").addEventListener("click",function(){
    init()
})

document.querySelector(".btn-roll").addEventListener("click",function(){
    var number = generateRandomNumber()
    document.querySelector(".dice").src = "dice-"+number+".png"
    document.querySelector(".dice").style.display = "initial"
    updateCurrentScore(activePlayer,number)
})
document.querySelector(".btn-hold").addEventListener("click",function(){
    //update the current_score and global score
    var current_score = document.querySelector("#current-"+activePlayer).textContent
    scores[activePlayer] += Number(current_score)
    document.querySelector("#score-"+activePlayer).textContent = ''
    document.querySelector("#score-"+activePlayer).textContent = scores[activePlayer]
    document.querySelector("#current-"+activePlayer).innerHTML = '0'
    //update the current active player
    if(activePlayer === 0){
        activePlayer = 1
    }
    else{
        activePlayer = 0
    }
})






