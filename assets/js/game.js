/* eslint-disable vars-on-top */
/* eslint-disable no-var */
var playerName = window.prompt(`What is your robot's name?`);
var playerHealth = 100;
var playerAttack = 60;

// *You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = `Roberto`;
var enemyHealth = 50;
var enemyAttack = 12;

var fight = () => {
    // Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    // eslint-disable-next-line no-const-assign
    enemyHealth -= playerAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining.`);

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable
    playerHealth -= enemyAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining.`);

    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(`${enemyName} has died!`);
    } else {
        window.alert(`${enemyName} still has ${enemyHealth} health left.`);
    }
};

fight();

// check to see if the value of the playerHealth variable is greater than 0
if (playerHealth > 0) {
    console.log('Your player is still alive!');
}
