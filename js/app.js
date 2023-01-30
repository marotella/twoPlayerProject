class playerOne {
    constructor (name){
        this.name=name
        this.accuracy = .7
        this.health =100
    }
    attack(){
        if (Math.random(this.accuracy)<=0.8){
            let damage = 15
            playerTwo.health = playerTwo.health - damage
            console.log(EnemyShip)
            alert("Your attack was successful. You did "+ damage +" amount of damage.")
        }else{
            alert("Missed!")
        }
    }
    special(){
        if (Math.random(this.accuracy)<=0.8){
            let damage = 15
            playerTwo.health = playerTwo.health - damage
            console.log(EnemyShip)
            alert("Your attack was successful. You did "+ damage +" amount of damage.")
        }else{
            alert("Missed!")
        }
    }
    recover(){
        let restore = 15
        if(playerOne.health <= 95){
            playerOne.health = playerOne.health + restore
            alert("Your health improved by "+restore)
        }else{
            playerOne.health = 100
        }

    }
}

    class playerTwo {
        constructor (name){
            this.name=name
            this.accuracy = .7
            this.health =100
        }
        attack(){
            if (Math.random(this.accuracy)<=0.8){
                let damage = 15
                playerOne.health = playerOne.health - damage
                console.log(EnemyShip)
                alert("Your attack was successful. You did "+ damage +" amount of damage.")
            }else{
                alert("Missed!")
            }
        }
        special(){
            if (Math.random(this.accuracy)<=0.8){
                let damage = 15
                playerOne.health = playerOne.health - damage
                console.log(EnemyShip)
                alert("Your attack was successful. You did "+ damage +" amount of damage.")
            }else{
                alert("Missed!")
            }
        }
        recover(){
            let restore = 15
            if(playerTwo.health <= 95){
                playerTwo.health = playerTwo.health + restore
                alert("Your health improved by "+restore)
            }else{
                playerTwo.health = 100
            }
    
        }
    }



const fighter1 = new playerOne (name)
console.log(fighter1)

const fighter2 = new playerTwo (name)
console.log(figher2)