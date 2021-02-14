//game states
//"WIN" - player roboto has defeated all enemy robots
// *fight all any robots
// * defeat all enery robots
// "LOSE" - player robots health is 0 or less

var fight = function(enemy) {

    //repeat and execute as long as the enemy robots is alive
    while(enemy.health > 0 && playerInfo.health > 0){
    //Do you want to fight prompt
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?  Enter 'FIGHT' or 'SKIP' to choose");  
   //if player chooses to skip
        if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you want to skip this fight?");
        // if yes (true), leave the fight
        if (confirmSkip){
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            //subtract money from playerInfo.money
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            console.log("playerInfo.money", playerInfo.money);
            break;
            } 
        }
       // remove enemys health by subtracting the amount set in the playerInfo.attack vairable
       var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
       enemy.health = Math.max(0, enemy.health - damage);
       console.log(
            playerInfo.name + " attacked " + enemyName + ". " + enemyName + " now has " + enemy.health + " health remaining."
       );
        // check enemy health 
        if (enemy.health <= 0 ){
        window.alert(enemyName + " has died!");

        //award player money
         playerInfo.money = playerInfo.money +20;
        break;
        } else {
            window.alert (enemy.name + " still has " + enemy.health + " health left.");
        }
        //remove players health by subtracting the amount set in the enemy.attack variable
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
            enemyName + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        );
        //check players health 
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            break;
        } else {
            window.alert (playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
    }
};
//function to start the game
var startGame = function() {
    //reset player stats
   playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1));
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40,60);
            fight(pickedEnemyObj);

            //if we're not at the last enemy in the array
            if (playerInfo.health >00 && i <enemyInfo.length -1) {
                var storeConfirm = window.confirm("The fight is over, visit the store?");
                if (storeConfirm) {
                    shop()
                }
            }
        }
        else {
            break;
        }
    }
    //after the loop ends, player is either out of health or enemies to fight so run that endgame function HUNTIE
    endGame();

};
//function to end the entire game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
    //if player is still alive, player wins
    if(playerInfo.health > 0) {
        window.alert("Great job, you survived the game! You now have a score of " + playerInfo.money + " .");
    }
    else {
        window.alert("You've lost your robot in battle :(");
    }
    //ask the player if they would like to play again 
var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm){
        //restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon! ");
    }
};
var shop = function() {
    // asdk player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "would you like to REFILL your health, UPGRADE you attack, or LEAVE the store? please enter one :'REFIL', 'UPGRADE', 'LEAVE' to make a choice."
    );
    //use switch to carry out action
    switch (shopOptionPrompt) {
        case "refill":
        case "REFILL":
            //increase players health and decrease money
            playerInfo.refillHealth();
            break;
        case "upgrade":
        case "UPGRADE":
            //increase attack decrease money
            playerInfo.upgradeAttack();
            break;
        case "leave":
        case "LEAVE":
            window.alert("Leaving the store.");
            //do nothing, end function
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
           //call shop function to force to pick a valid option
            shop();
            break;
    }
};
// function to generate numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    
    return value;
};
var playerInfo = {
    name: window.prompt("Wht is your robots name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth : function(){
        if (this.money >= 7){
            window.alert("refilling players health by 20 for 7 dollars");
        this.health += 20;
        this.money -= 7;
        }
        else {
            window.alert("you dont have any money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("upgrading players attack by 6 for 7 dollars");
            this.attack += 6;
            this.money -= 7;
        } 
        else {
            window.alert("you dont have any money!");
        }
    }
};

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
        }
]
startGame();