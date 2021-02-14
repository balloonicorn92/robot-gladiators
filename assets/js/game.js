//game states
//"WIN" - player roboto has defeated all enemy robots
// *fight all any robots
// * defeat all enery robots
// "LOSE" - player robots health is 0 or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 40;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "RoBo tRuMbLe"];
var enemyHealth = 50;
var enemyAttack = 50;

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
for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + ( i + 1));
    }
    else {
        window.alert("You have lost your robot in battle! Game Over! :(");
    }
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}