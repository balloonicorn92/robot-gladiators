//game states
//"WIN" - player roboto has defeated all enemy robots
// *fight all any robots
// * defeat all enery robots
// "LOSE" - player robots health is 0 or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "RoBo tRuMbLe"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    //repeat and execute as long as the enemy robots is alive
    while(enemyHealth > 0 && playerHealth > 0){
    //Do you want to fight prompt
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?  Enter 'FIGHT' or 'SKIP' to choose");  
   //if player chooses to skip
        if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you want to skip this fight?");
        // if yes (true), leave the fight
        if (confirmSkip){
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract money from playermoney
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
            } 
        }
       // remove enemys health by subtracting the amount set in the playerattack vairable
       enemyHealth = enemyHealth - playerAttack;
       console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
       );
        // check enemy health 
        if (enemyHealth <= 0 ){
        window.alert(enemyName + " has died!");

        //award player money
         playerMoney = playerMoney +20;
        break;
        } else {
            window.alert (enemyName + " still has " + enemyHealth + " health left.");
        }
        //remove players health by subtracting the amount set in the enemyattack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
        //check players health 
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        } else {
            window.alert (playerName + " still has " + playerHealth + " health left.");
        }
    }
};
//function to start the game
var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);

            //if we're not at the last enemy in the array
            if (playerHealth >00 && i <enemyNames.length -1) {
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
    if(playerHealth > 0) {
        window.alert("Great job, you survived the game! You now have a score of " + playerMoney + " .");
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
            if (playerMoney >= 7){
            window.alert ("Refilling player's health by 20 for 7 dollars.");

            //increase players health and decrease money
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "upgrade":
        case "UPGRADE":
            if (playerMoney >= 7){
            window.alert("Upgrading player's attack by 6 for 7 dollars.");

            //increase attack decrease money
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney -7;
            }
            else {
                window.alert("You don't have enough money!");
            }
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

startGame();