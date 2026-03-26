import { type Enemy, type Player } from "./characters.js"
export function simulateCombat(player: Player, enemy: Enemy): { player: Player; enemy: Enemy; result: string } {
    let combatLog = "";
    while (player.currentHealth > 0 && enemy.currentHealth > 0) {
        // Player attacks first
        const playerDamage = Math.max(player.attack - (enemy.defense || 0), 0);
        enemy.currentHealth -= playerDamage;
        combatLog += `${player.name} attacks ${enemy.type} for ${playerDamage} damage. ${enemy.type} has ${Math.max(enemy.currentHealth, 0)} health left.\n`;
        
        if (enemy.currentHealth <= 0) {
            combatLog += `${player.name} has defeated the ${enemy.type}!`;
            return { player, enemy, result: combatLog };
        }

        // Enemy attacks back
        const enemyDamage = Math.max(enemy.attack - player.defense!, 0);
        player.currentHealth -= enemyDamage;
        combatLog += `${enemy.type} attacks ${player.name} for ${enemyDamage} damage. ${player.name} has ${Math.max(player.currentHealth, 0)} health left.\n`;
        
        if (player.currentHealth <= 0) {
            combatLog += `${player.name} has been defeated by the ${enemy.type}...`;
            return { player, enemy, result: combatLog };
        }
    }
    return { player, enemy, result: combatLog };
}