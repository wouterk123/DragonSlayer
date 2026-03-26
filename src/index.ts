import * as readlineSync from 'readline-sync';
import { createEnemy } from './enemyFactory.js';
import { createPlayer, type Player } from './characters.js';
import { simulateCombat } from './combat.js';

const player: Player = createPlayer(readlineSync.question("What is your name, brave adventurer? "));

console.log("Welcome to Dragon Slayer!");
console.log(`Greetings, ${player.name}! Your quest to slay the dragon begins now!`);
console.log("You find youself in a dark forest. What do you hear there?")
console.log("Oh no! it's a wolf! It looks hungry. What do you do?")
console.log("1. Fight the wolf");
console.log("2. Run away");
const choice = readlineSync.question("Enter your choice (1 or 2): ");
if (choice === "1") {
    const enemy =  createEnemy("Wolf", 1);
    const combatResult = simulateCombat(player, enemy);
    console.log(combatResult.result);
} else {
    console.log("You run away safely, but you feel like a coward...");
}
