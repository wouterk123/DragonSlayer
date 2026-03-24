import * as readlineSync from 'readline-sync';

console.log("Welcome to Dragon Slayer!");
const playerName = readlineSync.question("What is your name, brave adventurer? ");
console.log(`Greetings, ${playerName}! Your quest to slay the dragon begins now!`);

