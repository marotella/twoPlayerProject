//create a basic class to make characters 
class fighter {
    constructor (name){
        this.name=name
        this.accuracy = .75
        this.health =100
        this.attack =15
        this.special = 30
        this.restore = 15
    }
}
   
//Create the charaters, as global variables
let fighter1;
let fighter2;

//create functions that assign a class to the character
function createPlayerTwo(name) {
    audioSelect()
    fighter2 = new fighter(name)
    console.log(fighter2)
}
function createPlayerOne(name) {
    audioSelect()
    fighter1 = new fighter(name)
    console.log(fighter1)

}

//create variables for each button or DOM element 

//player image
const fighter1pic = document.querySelector(".player1pic") 
const fighter2pic =document.querySelector(".player2pic")
//player health bars
const player1health = document.querySelector(".player1health")
const player2health = document.querySelector(".player2health")
// player1 action buttons
const player1Attack = document.querySelector(".p1attack")
const player1Special = document.querySelector(".p1special")
const player1Restore = document.querySelector(".p1restore")

//player2 action buttons
const player2Attack = document.querySelector(".p2attack")
const player2Special = document.querySelector(".p2special")
const player2Restore = document.querySelector(".p2restore")

//character images
const jcvdImage = document.querySelector(".jcvd")
const arnoldImage = document.querySelector(".arnold")
const ramboImage = document.querySelector(".rambo")
//create event listeners based on clicks yhat will create the new characters.


//Player one character creation
const fighter1JCVD = document.querySelector(".jcvdButton1")

fighter1JCVD.addEventListener("click", function (){
    createPlayerOne("Van Dang")
    jcvdImage.style.border ="4px solid blue"
    jcvdImage.style.borderRadius = "8px"
    fighter1pic.setAttribute("src", "images/vanDammeAttack.png")
})
const fighter1Commando = document.querySelector(".arnoldButton1")

fighter1Commando.addEventListener("click",  function (){
    createPlayerOne("Commando")
    arnoldImage.style.border ="4px solid blue"
    arnoldImage.style.borderRadius = "8px"
    fighter1pic.setAttribute("src", "images/arnoldAttack.png")
})

const fighter1Rambo = document.querySelector(".ramboButton1")

fighter1Rambo.addEventListener("click", function (){
    createPlayerOne("Rambo")
    ramboImage.style.border ="4px solid blue"
    ramboImage.style.borderRadius = "8px"
    fighter1pic.setAttribute("src", "images/RamboAttack.png")
})

//Player Two character creation
const fighter2JCVD = document.querySelector(".jcvdButton2")
fighter2JCVD.addEventListener("click", function (){
    createPlayerTwo("Van Dang")
    jcvdImage.style.border ="4px solid red"
    jcvdImage.style.borderRadius = "8px"
    fighter2pic.setAttribute("src", "images/vanDammeAttack.png")
})

const fighter2Commando = document.querySelector(".arnoldButton2")

fighter2Commando.addEventListener("click", function (){
    createPlayerTwo("Commando")
    arnoldImage.style.border ="4px solid red"
    arnoldImage.style.borderRadius = "8px"
    fighter2pic.setAttribute("src", "images/arnoldAttack.png")
})
const fighter2Rambo = document.querySelector(".ramboButton2")
fighter2Rambo.addEventListener("click",function (){
    createPlayerTwo("Bamro")
    ramboImage.style.border ="4px solid red"
    ramboImage.style.borderRadius = "8px"
    fighter2pic.setAttribute("src", "images/RamboAttack.png")
})


//Updates health after each turn and checks for win condition.

let counter = 0
const checkHealth = () => {
    if(fighter1.health == 0){
        player1health.setAttribute("value", fighter1.health)
        player2health.setAttribute("value", fighter2.health)
        alert("Player 2 wins!")
        
    }else if(fighter2.health == 0){
        player1health.setAttribute("value", fighter1.health)
        player2health.setAttribute("value", fighter2.health)
        alert("Player 1 wins!")
        
    }else {
        player1health.setAttribute("value", fighter1.health)
        player2health.setAttribute("value", fighter2.health)
        counter = counter + 1
        if(counter % 2 == 0){
            turnTracker.innerHTML = "It is Player 1's turn!"
    
        
        } else if(counter% 2 != 0){
            turnTracker.innerHTML = "It is Player 2's turn!"
        }
    }
}
//Controls the elements shown on the screen for a start screen and game screen 
const gameStart = document.querySelector(".fight")
const turnTracker = document.querySelector(".turntracker")
const body = document.querySelector("body")

const initaiateGame = () =>{
        audiofight()
        var x = document.querySelector(".characterchoice");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    }
const showGameBoard = () => {
      var y = document.querySelector(".arena");
        if (y.style.display === "block") {
          y.style.display = "none";
        } else {
          y.style.display = "block";
        }
}

gameStart.addEventListener("click", initaiateGame)
gameStart.addEventListener("click", showGameBoard)

