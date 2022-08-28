/* eslint-disable vars-on-top */
/* eslint-disable no-var */

/* player and enemy variabls */
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ['Dr. Gero', `Android 16`, `Android 17`, `Android 18`];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

//* Fight function (now with parameter for enemy's name)
var fight = function (enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
        // ask player if they'd like to fight or run
        var promptFight = window.prompt(
            'Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.'
        );

        // if player picks "skip" confirm and then stop the loop
        if (promptFight === 'skip' || promptFight === 'SKIP') {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(`${playerName} has decided to skip this fight. Goodbye!`);
                // subtract money from playerMoney for skipping
                playerMoney -= 10;
                console.log('playerMoney', playerMoney);
                break;
            }
        }

        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth -= playerAttack;
        console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining.`);

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(`${enemyName} has died!`);

            // award player money for winning
            playerMoney += 20;
            // leave while() loop since enemy is dead
            break;
        } else {
            window.alert(`${enemyName} still has ${enemyHealth} health left.`);
        }

        // remove players's health by subtracting the amount set in the enemyAttack variable
        playerHealth -= enemyAttack;
        console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining.`);

        // check player's health
        if (playerHealth <= 0) {
            window.alert(`${playerName} has died!`);
            // leave while() loop if player is dead
            break;
        } else {
            window.alert(`${playerName} still has ${playerHealth} health left.`);
        }
    } // end of while loop
}; // end of fight function

for (var i = 0; i < enemyNames.length; i += 1) {
    if (playerHealth > 0) {
        window.alert(`Welcome to Robot Gladiators! Round ${i + 1}! FIGHT!`);
        var pickedEnemyName = enemyNames[i]; // (i += 1) = i++
        enemyHealth = 50;
        fight(pickedEnemyName);
    } else {
        window.alert(`You have lost your robot in battle! Game over!`);
    }
}
