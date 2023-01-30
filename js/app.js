
//Create the classes for each character


class Rambo {
    constructor () {
        this.health = 100
        this.accuracy = 1
    }
    restore(){
        this.health = this.health + 15;
        alert("Your health increased by 15!")
    }
    attack(){
        if (Math.random(this.accuracy)<=0.8){
            let damage = 15
            playerTwo.health = playerTwo.health - damage
            alter ("Your attack was succesful and did 15 damage")
        }
        else{
            alert("Sorry you missed!")
        }
    }
    special(){
        if (Math.random(this.accuracy)<=0.5){
            let damage = 30
            playerTwo.health = playerTwo.health - damage
            alter ("Your machine gun rampage was succesful and did 30 damage")
        }
        else{
            alert("Sorry you missed!")
        }
    }
 
}


class Arnold {
    constructor () {
        this.health = 100
        this.accuracy = 1
    }
    restore(){
        this.health = this.health + 15;
        alert("Your health increased by 15!")
    }
    attack(){
        if (Math.random(this.accuracy)<=0.8){
            let damage = 15
            playerTwo.health = playerTwo.health - damage
            alter ("Your attack was succesful and did 15 damage")
        }
        else{
            alert("Sorry you missed!")
        }
    }
    special(){
        if (Math.random(this.accuracy)<=0.5){
            let damage = 30
            playerTwo.health = playerTwo.health - damage
            alter ("Your bazooka was succesful and did 30 damage")
        }
        else{
            alert("Sorry you missed!")
        }
    }
}

class VanDamme {
    constructor () {
        this.health = 100
        this.accuracy = 1
    }
    restore(){
        this.health = this.health + 15;
        alert("Your health increased by 15!")
    }
    attack(){
        if (Math.random(this.accuracy)<=0.8){
            let damage = 15
            playerTwo.health = playerTwo.health - damage
            alter ("Your attack was succesful and did 15 damage")
        }
        else{
            alert("Sorry you missed!")
        }
    }
    special(){
        if (Math.random(this.accuracy)<=0.5){
            let damage = 30
            playerTwo.health = playerTwo.health - damage
            alter ("Your round house kick was succesful and did 30 damage")
        }
        else{
            alert("Sorry you missed!")
        }
    }
}


// Create a way that the image can be set with character selection
let player1Pic = document.querySelector(".player1pic")
let player2Pic = document.querySelector(".player2pic")



//Create a function for adjusting health after each turn and check for win condition

const checkHealth = () => {
    if (playerOne.health = 0){
        alert("Player 2 wins!")
        return
    } else if (playerTwo.health = 0){
        alert("Player 1 wins")
        return
    }
}

// Create a funciton for monitoring turns, need a call back to check health
const turns = () =>{
    let i = 0
    if (i == 0){
        alert("Player 1's turn! Select your character")
        const playerOne = 
        i = i +1   
    } if (i == 1){
        alert("Player 2's turn! Select your character")
        i = i +1 
    }else if (i % 2 !=0){
        alert("Player 2's turn! Select your attack")
        checkHealth()
        i = i +1  
    } else if (i % 2 == 0){
        alert("Player 1's turn! Select your attack")
        checkHealth()
        i = i +1  
    }
}

let player1 = document.querySelector("#player1")
let player2 = document.querySelector("#player2")


//Create a function for creating a character

const characterSelectorRambo = () => {
    if(i = 0){
        const playerOne= new Rambo()
        player1.innerHTML = "Player 1: Bamro"
        // document.querySelector(".player1pic").src = "images/RAmbo.png" 
      
    }else if (i =1){
        const playerTwo = new Rambo()
        player2.innerHTML = "Player 1: Bamro"
        // document.querySelector(".player2pic").src = "images/RAmbo.png" 
        
    }
} 

const characterSelectorArnold = () => {
    if(i = 0){
        const playerOne= new Arnold()
        player1.innerHTML = "Player 1: Commando"
        // document.querySelector(".player1pic").src = "images/arnold.png"
       
    }else if (i =1){
        const playerTwo = new Arnold()
        player2.innerHTML = "Player 2: Commando"
        // document.querySelector(".player2pic").src = "images/arnold.png"
       
    }
} 

const characterSelectorVanDamme = () => {
    if(i = 0){
        const playerOne= new VanDamme()
        player1.innerHTML = "Player 1: VanDang"
        // document.querySelector(".player1pic").src = "images/bloodsport.png" 
    }else if (i =1){
        const playerTwo = new VanDamme()
        player2.innerHTML = "Player 2: VanDang"
        // document.querySelector(".player2pic").src = "images/bloodsport.png" 
    }
} 



//Create trigger for selecting character
let ramboSelection =document.querySelector(".ramboButton")
ramboSelection.addEventListener("click", characterSelectorRambo())

let arnoldSelection =document.querySelector(".arnoldButton")
arnoldSelection.addEventListener("click", characterSelectorArnold())

let jcvdSelection =document.querySelector(".jcvdButton")
jcvdSelection.addEventListener("click", characterSelectorVanDamme())


let player1Health = document.querySelector(".player1health")
let player2Health = document.querySelector(".player2health")


//Create event listeners for each button
// let p1attack = document.querySelector(".p1attack")
// p1attack.addEventListener("click", playerOne.attack)
// let p1special = document.querySelector(".p1special")
// p1special.addEventListener("click", playerOne.special)
// let p1restore = document.querySelector(".p1restore")
// p1restore.addEventListener("click", playerOne.restore ) 

// let p2attack = document.querySelector(".p1attack")
// p1attack.addEventListener("click", playerTwo.attack)
// let p2special = document.querySelector(".p1special")
// p1special.addEventListener("click", playerTwo.special)
// let p2restore = document.querySelector(".p1restore")
// p1restore.addEventListener("click", playerTwo.restore) 