//create functions for fighting options and event listeners


//Player one actions - attack, special attack with a larger effect but less accurate, and restore
const fighter1Attack = () => {
    if (Math.random(fighter1.accuracy)<=0.85){
        if(fighter2.health > 14){
            audioHit()
            fighter2.health = fighter2.health - 15
            console.log(fighter1)
            console.log(fighter2)
        }
        if(fighter2.health <= 14){
            audioHit()
            fighter2.health = 0
            console.log(fighter1)
            console.log(fighter2)
        }
    }else {
        alert("Your attack missed!")
        miss.play()}
    checkHealth()
}

const fighter1Special = () => {
    if (Math.random(fighter1.accuracy)<=0.6){
        if(fighter2.health > 29){
            audioSpecial()
            fighter2.health = fighter2.health - 30
            console.log(fighter1)
            console.log(fighter2)
        }
        else if(fighter2.health <= 29){
            fighter2.health = 0
            audioSpecial()
            console.log(fighter1)
            console.log(fighter2)
        }
    }else {
        alert("Your special attack missed!")
        miss.play()}
    checkHealth()
}

const fighter1restore = () => {
    if(fighter1.health > 95){
        audioRestore()
        fighter1.health = 100
    } else if(fighter1.health <= 95){
        audioRestore()
        fighter1.health=fighter1.health +15
    }
    checkHealth()
}


//Player one actions - attack, special attack with a larger effect but less accurate, and restore
const fighter2Attack = () => {
    if (Math.random(fighter2.accuracy)<=0.85){
        if(fighter1.health > 14){
            audioHit()
            fighter1.health = fighter1.health - 15
            console.log(fighter1)
            console.log(fighter2)
        }
        else if(fighter1.health <= 14){
            audioHit()
            fighter1.health = 0
            console.log(fighter1)
            console.log(fighter2)
        }
    }else{
        alert("Your attack missed!")
        miss.play()}
    checkHealth()
}

const fighter2Special = () => {
    if (Math.random(fighter2.accuracy)<=0.6){
        if(fighter1.health > 29){
            audioSpecial()
            fighter1.health = fighter1.health - 30
            console.log(fighter1)
            console.log(fighter2)
        }
        else if(fighter1.health <= 29){
            fighter1.health = 0
            audioSpecial()
            console.log(fighter1)
            console.log(fighter2)
        }
    }else {
        alert("Your special attack missed!")
        miss.play()}
    checkHealth()
}


const fighter2restore = () => {
    if(fighter2.health > 95){
        audioRestore()
        fighter2.health = 100
    } else if(fighter2.health <= 95){
        audioRestore()
        fighter2.health=fighter2.health +15
    }
    checkHealth()
}

//Event listners for player actions  
player1Attack.addEventListener("click", function () {
    fighter1Attack(fighter1, fighter2)
    }
)
player1Special.addEventListener("click", function () {
    fighter1Special(fighter1, fighter2)
    }
)

player1Restore.addEventListener("click", function () {
    fighter1restore(fighter1, fighter2)
    }
)

player2Attack.addEventListener("click", function () {
    fighter2Attack(fighter1, fighter2)}
)

player2Special.addEventListener("click", function () {
    fighter2Special(fighter1, fighter2)}
)
        
player2Restore.addEventListener("click", function () {
    fighter2restore(fighter1, fighter2)}
)

//Animation of images in the game board
setInterval(() => {
    const x = Math.floor(Math.random()* 10)
    const y = Math.floor(Math.random() * -4)
    fighter1pic.style.transform = `translate(${x}px,${y}px)`;
    fighter2pic.style.transform = `translate(${x}px,${y}px)`;
},1000)

//Sounds hit, death, restore, win, miss, start

function audioHit() {
    const hit = new Audio("https://assets.mixkit.co/sfx/download/mixkit-martial-arts-fast-punch-2047.wav")
    hit.play()
}

function audioSpecial() {
    const special = new Audio("https://assets.mixkit.co/sfx/download/mixkit-low-explosion-indoors-2187.wav")
    special.play()
}

function audiofight(){
    const fight = new Audio("https://assets.mixkit.co/sfx/download/mixkit-ominous-drums-227.wav")
    fight.play()
}

function audioRestore() {
    const restore = new Audio("https://assets.mixkit.co/sfx/download/mixkit-video-game-health-recharge-2837.wav")
    restore.play()
}
function audioSelect() {
    const select = new Audio("https://assets.mixkit.co/sfx/download/mixkit-arcade-retro-changing-tab-206.wav")
    select.play()
}

function audioMiss() {
    const miss = new Audio("https://assets.mixkit.co/sfx/download/mixkit-neutral-bot-pinbal-tone-3137.wav")
    miss.play()
}

function audioWin() {
    const win = new Audio("https://assets.mixkit.co/sfx/download/mixkit-game-bonus-reached-2065.wav")
    win.play()
}