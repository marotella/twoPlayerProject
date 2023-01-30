//create a basic class 
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


const fighter1pic = document.querySelector(".player1pic")
const fighter2pic =document.querySelector(".player2pic")

//create event listeners based on clicks yhat will create the new characters.
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


let counter = 0
const checkHealth = () => {
    if(fighter1.health == 0){
        alert("Player 2 wins!")
        
    }else if(fighter2.health == 0){
        alert("Player 2 wins!")
        
    }else {
        counter = counter + 1
    }
}

const gameTurns = () =>{
    if(counter % 2 == 0){
        alert("It is player 1's turn")
        checkHealth()
    } else{
        alert("It is player 2's turn")
        checkHealth()
    }
}


//create formula for fighting options 

const fighter1Attack = () => {
    if (Math.random(fighter1.accuracy)<=0.8){
        fighter2.health = fighter2.health - 15
    }else {
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
