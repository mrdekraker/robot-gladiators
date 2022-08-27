/* eslint-disable vars-on-top */
/* eslint-disable no-var */

//    !PSEUDO CODE   //
//* `WIN` - Player robot has defeated all enemy-robots //
//*     * Fight all enemy-robots
//*     * Defeat each enemy-robot
//* `LOSE` - Player robot's health is zero or less //
//! END PSEUDO CODE //

// *Creates a function named 'Fight'

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ['Dr. Gero', `Android 16`, `Android 17`, `Android 18`];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
for (var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(`${enemyNames[i]} is at ${i}index`);
}

// Math Functions
var fight = function (enemyName) {
    // Alert players that they are starting the round
    window.alert('Welcome to Robot Gladiators!');

    var promptFight = window.prompt(`Would you likke to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.`);

    if (promptFight === `fight` || promptFight === `FIGHT`) {
        enemyHealth -= playerAttack; //! -= means to redeclare first declaration by subtracting another declaration

        console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining.`);

        //* check enemy's health
        if (enemyHealth <= 0) {
            window.alert(`${enemyName} has died!`);
        } else {
            window.alert(`${enemyName} still has ${enemyHealth} health left.`);
        }

        playerHealth -= enemyAttack;

        //* Check PLAYER'S HEALTH
        if (playerHealth <= 0) {
            window.alert(`${playerName}has died!`);
        } else {
            window.alert(`${playerName} still has ${playerHealth} health left.`);
        }
        console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining.`);

        //* IF PLAYER CHOOSES TO SKIP
    } else if (promptFight === `skip` || promptFight === `SKIP`) {
        var confirmSkip = window.confirm(`Are you sure you'd like to quit?`);

        if (confirmSkip) {
            window.alert(`${playerName} has decided to skip this fight. Goodbye!`);
            // subtract money from playerMoney for skipping
            playerMoney -= 2;
        }

        // if no (false), ask question again by running fight() again
    } else {
        fight();
    }
};

for (var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}
