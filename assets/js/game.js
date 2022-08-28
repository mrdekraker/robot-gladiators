/* eslint-disable vars-on-top */
/* eslint-disable no-var */

/* player and enemy variabls */
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ['Dr. Gero', `Android 16`, `Android 17`, `Android 18`];
var enemyHealth = randomNumber(40, 60);
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

var randomNumber = (min, max) => {
    var value = Math.floor(Math.random() * (max - min + 1));
    return value;
};

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
                playerMoney = Math.max(0, playerMoney - 10);
                console.log('playerMoney', playerMoney);
                break;
            }
        }

        var damage = randomNumber(playerAttack - 3, playerAttack);

        enemyHealth = Math.max(0, enemyHealth - damage);
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

        var damage = randomNumber(enemyAttack - 3, enemyAttack);
        // remove players's health by subtracting the amount set in the enemyAttack variable
        playerHealth = Math.max(0, playerHealth - damage);
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

var startGame = () => {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i += 1) {
        // reset player stats

        if (playerHealth > 0) {
            window.alert(`Welcome to Robot Gladiators! Round ${i + 1}! FIGHT!`);
            var pickedEnemyName = enemyNames[i]; // (i += 1) = i++
            enemyHealth = 50;
            fight(pickedEnemyName);

            if (playerHealth > 0 && i < enemyNames.length - 1) {
                var storeConfirm = window.confirm(
                    `The fight is over. Would you like to visit the store before the next round?`
                );
                if (storeConfirm) {
                    shop();
                }
            }
        } else {
            window.alert(`You have lost your robot in battle! Game over!`);
        }
    }
    endGame();
};

var endGame = () => {
    if (playerHealth > 0) {
        window.alert(`The game has now ended. Let's see how you did! You now have a score of ${playerMoney}`);
    } else {
        window.alert(`You've lost your robot in battle.`);
    }

    var playAgainConfirm = window.confirm(`Would you like to play again?`);

    if (playAgainConfirm) {
        startGame();
    } else {
        window.alert(`Thank you for playing (DBZ) Robot Gladiators! Come back soon!`);
    }
};

var shop = () => {
    var shopOptionPrompt = window.prompt(
        `Would you like to REFILL your health, UPGRADE your atack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.`
    );

    // use SWITCH to carry out action
    switch (shopOptionPrompt) {
        case `REFILL`:
        case `refill`:
            if (playerMoney >= 7) {
                window.alert(`Refilling player's health by 20 for 7 dollars.`);

                // increase health and decrease money
                playerHealth += 20;
                playerMoney -= 7;
            } else {
                window.alert(`You don't have enough money!`);
            }
            break;

        case `UPGRADE`:
        case `upgrade`:
            if (playerMoney >= 7) {
                window.alert(`Upgrading player's attack by 6 for 7 dollars.`);

                // increase attack and decrease money
                playerAttack += 6;
                playerMoney -= 7;
            } else {
                window.alert(`You don't have enough money!`);
            }
            break;

        case `LEAVE`:
        case `leave`:
            window.alert(`Leaving the store.`);
            break;

        default:
            window.alert(`You did not piack a valid option. Please Try Again.`);
            shop();
            break;
    }
};

startGame();
