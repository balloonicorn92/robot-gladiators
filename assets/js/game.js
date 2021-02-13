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
    //alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    //Do you want to fight prompt
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?  Enter 'FIGHT' or 'SKIP' to choose");  
   //if a player chooses to fight, then fight
if (promptFight === "fight" || promptFight ==="FIGHT") {
       // remove enemys health by subtracting the amount set in the playerattack vairable
       enemyHealth = enemyHealth - playerAttack;
       console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
       );
    // check enemy health 
    if (enemyHealth <= 0 ){
        window.alert(enemyName + " has died!");
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
    } else {
        window.alert (playerName + " still has " + playerHealth + " health left.");
    }
} else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you want to skip this fight?");
    // if yes (true), leave the fight
    if (confirmSkip){
        window.alert( playerName + " has decided to skip this fight. Goodbye!");
        //subtract money from playermoney
        playerMoney = playerMoney - 2;
    } 
    //if no (false), ask question again by running fight() again
    else {
        fight();
    }
} else {
    window.alert("You need to choose a valid option. Try again!");
}
};

for (var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}
//game states
//WIN - playerr has defeated all enemy robots
// *fight all enemy robots
