//create a basic class to make characters 
class fighter {
    constructor (name){
        this.name=name
        this.accuracy = .75  //used to determine hit or miss for attack options 
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
}
function createPlayerOne(name) {
    audioSelect()
    fighter1 = new fighter(name)
}

//create variables for each button or DOM element 

//Sets a variable for player images to be used in the game board
const fighter1pic = document.querySelector(".player1pic") 
const fighter2pic =document.querySelector(".player2pic")
//Sets a variable to track player health throughout the game 
const player1health = document.querySelector(".player1health")
const player2health = document.querySelector(".player2health")
// Sets a variable for each of player1's action buttons in the game board
const player1Attack = document.querySelector(".p1attack")
const player1Special = document.querySelector(".p1special")
const player1Restore = document.querySelector(".p1restore")

//Sets a variable for each of player2's action buttons in the game board
const player2Attack = document.querySelector(".p2attack")
const player2Special = document.querySelector(".p2special")
const player2Restore = document.querySelector(".p2restore")

//Sets a variable for each of the images in the character selection
const jcvdImage = document.querySelector(".jcvd")
const arnoldImage = document.querySelector(".arnold")
const ramboImage = document.querySelector(".rambo")
//create event listeners based on clicks yhat will create the new characters.


//Player one character creation

//create a variable for the the selection of JCVD character button
const fighter1JCVD = document.querySelector(".jcvdButton1")

//Function assigns the character for player 1 and creates a class to play as Van Damme
fighter1JCVD.addEventListener("click", function (){
    createPlayerOne("Van Dang")
    jcvdImage.style.border ="4px solid blue" // adds a border around the players choice
    jcvdImage.style.borderRadius = "8px"
    fighter1pic.setAttribute("src", "images/vanDammeIdle.png") //populates the players character image in the game board.
})

//creates a variable for the selection of the arnold character
const fighter1Commando = document.querySelector(".arnoldButton1")

// function runs on click for character 1 choice and instatiates the class for player 1 as commando
fighter1Commando.addEventListener("click",  function (){
    createPlayerOne("Commando")
    arnoldImage.style.border ="4px solid blue" //adds a border to show character selection
    arnoldImage.style.borderRadius = "8px"
    fighter1pic.setAttribute("src", "images/arnoldAttack.png") //sets the players image in the gameboard
})

// creates a varaible for calling the Rambo character
const fighter1Rambo = document.querySelector(".ramboButton1")

// function runs on click for character 1 choice and instatiates the class for player 1 as Rambo
fighter1Rambo.addEventListener("click", function (){
    createPlayerOne("Rambo")
    ramboImage.style.border ="4px solid blue" //adds a border to show character selection
    ramboImage.style.borderRadius = "8px"
    fighter1pic.setAttribute("src", "images/RamboAttack.png")
})

//Player Two character creation

//creates a variable for a button used to create a character for player 2 
const fighter2JCVD = document.querySelector(".jcvdButton2")

//function that runs on click in the character selection screen, it instatiates a class for player 2 as a Van Damme
fighter2JCVD.addEventListener("click", function (){
    createPlayerTwo("Van Dang")
    jcvdImage.style.border ="4px solid red" //adds a border to show character selection
    jcvdImage.style.borderRadius = "8px"
    fighter2pic.setAttribute("src", "images/vanDammeIdle.png")
})

//creates a variable for the button used to create a character for player 2 
const fighter2Commando = document.querySelector(".arnoldButton2")

//function that runs on click in the character selection screen, it instatiates a class for player 2 as Commando

fighter2Commando.addEventListener("click", function (){
    createPlayerTwo("Commando")
    arnoldImage.style.border ="4px solid red" //adds a border to show character selection
    arnoldImage.style.borderRadius = "8px"
    fighter2pic.setAttribute("src", "images/arnoldAttack.png")
})

//creates a variable for a button used to create a character for player 2 

const fighter2Rambo = document.querySelector(".ramboButton2")

//function that runs on click in the character selection screen, it instatiates a class for player 2 as Rambo

fighter2Rambo.addEventListener("click",function (){
    createPlayerTwo("Bamro")
    ramboImage.style.border ="4px solid red" //adds a border to show character selection
    ramboImage.style.borderRadius = "8px"
    fighter2pic.setAttribute("src", "images/RamboAttack.png")
})


//Updates health after each turn and checks for win condition.

//counter is used to track turns in the game
let counter = 0
const checkHealth = () => { //function checks for win condition by comparing player health. It will display a win and replay message.
    if(fighter1.health == 0){
        player1health.setAttribute("value", fighter1.health) //updates the health bar at each turn for player 1
        player2health.setAttribute("value", fighter2.health) //updates the health bar at each turn for player 2
        audioWin() //plays a sound when the player wins
        turnTracker.innerHTML = "Player 2 wins! Refresh to replay!" //changes the screen message to display a win for player 2
        alert("Player 2 wins!")
        
        
    }else if(fighter2.health == 0){
        player1health.setAttribute("value", fighter1.health)//updates the health bar at each turn for player 1
        player2health.setAttribute("value", fighter2.health) ///updates the health bar at each turn for player 2
        audioWin() //plays win audio
        turnTracker.innerHTML = "Player 1 wins! Refresh to replay!" //changes the screen message to display a win for player 1
        alert("Player 1 wins!")
        
    }else {
        player1health.setAttribute("value", fighter1.health) //updates the health bar at each turn for player 1
        player2health.setAttribute("value", fighter2.health)//updates the health bar at each turn for player 2
        counter = counter + 1//advances the counter
        if(counter % 2 == 0){ // displays the turn based on even or odd
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

//Changes the display in CSS to show or hide character choice div
const initaiateGame = () =>{
        audiofight()
        var x = document.querySelector(".characterchoice");  //sets a variable for the character choice div
        if (x.style.display === "none") {  //toggles diplay to show and hide
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    }

//Changes the display in CSS to show or hide arena div

const showGameBoard = () => {
      var y = document.querySelector(".arena");  // creates a variable for the arena div
        if (y.style.display === "block") {
          y.style.display = "none";
        } else {
          y.style.display = "block";
        }
}

gameStart.addEventListener("click", initaiateGame) //when the button for game start is clicked it will hide character choice
gameStart.addEventListener("click", showGameBoard) // when the button for game start is clicked it will display the arena div

//create functions for fighting options and event listeners


//Player one actions - attack, special attack with a larger effect but less accurate, and restore

//fighter 1 attack function
const fighter1Attack = () => {
    if (Math.random(fighter1.accuracy)<=0.85){ //uses class accuracy and a random value to determine hit or miss. 
        if(fighter2.health > 14){ //if the players health is 15 or greater it will subtract the full hit
            audioHit() //plays hit sound
            fighter2.health = fighter2.health - 15
           
        }
        if(fighter2.health <= 14){ //if the players health is less than the hit it will just lower to zero
            audioHit()
            fighter2.health = 0
            
        }
    }else { // if the random value and accuracy is greater than .85 it is a miss 
        alert("Your attack missed!") //alerts the player
        audioMiss()}//plays a sounnd to miss
    checkHealth() // calls a function to update health, check for win condition and track turns 
}


//fighter 1 special attack function

const fighter1Special = () => {  //function for calling special attack with a greater effect but less accuracy
    if (Math.random(fighter1.accuracy)<=0.6){ //uses class accuracy and a random value to determine hit or miss. 
        if(fighter2.health > 29){ //if the players health is 30 or greater it will subtract the full hit
            audioSpecial() //plays special attack sound 
            fighter2.health = fighter2.health - 30  
            
        }
        else if(fighter2.health <= 29){ //if the players health is less than the max hit it will zero out the the players health 
            fighter2.health = 0
            audioSpecial() //play the sepcial attack sound
        }
    }else { //if the value of the random number multiplied by the class's accuracy is greater than .6 it will be a  miss 
        alert("Your special attack missed!")
        audioMiss()} //plays miss sound 
    checkHealth() // calls a function to update health, check for win condition and track turns 
}

//function for restore to increase the players health 
const fighter1restore = () => {
    if(fighter1.health > 95){ //if the fighters health is greater than 95 set to max health
        audioRestore() //play health sound
        fighter1.health = 100
    } else if(fighter1.health <= 95){ //if the player health is 95 or less increase the health by 15
        audioRestore() //play health sound  
        fighter1.health=fighter1.health +15
    }
    checkHealth() // calls a function to update health, check for win condition and track turns 
}


//Player one actions - attack, special attack with a larger effect but less accurate, and restore
const fighter2Attack = () => {
    if (Math.random(fighter2.accuracy)<=0.85){
        if(fighter1.health > 14){
            audioHit()
            fighter1.health = fighter1.health - 15
        }
        else if(fighter1.health <= 14){
            audioHit()
            fighter1.health = 0
        }
    }else{
        alert("Your attack missed!")
        audioMiss()}
    checkHealth() // calls a function to update health, check for win condition and track turns 
}

const fighter2Special = () => {
    if (Math.random(fighter2.accuracy)<=0.6){
        if(fighter1.health > 29){
            audioSpecial()
            fighter1.health = fighter1.health - 30
        }
        else if(fighter1.health <= 29){
            fighter1.health = 0
            audioSpecial()
        }
    }else {
        alert("Your special attack missed!")
        audioMiss()}
    checkHealth() // calls a function to update health, check for win condition and track turns 
}

//function for restore to increase the players health 
const fighter2restore = () => {
    if(fighter2.health > 95){ //if the fighters health is greater than 95 set to max health
        audioRestore() //play restore audio
        fighter2.health = 100
    } else if(fighter2.health <= 95){ //if the player health is 95 or less increase the health by 15
        audioRestore() //play restore audio
        fighter2.health=fighter2.health +15
    }
    checkHealth() // calls a function to update health, check for win condition and track turns 
}

//Event listners for player actions  

//event listener will run for player 1 attack and calls the attack function with player 1 and player 2 classes 
player1Attack.addEventListener("click", function () {
    fighter1Attack(fighter1, fighter2)
    }
)
//event listener will run for player 1 special attack and calls the attack function with player 1 and player 2 classes 
player1Special.addEventListener("click", function () {
    fighter1Special(fighter1, fighter2)
    }
)
//event listener will run for player 1 restore and passes the classes for player 1 and player 2
player1Restore.addEventListener("click", function () {
    fighter1restore(fighter1, fighter2)
    }
)

//event listener will run for player 2 attack and calls the attack function with player 1 and player 2 classes 
player2Attack.addEventListener("click", function () {
    fighter2Attack(fighter1, fighter2)}
)
//event listener will run for player 1 special attack and calls the attack function with player 1 and player 2 classes 
player2Special.addEventListener("click", function () {
    fighter2Special(fighter1, fighter2)}
)

//event listener will run for player 2 restore and passes the classes for player 1 and player 2
player2Restore.addEventListener("click", function () {
    fighter2restore(fighter1, fighter2)}
)

//Animation of images in the game board
setInterval(() => {
    const x = Math.floor(Math.random()* 10) //adjusts the horizontal movement of the images in the game board
    const y = Math.floor(Math.random() * -4) //adjusts the vertical movement of the images in the game board
    fighter1pic.style.transform = `translate(${x}px,${y}px)`;  // directs the player 1 image to move based on the values above
    fighter2pic.style.transform = `translate(${x}px,${y}px)`; // directs the player 2 image to move based on the values above
},1000)

//Sounds hit, death, restore, win, miss, start

//function that will play a hit sound for attack when it is successful
function audioHit() {
    const hit = new Audio("https://assets.mixkit.co/sfx/download/mixkit-martial-arts-fast-punch-2047.wav")
    hit.play()
}
//function that will play a hit sound for special attack when it is successful

function audioSpecial() {
    const special = new Audio("https://assets.mixkit.co/sfx/download/mixkit-low-explosion-indoors-2187.wav")
    special.play()
}

//function that will play a sound when the area is shown and the game starts

function audiofight(){
    const fight = new Audio("https://assets.mixkit.co/sfx/download/mixkit-ominous-drums-227.wav")
    fight.play()
}
//function that will play a sound when the player choses to restore their health

function audioRestore() {
    const restore = new Audio("https://assets.mixkit.co/sfx/download/mixkit-video-game-health-recharge-2837.wav")
    restore.play()
}

//function that will play a sound when the player choses their character

function audioSelect() {
    const select = new Audio("https://assets.mixkit.co/sfx/download/mixkit-arcade-retro-changing-tab-206.wav")
    select.play()
}

//function that will play a sound when and attack or special attack is not succesful

function audioMiss() {
    const miss = new Audio("https://assets.mixkit.co/sfx/download/mixkit-neutral-bot-pinbal-tone-3137.wav")
    miss.play()
}

//function that will play when the win conidtion is met
function audioWin() {
    const win = new Audio("https://assets.mixkit.co/sfx/download/mixkit-game-bonus-reached-2065.wav")
    win.play()
}