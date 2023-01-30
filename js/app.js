//create a basic class to make characters 
class fighter {
    constructor (name){
        this.name=name
        this.accuracy = .7
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
    fighter2 = new fighter(name)
    console.log(fighter2)
}
function createPlayerOne(name) {
    fighter1 = new fighter(name)
    console.log(fighter1)

}

//create variables for each button
const fighter1pic = document.querySelector(".player1pic")
const fighter2pic =document.querySelector(".player2pic")
const player1health = document.querySelector(".player1health")
const player2health = document.querySelector(".player2health")
const player1Attack = document.querySelector(".p1attack")
const player1Special = document.querySelector(".p1special")
const player1Restore = document.querySelector(".p1restore")
const player2Attack = document.querySelector(".p2attack")
const player2Special = document.querySelector(".p2special")
const player2Restore = document.querySelector(".p2restore")
//create event listeners based on clicks yhat will create the new characters.


//Player one 
const fighter1JCVDButton = document.querySelector(".jcvdButton1")
console.log(fighter1JCVDButton)
fighter1JCVDButton.addEventListener("click", function (){
    createPlayerOne("Van Dang")
    fighter1pic.setAttribute("src", "images/bloodsport.jpeg")
})
const fighter1CommandoButton = document.querySelector(".arnoldButton1")
console.log(fighter1CommandoButton)
fighter1CommandoButton.addEventListener("click",  function (){
    createPlayerOne("Commando")
    fighter1pic.setAttribute("src", "images/arnold.png")
})

const fighter1RamboButton = document.querySelector(".ramboButton1")
console.log(fighter1RamboButton)
fighter1RamboButton.addEventListener("click", function (){
    createPlayerOne("Rambo")
    fighter1pic.setAttribute("src", "images/RAmbo.png")
})

//Player Two
const fighter2JCVDButton = document.querySelector(".jcvdButton2")
console.log(fighter2JCVDButton)
fighter2JCVDButton.addEventListener("click", function (){
    createPlayerTwo("Rambo")
    fighter2pic.setAttribute("src", "images/bloodsport.jpeg")
})

const fighter2CommandoButton = document.querySelector(".arnoldButton2")
console.log(fighter2CommandoButton)
fighter2CommandoButton.addEventListener("click", function (){
    createPlayerTwo("Commando")
    fighter2pic.setAttribute("src", "images/arnold.png")
})
const fighter2RamboButton = document.querySelector(".ramboButton2")
console.log(fighter1RamboButton)
fighter2RamboButton.addEventListener("click",function (){
    fighter2pic.setAttribute("src", "images/RAmbo.png")
})


console.log(fighter1)
console.log(fighter2)

//Monitors turn taking should post to innerHTML the turn and start on click
let counter = 0
const checkHealth = () => {
    if(fighter1.health == 0){
        alert("Player 2 wins!")
        
    }else if(fighter2.health == 0){
        alert("Player 2 wins!")
        
    }else {
        player1health.setAttribute("value", fighter1.health)
        player2health.setAttribute("value", fighter2.health)
        counter = counter + 1
    }
}
//Monitors turn taking should post to innerHTML the turn and start on click

const gameTurns = () =>{
    if(counter % 2 == 0){
        alert("It is player 1's turn")
    
    } else{
        alert("It is player 2's turn")
     
    }
}


//create functions for fighting options and event listeners


//Player one actions
const fighter1Attack = () => {
    if (Math.random(fighter1.accuracy)<=0.8){
        fighter2.health = fighter2.health - 15
        console.log(fighter1)
        console.log(fighter2)
    }else{
        alert("You missed")}
    checkHealth()
}

const fighter1Special = () => {
    if (Math.random(fighter1.accuracy)<=0.5){
        fighter2.health = fighter2.health - 30
    }else {
        alert("You missed")}
    checkHealth()
}

const fighter1restore = () => {
    fighter1.health=fighter1.health+15
    checkHealth()
}


//create functions for play two actions 
const fighter2Attack = () => {
    if (Math.random(fighter2.accuracy)<=0.8){
        fighter1.health = fighter1.health - 15
    }else {
        alert("You missed")}
    checkHealth()
}

const fighter2Special = () => {
    if (Math.random(fighter1.accuracy)<=0.5){
        fighter1.health = fighter1.health - 30
    }else {
        alert("You missed")}
    checkHealth()
}

const fighter2restore = () => {
    fighter2.health=fighter2.health+15
    checkHealth()
}
//Event listners for actions 
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

player1Attack.addEventListener("click", function () {
    fighter1Attack(fighter1, fighter2)}
)

player1Special.addEventListener("click", function () {
    fighter1Special(fighter1, fighter2)}
)
        
player1Restore.addEventListener("click", function () {
    fighter1restore(fighter1, fighter2)}
)

//Animation of images - adjust to sprites
setInterval(() => {
    const x = Math.floor(Math.random()* 10)
    const y = Math.floor(Math.random() * -4)
    fighter1pic.style.transform = `translate(${x}px,${y}px)`;
    fighter2pic.style.transform = `translate(${x}px,${y}px)`;
},1000)
