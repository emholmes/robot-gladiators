// ask user robot name
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerHealth, playerAttack);

var enemyName = 'Roborto';
var enemyHealth = 50;
var enemyAttack = 12; 

// this creates a function named "fight"
var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight.toLowerCase() === 'fight') {
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth =  enemyHealth - playerAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

        //check enemy's health 
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        //check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    // Player chooses to skip and is penalized
    } else if (promptFight.toLowerCase() === 'skip') {
        // comfirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        //if truthy, leave fight
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip this fight. Goodbye!");
            playerMoney = playerMoney - 2;
        }
        // if false, ask question again by running fight() again
        else {
            fight();
        }
        
    //Player doesn't enter a valid response
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }

};

//execute function
fight();

