/* eslint-disable vars-on-top */
/* eslint-disable no-var */

/* player and enemy variabls */

var randomNumber = (min, max) => {
    var value = Math.floor(Math.random() * (max - min + 1));
    return value;
};

var getPlayerName = function () {
    var name = ``;

    while (name === `` || name === null) {
        name = prompt(`What is your robot's name?`);
    }
    console.log(`Your robot's name is ${name}`);
    return name;
};

<<<<<<< HEAD
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth() {
        if (this.money >= 7) {
            window.alert(`Refilling player's health by 20 for 7 dollars.`);
            this.health += 20;
            this.money -= 7;
        } else {
            window.alert(`You don't have enough money!`);
        }
    },
    upgradeAttack() {
        if (this.money >= 7) {
            window.alert(`Upgrading player's attack by 6 for 7 dollars.`);
            this.attack += 6;
            this.money -= 7;
        } else {
            window.alert(`You don't have enough money!`);
        }
    },
};

var enemyInfo = [
    {
        name: `Dr. Gero`,
        attack: randomNumber(10, 14),
    },
    {
        name: `Andriod 16`,
        attack: randomNumber(10, 14),
    },
    {
        name: `Andriod 17`,
        attck: randomNumber(10, 14),
    },
    {
        name: `Andriod 18`,
        attack: randomNumber(10, 14),
    },
];

<<<<<<< HEAD
=======
=======
>>>>>>> develop
// Recursive Method for blank or null responses
var fightOrSkip = () => {
    // Do you want to fight? Are you tryna catch these hands?
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    if (promptFight === `` || promptFight === null) {
        window.alert(`You need to provide a valid answer! Please try again.`);
        return fightOrSkip();
    }

    promptFight = promptFight.toLowerCase();
    // Player Skips
    if (promptFight === `skip`) {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        if (confirmSkip) {
            window.alert(`${playerInfo.name} has decided to skip this fight. Goodbye!`);
            // subtract money from playerInfo.money for skipping
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            return true;
        }
    }
    return false;
};

>>>>>>> feature/random-order
//* Fight function (now with parameter for enemy's name)
var fight = function (enemy) {
    var isPlayerTurn = true;

    if (Math.random() > 0.5) {
        isPlayerTurn = false;
    }

    while (playerInfo.health > 0 && enemy.health > 0) {
        if (isPlayerTurn) {
            if (fightOrSkip()) {
                break;
            }
        }

        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        enemy.health = Math.max(0, enemy.health - damage);
        console.log(
            `${playerInfo.name} attacked ${enemy.name}. ${enemy.name} now has ${enemy.health} health remaining.`
        );

        // check enemy's health
        if (enemy.health <= 0) {
            window.alert(`${enemy.name} has died!`);

            // award player money for winning
            playerInfo.money += 20;
            // leave while() loop since enemy is dead
            break;
        } else {
            window.alert(`${enemy.name} still has ${enemy.health} health left.`);
        }
    } else {
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        // remove players's health by subtracting the amount set in the enemy.attack variable
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
            `${enemy.name} attacked ${playerInfo.name}. ${playerInfo.name} now has ${playerInfo.health} health remaining.`
        );

        // check player's health
        if (playerInfo.health <= 0) {
            window.alert(`${playerInfo.name} has died!`);
            // leave while() loop if player is dead
            break;
        } else {
            window.alert(`${playerInfo.name} still has ${playerInfo.health} health left.`);
        }
    } // end of while loop
}; // end of fight function

var startGame = () => {
    playerInfo.reset();
    playerInfo.health = 100;
    playerInfo.attack = 10;
    playerInfo.money = 10;

    for (var i = 0; i < enemyInfo.length; i += 1) {
        // reset player stats

        if (playerInfo.health > 0) {
            window.alert(`Welcome to Robot Gladiators! Round ${i + 1}! FIGHT!`);
            var pickedEnemyObj = enemyInfo[i]; // (i += 1) = i++
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);

            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
    window.alert(`The game has now ended. Let's see how you did!`);

    var highScore = localStorage.getItem(`highscore`);
    if (highScore === null) {
        highScore = 0;
    }

    if (playerInfo.money > highSCore) {
        localStorage.setItem(`highscore`, playerInfo.money);
        localStorage.setItem(`name`, playerInfo.name);

        alert(`${playerInfo.name} now has the high score of ${playerInfo.money}!`);
    } else {
        alert(`${playerInfo.name} did not beat the high score of ${highScore}. Maybe next time!`);
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
        'Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE.'
    );

    debugger;

    // use SWITCH to carry out action
    switch (shopOptionPrompt) {
        case 1:
            playerInfo.refillHealth();
            break;
        case 2:
            playerInfo.upgradeAttack();
            break;
        case 3:
            window.alert(`Leaving the store.`);
            break;
        default:
            window.alert(`You did not piack a valid option. Please Try Again.`);
            shop();
            break;
    }
};

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth() {
        if (this.money >= 7) {
            window.alert(`Refilling player's health by 20 for 7 dollars.`);
            this.health += 20;
            this.money -= 7;
        } else {
            window.alert(`You don't have enough money!`);
        }
    },
    upgradeAttack() {
        if (this.money >= 7) {
            window.alert(`Upgrading player's attack by 6 for 7 dollars.`);
            this.attack += 6;
            this.money -= 7;
        } else {
            window.alert(`You don't have enough money!`);
        }
    },
};

var enemyInfo = [
    {
        name: `Dr. Gero`,
        attack: randomNumber(10, 14),
    },
    {
        name: `Andriod 16`,
        attack: randomNumber(10, 14),
    },
    {
        name: `Andriod 17`,
        attck: randomNumber(10, 14),
    },
    {
        name: `Andriod 18`,
        attack: randomNumber(10, 14),
    },
];

startGame();
