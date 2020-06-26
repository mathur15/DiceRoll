init()
activePlayer = 0
scores = [0,0]
function init(){
    document.querySelector(".dice").style.display = "none"
    scores = [0,0]
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
function updateGlobalScore(activePlayer){
    var current_score = document.querySelector("#current-"+activePlayer).textContent
    scores[activePlayer] += Number(current_score)
    document.querySelector("#score-"+activePlayer).textContent = ''
    document.querySelector("#score-"+activePlayer).textContent = scores[activePlayer]
    document.querySelector("#current-"+activePlayer).innerHTML = '0'
    player_winner_status = checkWinner(activePlayer)
    if(player_winner_status){
        console.log("Player"+" "+(activePlayer+1)+" "+"is the winner.")
        init()
    }
}
function toggleActivePlayer(activePlayer){
    console.log(activePlayer === 0? 1:0);
    return activePlayer === 0? 1:0
}
function checkWinner(){
    if(scores[activePlayer] >= 100){
        return true
    }
    return false
}
document.querySelector(".btn-new").addEventListener("click",function(){
    init()
})

document.querySelector(".btn-roll").addEventListener("click",function(){
    var number = generateRandomNumber()
    document.querySelector(".dice").src = "dice-"+number+".png"
    document.querySelector(".dice").style.display = "initial"
    if(number!=1){
        updateCurrentScore(activePlayer,number)
    }
    else{
        document.querySelector("#current-"+activePlayer).textContent='0'
        document.querySelector(".player-"+activePlayer+"-panel").classList.remove('active')
        activePlayer = toggleActivePlayer(activePlayer)
        document.querySelector(".player-"+activePlayer+"-panel").classList.add('active')
    }
})
document.querySelector(".btn-hold").addEventListener("click",function(){
    //update the current_score and global score
    //update the current active player
    updateGlobalScore(activePlayer)
    document.querySelector(".player-"+activePlayer+"-panel").classList.remove('active')
    activePlayer = toggleActivePlayer(activePlayer)
    document.querySelector(".player-"+activePlayer+"-panel").classList.add('active')
})






