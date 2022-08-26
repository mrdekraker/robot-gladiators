/* eslint-disable vars-on-top */
/* eslint-disable no-var */

// *Creates a function named 'Fight'

function fight() {
    window.alert(`The fight has begun!`);
}

// fight();

var playerName = window.prompt(`What is your robot's name?`);
// Note the lack of quotes around playerName
console.log(playerName); // alerts notify the user

console.log(`This logs a string, good for leaving yourself a message`);
// this will do math and log 20
console.log(10 + 10);
// what is this?
console.log(`Our robot's name is ${playerName}`);

const myName = `Mark`;
console.log(myName);
