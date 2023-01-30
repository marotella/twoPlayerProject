let playerOne;

function PlayerOne (name) {
    this.name = name;
    this.health = 100;
    restore(){
        this.health = this.health + 15;
        alert("Your health increased by 15!")
    };
    attack(){
        if (Math.random(this.accuracy)<=0.8){
            let damage = 15
            playerTwo.health = playerTwo.health - damage
            alter ("Your attack was succesful and did 15 damage")
        }
        else{
            alert("Sorry you missed!")
        }
    };
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