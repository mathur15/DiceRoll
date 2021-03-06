activePlayer = 0
inputScore = 0
scores = [0,0]
previous_roll = 0 //to check two consecutive sixes
init()
function init(){
    scores = [0,0]
    activePlayer = 0
    previous_roll = 0
    document.querySelector(".dice").style.display = "none"
    document.querySelector("#score-0").innerHTML = '0'
    document.querySelector("#score-1").innerHTML = '0'
    document.querySelector("#current-0").textContent = '0'
    document.querySelector("#current-1").textContent = '0'
    document.querySelector("#submitButton").style.visibility = "visible"
    document.querySelector("#form1").style.visibility = "visible"
    document.querySelector("#name-0").textContent = "Player 1"
    document.querySelector("#name-1").textContent = "Player 2"
    document.querySelector(".btn-roll").style.display = "initial"
    document.querySelector(".btn-hold").style.display = "initial"
}
function generateRandomNumber(){
    return Math.floor(Math.random() * 6) + 1
}
function updateCurrentScore(activePlayer,number){
    var current_score = document.querySelector("#current-"+activePlayer).textContent
    current_score = Number(current_score)
    current_score = current_score + number
    document.querySelector("#current-"+activePlayer).innerHTML = current_score
    if(checkWinner(current_score)){
        updateGlobalScore(activePlayer)
        declareWinner(current_score)
    }
}
function updateGlobalScore(activePlayer){
    var current_score = document.querySelector("#current-"+activePlayer).textContent
    scores[activePlayer] += Number(current_score)
    document.querySelector("#score-"+activePlayer).textContent = ''
    document.querySelector("#score-"+activePlayer).textContent = scores[activePlayer]
    document.querySelector("#current-"+activePlayer).innerHTML = '0'
}
function toggleActivePlayer(activePlayer){
    return activePlayer === 0? 1:0
}
function checkWinner(current_score){
    if(scores[activePlayer]+current_score >= inputScore){
        return true
    }
    return false
}
function declareWinner(){
    document.querySelector("#name-"+activePlayer).textContent = "WINNER"
    document.querySelector(".btn-roll").style.display = "none"
    document.querySelector(".btn-hold").style.display = "none"
    document.querySelector(".dice").style.display= "none"
    document.querySelector("#form1").style.visibility = "hidden"
    document.querySelector("#submitButton").style.visibility = "hidden"
}
document.querySelector(".btn-new").addEventListener("click",function(){
    init()
})
document.querySelector("#submitButton").addEventListener("click",function(){
    inputScore = document.querySelector("#finalScore").value
})

document.querySelector(".btn-roll").addEventListener("click",function(){
    var number = generateRandomNumber()
    document.querySelector(".dice").src = "dice-"+number+".png"
    document.querySelector(".dice").style.display = "initial"

    if(number==1 || (previous_roll ==6 && number ==6)){
        previous_roll = 0
        document.querySelector("#current-"+activePlayer).textContent='0'
        document.querySelector(".player-"+activePlayer+"-panel").classList.remove('active')
        activePlayer = toggleActivePlayer(activePlayer)
        document.querySelector(".player-"+activePlayer+"-panel").classList.add('active')
    }
    else{
        previous_roll = number
        updateCurrentScore(activePlayer,number)
    }
})
document.querySelector(".btn-hold").addEventListener("click",function(){
    updateGlobalScore(activePlayer)
    document.querySelector(".player-"+activePlayer+"-panel").classList.remove('active')
    activePlayer = toggleActivePlayer(activePlayer)
    document.querySelector(".player-"+activePlayer+"-panel").classList.add('active')
})






